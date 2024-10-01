import React from 'react';

import {NavLink} from '../NavLink';
import s from './Menu.module.css';
import {ROUTES} from '@/constants/routes';

export const Menu = () => {
  return (
    <nav className='py-1 px-4 bg-gray-100 flex items-center'>
      <NavLink href={ROUTES.HOME} className={s.link}>
        Home
      </NavLink>
      <NavLink href={ROUTES.SANDBOX}>Sandbox</NavLink>
    </nav>
  );
};
