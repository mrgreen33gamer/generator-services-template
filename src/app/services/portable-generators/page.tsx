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

export default function PortableGeneratorsPage() {
  const expectations = [{"title":"Needs Review","description":"We identify which circuits matter during an outage and recommend portable capacity."},{"title":"Interlock or Manual Transfer","description":"Legal connection methods only — never a dangerous double-pole dryer hack."},{"title":"Setup & Test","description":"We label circuits, test under load, and show you safe start/stop procedure."},{"title":"Clear Pricing","description":"Flat-rate for interlock install and optional portable unit coordination."}].map((e, i) => ({ ...e, icon: [faSearch, faFileContract, faCheckCircle, faShieldHalved][i] }));
  const whyFeatures = [{"title":"Budget-Friendly Backup","description":"Portable + interlock is often a fraction of whole-home standby cost."},{"title":"Safe by Design","description":"We refuse illegal backfeeds that endanger utility workers."},{"title":"Shop & Ranch Ready","description":"Great for workshops, barns, and secondary buildings."}].map((e, i) => ({ ...e, icon: [faClock, faWrench, faShieldHalved][i] }));
  const processSteps = [{"title":"Call or Book","description":"Tell us your loads and property type."},{"title":"On-Site Review","description":"Panel inspection and circuit prioritization."},{"title":"Install Interlock","description":"Code-safe manual transfer equipment."},{"title":"Train & Document","description":"Safe operating steps and labeled breakers."}].map((e, i) => ({ ...e, number: i + 1, icon: [faHeadset, faSearch, faFileContract, faCheckCircle][i] }));
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
  const faq = [{"question":"Is a portable generator enough for my house?","answer":"Often for critical circuits (fridge, lights, well pump, medical devices). Whole-home HVAC usually needs a larger standby unit."},{"question":"What size portable do I need?","answer":"Depends on starting watts of pumps and compressors. We calculate it — don't guess from a marketing label alone."},{"question":"Do I need an interlock kit?","answer":"Yes if you want to power house circuits through the panel safely. Extension cords alone are limited and easy to overload."},{"question":"Can you install just the interlock?","answer":"Yes — many customers already own a portable unit."},{"question":"Fuel: gas or dual-fuel?","answer":"Both are common. Dual-fuel adds flexibility during long outages when gasoline is scarce."},{"question":"Do you sell portable units?","answer":"We can coordinate equipment or install transfer gear for a unit you provide."}];
  const crossServices = [{"title":"Standby Generators","body":"Whole-home automatic backup power.","link":"/services/standby-generators"},{"title":"Portable Generators","body":"Portable units and interlock kits.","link":"/services/portable-generators"},{"title":"Transfer Switches","body":"Code-safe ATS and manual switches.","link":"/services/transfer-switches"},{"title":"Generator Maintenance","body":"Keep your unit storm-ready year-round.","link":"/services/generator-maintenance"}].map((c, i) => ({
    ...c, icon: [faBolt, faCarBattery, faExchangeAlt, faOilCan, faCalculator, faTruckMedical][i % 6],
  }));

  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Portable Generators" },
      ]} />
      <SectionIntro title="Portable Generators in Waco, TX" subtitle="Portable generators and code-safe interlock kits for homes and shops — reliable backup without a full standby install." />
      <TrustBar headline="1,800+ Central Texas generators installed by PowerHold Generators" />
      <div className={styles.section}><WhatToExpect sectionTitle="What Happens When You Call" expectations={expectations} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Why Waco Calls PowerHold First" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="services/portable-generators" title="Portable Generators Across Central Texas" /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Portable Generators FAQs" /></div>
      <CTABanner
        headline="Need Portable Generators Help Today?"
        subline="Same-day service available. Flat-rate pricing. Storm-Ready Install Guarantee · 2-Year Workmanship."
        primaryText="Call Us Now"
        primaryLink="tel:+12549912121"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
      <div className={styles.section}><ServiceCardComponent heading="Related Services" cards={crossServices} /></div>
      <div className={styles.section}>
        <Variant4 title="Schedule Portable Generators" cityName="Waco" slug="services/portable-generators" spot="portable-generators-page-form" formVariant={2} />
      </div>
    </main>
  );
}
