import React from 'react';
import Link from 'next/link';
import {ROUTES} from '@/constants/routes';

const NotFoundPage = () => {
  return (
    <div className='flex items-center justify-center min-h-screen bg-gray-100'>
      <div className='text-center'>
        <h1 className='text-6xl font-bold text-gray-800 mb-4'>404</h1>
        <p className='text-2xl text-gray-600 mb-8'>Page Not Found</p>
        <Link href={ROUTES.HOME} className='text-blue-500 hover:underline'>
          Go back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFoundPage;
