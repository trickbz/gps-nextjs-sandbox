'use client';

import Image from 'next/image';
import React from 'react';

import {NavLink} from '@/components/NavLink';
import {ROUTES} from '@/constants/routes';
import {useBandHook} from '@/hooks/bandHooks';

interface BandsPageProps {
  params: {
    bandId: string;
  };
}

function BandsPage(props: BandsPageProps) {
  const {
    params: {bandId},
  } = props;

  const {band} = useBandHook(bandId);

  // TODO: Add loading state
  // TODO: Replace with Suspense / ErrorBoundary
  if (!band) {
    return <div>Loading...</div>;
  }

  // TODO: Add default image if not provided
  const {name, image, description} = band;

  // TODO: Load image to server
  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl text-gray-400">{name}</h1>
      <NavLink href={ROUTES.HOME} className="text-xs mb-4">
        ← Back to the bands list
      </NavLink>
      <Image
        src={image ?? ''}
        alt={name}
        width={200}
        height={200}
        className="mb-4"
      />
      <h2 className="pb-2 text-gray-400 font-semibold">Members</h2>
      <div className="flex flex-col mb-4">
        <ul>
          {band.members.map((member) => {
            const {firstName, lastName, instruments} = member;
            return (
              <li key={member.id}>
                <NavLink href={ROUTES.BANDS.MEMBERS.MEMBER(band.id, member.id)}>
                  {firstName} {lastName} (
                  {instruments.map((i) => i.Instrument.name).join(', ')})
                </NavLink>
              </li>
            );
          })}
        </ul>
      </div>
      <p className="border min-h-[5rem] w-full p-2 rounded-md bg-yellow-50 indent-1 text-gray-600 shadow-md">
        {description}
      </p>
    </div>
  );
}

export default BandsPage;
