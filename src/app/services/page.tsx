"use client";
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
    { number: 4, title: "Done Right, Warrantied", description: "Storm-Ready Install Guarantee · 2-Year Workmanship.", icon: faCheckCircle },
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
    { question: "Do you offer emergency service?", answer: "Yes — 7 days a week including evenings. Call (254) 991-2121." },
    { question: "Are you bonded and insured?", answer: "Yes — TECL-aligned installers, bonded and insured." },
    { question: "Do you offer a warranty?", answer: "Yes — Storm-Ready Install Guarantee · 2-Year Workmanship." },
  ];
  return (
    <main className={styles.pageWrapper}>
      <SectionIntro title="Generator Services for Waco & Central Texas" subtitle="Standby, portable, transfer switches, maintenance, load calculations, and emergency service — done right, priced upfront, backed by Storm-Ready Install Guarantee · 2-Year Workmanship." />
      <TrustBar headline="1,800+ Central Texas generators installed by PowerHold Generators" />
      <div className={styles.section}><ServiceCardComponent heading="All Our Services" cards={services} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Homeowners Choose PowerHold" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Generator Service FAQs" /></div>
      <div className={styles.section}><Variant4 title="Request Service or a Free Quote" cityName="Waco" slug="/services" spot="services-index-form" formVariant={2} /></div>
      <CTABanner headline="Need Generator Service Today?" subline="Same-day appointments available. Flat-rate pricing. Storm-Ready Install Guarantee · 2-Year Workmanship." primaryText="Call (254) 991-2121" primaryLink="tel:+12549912121" secondaryText="Book Online" secondaryLink="/contact" />
    </main>
  );
}
