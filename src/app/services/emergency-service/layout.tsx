import type { Metadata } from "next";

const BASE_URL = process.env.NODE_ENV === "production"
  ? "https://www.powerholdgenerators.com" : "http://localhost:3000";

export const metadata: Metadata = {
  title: "Emergency Service in Waco, TX | PowerHold Generators",
  description: "Failed starts, transfer issues, and storm outages — same-day emergency generator service across Central Texas.",
  keywords: ["emergency generator repair Waco","generator won't start","storm generator service Central Texas"],
  openGraph: {
    title: "Emergency Service in Waco, TX | PowerHold Generators",
    description: "Failed starts, transfer issues, and storm outages — same-day emergency generator service across Central Texas.",
    url: `${BASE_URL}/services/emergency-service`,
    siteName: "PowerHold Generators",
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: `${BASE_URL}/services/emergency-service` },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Emergency Service",
  description: "Failed starts, transfer issues, and storm outages — same-day emergency generator service across Central Texas.",
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
