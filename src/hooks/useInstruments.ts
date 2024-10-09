import {Instrument} from '@prisma/client';
import {useCallback, useEffect, useState} from 'react';

import {getErrorMessage} from '@/lib/apiHelper';

type LoadingState = {
  isFetching: boolean;
  isAdding: boolean;
};

export const useInstruments = () => {
  const [instruments, setInstruments] = useState<Instrument[]>([]);
  const [loadingState, setLoadingState] = useState<LoadingState>({
    isFetching: false,
    isAdding: false,
  });
  // TODO: Error state for each request
  const [error, setError] = useState<string | null>(null);

  const fetchInstruments = useCallback(async (signal: AbortSignal) => {
    try {
      // TODO: Check later what would be if not use preve status (closure?)
      setLoadingState((prevState) => ({...prevState, isFetching: true}));
      const response = await fetch('/api/bands/instruments', {signal});
      if (!response.ok) {
        throw new Error('Network reponse was not ok');
      }
      const data: Instrument[] = await response.json();
      setInstruments(data);
    } catch (err) {
      const msg = getErrorMessage(err, 'Failed to get users.');
      // eslint-disable-next-line no-console
      console.error(msg);
      setError(msg);
    } finally {
      setLoadingState((prevState) => ({...prevState, isFetching: false}));
    }
  }, []);

  useEffect(() => {
    const controller = new AbortController();
    fetchInstruments(controller.signal);
  }, [fetchInstruments]);

  const addInstrument = async (instrumentName: string) => {
    const controller = new AbortController();
    try {
      setLoadingState((prev) => ({...prev, isAdding: true}));
      const response = await fetch('/api/bands/instruments', {
        signal: controller.signal,
        method: 'POST',
        body: JSON.stringify(instrumentName),
        headers: {'Content-Type': 'application/json'},
      });
      if (!response.body) {
        throw new Error(`Failed creating instrument ${instrumentName}`);
      }
      await fetchInstruments(controller.signal);
    } catch (err) {
      const msg = getErrorMessage(err, 'Failed creating instrument.');
      // eslint-disable-next-line no-console
      console.error(msg);
      setError(msg);
    } finally {
      setLoadingState((prev) => ({...prev, isAdding: false}));
    }
  };

  // TODO: Try to use Recoil here or in the next similar hook to compare them
  return {
    addInstrument,
    instruments,
    error,
    loadingState,
  };
};
