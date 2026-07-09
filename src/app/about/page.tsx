"use client";
import styles from "./page.module.scss";
import reviews from '&/local-db/reviews';
import SectionIntro from "#/PageComponents/SectionIntro/SectionIntro";
import TrustBar from "#/PageComponents/TrustBar/TrustBar";
import WhyChooseUs from "#/PageComponents/WhyChooseUs/WhyChooseUs";
import ImpactMetrics from "#/PageComponents/ImpactMetrics/ImpactMetrics";
import Testimonials from "#/PageComponents/Testimonials/Testimonials";
import GuaranteeSection from "#/PageComponents/GuaranteeSection/GuaranteeSection";
import CTABanner from "#/PageComponents/CTABanner/CTABanner";
import ProcessTimeline from "#/PageComponents/ProcessTimeline/ProcessTimeline";
import {
  faTrophy, faChartLine, faClock, faHouseUser, faUsers, faLeaf,
  faClipboardCheck, faShieldHalved, faBolt, faCircleCheck,
} from "@fortawesome/free-solid-svg-icons";

export default function AboutPage() {
  const whyFeatures = [
    { icon: faHouseUser, title: "Locally Owned Since 2011", description: "PowerHold Generators was founded in Waco by Rhea Colton. We're not a franchise — every decision is made locally, every call is answered by someone who lives here." },
    { icon: faUsers, title: "A Crew You Can Trust", description: "Every technician is background-checked, TECL-aligned, and bonded & insured. We treat every property with respect." },
    { icon: faLeaf, title: "Honest From the First Call", description: "We won't upsell a 26kW unit when a right-sized standby or portable interlock will do. Our reputation is built on straight talk." },
  ];
  const metrics = [
    { icon: faTrophy, value: 1800, label: "Generators installed across Central Texas", suffix: "+", duration: 3 },
    { icon: faChartLine, value: 98, label: "Customer satisfaction rate", suffix: "%", duration: 2 },
    { icon: faClock, value: 15, label: "Years serving Central Texas families", suffix: "+", duration: 2 },
  ];
  const processSteps = [
    { number: 1, title: "Call or Book Online", description: "Phone, text, or form — same-day or next-day slots.", icon: faClipboardCheck },
    { number: 2, title: "Diagnose Honestly", description: "TECL-aligned tech explains options in plain English.", icon: faShieldHalved },
    { number: 3, title: "Flat-Rate Quote", description: "Written price before any work starts.", icon: faBolt },
    { number: 4, title: "Done Right, Warrantied", description: "Storm-Ready Install Guarantee · 2-Year Workmanship.", icon: faCircleCheck },
  ];
  return (
    <main className={styles.pageWrapper}>
      <SectionIntro title="About PowerHold Generators" subtitle="Waco-owned, Waco-operated since 2011. Standby Generators · Install · Service · Transfer Switches — honest work at fair prices for the neighbors we've served for 15 years." />
      <TrustBar headline="1,800+ Central Texas generators installed — and we've earned every one" />
      <div className={styles.section}><WhyChooseUs cityName="Waco" features={whyFeatures} title="Who We Are" /></div>
      <div className={styles.section}><ImpactMetrics title="15 Years, By the Numbers" metrics={metrics} cityName="Waco" /></div>
      <div className={styles.section}><ProcessTimeline steps={processSteps} /></div>
      <div className={styles.section}><Testimonials testimonials={reviews} /></div>
      <div className={styles.section}><GuaranteeSection /></div>
      <CTABanner headline="Waco's Generator Company — Ready When You Need Us" subline="Same-day and emergency service. Flat-rate pricing. Storm-Ready Install Guarantee · 2-Year Workmanship. No contracts — ever." primaryText="Call Us Now" primaryLink="tel:+12549912121" secondaryText="Request Service Online" secondaryLink="/contact" />
    </main>
  );
}
