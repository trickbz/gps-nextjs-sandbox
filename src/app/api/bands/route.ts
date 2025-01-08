import {NextResponse} from 'next/server';

import {ERRORS} from '@/constants/errors';
import {getBands} from '@/lib/services/bands.service';
import {Logger} from '@/lib/services/logging.service';

export const GET = async () => {
  try {
    const bands = await getBands();
    return NextResponse.json(bands, {status: 200});
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
