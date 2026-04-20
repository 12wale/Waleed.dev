import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Visitor from '@/models/Visitor';
import { UAParser } from 'ua-parser-js';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    await dbConnect();
    
    const { path } = await req.json();

    // EXCLUDE TRACKING FOR DASHBOARD
    if (path && path.startsWith('/dashboard')) {
      return NextResponse.json({ success: true, message: 'Skipping tracking for dashboard' });
    }

    const userAgent = req.headers.get('user-agent') || '';
    let ip = req.headers.get('x-forwarded-for')?.split(',')[0] || req.headers.get('x-real-ip') || '127.0.0.1';

    // FOR LOCAL DEV: Use a sample public IP to test geolocation
    if (ip === '127.0.0.1' || ip === '::1') {
      ip = '8.8.8.8'; // Google DNS IP (California, US) for testing
    }

    // Parse User Agent
    const parser = new UAParser(userAgent);
    const browser = parser.getBrowser().name || 'Unknown';
    const browserVersion = parser.getBrowser().version || '';
    const device = parser.getDevice().type || 'Desktop';
    
    // Get Geo Location
    let locationData = { country: 'Local', city: 'Dev', countryCode: 'UN', lat: null as number | null, lon: null as number | null };
    
    if (ip !== '8.8.8.8' && (ip.startsWith('192.168.') || ip.startsWith('10.'))) {
      // Internal network IP, keep fallback
    } else {
      try {
        const geoRes = await fetch(`http://ip-api.com/json/${ip}`);
        const geo = await geoRes.json();
        if (geo.status === 'success') {
          locationData = {
            country: geo.country,
            city: geo.city,
            countryCode: geo.countryCode,
            lat: geo.lat,
            lon: geo.lon
          };
        }
      } catch (err) {
        console.error('Geo lookup failed:', err);
      }
    }

    const getFlagEmoji = (countryCode: string) => {
      if (countryCode === 'UN') return '🌐';
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
      device: device.charAt(0).toUpperCase() + device.slice(1),
      page: path,
      lat: locationData.lat,
      lon: locationData.lon,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Tracking error:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}
