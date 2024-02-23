import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'What We Believe',
  description: 'Our Core Beliefs: Understanding Our Faith.',
};

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
