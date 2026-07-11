// PowerHold Generators — Homepage
"use client";

import styles from "./page.module.scss";
import reviews from "../../libs/local-db/reviews";

import WelcomePage        from "#/Pages/Home/WelcomePage/WelcomePage";
import TrustBar           from "#/PageComponents/TrustBar/TrustBar";
import ImpactMetrics      from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import ServiceCardComponent from "#/PageComponents/ServiceCardComponent/ServiceCardComponent";
import WhyChooseUs        from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import CTABanner          from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline    from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import Testimonials       from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection   from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import LocalServiceAreas  from "#/PageComponents/LocalServiceAreas/LocalServiceAreas";
import WhatToExpect       from "#/PageComponents/WhatToExpect/WhatToExpect";
import FAQ                from "#/PageComponents/FAQ/FAQ";
import BlogPreviewGrid    from "#/PageComponents/BlogPreviewGrid/BlogPreviewGrid";

import {
  faBolt, faCarBattery, faExchangeAlt, faOilCan, faCalculator, faTruckMedical,
  faTrophy, faChartLine, faClock,
  faShieldHalved, faUsers,
  faHeadset, faSearch, faFileContract, faCheckCircle,
  faStar, faClipboardCheck, faWrench,
} from "@fortawesome/free-solid-svg-icons";
import Variant4 from "#/PageComponents/ContactForms/Variant4/Form";

