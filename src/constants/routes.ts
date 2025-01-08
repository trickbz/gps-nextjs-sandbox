const BANDS_SEGMENT = 'bands';
const MEMBERS_SEGMENT = 'members';
const INSTRUMENTS_SEGMENT = 'instruments';

type RouteId = string | number;

export const ROUTES = {
  HOME: '/',
  BANDS: {
    BAND: (bandId: RouteId) => `/${BANDS_SEGMENT}/${bandId}`,
    MEMBERS: {
      MEMBER: (bandId: RouteId, memberId: RouteId) =>
        `${ROUTES.BANDS.BAND(bandId)}/${MEMBERS_SEGMENT}/${memberId}`,
    },
  },
  INSTRUMENTS: {
    ROOT: `/${INSTRUMENTS_SEGMENT}`,
  },
  SANDBOX: '/sandbox',
  LOGIN: '/login',
};
