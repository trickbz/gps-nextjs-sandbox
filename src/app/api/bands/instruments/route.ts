import {Instrument} from '@prisma/client';
import {NextRequest, NextResponse} from 'next/server';

import {
  getInstruments,
  addInstrument,
} from '@/lib/repositories/bands.repository';

export const POST = async (request: NextRequest) => {
  const newInstrumentName: string = await request.json();
  const newInstrument: Instrument = await addInstrument(newInstrumentName);
  return NextResponse.json(newInstrument);
};

export const GET = async () => {
  const instruments: Instrument[] = await getInstruments();
  return NextResponse.json(instruments);
};
