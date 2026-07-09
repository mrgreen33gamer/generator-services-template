import type { Metadata } from "next";

const BASE_URL = process.env.NODE_ENV === "production"
  ? "https://www.powerholdgenerators.com" : "http://localhost:3000";

export const metadata: Metadata = {
  title: "Transfer Switches in Waco, TX | PowerHold Generators",
  description: "Automatic and manual transfer switches installed the legal, utility-safe way for standby and portable systems.",
  keywords: ["transfer switch installation Waco","automatic transfer switch TX","generator interlock Waco"],
  openGraph: {
    title: "Transfer Switches in Waco, TX | PowerHold Generators",
    description: "Automatic and manual transfer switches installed the legal, utility-safe way for standby and portable systems.",
    url: `${BASE_URL}/services/transfer-switches`,
    siteName: "PowerHold Generators",
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: `${BASE_URL}/services/transfer-switches` },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Transfer Switches",
  description: "Automatic and manual transfer switches installed the legal, utility-safe way for standby and portable systems.",
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
