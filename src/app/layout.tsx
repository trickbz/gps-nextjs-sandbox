import type { Metadata } from 'next';
import './globals.css';

import localFont from 'next/font/local';

import { Footer } from '@/components/footer';
import { Header } from '@/components/header';

const geistSans = localFont({
  src: './fonts/GeistVF.woff',
  variable: '--font-geist-sans',
  weight: '100 900',
});
const geistMono = localFont({
  src: './fonts/GeistMonoVF.woff',
  variable: '--font-geist-mono',
  weight: '100 900',
});

export const metadata: Metadata = {
  title: 'GPS Nextjs Sandbox',
  description:
    'Pet app to learn how to deploy Nextjs app to Google Cloud Platform',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body
        className={`${geistSans.variable} ${geistMono.variable} border-gray-500 h-screen flex flex-col items-center bg-black`}
      >
        <div className='flex flex-col w-[800px] h-screen'>
          <Header />
          <div className='flex-1 bg-white p-4'>{children}</div>
          <Footer />
        </div>
      </body>
    </html>
  );
}
