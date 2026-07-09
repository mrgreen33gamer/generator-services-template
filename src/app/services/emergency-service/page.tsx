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

export default function EmergencyServicePage() {
  const expectations = [{"title":"Rapid Dispatch","description":"We prioritize true outages and failed transfers — especially during storms."},{"title":"Honest Diagnosis","description":"Battery, fuel, starter, controller, or transfer gear — we find the real issue."},{"title":"Same-Visit Fixes When Possible","description":"Common parts stocked; clear options if major components are needed."},{"title":"No After-Hours Gouging Surprises","description":"We confirm emergency rates when you call — before we roll."}].map((e, i) => ({ ...e, icon: [faSearch, faFileContract, faCheckCircle, faShieldHalved][i] }));
  const whyFeatures = [{"title":"7-Day Emergency Response","description":"Evenings and weekends included for genuine outages."},{"title":"Standby & Portable","description":"We service both automatic systems and portable setups."},{"title":"Storm-Hardened Crews","description":"We plan routes for ice storms and severe weather demand spikes."}].map((e, i) => ({ ...e, icon: [faClock, faWrench, faShieldHalved][i] }));
  const processSteps = [{"title":"Call ${PHONE}","description":"Describe symptoms, model, and whether utility power is out."},{"title":"Dispatch","description":"We give an honest ETA and emergency fee confirmation."},{"title":"Diagnose & Quote","description":"Flat-rate repair options before work proceeds."},{"title":"Restore Power Path","description":"Repair, temporary workaround if needed, and retest."}].map((e, i) => ({ ...e, number: i + 1, icon: [faHeadset, faSearch, faFileContract, faCheckCircle][i] }));
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
  const faq = [{"question":"What counts as an emergency?","answer":"No utility power and generator won't start/transfer, medical equipment needs, or unsafe conditions. Call and we'll triage."},{"question":"Do you charge more after hours?","answer":"Emergency dispatch has a separate fee disclosed when you call. No surprise invoices after we arrive."},{"question":"Can you help if I only have a portable?","answer":"Yes — start issues, interlock problems, and safe connection checks."},{"question":"How fast can you arrive?","answer":"In Waco metro often within a few hours depending on storm load. We'll give a real ETA."},{"question":"What if the unit needs a major part?","answer":"We stabilize if possible, order the part, and schedule the return visit with clear pricing."},{"question":"Do you service commercial generators?","answer":"Light commercial and ag units are in scope. Large industrial may require specialist referral."}];
  const crossServices = [{"title":"Standby Generators","body":"Whole-home automatic backup power.","link":"/services/standby-generators"},{"title":"Portable Generators","body":"Portable units and interlock kits.","link":"/services/portable-generators"},{"title":"Transfer Switches","body":"Code-safe ATS and manual switches.","link":"/services/transfer-switches"},{"title":"Generator Maintenance","body":"Keep your unit storm-ready year-round.","link":"/services/generator-maintenance"}].map((c, i) => ({
    ...c, icon: [faBolt, faCarBattery, faExchangeAlt, faOilCan, faCalculator, faTruckMedical][i % 6],
  }));

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Emergency Service" },
      ]} />
      <SectionIntro title="Emergency Service in Waco, TX" subtitle="Failed starts, transfer issues, and storm outages — same-day emergency generator service across Central Texas." />
      <TrustBar headline="1,800+ Central Texas generators installed by PowerHold Generators" />
      <div className={styles.section}><WhatToExpect sectionTitle="What Happens When You Call" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Waco Calls PowerHold First" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/emergency-service" title="Emergency Service Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Emergency Service FAQs" /></div>
      <CTABanner
        headline="Need Emergency Service Help Today?"
        subline="Same-day service available. Flat-rate pricing. Storm-Ready Install Guarantee · 2-Year Workmanship."
        primaryText="Call Us Now"
        primaryLink="tel:+12549912121"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}><ServiceCardComponent heading="Related Services" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4 title="Schedule Emergency Service" cityName="Waco" slug="services/emergency-service" spot="emergency-service-page-form" formVariant={2} />
      </div>
    </main>
  );
}
