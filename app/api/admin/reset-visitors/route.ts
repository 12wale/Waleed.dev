import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import Visitor from '@/models/Visitor';

export async function DELETE(req: NextRequest) {
  try {
    await dbConnect();
    
    // Delete all visitors
    await Visitor.deleteMany({});
    
    return NextResponse.json({ success: true, message: 'All visitor data has been reset.' });
  } catch (error) {
    console.error('Reset error:', error);
    return NextResponse.json({ success: false, message: 'Failed to reset data.' }, { status: 500 });
  }
}
