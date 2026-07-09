import type { Metadata } from 'next';

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL ?? 'https://www.powerholdgenerators.com';
const url = `${BASE_URL}/service-areas`;

export const metadata: Metadata = {
  title: 'Generator Service Areas | Waco, Hewitt, Killeen, Temple & Central Texas | PowerHold Generators',
  description:
    'PowerHold Generators serves Waco, Hewitt, Woodway, McGregor, China Spring, Bellmead, Killeen, Temple, and all of Central Texas. Flat-rate pricing, same-day service, Storm-Ready Install Guarantee · 2-Year Workmanship.',
  keywords: [
    'generator service areas Central Texas',
    'generator repair Waco TX',
    'generator technician Hewitt TX',
    'generator technician Killeen TX',
    'generator technician Temple TX',
    'PowerHold Generators service areas',
  ],
  alternates: { canonical: url },
  openGraph: {
    title: 'Generator Service Areas | PowerHold Generators — Central Texas',
    description:
      'Serving Waco and all of Central Texas with flat-rate generator repair, component & cable repair, and installation. Same-day service available.',
    url,
    siteName: 'PowerHold Generators',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Generator Service Areas | PowerHold Generators — Central Texas',
    description: 'Waco, Temple, Killeen, and surrounding Central Texas — TECL-aligned generator service.',
  },
};

export default function ServiceAreasLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
