import type { Metadata } from "next";

const BASE_URL = process.env.NODE_ENV === "production"
  ? "https://www.powerholdgenerators.com" : "http://localhost:3000";

export const metadata: Metadata = {
  title: "Standby Generators in Waco, TX | PowerHold Generators",
  description: "Automatic whole-home and critical-load standby systems with proper transfer switches — flat-rate pricing and Storm-Ready Install Guarantee · 2-Year Workmanship.",
  keywords: ["standby generator Waco TX","whole home generator installation","automatic standby generator Central Texas","PowerHold Generators"],
  openGraph: {
    title: "Standby Generators in Waco, TX | PowerHold Generators",
    description: "Automatic whole-home and critical-load standby systems with proper transfer switches — flat-rate pricing and Storm-Ready Install Guarantee · 2-Year Workmanship.",
    url: `${BASE_URL}/services/standby-generators`,
    siteName: "PowerHold Generators",
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: `${BASE_URL}/services/standby-generators` },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Standby Generators",
  description: "Automatic whole-home and critical-load standby systems with proper transfer switches — flat-rate pricing and Storm-Ready Install Guarantee · 2-Year Workmanship.",
  provider: {
    "@type": "Electrician",
    name: "PowerHold Generators",
    telephone: "+12549912121",
    address: {
      "@type": "PostalAddress",
      streetAddress: "1800 Franklin Ave",
      addressLocality: "Waco",
      addressRegion: "TX",
      postalCode: "76701",
      addressCountry: "US",
    },
  },
  areaServed: ["Waco", "Hewitt", "Woodway", "Temple", "Killeen", "China Spring", "McGregor", "Bellmead"].map(
    (name) => ({ "@type": "City", name, containedInPlace: { "@type": "State", name: "Texas" } })
  ),
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      {children}
    </>
  );
}
