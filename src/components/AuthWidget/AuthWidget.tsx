'use client';

import Button from '@mui/material/Button';
import {useRouter} from 'next/navigation';
import React from 'react';
import {useRecoilValue} from 'recoil';

import {ROUTES} from '@/constants/routes';
import {userState} from '@/state/atoms/user.atom';

export function AuthWidget() {
  const router = useRouter();

  const handleLoginClick = () => {
    router.push(ROUTES.LOGIN);
  };

  const handleLogoutClick = () => {
    router.push(ROUTES.LOGIN);
  };

  const user = useRecoilValue(userState);

  if (user.loggedIn) {
    return (
      <div>
        <div>{user.email}</div>
        <Button
          variant="outlined"
          color="primary"
          size="small"
          onClick={handleLogoutClick}
        >
          Logout
        </Button>
      </div>
    );
  }

  return (
    <div>
      <div>{user.email}</div>
      <Button
        variant="outlined"
        color="primary"
        size="small"
        onClick={handleLoginClick}
      >
        Login
      </Button>
    </div>
  );
}
