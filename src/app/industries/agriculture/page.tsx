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

export default function AgricultureIndustryPage() {
  const painPoints = [{"problem":"Well pumps die in outages","consequence":"Livestock and irrigation suffer within hours."},{"problem":"Long utility restoration times","consequence":"Rural feeders can stay dark for days after ice storms."},{"problem":"Fuel logistics are unclear","consequence":"Wrong fuel choice leaves systems stranded when gasoline runs out."},{"problem":"Shops and freezers unprotected","consequence":"Tools, meat freezers, and cold storage spoil or idle."},{"problem":"DIY backfeeds on the ranch","consequence":"Illegal connections create fire and utility hazards."},{"problem":"No local service after install","consequence":"Out-of-town vendors disappear when service is needed."}].map((p, i) => ({ ...p, icon: [faCalendarAlt, faFileInvoiceDollar, faUsers, faHardHat, faClipboardList, faHandshake][i] }));
  const whyFeatures = [{"title":"Rural Coverage","description":"China Spring, McGregor, and ranch properties are regular routes — not afterthoughts."},{"title":"Wells, Freezers, Shops","description":"We prioritize the loads that keep a ranch operating."},{"title":"Propane & Portable Options","description":"Flexible fuel and portable strategies for off-grid-ish lots."}].map((p, i) => ({ ...p, icon: [faHardHat, faFileInvoiceDollar, faUsers][i] }));
  const processSteps = [{"title":"Property Walkthrough","description":"Wells, barns, freezers, and shop panels."},{"title":"Size & Fuel Plan","description":"Standby vs portable + interlock recommendations."},{"title":"Install","description":"Code-safe transfer gear and commissioning."},{"title":"Service Plan","description":"Maintenance that matches seasonal use."}].map((p, i) => ({ ...p, number: i + 1, icon: [faSearch, faCalendarAlt, faRocket, faClipboardList][i] }));
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
  const faq = [{"question":"Can you power a well pump?","answer":"Yes — starting watts for pumps are a key part of sizing."},{"question":"Propane vs natural gas for ranches?","answer":"Propane is common where gas lines don't reach. We'll plan tank coordination."},{"question":"Do you install on barns and shops?","answer":"Yes — light commercial and ag buildings are in scope."},{"question":"Portable or standby for a ranch?","answer":"Depends on how many simultaneous loads you need. We'll show both."},{"question":"How far out do you service?","answer":"Most properties within ~60 miles of Waco. Call to confirm."}];
  const services = [{"title":"Standby Generators","body":"Automatic ranch and home backup.","link":"/services/standby-generators"},{"title":"Portable Generators","body":"Interlocks for shops and barns.","link":"/services/portable-generators"},{"title":"Transfer Switches","body":"Safe utility isolation.","link":"/services/transfer-switches"},{"title":"Emergency Service","body":"Storm response when power fails.","link":"/services/emergency-service"}].map((s, i) => ({ ...s, icon: [faBolt, faExchangeAlt, faOilCan, faCalculator][i] }));
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
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Agriculture & Ranches" }]} />
      <SectionIntro title="Generators for Agriculture & Ranches" subtitle="Backup power for wells, freezers, shops, and livestock operations — rural-ready installs and storm response across Central Texas ranches." />
      <TrustBar headline="Organizations across Central Texas trust PowerHold for backup power" />
      <div className={styles.section}><IndustryPainPoints industry="agriculture" painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Built for Agriculture & Ranches" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Services This Industry Uses Most" cards={services} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="industries/agriculture" title="Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Agriculture & Ranches FAQs" /></div>
      <div className={styles.section}><Variant4 title="Request a Agriculture & Ranches Quote" cityName="Waco" slug="industries/agriculture" spot="agriculture-industry-form" formVariant={2} /></div>
      <CTABanner headline="Need a Generator Partner Who Gets Agriculture & Ranches?" subline="Clear scope. Consistent crews. Storm-Ready Install Guarantee · 2-Year Workmanship." primaryText="Call (254) 991-2121" primaryLink="tel:+12549912121" secondaryText="Contact Us" secondaryLink="/contact" />
    </main>
  );
}
