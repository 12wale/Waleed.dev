import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Visitor from '@/models/Visitor';
import { UAParser } from 'ua-parser-js';

export const dynamic = 'force-dynamic';

interface ExtendedNextRequest extends NextRequest {
  ip?: string;
}

export async function POST(req: NextRequest) {
  const timestamp = new Date().toISOString();
  console.log(`[${timestamp}] Incoming tracking request...`);

  try {
    await dbConnect();
    
    const { path } = await req.json();

    // EXCLUDE TRACKING FOR DASHBOARD
    if (path && path.startsWith('/dashboard')) {
      return NextResponse.json({ success: true, message: 'Skipping tracking for dashboard' });
    }

    const userAgent = req.headers.get('user-agent') || '';
    
    // Improved IP Detection (with TypeScript fix)
    let ip = req.headers.get('x-forwarded-for')?.split(',')[0].trim() || 
             req.headers.get('x-real-ip') || 
             (req as ExtendedNextRequest).ip || 
             '127.0.0.1';

    console.log(`[${timestamp}] Visitor IP: ${ip} | Path: ${path}`);

    // Normalize IPv6 loopback
    if (ip === '::1' || ip === '::ffff:127.0.0.1') {
      ip = '127.0.0.1';
    }

    // FOR LOCAL DEV: Use a sample public IP to test geolocation
    if (ip === '127.0.0.1') {
      ip = '8.8.8.8'; // Google DNS IP (California, US) for testing
    }

    // Parse User Agent
    const parser = new UAParser(userAgent);
    const browserResult = parser.getBrowser();
    const deviceResult = parser.getDevice();
    
    const browser = browserResult.name || 'Unknown';
    const browserVersion = browserResult.version || '';
    const deviceType = deviceResult.type || 'Desktop';
    
    // Get Geo Location
    let locationData = { 
      country: 'Local', 
      city: 'Dev', 
      countryCode: 'UN', 
      lat: null as number | null, 
      lon: null as number | null 
    };
    
    // Skip geo lookup for private IPs
    const isPrivate = ip.startsWith('192.168.') || ip.startsWith('10.') || ip.startsWith('172.');
    
    if (!isPrivate || ip === '8.8.8.8') {
      try {
        // Add a 3-second timeout to the fetch
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), 3000);

        const geoRes = await fetch(`http://ip-api.com/json/${ip}`, { signal: controller.signal });
        clearTimeout(timeoutId);
        
        const geo = await geoRes.json();
        
        if (geo.status === 'success') {
          locationData = {
            country: geo.country,
            city: geo.city,
            countryCode: geo.countryCode,
            lat: geo.lat,
            lon: geo.lon
          };
          console.log(`[${timestamp}] Geolocation success: ${geo.city}, ${geo.country}`);
        } else {
          console.warn(`[${timestamp}] Geolocation failed for ${ip}: ${geo.message || 'Unknown error'}`);
        }
      } catch (err: unknown) {
        if (err instanceof Error && err.name === 'AbortError') {
          console.error(`[${timestamp}] Geolocation lookup timed out for ${ip}`);
        } else {
          console.error(`[${timestamp}] Geolocation lookup error:`, err);
        }
      }
    }

    const getFlagEmoji = (countryCode: string) => {
      if (!countryCode || countryCode === 'UN') return '🌐';
      return countryCode
        .toUpperCase()
        .replace(/./g, char => String.fromCodePoint(char.charCodeAt(0) + 127397));
    };

    const flag = getFlagEmoji(locationData.countryCode);

    // Save to MongoDB
    await Visitor.create({
      ip: ip,
      country: locationData.country,
      city: locationData.city,
      flag: flag,
      browser: `${browser} ${browserVersion}`.trim(),
      device: deviceType.charAt(0).toUpperCase() + deviceType.slice(1),
      page: path || '/',
      lat: locationData.lat,
      lon: locationData.lon,
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error(`[${timestamp}] Tracking error:`, errorMessage);
    return NextResponse.json({ success: false, error: errorMessage }, { status: 500 });
  }
}
