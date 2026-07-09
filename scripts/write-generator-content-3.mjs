/**
 * Part 3 — services ×6, industries ×3, blogs ×3, layout chrome, forms
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const w = (rel, content) => {
  const p = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, content, 'utf8');
  console.log('wrote', rel);
};

const PHONE = '(254) 991-2121';
const TEL = 'tel:+12549912121';
const G = 'Storm-Ready Install Guarantee · 2-Year Workmanship';
const BASE = 'https://www.powerholdgenerators.com';

function servicePage({ fnName, title, slug, intro, expectations, why, process, faq, cross, metricsLabel }) {
  return `"use client";
import styles from "../page.module.scss";
import reviews from '&/local-db/reviews';
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import WhatToExpect from "#/PageComponents/WhatToExpect/WhatToExpect";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";
import {
  faBolt, faCarBattery, faExchangeAlt, faOilCan, faCalculator, faTruckMedical,
  faSearch, faCheckCircle, faClock, faShieldHalved, faHeadset, faFileContract,
  faTrophy, faChartLine, faWrench,
} from "@fortawesome/free-solid-svg-icons";

export default function ${fnName}() {
  const expectations = ${JSON.stringify(expectations)}.map((e, i) => ({ ...e, icon: [faSearch, faFileContract, faCheckCircle, faShieldHalved][i] }));
  const whyFeatures = ${JSON.stringify(why)}.map((e, i) => ({ ...e, icon: [faClock, faWrench, faShieldHalved][i] }));
  const processSteps = ${JSON.stringify(process)}.map((e, i) => ({ ...e, number: i + 1, icon: [faHeadset, faSearch, faFileContract, faCheckCircle][i] }));
  const metrics = [
    { icon: faTrophy, value: 1800, label: "${metricsLabel || 'Generators installed across Central Texas'}", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock, value: 15, label: "Years powering Waco-area homes", suffix: "+", duration: 2 },
  ];
  const localAreas = [
    { town: "Waco", benefit: "Home base — fastest dispatch.", badge: "Fastest Response" },
    { town: "Hewitt", benefit: "Full coverage throughout Hewitt.", badge: "" },
    { town: "Woodway", benefit: "Same-day service for Woodway.", badge: "" },
    { town: "Bellmead", benefit: "On our regular route.", badge: "" },
    { town: "China Spring", benefit: "Rural coverage — call ahead for same-day.", badge: "" },
    { town: "Temple", benefit: "Full coverage for Bell County.", badge: "" },
  ];
  const comparisonRows = [
    { feature: "Flat-rate price before work starts", us: "✅ Always written", others: "❌ Hourly + estimate only" },
    { feature: "${G}", us: "✅ Every job", others: "❌ Rare or none" },
    { feature: "TECL-aligned installers", us: "✅ All techs", others: "❌ Not always" },
    { feature: "Emergency service 7 days/week", us: "✅ Always available", others: "❌ M–F business hours" },
    { feature: "Code-safe transfer equipment", us: "✅ Proper ATS / interlock", others: "❌ Improvised backfeeds" },
  ];
  const faq = ${JSON.stringify(faq)};
  const crossServices = ${JSON.stringify(cross)}.map((c, i) => ({
    ...c, icon: [faBolt, faCarBattery, faExchangeAlt, faOilCan, faCalculator, faTruckMedical][i % 6],
  }));

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "${title}" },
      ]} />
      <SectionIntro title="${title} in Waco, TX" subtitle="${intro}" />
      <TrustBar headline="1,800+ Central Texas generators installed by PowerHold Generators" />
      <div className={styles.section}><WhatToExpect sectionTitle="What Happens When You Call" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Waco Calls PowerHold First" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/${slug}" title="${title} Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="${title} FAQs" /></div>
      <CTABanner
        headline="Need ${title} Help Today?"
        subline="Same-day service available. Flat-rate pricing. ${G}."
        primaryText="Call Us Now"
        primaryLink="${TEL}"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}><ServiceCardComponent heading="Related Services" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4 title="Schedule ${title}" cityName="Waco" slug="services/${slug}" spot="${slug}-page-form" formVariant={2} />
      </div>
    </main>
  );
}
`;
}

function serviceLayout({ title, slug, description, keywords }) {
  return `import type { Metadata } from "next";

const BASE_URL = process.env.NODE_ENV === "production"
  ? "${BASE}" : "http://localhost:3000";

export const metadata: Metadata = {
  title: "${title} in Waco, TX | PowerHold Generators",
  description: ${JSON.stringify(description)},
  keywords: ${JSON.stringify(keywords)},
  openGraph: {
    title: "${title} in Waco, TX | PowerHold Generators",
    description: ${JSON.stringify(description)},
    url: \`\${BASE_URL}/services/${slug}\`,
    siteName: "PowerHold Generators",
    locale: "en_US",
    type: "website",
  },
  alternates: { canonical: \`\${BASE_URL}/services/${slug}\` },
};

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "${title}",
  description: ${JSON.stringify(description)},
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
`;
}

const crossDefault = [
  { title: "Standby Generators", body: "Whole-home automatic backup power.", link: "/services/standby-generators" },
  { title: "Portable Generators", body: "Portable units and interlock kits.", link: "/services/portable-generators" },
  { title: "Transfer Switches", body: "Code-safe ATS and manual switches.", link: "/services/transfer-switches" },
  { title: "Generator Maintenance", body: "Keep your unit storm-ready year-round.", link: "/services/generator-maintenance" },
];

const services = [
  {
    slug: 'standby-generators', fnName: 'StandbyGeneratorsPage', title: 'Standby Generators',
    intro: 'Automatic whole-home and critical-load standby systems with proper transfer switches — flat-rate pricing and Storm-Ready Install Guarantee · 2-Year Workmanship.',
    expectations: [
      { title: "Load & Site Assessment", description: "We size critical or whole-home loads, review pad placement, fuel source, and setbacks." },
      { title: "Flat-Rate Project Quote", description: "Unit coordination, ATS, electrical labor, and permits in a clear written scope." },
      { title: "Professional Install", description: "Pad, fuel, transfer switch, and commissioning handled by TECL-aligned installers." },
      { title: "Storm-Ready Guarantee", description: "2-Year Workmanship on our install — plus manufacturer coverage on the unit." },
    ],
    why: [
      { title: "Storm-Season Scheduling", description: "We prioritize installs before peak storm season and give honest equipment lead times." },
      { title: "Right-Sized Systems", description: "Whole-home or critical-load — we recommend what you need, not the biggest unit on the truck." },
      { title: "Code-Safe Installs", description: "Proper ATS only. No dangerous dryer-outlet backfeeds — ever." },
    ],
    process: [
      { title: "Site Assessment", description: "Load review, placement options, fuel source, and noise setbacks." },
      { title: "Quote & Order", description: "Flat-rate scope. We coordinate generator delivery timing." },
      { title: "Install ATS & Unit", description: "Transfer switch, feeders, grounding, and panel connections." },
      { title: "Startup & Train", description: "Commission under load and walkthrough of exercise and alarms." },
    ],
    faq: [
      { question: "How much does a standby generator cost in Waco?", answer: "Installed whole-home systems commonly run $8,000–$18,000 depending on kW, fuel (natural gas vs propane), and electrical scope. We quote flat-rate before work starts." },
      { question: "How long does installation take?", answer: "Electrical and mechanical install is often 1–2 days once the pad and unit are ready. Equipment lead time is usually the longer wait." },
      { question: "Natural gas or propane?", answer: "Both work. Natural gas is convenient where available; propane is common on rural lots. We plan fuel with your utility or tank provider." },
      { question: "Do I need a panel upgrade first?", answer: "Sometimes — especially for whole-home standby on older 100A service. We assess during the site visit." },
      { question: "What brands do you install?", answer: "We install major residential standby brands and match the unit to your load and budget. Ask about current availability." },
      { question: "Is maintenance required?", answer: "Yes — oil, filters, batteries, and exercise verification keep the unit ready. We offer maintenance plans." },
    ],
    keywords: ["standby generator Waco TX", "whole home generator installation", "automatic standby generator Central Texas", "PowerHold Generators"],
  },
  {
    slug: 'portable-generators', fnName: 'PortableGeneratorsPage', title: 'Portable Generators',
    intro: 'Portable generators and code-safe interlock kits for homes and shops — reliable backup without a full standby install.',
    expectations: [
      { title: "Needs Review", description: "We identify which circuits matter during an outage and recommend portable capacity." },
      { title: "Interlock or Manual Transfer", description: "Legal connection methods only — never a dangerous double-pole dryer hack." },
      { title: "Setup & Test", description: "We label circuits, test under load, and show you safe start/stop procedure." },
      { title: "Clear Pricing", description: "Flat-rate for interlock install and optional portable unit coordination." },
    ],
    why: [
      { title: "Budget-Friendly Backup", description: "Portable + interlock is often a fraction of whole-home standby cost." },
      { title: "Safe by Design", description: "We refuse illegal backfeeds that endanger utility workers." },
      { title: "Shop & Ranch Ready", description: "Great for workshops, barns, and secondary buildings." },
    ],
    process: [
      { title: "Call or Book", description: "Tell us your loads and property type." },
      { title: "On-Site Review", description: "Panel inspection and circuit prioritization." },
      { title: "Install Interlock", description: "Code-safe manual transfer equipment." },
      { title: "Train & Document", description: "Safe operating steps and labeled breakers." },
    ],
    faq: [
      { question: "Is a portable generator enough for my house?", answer: "Often for critical circuits (fridge, lights, well pump, medical devices). Whole-home HVAC usually needs a larger standby unit." },
      { question: "What size portable do I need?", answer: "Depends on starting watts of pumps and compressors. We calculate it — don't guess from a marketing label alone." },
      { question: "Do I need an interlock kit?", answer: "Yes if you want to power house circuits through the panel safely. Extension cords alone are limited and easy to overload." },
      { question: "Can you install just the interlock?", answer: "Yes — many customers already own a portable unit." },
      { question: "Fuel: gas or dual-fuel?", answer: "Both are common. Dual-fuel adds flexibility during long outages when gasoline is scarce." },
      { question: "Do you sell portable units?", answer: "We can coordinate equipment or install transfer gear for a unit you provide." },
    ],
    keywords: ["portable generator Waco", "generator interlock kit installation", "manual transfer switch Waco TX"],
  },
  {
    slug: 'transfer-switches', fnName: 'TransferSwitchesPage', title: 'Transfer Switches',
    intro: 'Automatic and manual transfer switches installed the legal, utility-safe way for standby and portable systems.',
    expectations: [
      { title: "System Matching", description: "We match ATS or manual transfer gear to your generator and panel." },
      { title: "Code-Safe Install", description: "Proper breakers, bonding, and utility-safe isolation — no improvised backfeeds." },
      { title: "Commissioning", description: "Transfer tests under load so you know it works before the next storm." },
      { title: "Warranty Backing", description: "2-Year Workmanship on our installation labor." },
    ],
    why: [
      { title: "Safety First", description: "Backfeeding kills. We only install proper transfer equipment." },
      { title: "Standby or Portable", description: "ATS for automatic systems, interlocks/manual for portable." },
      { title: "Clean Panel Work", description: "Labeled circuits and tidy terminations every time." },
    ],
    process: [
      { title: "Assess Panel & Generator", description: "Compatibility, space, and load selection." },
      { title: "Quote Flat-Rate", description: "Equipment and labor in one written number." },
      { title: "Install & Wire", description: "Transfer gear, feeders, and labeling." },
      { title: "Test Transfer", description: "Simulate utility loss and verify seamless/safe switchover." },
    ],
    faq: [
      { question: "Automatic vs manual transfer switch?", answer: "Automatic works with standby generators for hands-free power. Manual/interlock pairs with portable generators you start yourself." },
      { question: "How much does a transfer switch cost?", answer: "Manual interlocks are often a few hundred dollars installed. Automatic transfer switches for standby systems are a larger package — quoted with the generator project." },
      { question: "Can you retrofit an ATS to my existing generator?", answer: "Often yes if the unit and panel support it. Site assessment confirms." },
      { question: "Is a permit required?", answer: "Electrical permits are typically required. We handle permit-ready work for the jurisdictions we serve." },
      { question: "Will this work with my solar system?", answer: "Sometimes with careful design. Bring your solar documentation to the assessment." },
      { question: "How long does install take?", answer: "Many manual interlocks are same-day. Full ATS projects are usually 1 day as part of a standby install." },
    ],
    keywords: ["transfer switch installation Waco", "automatic transfer switch TX", "generator interlock Waco"],
  },
  {
    slug: 'generator-maintenance', fnName: 'GeneratorMaintenancePage', title: 'Generator Maintenance',
    intro: 'Oil, filters, batteries, exercise verification, and load testing so your generator starts when storms hit.',
    expectations: [
      { title: "Full System Check", description: "Fluids, filters, battery, belts, connections, and enclosure." },
      { title: "Exercise & Alarms", description: "We verify weekly exercise and clear nuisance faults." },
      { title: "Load Awareness", description: "Optional load testing to prove the unit under real demand." },
      { title: "Service Record", description: "You leave with a clear report of what we found and fixed." },
    ],
    why: [
      { title: "Failed Starts Are Expensive", description: "A $200 maintenance visit beats a cold house during a multi-day outage." },
      { title: "Brand-Agnostic Service", description: "We service major residential standby brands." },
      { title: "Plans Without Lock-In", description: "Month-to-month maintenance — no multi-year contracts." },
    ],
    process: [
      { title: "Schedule", description: "Annual or bi-annual slots that fit your calendar." },
      { title: "Inspect & Service", description: "Oil/filter, battery, connections, and controller." },
      { title: "Test Run", description: "Verify start, transfer (if applicable), and cool-down." },
      { title: "Report", description: "Findings, recommendations, and next service date." },
    ],
    faq: [
      { question: "How often should I service my generator?", answer: "At least annually; many manufacturers recommend every 100–200 run hours or yearly — whichever comes first." },
      { question: "What's included in a tune-up?", answer: "Oil and filter service (as applicable), battery test, visual inspection, connection check, exercise verification, and controller review." },
      { question: "Do you offer maintenance plans?", answer: "Yes — scheduled visits with priority scheduling. No long-term lock-in." },
      { question: "My unit shows a fault code — can you help?", answer: "Yes. Call with the code and model number; many issues are same-day fixes." },
      { question: "Do you service portable generators too?", answer: "Yes — oil, spark plugs, carburetor issues, and storage prep." },
      { question: "When should I replace the battery?", answer: "Typically every 2–3 years, or sooner if cranking is slow. We test on every visit." },
    ],
    keywords: ["generator maintenance Waco", "standby generator service TX", "generator tune up Central Texas"],
  },
  {
    slug: 'load-calculations', fnName: 'LoadCalculationsPage', title: 'Load Calculations',
    intro: 'Honest residential and light-commercial load studies so you buy the right size generator — not an oversized upsell.',
    expectations: [
      { title: "Circuit Inventory", description: "We identify continuous and starting loads that matter in an outage." },
      { title: "Right-Size Recommendation", description: "kW guidance for standby or portable — with room for future circuits if needed." },
      { title: "Fuel & Electrical Notes", description: "Gas vs propane, panel capacity, and transfer strategy." },
      { title: "Written Summary", description: "You leave with a clear sizing report you can use for shopping or our install quote." },
    ],
    why: [
      { title: "No Upsell Pressure", description: "We'd rather sell the correct 16kW than an oversized 26kW you don't need." },
      { title: "Texas Load Reality", description: "HVAC starting amps, well pumps, and freezers — we plan for real Central Texas homes." },
      { title: "Pairs With Install", description: "Use the study alone or roll it into a PowerHold install package." },
    ],
    process: [
      { title: "Book Assessment", description: "Share panel photos if available." },
      { title: "On-Site Survey", description: "Loads, panel, placement, and fuel options." },
      { title: "Calculate", description: "Running and starting watts / kW." },
      { title: "Recommend", description: "Size options, budget ranges, and next steps." },
    ],
    faq: [
      { question: "Do I need a load calculation before buying?", answer: "Yes — guessing from square footage alone is how people buy the wrong unit." },
      { question: "Whole-home vs critical circuits?", answer: "Critical-load is cheaper and covers essentials. Whole-home keeps HVAC and everything running. We show both paths." },
      { question: "How long does a load study take?", answer: "Most residential visits are 45–90 minutes on site plus a written summary." },
      { question: "Is the study free with install?", answer: "Site assessment for install customers is typically credited toward the project. Standalone studies can be quoted." },
      { question: "Can you size for a clinic or ranch?", answer: "Yes — light commercial and agricultural loads are in scope." },
      { question: "What if my panel is only 100A?", answer: "We may recommend critical-load subpanel strategy or a service upgrade. We'll explain tradeoffs." },
    ],
    keywords: ["generator load calculation Waco", "what size generator do I need", "standby generator sizing Texas"],
  },
  {
    slug: 'emergency-service', fnName: 'EmergencyServicePage', title: 'Emergency Service',
    intro: 'Failed starts, transfer issues, and storm outages — same-day emergency generator service across Central Texas.',
    expectations: [
      { title: "Rapid Dispatch", description: "We prioritize true outages and failed transfers — especially during storms." },
      { title: "Honest Diagnosis", description: "Battery, fuel, starter, controller, or transfer gear — we find the real issue." },
      { title: "Same-Visit Fixes When Possible", description: "Common parts stocked; clear options if major components are needed." },
      { title: "No After-Hours Gouging Surprises", description: "We confirm emergency rates when you call — before we roll." },
    ],
    why: [
      { title: "7-Day Emergency Response", description: "Evenings and weekends included for genuine outages." },
      { title: "Standby & Portable", description: "We service both automatic systems and portable setups." },
      { title: "Storm-Hardened Crews", description: "We plan routes for ice storms and severe weather demand spikes." },
    ],
    process: [
      { title: "Call ${PHONE}", description: "Describe symptoms, model, and whether utility power is out." },
      { title: "Dispatch", description: "We give an honest ETA and emergency fee confirmation." },
      { title: "Diagnose & Quote", description: "Flat-rate repair options before work proceeds." },
      { title: "Restore Power Path", description: "Repair, temporary workaround if needed, and retest." },
    ],
    faq: [
      { question: "What counts as an emergency?", answer: "No utility power and generator won't start/transfer, medical equipment needs, or unsafe conditions. Call and we'll triage." },
      { question: "Do you charge more after hours?", answer: "Emergency dispatch has a separate fee disclosed when you call. No surprise invoices after we arrive." },
      { question: "Can you help if I only have a portable?", answer: "Yes — start issues, interlock problems, and safe connection checks." },
      { question: "How fast can you arrive?", answer: "In Waco metro often within a few hours depending on storm load. We'll give a real ETA." },
      { question: "What if the unit needs a major part?", answer: "We stabilize if possible, order the part, and schedule the return visit with clear pricing." },
      { question: "Do you service commercial generators?", answer: "Light commercial and ag units are in scope. Large industrial may require specialist referral." },
    ],
    keywords: ["emergency generator repair Waco", "generator won't start", "storm generator service Central Texas"],
  },
];

for (const s of services) {
  w(`src/app/services/${s.slug}/page.tsx`, servicePage({ ...s, cross: crossDefault, description: s.intro }));
  w(`src/app/services/${s.slug}/layout.tsx`, serviceLayout({
    title: s.title, slug: s.slug, description: s.intro, keywords: s.keywords,
  }));
}

// Services index
w('src/app/services/page.tsx', `"use client";
import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";
import {
  faBolt, faCarBattery, faExchangeAlt, faOilCan, faCalculator, faTruckMedical,
  faTrophy, faChartLine, faClock, faShieldHalved, faUsers, faClipboardCheck,
  faHeadset, faSearch, faFileContract, faCheckCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function ServicesPage() {
  const services = [
    { icon: faBolt, title: "Standby Generators", body: "Whole-home and critical-load automatic standby systems with proper transfer switches and fuel coordination.", link: "/services/standby-generators" },
    { icon: faCarBattery, title: "Portable Generators", body: "Portable units and code-safe interlock kits for homes, shops, and barns.", link: "/services/portable-generators" },
    { icon: faExchangeAlt, title: "Transfer Switches", body: "Automatic and manual transfer switches — utility-safe, permit-ready installs.", link: "/services/transfer-switches" },
    { icon: faOilCan, title: "Generator Maintenance", body: "Oil, filters, batteries, exercise checks, and load testing so units start in storms.", link: "/services/generator-maintenance" },
    { icon: faCalculator, title: "Load Calculations", body: "Honest sizing so you buy the right kW — not an oversized upsell.", link: "/services/load-calculations" },
    { icon: faTruckMedical, title: "Emergency Service", body: "Failed starts and storm outages — same-day emergency generator service.", link: "/services/emergency-service" },
  ];
  const whyFeatures = [
    { icon: faClipboardCheck, title: "Flat-Rate Written Quotes", description: "Firm price before we start. No hourly surprises." },
    { icon: faShieldHalved, title: "TECL-Aligned Installers", description: "Bonded, insured, TECL-aligned crews on every job." },
    { icon: faUsers, title: "Locally Owned Since 2011", description: "Founded in Waco by Rhea Colton — not a call-center franchise." },
  ];
  const processSteps = [
    { number: 1, title: "Call or Book Online", description: "Phone, text, or form — same-day or next-day slots.", icon: faHeadset },
    { number: 2, title: "On-Site Assessment", description: "Loads, placement, and fuel options in plain English.", icon: faSearch },
    { number: 3, title: "Flat-Rate Quote", description: "Written price before any work starts.", icon: faFileContract },
    { number: 4, title: "Done Right, Warrantied", description: "${G}.", icon: faCheckCircle },
  ];
  const metrics = [
    { icon: faTrophy, value: 1800, label: "Generators installed across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rating", suffix: "%", duration: 2 },
    { icon: faClock, value: 15, label: "Years of local generator experience", suffix: "+", duration: 2 },
  ];
  const faq = [
    { question: "How much does generator service cost in Waco?", answer: "Repairs often range from $150–$650 depending on the issue. Standby installs are project-priced. We always provide flat-rate written quotes before work begins." },
    { question: "Do you work on all generator brands?", answer: "Yes — major residential standby and portable brands. Call with your model if unsure." },
    { question: "What does maintenance include?", answer: "Oil/filter service as applicable, battery test, connections, exercise verification, and controller review." },
    { question: "Do you offer emergency service?", answer: "Yes — 7 days a week including evenings. Call ${PHONE}." },
    { question: "Are you bonded and insured?", answer: "Yes — TECL-aligned installers, bonded and insured." },
    { question: "Do you offer a warranty?", answer: "Yes — ${G}." },
  ];
  return (
    <main className={styles.pageWrapper}>
      <SectionIntro title="Generator Services for Waco & Central Texas" subtitle="Standby, portable, transfer switches, maintenance, load calculations, and emergency service — done right, priced upfront, backed by ${G}." />
      <TrustBar headline="1,800+ Central Texas generators installed by PowerHold Generators" />
      <div className={styles.section}><ServiceCardComponent heading="All Our Services" cards={services} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Homeowners Choose PowerHold" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Generator Service FAQs" /></div>
      <div className={styles.section}><Variant4 title="Request Service or a Free Quote" cityName="Waco" slug="/services" spot="services-index-form" formVariant={2} /></div>
      <CTABanner headline="Need Generator Service Today?" subline="Same-day appointments available. Flat-rate pricing. ${G}." primaryText="Call ${PHONE}" primaryLink="${TEL}" secondaryText="Book Online" secondaryLink="/contact" />
    </main>
  );
}
`);

w('src/app/services/layout.tsx', `import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Generator Services | PowerHold Generators — Waco, TX",
  description: "Standby generators, portable systems, transfer switches, maintenance, load calculations, and emergency service in Waco and Central Texas.",
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
`);

console.log('services done');
