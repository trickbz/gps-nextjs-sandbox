'use client';

import clsx from 'clsx';
import Link from 'next/link';
import {usePathname} from 'next/navigation';
import React, {ReactNode} from 'react';
import s from './NavLink.module.css';

interface Props {
  children: ReactNode;
  href: string;
  className?: string;
}

export const NavLink = (props: Props) => {
  const {children, href, className = ''} = props;
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={clsx(
        s.link,
        {
          [s.active]: isActive,
        },
        className,
      )}
      passHref
    >
      {children}
    </Link>
  );
};
