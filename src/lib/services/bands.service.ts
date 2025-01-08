import {Band} from '@prisma/client';

import {
  getBands as getBandsFromDb,
  getBandById as getBandByIdFromDb,
  getBandMemberById as getBandMemberFromDb,
} from '../repositories/bands.repository';
import {BandMemberWithInstruments, BandWithMembers} from '@/types/band.types';

export const getBands = async (): Promise<Band[]> => {
  const bands = await getBandsFromDb();
  return bands;
};

export const getBandById = async (bandId: number): Promise<BandWithMembers> => {
  const bands = await getBandByIdFromDb(bandId);
  return bands;
};

export const getBandMemberById = async (
  bandId: number,
): Promise<BandMemberWithInstruments> => {
  const bands = await getBandMemberFromDb(bandId);
  return bands;
};
