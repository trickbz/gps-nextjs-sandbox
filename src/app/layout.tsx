import type {Metadata} from 'next';
import localFont from 'next/font/local';
import {ReactNode} from 'react';

import {Footer} from '@/components/Footer';
import {Header} from '@/components/Header';
import {Menu} from '@/components/Menu';
import RecoilContextProvider from '@/lib/RecoilContextProvider';

import './globals.css';

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
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} border-gray-500 h-screen flex flex-col items-center bg-black`}
      >
        <div className="flex flex-col w-[800px] h-screen">
          <RecoilContextProvider>
            <Header />
            <Menu />
            <div className="flex-1 bg-white p-4">{children}</div>
            <Footer />
          </RecoilContextProvider>
        </div>
      </body>
    </html>
  );
}
