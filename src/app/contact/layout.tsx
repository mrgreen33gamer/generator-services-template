// src/app/contact/layout.tsx
import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.powerholdgenerators.com';
const url = `${BASE_URL}/contact`;

export const metadata: Metadata = {
  title: 'Contact PowerHold Generators | Schedule Service in Waco & Central Texas',
  description:
    'Contact PowerHold Generators to schedule generator repair, component & cable repair, or a free estimate. Serving Waco, Hewitt, Killeen, Temple, and all of Central Texas. Call (254) 991-2121.',
  keywords: [
    'contact PowerHold Generators',
    'generator service Waco TX',
    'schedule generator repair Waco',
    'generator estimate Central Texas',
    'PowerHold Generators contact',
    '254-991-2121',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Contact PowerHold Generators | Schedule Service in Waco & Central Texas',
    description:
      'Call, text, or submit a request. Same-day service available. Flat-rate pricing, Storm-Ready Install Guarantee · 2-Year Workmanship, TECL-aligned generator technicians.',
    url,
    siteName: 'PowerHold Generators',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Contact PowerHold Generators | Waco & Central Texas',
    description: 'Schedule generator service or get a free estimate. Call (254) 991-2121.',
  },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
