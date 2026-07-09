"use client";
import Breadcrumb from "#/PageComponents/Breadcrumb/Breadcrumb";
import styles from "../page.module.scss";
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import IndustryPainPoints from "#/PageComponents/IndustryPainPoints/IndustryPainPoints";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import ValueComparison from "#/PageComponents/ValueComparison/ValueComparison";
import FAQ from "#/PageComponents/FAQ/FAQ";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import LocalServiceAreas from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";
import {
  faCalendarAlt, faSearch, faFileInvoiceDollar, faUsers, faHardHat, faClipboardList,
  faHandshake, faRocket, faTrophy, faChartLine, faClock, faBolt, faExchangeAlt, faOilCan, faCalculator,
  faIndustry, faHospital,
} from "@fortawesome/free-solid-svg-icons";

export default function HomebuildersIndustryPage() {
  const painPoints = [{"problem":"Generator installs miss the close date","consequence":"Late backup power delays CO, walkthroughs, and buyer confidence."},{"problem":"Change orders on electrical packages","consequence":"Unclear specs create budget fights with owners and GCs."},{"problem":"Inconsistent installer quality across lots","consequence":"Different crews leave different transfer and labeling quality."},{"problem":"No coordination with other trades","consequence":"Electricians and superintendents get blocked when installs aren't sequenced."},{"problem":"Warranty callbacks after close","consequence":"Poor commissioning shows up after the buyer moves in."},{"problem":"Vendors who only do residential service calls","consequence":"Service companies don't understand production schedules."}].map((p, i) => ({ ...p, icon: [faCalendarAlt, faFileInvoiceDollar, faUsers, faHardHat, faClipboardList, faHandshake][i] }));
  const whyFeatures = [{"title":"Builder Production Rhythm","description":"We schedule generator and ATS installs around dry-in, paint, and final."},{"title":"Package Pricing by Plan","description":"Standard packages per floor plan with clear buyer upgrades."},{"title":"Consistent Crew Quality","description":"Same trained installers, same documentation — every lot."}].map((p, i) => ({ ...p, icon: [faHardHat, faFileInvoiceDollar, faUsers][i] }));
  const processSteps = [{"title":"Plan Spec Review","description":"Align generator size and transfer packages to your plans."},{"title":"Phase Schedule","description":"Install windows tied to production calendar and close dates."},{"title":"Install & Punch","description":"Unit, ATS, labeling, punch list cleared."},{"title":"Warranty Support","description":"Post-close support so callbacks don't land on supers."}].map((p, i) => ({ ...p, number: i + 1, icon: [faSearch, faCalendarAlt, faRocket, faClipboardList][i] }));
  const metrics = [
    { icon: faTrophy, value: 350, label: "Industry projects completed", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 12, label: "Active organization relationships", suffix: "+", duration: 2 },
    { icon: faClock, value: 15, label: "Years serving Central Texas", suffix: "+", duration: 2 },
  ];
  const comparisonRows = [
    { feature: "Schedule alignment", us: "✅ Per phase / operation", others: "❌ Service-call only" },
    { feature: "Package pricing", us: "✅ Clear scope", others: "❌ Re-quoted each time" },
    { feature: "Consistent crews", us: "✅ Same teams", others: "❌ Day labor variance" },
    { feature: "Post-install support", us: "✅ Included", others: "❌ Left alone" },
    { feature: "TECL-aligned installers", us: "✅ Always", others: "❌ Mixed" },
  ];
  const faq = [{"question":"Do you work with production and custom builders?","answer":"Yes — production homes, semi-custom, and remodelers across McLennan and Bell counties."},{"question":"Can you match packages to floor plans?","answer":"Yes — standard packages per plan with optional upgrades."},{"question":"How do you handle punch lists?","answer":"We schedule a punch pass and clear transfer and labeling issues before final walkthrough."},{"question":"Do you install transfer switches on every lot?","answer":"When specified — ATS or interlock packages are part of the install scope."},{"question":"What areas do you cover for builders?","answer":"Waco metro, Temple, Killeen, and surrounding Central Texas within about 60 miles."}];
  const services = [{"title":"Standby Generators","body":"Plan-matched standby installs on schedule.","link":"/services/standby-generators"},{"title":"Transfer Switches","body":"ATS packages per plan.","link":"/services/transfer-switches"},{"title":"Load Calculations","body":"Right-size per plan options.","link":"/services/load-calculations"},{"title":"Generator Maintenance","body":"Optional post-close care plans.","link":"/services/generator-maintenance"}].map((s, i) => ({ ...s, icon: [faBolt, faExchangeAlt, faOilCan, faCalculator][i] }));
  const localAreas = [
    { town: "Waco", benefit: "Core market.", badge: "Home Base" },
    { town: "Hewitt", benefit: "Active growth corridor.", badge: "" },
    { town: "Woodway", benefit: "Premium residential & offices.", badge: "" },
    { town: "Temple", benefit: "Bell County coverage.", badge: "" },
    { town: "China Spring", benefit: "Rural and ag properties.", badge: "" },
    { town: "Killeen", benefit: "Military-market and multi-site.", badge: "" },
  ];
  return (
    <main className={styles.pageWrapper}>
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Homebuilders" }]} />
      <SectionIntro title="Generators for Homebuilders" subtitle="Production-ready standby and transfer packages that hit close dates — consistent crews, plan pricing, post-close support." />
      <TrustBar headline="Organizations across Central Texas trust PowerHold for backup power" />
      <div className={styles.section}><IndustryPainPoints industry="homebuilders" painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Built for Homebuilders" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Services This Industry Uses Most" cards={services} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="industries/homebuilders" title="Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Homebuilders FAQs" /></div>
      <div className={styles.section}><Variant4 title="Request a Homebuilders Quote" cityName="Waco" slug="industries/homebuilders" spot="homebuilders-industry-form" formVariant={2} /></div>
      <CTABanner headline="Need a Generator Partner Who Gets Homebuilders?" subline="Clear scope. Consistent crews. Storm-Ready Install Guarantee · 2-Year Workmanship." primaryText="Call (254) 991-2121" primaryLink="tel:+12549912121" secondaryText="Contact Us" secondaryLink="/contact" />
    </main>
  );
}
