import type { Metadata } from "next";

const BASE_URL = process.env.NODE_ENV === "production"
  ? "https://www.powerholdgenerators.com" : "http://localhost:3000";

export const metadata: Metadata = {
  title: "Portable Generators in Waco, TX | PowerHold Generators",
  description: "Portable generators and code-safe interlock kits for homes and shops — reliable backup without a full standby install.",
  keywords: ["portable generator Waco","generator interlock kit installation","manual transfer switch Waco TX"],
  openGraph: {
    title: "Portable Generators in Waco, TX | PowerHold Generators",
    description: "Portable generators and code-safe interlock kits for homes and shops — reliable backup without a full standby install.",
    url: `${BASE_URL}/services/portable-generators`,
    siteName: "PowerHold Generators",
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: `${BASE_URL}/services/portable-generators` },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Portable Generators",
  description: "Portable generators and code-safe interlock kits for homes and shops — reliable backup without a full standby install.",
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
