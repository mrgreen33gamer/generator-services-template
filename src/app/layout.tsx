// src/app/layout.tsx — PowerHold Generators
import type { Metadata, Viewport } from "next";
import { Share_Tech, Space_Grotesk, IBM_Plex_Sans } from "next/font/google";
import "./globals.css";
import "./globalVariables.scss";
import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
import 'react-toastify/dist/ReactToastify.css';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Suspense } from "react";
import { PulseLoader } from 'react-spinners';
import NextTopLoader from 'nextjs-toploader';

import Analytics from "#/GeneralComponents/Analytics/Analytics";
import { MapProvider } from "#/Pages/Home/ClientMap/MapContext";
import ToastifyComponent from "#/ToastifyComponent/ToastifyComponent";
import CookieBanner from "#/GeneralComponents/CookieBanner/CookieBanner";
import Header from "#/GeneralComponents/Header/Header";
import Footer from "#/GeneralComponents/Footer/Footer";
import JourneyTrackerProvider from "#/GeneralComponents/JourneyTracker/JourneyTrackerProvider";
import ConditionalShell from "#/GeneralComponents/ConditionalShell/ConditionalShell";
import reviews from "../../libs/local-db/reviews";

config.autoAddCss = false;

const fontTitle = Share_Tech({
  weight: ["400"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-title",
});

const fontHeader = Space_Grotesk({
  weight: ["400","500","600","700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-header",
});

const fontBody = IBM_Plex_Sans({
  weight: ["400","500","600","700"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-body",
});

const isProduction = process.env.NODE_ENV === "production";
const BASE_URL = isProduction ? "https://www.powerholdgenerators.com" : "http://localhost:3000";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#052e16" },
    { media: "(prefers-color-scheme: dark)",  color: "#052e16" },
  ],
  colorScheme: "dark",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "PowerHold Generators | Standby Generators, Transfer Switches & Service — Waco, TX",
    template: "%s | PowerHold Generators",
  },
  description:
    "PowerHold Generators is a Waco, TX generator company offering standby generators, portable systems, transfer switches, load calculations, maintenance, and emergency service for Central Texas. TECL-aligned, local, no contracts.",
  keywords: [
    "PowerHold Generators",
    "standby generator Waco TX",
    "generator installation Waco Texas",
    "transfer switch installation",
    "portable generator interlock",
    "generator maintenance Central Texas",
    "emergency generator repair Waco",
  ],
  authors: [{ name: "PowerHold Generators", url: BASE_URL }],
  creator: "PowerHold Generators",
  publisher: "PowerHold Generators",
  icons: {
    icon: [`${BASE_URL}/logos/favicon.ico?v=1`],
    apple: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
    shortcut: [`${BASE_URL}/logos/apple-touch-icon.png?v=1`],
  },
  openGraph: {
    title: "PowerHold Generators | Standby Generators & Transfer Switches — Waco, TX",
    description:
      "Waco-based generator company for standby installs, portable systems, transfer switches, maintenance, and emergency service across Central Texas. TECL-aligned & insured.",
    url: BASE_URL,
    siteName: "PowerHold Generators",
    images: [{ url: `${BASE_URL}/pages/home/welcome/hero-main.jpg`, width: 1200, height: 630, alt: "PowerHold Generators — Waco TX" }],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "PowerHold Generators | Waco TX Generator Pros",
    description: "Standby generators, transfer switches & emergency service for Central Texas. TECL-aligned & insured.",
    images: [`${BASE_URL}/pages/home/welcome/hero-main.jpg`],
  },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-video-preview": -1, "max-image-preview": "large", "max-snippet": -1 } },
  alternates: { canonical: BASE_URL },
  manifest: `${BASE_URL}/logos/site.webmanifest`,
};

const reviewCount = reviews.length;
const ratingValue = "5.0";

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "Electrician",
  "@id": `${BASE_URL}/#organization`,
  name: "PowerHold Generators",
  alternateName: "PowerHold Generators Waco",
  description:
    "Residential and commercial generator services in Waco and Central Texas — standby generators, portable systems, transfer switches, load calculations, maintenance, and emergency service. TECL-aligned, bonded & insured, Storm-Ready Install Guarantee · 2-Year Workmanship.",
  url: BASE_URL,
  telephone: "+12549912121",
  email: "hello@powerholdgenerators.com",
  foundingDate: "2011",
  founder: { "@type": "Person", name: "Rhea Colton", jobTitle: "Owner" },
  address: {
    "@type": "PostalAddress",
    streetAddress: "1800 Franklin Ave",
    addressLocality: "Waco",
    addressRegion: "TX",
    postalCode: "76701",
    addressCountry: "US",
  },
  geo: { "@type": "GeoCoordinates", latitude: 31.5493, longitude: -97.1469 },
  openingHoursSpecification: [
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Monday","Tuesday","Wednesday","Thursday","Friday"], opens: "07:00", closes: "18:00" },
    { "@type": "OpeningHoursSpecification", dayOfWeek: ["Saturday"], opens: "08:00", closes: "14:00" },
  ],
  areaServed: ["Waco","Hewitt","Woodway","Bellmead","China Spring","McGregor","Temple","Killeen"].map(
    (name) => ({ "@type": "City", name, containedInPlace: { "@type": "State", name: "Texas" } })
  ),
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Generator Services",
    itemListElement: [
      "Standby Generators","Portable Generators","Transfer Switches","Generator Maintenance","Load Calculations","Emergency Service",
    ].map((name) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name } })),
  },
  aggregateRating: { "@type": "AggregateRating", ratingValue, reviewCount: String(reviewCount), bestRating: "5", worstRating: "1" },
  priceRange: "$$",
  currenciesAccepted: "USD",
  paymentAccepted: "Cash, Credit Card, Check, Financing",
  sameAs: ["https://www.facebook.com/powerholdgenerators", "https://www.google.com/maps/?cid=placeholder"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${fontTitle.variable} ${fontHeader.variable} ${fontBody.variable}`}>
      <head>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }} />
      </head>
      <body>
        <ConditionalShell><Header /></ConditionalShell>
        <NextTopLoader color="#22c55e" showSpinner={false} />
        <Suspense fallback={null}><Analytics /></Suspense>
        <MapProvider>
          <Suspense fallback={
            <div style={{ display: "flex", justifyContent: "center", alignItems: "center", width: "100%", height: "100vh", background: "#052e16" }}>
              <PulseLoader size={50} color="#22c55e" />
            </div>
          }>
            <JourneyTrackerProvider>{children}</JourneyTrackerProvider>
          </Suspense>
        </MapProvider>
        <ToastifyComponent />
        <Suspense fallback={null}><CookieBanner /></Suspense>
        <ConditionalShell><Footer /></ConditionalShell>
      </body>
    </html>
  );
}
