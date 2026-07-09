import type { Metadata } from "next";

const BASE_URL = process.env.NODE_ENV === "production"
  ? "https://www.powerholdgenerators.com" : "http://localhost:3000";

export const metadata: Metadata = {
  title: "Load Calculations in Waco, TX | PowerHold Generators",
  description: "Honest residential and light-commercial load studies so you buy the right size generator — not an oversized upsell.",
  keywords: ["generator load calculation Waco","what size generator do I need","standby generator sizing Texas"],
  openGraph: {
    title: "Load Calculations in Waco, TX | PowerHold Generators",
    description: "Honest residential and light-commercial load studies so you buy the right size generator — not an oversized upsell.",
    url: `${BASE_URL}/services/load-calculations`,
    siteName: "PowerHold Generators",
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: `${BASE_URL}/services/load-calculations` },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Load Calculations",
  description: "Honest residential and light-commercial load studies so you buy the right size generator — not an oversized upsell.",
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
