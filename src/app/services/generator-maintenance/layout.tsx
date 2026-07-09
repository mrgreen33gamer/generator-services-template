import type { Metadata } from "next";

const BASE_URL = process.env.NODE_ENV === "production"
  ? "https://www.powerholdgenerators.com" : "http://localhost:3000";

export const metadata: Metadata = {
  title: "Generator Maintenance in Waco, TX | PowerHold Generators",
  description: "Oil, filters, batteries, exercise verification, and load testing so your generator starts when storms hit.",
  keywords: ["generator maintenance Waco","standby generator service TX","generator tune up Central Texas"],
  openGraph: {
    title: "Generator Maintenance in Waco, TX | PowerHold Generators",
    description: "Oil, filters, batteries, exercise verification, and load testing so your generator starts when storms hit.",
    url: `${BASE_URL}/services/generator-maintenance`,
    siteName: "PowerHold Generators",
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: `${BASE_URL}/services/generator-maintenance` },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Generator Maintenance",
  description: "Oil, filters, batteries, exercise verification, and load testing so your generator starts when storms hit.",
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
