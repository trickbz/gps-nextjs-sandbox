import {NextRequest, NextResponse} from 'next/server';

import {ERRORS} from '@/constants/errors';
import {getBandMemberById} from '@/lib/repositories/bands.repository';
import {Logger} from '@/lib/services/logging.service';

export const GET = async (req: NextRequest) => {
  try {
    const {pathname} = req.nextUrl;
    const segments = pathname.split('/');
    const bandMemberId = segments.pop() || '';
    const bandMembers = await getBandMemberById(Number(bandMemberId));
    return NextResponse.json(bandMembers, {status: 200});
  } catch (error) {
    if (error instanceof Error) {
      if (error.message === ERRORS.DATABASE_ERROR) {
        // eslint-disable-next-line no-console
        Logger.error(error.message, error);
        return NextResponse.json({message: error.message}, {status: 503});
      }
    }

    return NextResponse.json({message: ERRORS.UNEXPECTED_ERROR}, {status: 500});
  }
};
