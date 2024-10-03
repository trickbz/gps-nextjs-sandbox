import React from 'react';
import s from './sandbox.module.css';
import Link from 'next/link';

export default function Sandbox() {
  return (
    <div className={s.sandbox}>
      <h1 className='font-bold text-2xl'>Sandbox page</h1>
      <Link href={'/sandbox/posts'} className='mt-4'>
        Posts
      </Link>
      <Link href={'/sandbox/todos'}>Todos</Link>
    </div>
  );
}
