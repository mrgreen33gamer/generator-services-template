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

export default function StandbyGeneratorsPage() {
  const expectations = [{"title":"Load & Site Assessment","description":"We size critical or whole-home loads, review pad placement, fuel source, and setbacks."},{"title":"Flat-Rate Project Quote","description":"Unit coordination, ATS, electrical labor, and permits in a clear written scope."},{"title":"Professional Install","description":"Pad, fuel, transfer switch, and commissioning handled by TECL-aligned installers."},{"title":"Storm-Ready Guarantee","description":"2-Year Workmanship on our install — plus manufacturer coverage on the unit."}].map((e, i) => ({ ...e, icon: [faSearch, faFileContract, faCheckCircle, faShieldHalved][i] }));
  const whyFeatures = [{"title":"Storm-Season Scheduling","description":"We prioritize installs before peak storm season and give honest equipment lead times."},{"title":"Right-Sized Systems","description":"Whole-home or critical-load — we recommend what you need, not the biggest unit on the truck."},{"title":"Code-Safe Installs","description":"Proper ATS only. No dangerous dryer-outlet backfeeds — ever."}].map((e, i) => ({ ...e, icon: [faClock, faWrench, faShieldHalved][i] }));
  const processSteps = [{"title":"Site Assessment","description":"Load review, placement options, fuel source, and noise setbacks."},{"title":"Quote & Order","description":"Flat-rate scope. We coordinate generator delivery timing."},{"title":"Install ATS & Unit","description":"Transfer switch, feeders, grounding, and panel connections."},{"title":"Startup & Train","description":"Commission under load and walkthrough of exercise and alarms."}].map((e, i) => ({ ...e, number: i + 1, icon: [faHeadset, faSearch, faFileContract, faCheckCircle][i] }));
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
  const faq = [{"question":"How much does a standby generator cost in Waco?","answer":"Installed whole-home systems commonly run $8,000–$18,000 depending on kW, fuel (natural gas vs propane), and electrical scope. We quote flat-rate before work starts."},{"question":"How long does installation take?","answer":"Electrical and mechanical install is often 1–2 days once the pad and unit are ready. Equipment lead time is usually the longer wait."},{"question":"Natural gas or propane?","answer":"Both work. Natural gas is convenient where available; propane is common on rural lots. We plan fuel with your utility or tank provider."},{"question":"Do I need a panel upgrade first?","answer":"Sometimes — especially for whole-home standby on older 100A service. We assess during the site visit."},{"question":"What brands do you install?","answer":"We install major residential standby brands and match the unit to your load and budget. Ask about current availability."},{"question":"Is maintenance required?","answer":"Yes — oil, filters, batteries, and exercise verification keep the unit ready. We offer maintenance plans."}];
  const crossServices = [{"title":"Standby Generators","body":"Whole-home automatic backup power.","link":"/services/standby-generators"},{"title":"Portable Generators","body":"Portable units and interlock kits.","link":"/services/portable-generators"},{"title":"Transfer Switches","body":"Code-safe ATS and manual switches.","link":"/services/transfer-switches"},{"title":"Generator Maintenance","body":"Keep your unit storm-ready year-round.","link":"/services/generator-maintenance"}].map((c, i) => ({
    ...c, icon: [faBolt, faCarBattery, faExchangeAlt, faOilCan, faCalculator, faTruckMedical][i % 6],
  }));

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Standby Generators" },
      ]} />
      <SectionIntro title="Standby Generators in Waco, TX" subtitle="Automatic whole-home and critical-load standby systems with proper transfer switches — flat-rate pricing and Storm-Ready Install Guarantee · 2-Year Workmanship." />
      <TrustBar headline="1,800+ Central Texas generators installed by PowerHold Generators" />
      <div className={styles.section}><WhatToExpect sectionTitle="What Happens When You Call" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Waco Calls PowerHold First" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/standby-generators" title="Standby Generators Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Standby Generators FAQs" /></div>
      <CTABanner
        headline="Need Standby Generators Help Today?"
        subline="Same-day service available. Flat-rate pricing. Storm-Ready Install Guarantee · 2-Year Workmanship."
        primaryText="Call Us Now"
        primaryLink="tel:+12549912121"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}><ServiceCardComponent heading="Related Services" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4 title="Schedule Standby Generators" cityName="Waco" slug="services/standby-generators" spot="standby-generators-page-form" formVariant={2} />
      </div>
    </main>
  );
}
