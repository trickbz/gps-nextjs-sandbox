'use server';

import {Band, Instrument} from '@prisma/client';

import {ERRORS} from '@/constants/errors';
import prisma from '@/lib/db';
import {Logger} from '@/lib/services/logging.service';
import {BandMemberWithInstruments, BandWithMembers} from '@/types/band.types';

// Bands
export const getBands = async (): Promise<Band[]> => {
  try {
    const bands = await prisma.band.findMany();
    return bands;
  } catch (error) {
    // TODO: Don't like it. Not clear what and where error happened.
    // TODO: Integrate with logging solutions for BE
    Logger.error('Repository error', error);
    throw new Error(ERRORS.DATABASE_ERROR);
  }
};

export const getBandById = async (bandId: number): Promise<BandWithMembers> => {
  try {
    const band = await prisma.band.findUnique({
      where: {
        id: bandId,
      },
      include: {
        members: {
          include: {
            instruments: {
              include: {
                Instrument: true,
              },
            },
          },
        },
      },
    });

    if (!band) {
      throw new Error(ERRORS.BAND_NOT_FOUND);
    }

    return band;
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === ERRORS.BAND_NOT_FOUND) {
        Logger.error(ERRORS.BAND_NOT_FOUND, error);
        throw error;
      }
    }
    Logger.error(ERRORS.DATABASE_ERROR, error);
    throw new Error(ERRORS.DATABASE_ERROR);
  }
};

// Band member
export const getBandMemberById = async (
  bandMemberId: number,
): Promise<BandMemberWithInstruments> => {
  try {
    const bandMember = await prisma.bandMember.findUnique({
      where: {id: bandMemberId},
      include: {
        instruments: {
          include: {
            Instrument: true,
          },
        },
      },
    });

    if (!bandMember) {
      throw new Error(ERRORS.BAND_MEMBER_NOT_FOUND);
    }

    return bandMember;
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === ERRORS.BAND_MEMBER_NOT_FOUND) {
        Logger.error(ERRORS.BAND_MEMBER_NOT_FOUND, error);
        throw error;
      }
    }
    Logger.error(ERRORS.DATABASE_ERROR, error);
    throw new Error(ERRORS.DATABASE_ERROR);
  }
};

// Instruments
export const getInstruments = async () => {
  const instruments = await prisma.instrument.findMany();
  return instruments;
};

export const addInstrument = async (name: string): Promise<Instrument> => {
  try {
    const instrument = await prisma.instrument.create({data: {name}});
    return instrument;
  } catch (error) {
    Logger.error('Repository error', error);
    throw new Error(ERRORS.DATABASE_ERROR);
  }
};
