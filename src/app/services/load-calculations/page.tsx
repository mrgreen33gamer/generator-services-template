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

export default function LoadCalculationsPage() {
  const expectations = [{"title":"Circuit Inventory","description":"We identify continuous and starting loads that matter in an outage."},{"title":"Right-Size Recommendation","description":"kW guidance for standby or portable — with room for future circuits if needed."},{"title":"Fuel & Electrical Notes","description":"Gas vs propane, panel capacity, and transfer strategy."},{"title":"Written Summary","description":"You leave with a clear sizing report you can use for shopping or our install quote."}].map((e, i) => ({ ...e, icon: [faSearch, faFileContract, faCheckCircle, faShieldHalved][i] }));
  const whyFeatures = [{"title":"No Upsell Pressure","description":"We'd rather sell the correct 16kW than an oversized 26kW you don't need."},{"title":"Texas Load Reality","description":"HVAC starting amps, well pumps, and freezers — we plan for real Central Texas homes."},{"title":"Pairs With Install","description":"Use the study alone or roll it into a PowerHold install package."}].map((e, i) => ({ ...e, icon: [faClock, faWrench, faShieldHalved][i] }));
  const processSteps = [{"title":"Book Assessment","description":"Share panel photos if available."},{"title":"On-Site Survey","description":"Loads, panel, placement, and fuel options."},{"title":"Calculate","description":"Running and starting watts / kW."},{"title":"Recommend","description":"Size options, budget ranges, and next steps."}].map((e, i) => ({ ...e, number: i + 1, icon: [faHeadset, faSearch, faFileContract, faCheckCircle][i] }));
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
  const faq = [{"question":"Do I need a load calculation before buying?","answer":"Yes — guessing from square footage alone is how people buy the wrong unit."},{"question":"Whole-home vs critical circuits?","answer":"Critical-load is cheaper and covers essentials. Whole-home keeps HVAC and everything running. We show both paths."},{"question":"How long does a load study take?","answer":"Most residential visits are 45–90 minutes on site plus a written summary."},{"question":"Is the study free with install?","answer":"Site assessment for install customers is typically credited toward the project. Standalone studies can be quoted."},{"question":"Can you size for a clinic or ranch?","answer":"Yes — light commercial and agricultural loads are in scope."},{"question":"What if my panel is only 100A?","answer":"We may recommend critical-load subpanel strategy or a service upgrade. We'll explain tradeoffs."}];
  const crossServices = [{"title":"Standby Generators","body":"Whole-home automatic backup power.","link":"/services/standby-generators"},{"title":"Portable Generators","body":"Portable units and interlock kits.","link":"/services/portable-generators"},{"title":"Transfer Switches","body":"Code-safe ATS and manual switches.","link":"/services/transfer-switches"},{"title":"Generator Maintenance","body":"Keep your unit storm-ready year-round.","link":"/services/generator-maintenance"}].map((c, i) => ({
    ...c, icon: [faBolt, faCarBattery, faExchangeAlt, faOilCan, faCalculator, faTruckMedical][i % 6],
  }));

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Load Calculations" },
      ]} />
      <SectionIntro title="Load Calculations in Waco, TX" subtitle="Honest residential and light-commercial load studies so you buy the right size generator — not an oversized upsell." />
      <TrustBar headline="1,800+ Central Texas generators installed by PowerHold Generators" />
      <div className={styles.section}><WhatToExpect sectionTitle="What Happens When You Call" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Waco Calls PowerHold First" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/load-calculations" title="Load Calculations Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Load Calculations FAQs" /></div>
      <CTABanner
        headline="Need Load Calculations Help Today?"
        subline="Same-day service available. Flat-rate pricing. Storm-Ready Install Guarantee · 2-Year Workmanship."
        primaryText="Call Us Now"
        primaryLink="tel:+12549912121"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}><ServiceCardComponent heading="Related Services" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4 title="Schedule Load Calculations" cityName="Waco" slug="services/load-calculations" spot="load-calculations-page-form" formVariant={2} />
      </div>
    </main>
  );
}
