'use server';

import {Instrument} from '@prisma/client';

import prisma from '@/lib/db';

export const getInstrumentsFromDb = async () => {
  const instruments = await prisma.instrument.findMany();
  return instruments;
};

// TODO: Fix / implement graceful error returned from API route
export const addInstrumentToDb = async (name: string): Promise<Instrument> => {
  try {
    const instrument = await prisma.instrument.create({data: {name}});
    return instrument;
  } catch (error) {
    if (error instanceof Error) {
      throw error;
    }
    throw new Error('An error occurred while adding an instrument');
  }
};
