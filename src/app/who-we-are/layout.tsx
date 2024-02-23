import { Metadata } from 'next';
import * as React from 'react';

export const metadata: Metadata = {
  title: 'Who We Are',
  description: 'Where We Started: Learning about our origin.',
};

export default function ComponentsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
