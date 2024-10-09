import {Instrument} from '@prisma/client';
import {NextRequest, NextResponse} from 'next/server';

import {
  getInstrumentsFromDb,
  addInstrumentToDb,
} from '@/lib/repositories/bands.repository';

// TODO: Move to services that uses repositories
export const POST = async (request: NextRequest) => {
  const newInstrumentName: string = await request.json();
  const newInstrument: Instrument = await addInstrumentToDb(newInstrumentName);
  return NextResponse.json(newInstrument);
};

export const GET = async () => {
  const instruments: Instrument[] = await getInstrumentsFromDb();
  return NextResponse.json(instruments);
};
