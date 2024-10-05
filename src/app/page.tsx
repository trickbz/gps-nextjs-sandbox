'use client';

import Link from 'next/link';
import {useEffect, useState} from 'react';

import {BandListItem} from '@/components/band-list-item';
import {ROUTES} from '@/constants/routes';
import {BANDS_MOCK} from '@/mocks/bands.mock';
import {Band} from '@/types/band.types';

export default function Home() {
  const [bands, setBands] = useState<Band[]>([]);

  // TODO: Fetch bands from API
  useEffect(() => {
    setBands(BANDS_MOCK);
  }, []);

  return (
    <main className="flex items-center flex-col">
      <h1 className="font-bold text-2xl mb-8 text-gray-400">
        Bands list ({bands.length})
      </h1>
      <ul className="text-gray-600">
        {bands.map((band) => (
          <li key={band.id}>
            <Link href={ROUTES.BANDS.BAND(band.id)}>
              <BandListItem band={band} />
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
