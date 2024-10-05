'use client';

import Image from 'next/image';
import {useRouter} from 'next/navigation';
import React, {useCallback, useEffect, useState} from 'react';

import {NavLink} from '@/components/NavLink';
import {ROUTES} from '@/constants/routes';
import {getBandById} from '@/mocks/mock.helper';
import {Band} from '@/types/band.types';

interface BandsPageProps {
  params: {
    bandId: string;
  };
}

function BandsPage(props: BandsPageProps) {
  const {
    params: {bandId},
  } = props;
  const router = useRouter();

  const [band, setBand] = useState<Band | undefined>();

  const fetchBand = useCallback(
    async (id: string) => {
      const band = await getBandById(id);
      if (!band) {
        router.replace('/404');
      }
      setBand(band);
    },
    [router],
  );

  useEffect(() => {
    fetchBand(bandId);
  }, [bandId, fetchBand]);

  // TODO: Add loading state
  // TODO: Replace with Suspense / ErrorBoundary
  if (!band) {
    return <div>Loading...</div>;
  }

  // TODO: Add default image if not provided
  const {name, image = '', description} = band || {};

  return (
    <div className="flex flex-col items-center">
      <h1 className="font-bold text-2xl text-gray-400">{name}</h1>
      <NavLink href={ROUTES.HOME} className="text-xs mb-4">
        ← Back to the bands list
      </NavLink>
      <Image src={image} alt={name} width={200} height={200} className="mb-4" />
      <h2 className="pb-2 text-gray-400 font-semibold">Members</h2>
      <div className="flex flex-col mb-4">
        <ul>
          {band.members.map((member) => {
            const {firstName, lastName, instruments} = member;
            return (
              <li key={member.id}>
                <NavLink href={ROUTES.BANDS.MEMBERS.MEMBER(band.id, member.id)}>
                  {firstName} {lastName} ({instruments.join(', ')})
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
