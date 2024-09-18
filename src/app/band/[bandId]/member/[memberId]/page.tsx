'use client';

import Link from 'next/link';
import React, { useEffect, useState } from 'react';

import { getBandMemberById } from '@/mocks/mock.helper';

import { BandMember } from '../../../../../types/band.types';

interface MemberPageProps {
  params: {
    memberId: string;
    bandId: string;
  };
}

export default function MemberPage(props: MemberPageProps) {
  const {
    params: { memberId, bandId },
  } = props;
  const [member, setMember] = useState<BandMember | undefined>();

  const fetchMember = async (bandId: string, memberId: string) => {
    const member = await getBandMemberById(bandId, memberId);
    setMember(member);
  };

  useEffect(() => {
    fetchMember(bandId, memberId);
  }, [bandId, memberId]);

  // TODO: Real loader and Suspense / ErrorBoundary
  if (!member) {
    return <div>Loading...</div>;
  }

  const { firstName, lastName, instruments, description } = member;

  return (
    <main className='flex flex-col items-center'>
      <h1 className='text-2xl font-bold text-gray-400'>
        {`${firstName} ${lastName}`}
      </h1>
      <Link href={`/band/${bandId}`} className='mb-4 text-xs'>
        back to the band page
      </Link>
      <div className='border flex items-center justify-center text-red-600 font-bold w-[200px] h-[200px] mb-4 bg-red-100'>
        IMAGE HERE
      </div>
      <h2 className='font-semibold text-gray-400 mb-2'>Instruments</h2>
      <ul className='mb-4'>
        {instruments.map((instrument) => (
          <li key={instrument}>– {instrument}</li>
        ))}
      </ul>
      <div className='border min-w-[200px] rounded-md bg-yellow-50 p-4 indent-4'>
        {description}
      </div>
    </main>
  );
}
