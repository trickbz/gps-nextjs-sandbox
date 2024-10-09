'use client';

import React, {Suspense} from 'react';

import {AddInstrumentForm} from '@/components/AddInstrumentForm';
import {useInstruments} from '@/hooks/useInstruments';

export default function InstrumentsPage() {
  const {instruments, addInstrument} = useInstruments();

  const onInstrumentAdded = (instrumentName: string) => {
    addInstrument(instrumentName);
  };

  return (
    <div>
      <div className="text-2xl font-semibold mb-4">Instruments</div>
      <AddInstrumentForm onInstrumentAdd={onInstrumentAdded} />
      <Suspense fallback={<div>Loading...</div>}>
        {instruments.map((instrument) => (
          <div key={instrument.id}>{instrument.name}</div>
        ))}
      </Suspense>
    </div>
  );
}
