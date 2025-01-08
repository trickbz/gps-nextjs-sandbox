import {Band} from '@prisma/client';
import {useCallback, useEffect, useState} from 'react';

import {BandMemberWithInstruments, BandWithMembers} from '@/types/band.types';

export const useBandsHook = () => {
  const [bands, setBands] = useState<Band[] | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBands = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch('/api/bands');
      if (!response.ok) {
        throw new Error();
      }
      const foundBands = await response.json();
      setBands(foundBands);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchBands();
  }, [fetchBands]);

  return {
    bands,
    error,
    isLoading,
  };
};

export const useBandHook = (bandId: string) => {
  const [band, setBand] = useState<BandWithMembers | undefined>();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBand = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(`/api/bands/${bandId}`);
      if (!response.ok) {
        throw new Error();
      }
      const foundBand = await response.json();
      setBand(foundBand);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  }, [bandId]);

  useEffect(() => {
    fetchBand();
  }, [bandId, fetchBand]);

  return {
    band,
    error,
    isLoading,
  };
};

export const useBandMemberHook = (bandId: string, bandMemberId: string) => {
  const [bandMember, setBandMember] = useState<
    BandMemberWithInstruments | undefined
  >();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchBandMember = useCallback(async () => {
    try {
      setIsLoading(true);
      const response = await fetch(
        `/api/bands/${bandId}/members/${bandMemberId}`,
      );
      if (!response.ok) {
        throw new Error();
      }
      const foundBandMember = await response.json();
      setBandMember(foundBandMember);
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setIsLoading(false);
    }
  }, [bandMemberId, bandId]);

  useEffect(() => {
    fetchBandMember();
  }, [bandMemberId, fetchBandMember]);

  return {
    bandMember,
    error,
    isLoading,
  };
};
