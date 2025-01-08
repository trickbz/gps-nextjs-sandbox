'use client';

import {Button} from '@mui/material';
import {useRouter} from 'next/navigation';
import React from 'react';

export default function CreateBandButton() {
  const router = useRouter();
  return (
    <Button
      variant="outlined"
      color="primary"
      size="small"
      className="mr-1"
      onClick={() => router.push('/bands/create')}
    >
      Add Band
    </Button>
  );
}
