import {NextRequest, NextResponse} from 'next/server';

import {Logger} from '@/lib/services/logging.service';
import {Auth} from '@/types/band.types';

export const POST = async (request: NextRequest) => {
  const creads: Auth = await request.json();
  // TODO: Use OAuth
  // TODO: Redirect to home or the page from which the user moved here
  return NextResponse.json({}, {status: 201});
};
