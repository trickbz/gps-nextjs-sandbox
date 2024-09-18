'use client';

import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { getBandById } from '@/mocks/mock.helper';
import { Band } from '@/types/band.types';

interface BandProps {
  params: {
    bandId: string;
  };
}

const BandPage = (props: BandProps) => {
  const {
    params: { bandId },
  } = props;

  const [band, setBand] = useState<Band | undefined>();

  const fetchBand = async (id: string) => {
    const band = await getBandById(id);
    setBand(band);
  };

  useEffect(() => {
    console.log('fetching band');
    fetchBand(bandId);
  }, [bandId]);

  useEffect(() => {
    console.log('band id', bandId);
  }, [bandId]);

  // TODO: Add loading state
  // TODO: Replace with Suspense / ErrorBoundary
  if (!band) {
    return <div>Loading...</div>;
  }

  // TODO: Add default image if not provided
  const { name, image = '', description } = band || {};

  return (
    <div className='flex flex-col items-center'>
      <h1 className='font-bold text-2xl text-gray-400'>{name}</h1>
      <Link href='/' className='text-xs mb-4'>
        back to the bands list
      </Link>
      <Image src={image} alt={name} width={200} height={200} className='mb-4' />
      <h2 className='pb-2 text-gray-400 font-semibold'>Members</h2>
      <div className='flex flex-col mb-4'>
        <ul>
          {band.members.map((member) => {
            const { firstName, lastName, instruments } = member;
            return (
              <li key={member.id}>
                <Link href={`/band/${band.id}/member/${member.id}`}>
                  {firstName} {lastName} ({instruments.join(', ')})
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
      <p className='border min-h-[5rem] w-full p-2 rounded-md bg-yellow-50 indent-1 text-gray-600 shadow-md'>
        {description}
      </p>
    </div>
  );
};

export default BandPage;
