import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Visitor from '@/models/Visitor';

export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  const timestamp = new Date().toISOString();
  
  try {
    await dbConnect();
    
    const { path } = await req.json();

    // EXCLUDE TRACKING FOR DASHBOARD
    if (path && path.startsWith('/dashboard')) {
      return NextResponse.json({ success: true });
    }

    // Save minimal data to MongoDB
    // We keep the fields in the model for compatibility but set them to generic values
    await Visitor.create({
      ip: 'Anonymous', 
      country: 'Privacy Protected',
      city: 'Privacy Protected',
      flag: '🌐',
      browser: 'Privacy Protected',
      device: 'Privacy Protected',
      page: path || '/',
    });

    return NextResponse.json({ success: true });
  } catch (error: unknown) {
    const errorMessage = error instanceof Error ? error.message : 'Unknown error';
    console.error(`[${timestamp}] Tracking error:`, errorMessage);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}

