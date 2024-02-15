import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'sermons',
  description:
    'Watch and listen to our sermons for spiritual growth and transformation.',
};

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