export default function HomePage() {
  const services = [
    { icon: faBolt, title: "Standby Generators", body: "Whole-home and critical-load automatic standby systems with proper transfer switches, pad placement, and fuel coordination.", link: "/services/standby-generators", image: "/pages/home/services/service-1.jpg" },
    { icon: faCarBattery, title: "Portable Generators", body: "Portable units and code-safe interlock kits — reliable backup without a full standby install.", link: "/services/portable-generators", image: "/pages/home/services/service-2.jpg" },
    { icon: faExchangeAlt, title: "Transfer Switches", body: "Automatic and manual transfer switches installed the legal, utility-safe way. No dangerous backfeeds.", link: "/services/transfer-switches", image: "/pages/home/services/service-3.jpg" },
    { icon: faOilCan, title: "Generator Maintenance", body: "Oil, filters, batteries, exercise verification, and load testing so your unit starts when storms hit.", link: "/services/generator-maintenance", image: "/pages/home/services/service-4.jpg" },
    { icon: faCalculator, title: "Load Calculations", body: "Honest load studies so you buy the right size generator — not the most expensive one.", link: "/services/load-calculations", image: "/pages/home/welcome/before.jpg" },
    { icon: faTruckMedical, title: "Emergency Service", body: "Failed starts, transfer issues, and storm outages — same-day emergency generator service across Central Texas.", link: "/services/emergency-service", image: "/pages/home/welcome/after.jpg" },
  ];

  const metrics = [
    { icon: faTrophy,    value: 1800, label: "Generators installed across Central Texas", suffix: "+", duration: 3 },
    { icon: faClock,     value: 15,   label: "Years of local generator experience", suffix: "+", duration: 2 },
    { icon: faChartLine, value: 98,   label: "Customer satisfaction rating",          suffix: "%", duration: 2 },
  ];

  const whyFeatures = [
    { icon: faClipboardCheck, title: "Flat-Rate Written Quotes", description: "You get a firm price before we touch a pad or panel. No hourly billing, no surprise add-ons mid-job." },
    { icon: faShieldHalved, title: "TECL-Aligned Installers", description: "Every tech is TECL-aligned, bonded, and insured. No unlicensed freelancers working alone on your system." },
    { icon: faUsers, title: "Locally Owned Since 2011", description: "We're not a franchise. PowerHold Generators was founded in Waco by Rhea Colton. Every decision is made locally." },
  ];

  const processSteps = [
    { number: 1, title: "Call or Book Online", description: "Phone, text, or the form below — your choice. We'll confirm a same-day or next-day slot that fits your schedule.", icon: faHeadset },
    { number: 2, title: "We Assess On-Site", description: "A TECL-aligned tech reviews loads, placement, and fuel options — and explains choices in plain English.", icon: faSearch },
    { number: 3, title: "You Get a Flat-Rate Quote", description: "Written price before any work starts. You decide — zero pressure to proceed. The quote never changes mid-job.", icon: faFileContract },
    { number: 4, title: "Done Right, Warrantied", description: "Quality equipment, clean workmanship, Storm-Ready Install Guarantee · 2-Year Workmanship. We leave when you're satisfied.", icon: faCheckCircle },
  ];

  const expectations = [
    { icon: faSearch, title: "Honest Load Assessment", description: "We size what's actually needed — not what's most profitable to sell. You see the findings before we quote." },
    { icon: faWrench, title: "Clean, Respectful Work", description: "Pads protected, yard cleaned, labels clear. Your property left the way we found it — or better." },
    { icon: faCheckCircle, title: "Upfront Flat-Rate Price", description: "Written quote before any work begins. The number doesn't change when the job runs long." },
    { icon: faStar, title: "Code-Safe Transfer Equipment", description: "Proper ATS or interlock installs only — never illegal dryer-outlet backfeeds." },
  ];

  const localAreas = [
    { town: "Waco",         benefit: "Home base — fastest scheduling and most available techs in the city.", badge: "Home Base" },
    { town: "Hewitt",       benefit: "Full residential and light commercial coverage. On our regular route.", badge: "" },
    { town: "Woodway",      benefit: "Regular availability for Woodway homes and businesses.",               badge: "" },
    { town: "Temple",       benefit: "Regular service area — quick turnaround guaranteed.",                  badge: "" },
    { town: "China Spring", benefit: "Rural coverage, no trip charge for most China Spring addresses.",      badge: "" },
    { town: "Killeen",      benefit: "Full coverage for Killeen and Fort Cavazos area customers.",           badge: "" },
  ];

  const faq = [
    { question: "How much does a standby generator cost in Waco?", answer: "Whole-home standby systems commonly range from $8,000–$18,000 installed depending on size, fuel, and electrical scope. Portable + interlock packages are significantly less. We always provide a flat-rate written quote before work begins." },
    { question: "Do you offer same-day or emergency service?", answer: "Yes — same-day and emergency generator service is available 7 days a week including evenings. Call us at (254) 991-2121 anytime." },
    { question: "How quickly can you install a standby system?", answer: "Site assessment is often same-week. Equipment lead times vary by brand and size; install typically completes in 1–2 days once the unit and pad are ready." },
    { question: "What generator services do you offer?", answer: "Standby generators, portable generators, transfer switches, generator maintenance, load calculations, and emergency service." },
    { question: "Are you bonded and insured?", answer: "Yes — PowerHold Generators is bonded and insured with TECL-aligned installers. Credentials available on request." },
    { question: "Do you offer a warranty?", answer: "Yes — Storm-Ready Install Guarantee · 2-Year Workmanship covering labor and installation defects, plus manufacturer warranties on equipment." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <WelcomePage />
      <TrustBar headline="Waco's trusted generator company — TECL-aligned, insured, and warrantied on every job" />
      <div className={styles.section}>
        <ImpactMetrics title="Numbers That Speak for Us" metrics={metrics} cityName="Waco" />
      </div>
      <CTABanner
        headline="Power Out? Generators That Start."
        subline="Standby installs, transfer switches, and storm-ready maintenance — sized honestly for your load."
        primaryText="Call (254) 991-2121"
        primaryLink="tel:+12549912121"
        secondaryText="Get Load Assessment"
        secondaryLink="/contact"
        imageSrc="/pages/home/welcome/hero-main.jpg"
      />
      <div className={styles.section}>
        <ServiceCardComponent heading="Complete Generator Services for Your Home" cards={services} />
      </div>
      <div className={styles.section}>
        <WhyChooseUs cityName="Waco" features={whyFeatures} title="What Makes PowerHold Generators Different" />
      </div>
      <div className={styles.section}>
        <Variant4 title="Request Service or a Free Quote" cityName="Waco" slug="/" spot="homepage-contact-form" formVariant={2} />
      </div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <div className={styles.section}>
        <LocalServiceAreas cityName="Waco" areas={localAreas} servicePath="" title="Serving All of Central Texas" />
      </div>
      <div className={styles.section}>
        <WhatToExpect sectionTitle="What To Expect When You Hire PowerHold" expectations={expectations} />
      </div>
      <div className={styles.section}>
        <FAQ cityName="Waco" faq={faq} title="Generator FAQs" />
      </div>
      <div className={styles.section}><BlogPreviewGrid /></div>
    </main>
  );
}
