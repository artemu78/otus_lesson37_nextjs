import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({ 
    status: "ok", 
    source: "file_system",
    timestamp: new Date().toISOString()
  });
}
