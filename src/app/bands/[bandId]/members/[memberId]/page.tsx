'use client';

import React from 'react';

import {NavLink} from '@/components/NavLink';
import {ROUTES} from '@/constants/routes';
import {useBandMemberHook} from '@/hooks/bandHooks';

interface MemberPageProps {
  params: {
    memberId: string;
    bandId: string;
  };
}

export default function MemberPage(props: MemberPageProps) {
  const {
    params: {memberId, bandId},
  } = props;

  const {bandMember, error, isLoading} = useBandMemberHook(bandId, memberId);

  // TODO: Real loader and Suspense / ErrorBoundary
  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex flex-col items-center">
      <h1 className="text-2xl font-bold text-gray-400">
        {`${bandMember?.firstName} ${bandMember?.lastName}`}
      </h1>
      {error && <div className="text-red-700">Error: {error}</div>}
      <NavLink href={ROUTES.BANDS.BAND(bandId)} className="mb-4 text-xs">
        ← Back to the band page
      </NavLink>
      <div className="border flex items-center justify-center text-red-600 font-bold w-[200px] h-[200px] mb-4 bg-red-100">
        IMAGE HERE
      </div>
      <h2 className="font-semibold text-gray-400 mb-2">Instruments</h2>
      <ul className="mb-4">
        {bandMember?.instruments.map((instrument) => (
          <li key={instrument.Instrument.id}>–{instrument.Instrument.name}</li>
        ))}
      </ul>
      <div className="border min-w-[200px] rounded-md bg-yellow-50 p-4 indent-4">
        {bandMember?.description}
      </div>
    </main>
  );
}
