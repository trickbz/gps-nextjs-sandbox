import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import {AuthWidget} from '../AuthWidget';
import CreateBandButton from './CreateBandButton';
import {ROUTES} from '@/constants/routes';

export function Header() {
  return (
    <div className="bg-gray-200 p-4 flex items-center">
      <Link href={ROUTES.HOME}>
        <Image src="/images/logo.png" alt="logo" width={50} height={50} />
      </Link>
      <div className="flex-auto flex justify-center text-orange-500 font-bold text-4xl">
        Hearts Club Band
      </div>
      <CreateBandButton />
      <AuthWidget />
    </div>
  );
}
