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

export default function HealthcareClinicsIndustryPage() {
  const painPoints = [{"problem":"Outages interrupt patient care","consequence":"Lost appointments, spoiled inventory, and compliance risk."},{"problem":"Unclear critical-load priorities","consequence":"Wrong-sized systems leave refrigerators or HVAC unprotected."},{"problem":"Vendors who don't understand clinic hours","consequence":"Daytime installs disrupt waiting rooms and procedures."},{"problem":"No emergency response plan","consequence":"When utility power fails, no one owns generator recovery."},{"problem":"Maintenance deferred until failure","consequence":"Units fail to start during storms and weather events."},{"problem":"Documentation gaps for landlords/insurers","consequence":"Missing COIs and service records slow approvals."}].map((p, i) => ({ ...p, icon: [faCalendarAlt, faFileInvoiceDollar, faUsers, faHardHat, faClipboardList, faHandshake][i] }));
  const whyFeatures = [{"title":"After-Hours Friendly","description":"We schedule installs and service around patient hours when possible."},{"title":"Critical-Load Focus","description":"Vaccine fridges, IT, lights, and HVAC prioritized correctly."},{"title":"COIs & Records Ready","description":"Insurance and service documentation your admin team needs."}].map((p, i) => ({ ...p, icon: [faHardHat, faFileInvoiceDollar, faUsers][i] }));
  const processSteps = [{"title":"Facility Walkthrough","description":"Map critical loads and outage risks."},{"title":"Proposal","description":"Standby, portable, or hybrid options with clear pricing."},{"title":"Install Window","description":"Minimized disruption; tested transfer before we leave."},{"title":"Maintenance Plan","description":"Scheduled service so the unit starts every time."}].map((p, i) => ({ ...p, number: i + 1, icon: [faSearch, faCalendarAlt, faRocket, faClipboardList][i] }));
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
  const faq = [{"question":"Do you work in active clinics?","answer":"Yes — we plan work windows to protect patient flow."},{"question":"Can you protect vaccine refrigeration only?","answer":"Yes — critical-load designs are common and cost-effective."},{"question":"Do you provide emergency service for clinics?","answer":"Yes — priority dispatch options available."},{"question":"What about multi-location groups?","answer":"We can standardize packages across sites."},{"question":"Are you insured for commercial work?","answer":"Yes — bonded and insured; COIs on request."}];
  const services = [{"title":"Standby Generators","body":"Clinic-grade automatic backup.","link":"/services/standby-generators"},{"title":"Load Calculations","body":"Critical circuit prioritization.","link":"/services/load-calculations"},{"title":"Generator Maintenance","body":"Keep medical loads protected.","link":"/services/generator-maintenance"},{"title":"Emergency Service","body":"Outage response when minutes matter.","link":"/services/emergency-service"}].map((s, i) => ({ ...s, icon: [faBolt, faExchangeAlt, faOilCan, faCalculator][i] }));
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
      <Breadcrumb crumbs={[{ label: "Home", href: "/" }, { label: "Industries", href: "/industries" }, { label: "Healthcare Clinics" }]} />
      <SectionIntro title="Generators for Healthcare Clinics" subtitle="Backup power that protects vaccines, records, and patient care — planned installs and emergency response for clinic operations." />
      <TrustBar headline="Organizations across Central Texas trust PowerHold for backup power" />
      <div className={styles.section}><IndustryPainPoints industry="healthcare-clinics" painPoints={painPoints} /></div>
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Built for Healthcare Clinics" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><ImpactMetrics metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ServiceCardComponent heading="Services This Industry Uses Most" cards={services} /></div>
      <div className={styles.section}><ValueComparison rows={comparisonRows} /></div>
      <div className={styles.section}><LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="industries/healthcare-clinics" title="Coverage Across Central Texas" /></div>
      <div className={styles.section}><FAQ cityName="Waco" faq={faq} title="Healthcare Clinics FAQs" /></div>
      <div className={styles.section}><Variant4 title="Request a Healthcare Clinics Quote" cityName="Waco" slug="industries/healthcare-clinics" spot="healthcare-clinics-industry-form" formVariant={2} /></div>
      <CTABanner headline="Need a Generator Partner Who Gets Healthcare Clinics?" subline="Clear scope. Consistent crews. Storm-Ready Install Guarantee · 2-Year Workmanship." primaryText="Call (254) 991-2121" primaryLink="tel:+12549912121" secondaryText="Contact Us" secondaryLink="/contact" />
    </main>
  );
}
