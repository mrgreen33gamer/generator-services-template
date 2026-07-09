"use client";
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

export default function GeneratorMaintenancePage() {
  const expectations = [{"title":"Full System Check","description":"Fluids, filters, battery, belts, connections, and enclosure."},{"title":"Exercise & Alarms","description":"We verify weekly exercise and clear nuisance faults."},{"title":"Load Awareness","description":"Optional load testing to prove the unit under real demand."},{"title":"Service Record","description":"You leave with a clear report of what we found and fixed."}].map((e, i) => ({ ...e, icon: [faSearch, faFileContract, faCheckCircle, faShieldHalved][i] }));
  const whyFeatures = [{"title":"Failed Starts Are Expensive","description":"A $200 maintenance visit beats a cold house during a multi-day outage."},{"title":"Brand-Agnostic Service","description":"We service major residential standby brands."},{"title":"Plans Without Lock-In","description":"Month-to-month maintenance — no multi-year contracts."}].map((e, i) => ({ ...e, icon: [faClock, faWrench, faShieldHalved][i] }));
  const processSteps = [{"title":"Schedule","description":"Annual or bi-annual slots that fit your calendar."},{"title":"Inspect & Service","description":"Oil/filter, battery, connections, and controller."},{"title":"Test Run","description":"Verify start, transfer (if applicable), and cool-down."},{"title":"Report","description":"Findings, recommendations, and next service date."}].map((e, i) => ({ ...e, number: i + 1, icon: [faHeadset, faSearch, faFileContract, faCheckCircle][i] }));
  const metrics = [
    { icon: faTrophy, value: 1800, label: "Generators installed across Central Texas", suffix: "+", duration: 3 },
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
    { feature: "Storm-Ready Install Guarantee · 2-Year Workmanship", us: "✅ Every job", others: "❌ Rare or none" },
    { feature: "TECL-aligned installers", us: "✅ All techs", others: "❌ Not always" },
    { feature: "Emergency service 7 days/week", us: "✅ Always available", others: "❌ M–F business hours" },
    { feature: "Code-safe transfer equipment", us: "✅ Proper ATS / interlock", others: "❌ Improvised backfeeds" },
  ];
  const faq = [{"question":"How often should I service my generator?","answer":"At least annually; many manufacturers recommend every 100–200 run hours or yearly — whichever comes first."},{"question":"What's included in a tune-up?","answer":"Oil and filter service (as applicable), battery test, visual inspection, connection check, exercise verification, and controller review."},{"question":"Do you offer maintenance plans?","answer":"Yes — scheduled visits with priority scheduling. No long-term lock-in."},{"question":"My unit shows a fault code — can you help?","answer":"Yes. Call with the code and model number; many issues are same-day fixes."},{"question":"Do you service portable generators too?","answer":"Yes — oil, spark plugs, carburetor issues, and storage prep."},{"question":"When should I replace the battery?","answer":"Typically every 2–3 years, or sooner if cranking is slow. We test on every visit."}];
  const crossServices = [{"title":"Standby Generators","body":"Whole-home automatic backup power.","link":"/services/standby-generators"},{"title":"Portable Generators","body":"Portable units and interlock kits.","link":"/services/portable-generators"},{"title":"Transfer Switches","body":"Code-safe ATS and manual switches.","link":"/services/transfer-switches"},{"title":"Generator Maintenance","body":"Keep your unit storm-ready year-round.","link":"/services/generator-maintenance"}].map((c, i) => ({
    ...c, icon: [faBolt, faCarBattery, faExchangeAlt, faOilCan, faCalculator, faTruckMedical][i % 6],
  }));

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Generator Maintenance" },
      ]} />
      <SectionIntro title="Generator Maintenance in Waco, TX" subtitle="Oil, filters, batteries, exercise verification, and load testing so your generator starts when storms hit." />
      <TrustBar headline="1,800+ Central Texas generators installed by PowerHold Generators" />
      <div className={styles.section}><WhatToExpect sectionTitle="What Happens When You Call" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Waco Calls PowerHold First" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/generator-maintenance" title="Generator Maintenance Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Generator Maintenance FAQs" /></div>
      <CTABanner
        headline="Need Generator Maintenance Help Today?"
        subline="Same-day service available. Flat-rate pricing. Storm-Ready Install Guarantee · 2-Year Workmanship."
        primaryText="Call Us Now"
        primaryLink="tel:+12549912121"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}><ServiceCardComponent heading="Related Services" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4 title="Schedule Generator Maintenance" cityName="Waco" slug="services/generator-maintenance" spot="generator-maintenance-page-form" formVariant={2} />
      </div>
    </main>
  );
}
