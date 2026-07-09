"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import styles from "./page.module.scss";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import SectionIndustriesServed from "#/PageComponents/SectionIndustriesServed/SectionIndustriesServed";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import LocalServiceAreas from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import ValueComparison from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";
import { faTrophy, faChartLine, faClock, faHandshake, faShieldHalved, faFileInvoiceDollar } from "@fortawesome/free-solid-svg-icons";

export default function IndustriesPage() {
  const whyFeatures = [
    { icon: faHandshake, title: "We Learn Your Operation First", description: "A homebuilder, a clinic manager, and a ranch operator all work differently. We learn access rules and downtime constraints before we quote." },
    { icon: faShieldHalved, title: "TECL-Aligned, Bonded & Insured", description: "Documentation multi-site, commercial, and builder projects require." },
    { icon: faFileInvoiceDollar, title: "Install, Service & Maintenance — One Vendor", description: "Standby installs, transfer switches, and emergency support under one roof." },
  ];
  const metrics = [
    { icon: faTrophy, value: 3, label: "B2B industries actively served across Central Texas", suffix: "", duration: 2 },
    { icon: faChartLine, value: 200, label: "Commercial and multi-site generator projects completed", suffix: "+", duration: 3 },
    { icon: faClock, value: 15, label: "Years serving Central Texas organizations", suffix: "+", duration: 2 },
  ];
  const localAreas = [
    { town: "Waco", benefit: "Our home base for builders, clinics, and ag clients.", badge: "Headquarters" },
    { town: "Temple", benefit: "Medical and commercial coverage in Bell County.", badge: "" },
    { town: "Killeen", benefit: "Clinics, multi-site, and light industrial.", badge: "" },
    { town: "Hewitt", benefit: "Residential portfolios and suburban commercial.", badge: "" },
    { town: "Woodway", benefit: "Professional offices and premium homes.", badge: "" },
    { town: "McGregor", benefit: "Industrial corridor and ag properties.", badge: "" },
  ];
  const comparisonRows = [
    { feature: "Organization-specific scheduling", us: "✅ Built per project type", others: "❌ One-size-fits-all" },
    { feature: "Central Texas market knowledge", us: "✅ 15+ years in Waco", others: "❌ Out-of-area contractors" },
    { feature: "TECL-aligned commercial crews", us: "✅ Always", others: "❌ Not always" },
    { feature: "Transparent, upfront pricing", us: "✅ Quote before work starts", others: "❌ Billable hours + surprises" },
    { feature: "Storm-Ready Install Guarantee · 2-Year Workmanship", us: "✅ On every install", others: "❌ Limited or none" },
  ];
  const faq = [
    { question: "What organizations does PowerHold work with?", answer: "Homebuilders, healthcare clinics, and agriculture & ranches — plus residential generator services." },
    { question: "Do you build custom proposals?", answer: "Yes — around access rules, downtime windows, and CapEx cycles." },
    { question: "Do you serve outside Waco?", answer: "Yes — Temple, Killeen, Hewitt, Woodway, McGregor, China Spring, Bellmead, and most of Central Texas within ~60 miles." },
    { question: "Can you handle multi-site portfolios?", answer: "Yes — phased pricing and a single point of contact." },
    { question: "How do I choose a program?", answer: "Click your industry below or contact us — we'll recommend the fit." },
  ];
  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries" }]} />
      <SectionIntro title="Industries We Serve Across Central Texas" subtitle="Backup power programs built for how your organization actually works — open dates, critical loads, and uptime windows." />
      <TrustBar headline="Trusted by builders, clinics, and ranches across Central Texas since 2011" />
      <div className={styles.section}><SectionIndustriesServed title="Browse by Industry" subtitle="Click your industry to see programs built for organizations like yours." /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Organizations Choose PowerHold" /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="industries" title="Coverage Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Industry Program FAQs" /></div>
      <div className={styles.section}><Variant4 title="Request an Industry Program Quote" cityName="Waco" slug="/industries" spot="industries-index-form" formVariant={2} /></div>
      <CTABanner headline="Need a Generator Partner Who Understands Your Operation?" subline="Flat-rate proposals. TECL-aligned crews. Storm-Ready Install Guarantee · 2-Year Workmanship." primaryText="Call (254) 991-2121" primaryLink="tel:+12549912121" secondaryText="Contact Us" secondaryLink="/contact" />
    </main>
  );
}
