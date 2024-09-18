import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

import { Button } from '@mui/material';

export const Header = () => {
  return (
    <div className='bg-gray-200 p-4 flex items-center'>
      <Link href='/'>
        <Image src='/images/logo.png' alt='logo' width={50} height={50} />
      </Link>
      <div className='flex-auto flex justify-center text-orange-500 font-bold text-4xl'>
        Hearts Club Band
      </div>
      <Button variant='outlined' color='primary' size='small'>
        Add Band
      </Button>
    </div>
  );
};
