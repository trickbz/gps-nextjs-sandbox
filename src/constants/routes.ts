const BANDS_SEGMENT = 'bands';
const MEMBERS_SEGMENT = 'members';

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
  SANDBOX: '/sandbox',
};
