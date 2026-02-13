import { NextResponse } from 'next/server';

export async function GET() {
  const res = await fetch(
    'https://api.open-meteo.com/v1/forecast?latitude=55.75&longitude=37.61&current_weather=true'
);
  if (!res.ok) {
    throw new Error('Failed to fetch weather data');
  }
  const result = await res.json();

  return NextResponse.json(result);

}
