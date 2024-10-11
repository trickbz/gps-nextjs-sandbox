'use client';

import Link from 'next/link';

import {BandListItem} from '@/components/BandListItem';
import {ROUTES} from '@/constants/routes';
import {useBandsHook} from '@/hooks/bandHooks';

export default function Home() {
  const {bands, isLoading, error} = useBandsHook();

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <main className="flex items-center flex-col">
      <h1 className="font-bold text-2xl mb-8 text-gray-400">
        Bands list ({bands?.length || 0})
      </h1>
      {error && (
        <div className="text-red-700">Error loading bands: {error}</div>
      )}
      <ul className="text-gray-600">
        {bands &&
          bands.map((band) => (
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
