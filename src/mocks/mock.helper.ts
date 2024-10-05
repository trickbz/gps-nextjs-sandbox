import {BANDS_MOCK} from './bands.mock';
import {Band, BandMember} from '@/types/band.types';

export const getBandById = async (bandId: string): Promise<Band | undefined> =>
  BANDS_MOCK.find((band) => band.id === bandId);

export const getBandMemberById = async (
  bandId: string,
  memberId: string,
): Promise<BandMember | undefined> => {
  const band = await getBandById(bandId);
  return Promise.resolve(band?.members.find((m) => m.id === memberId));
};
