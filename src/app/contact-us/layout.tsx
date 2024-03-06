import { Analytics } from '@vercel/analytics/react';
import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Contact Us',
  description: 'This is our Contact Us Page',
};

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      {children}
      <Analytics />
    </>
  );
}
