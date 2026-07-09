/**
 * Part 2 — pages, footer, shared defaults, services, industries, blogs
 */
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const w = (rel, content) => {
  const p = path.join(ROOT, rel);
  fs.mkdirSync(path.dirname(p), { recursive: true });
  fs.writeFileSync(p, content, 'utf8');
  console.log('wrote', rel);
};

const TEL = 'tel:+12549912121';
const PHONE = '(254) 991-2121';
const G = 'Storm-Ready Install Guarantee · 2-Year Workmanship';

// Footer
w('components/GeneralComponents/Footer/Footer.tsx', `"use client";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLocationDot, faPhone, faEnvelope,
  faShieldHalved, faWrench, faClock, faBolt,
} from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faGoogle } from '@fortawesome/free-brands-svg-icons';
import styles from './styles.module.scss';
import { useTrackEvent } from '&/useTrackEvent';

const NAV_LINKS = [
  { href: '/',               label: 'Home' },
  { href: '/services',       label: 'Services' },
  { href: '/about',          label: 'About' },
  { href: '/blogs',          label: 'Blog' },
  { href: '/contact',        label: 'Get a Quote' },
  { href: '/privacy-policy', label: 'Privacy Policy' },
];

const SERVICE_LINKS = [
  { href: '/services/standby-generators',    label: 'Standby Generators' },
  { href: '/services/portable-generators',   label: 'Portable Generators' },
  { href: '/services/transfer-switches',     label: 'Transfer Switches' },
  { href: '/services/generator-maintenance', label: 'Generator Maintenance' },
  { href: '/services/load-calculations',     label: 'Load Calculations' },
  { href: '/services/emergency-service',     label: 'Emergency Service' },
];

const LOCAL_AREAS = [
  'Waco, TX', 'Hewitt, TX', 'Woodway, TX',
  'McGregor, TX', 'China Spring, TX', 'Temple, TX',
  'Killeen, TX', 'Bellmead, TX',
];

const TRUST_ITEMS = [
  { icon: faShieldHalved, label: 'Licensed & Insured' },
  { icon: faWrench,       label: 'TECL-Aligned' },
  { icon: faClock,        label: 'Same-Day Service' },
  { icon: faBolt,         label: 'Storm-Ready Guarantee' },
];

const SOCIALS = [
  { href: 'https://facebook.com/powerholdgenerators', icon: faFacebookF, label: 'Facebook' },
  { href: 'https://g.page/r/powerholdgenerators',     icon: faGoogle,    label: 'Google' },
];

export default function Footer() {
  const trackEvent = useTrackEvent();
  return (
    <footer className={styles.footer}>
      <div className={styles.trustStrip}>
        <div className={styles.trustInner}>
          {TRUST_ITEMS.map(({ icon, label }) => (
            <div key={label} className={styles.trustItem}>
              <span className={styles.trustIcon}><FontAwesomeIcon icon={icon} /></span>
              <span className={styles.trustLabel}>{label}</span>
            </div>
          ))}
          <Link href="/contact" className={styles.trustCta}
            onClick={() => trackEvent({ eventType: 'click', elementLabel: 'Book Now', section: 'Footer-Trust' })}>
            Book a Tech Today →
          </Link>
        </div>
      </div>
      <div className={styles.body}>
        <div className={styles.inner}>
          <div className={styles.brandCol}>
            <Link href="/" className={styles.logo}>
              <span className={styles.logoMark}>
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
                </svg>
              </span>
              <div className={styles.logoText}>
                <span className={styles.logoName}>PowerHold Generators</span>
                <span className={styles.logoSub}>Waco, Texas</span>
              </div>
            </Link>
            <p className={styles.tagline}>
              Flat-rate pricing. Same-day service. Zero contracts — ever. Standby generators, transfer switches, and emergency service for Central Texas since 2011.
            </p>
            <div className={styles.contactBlock}>
              <a href="${TEL}" className={styles.phoneLink}
                onClick={() => trackEvent({ eventType: 'phone_click', elementLabel: 'Footer Phone', section: 'Footer-Brand' })}>
                <FontAwesomeIcon icon={faPhone} />
                ${PHONE}
              </a>
              <a href="mailto:hello@powerholdgenerators.com" className={styles.emailLink}
                onClick={() => trackEvent({ eventType: 'email_click', elementLabel: 'Footer Email', section: 'Footer-Brand' })}>
                <FontAwesomeIcon icon={faEnvelope} />
                hello@powerholdgenerators.com
              </a>
              <span className={styles.addressLine}>
                <FontAwesomeIcon icon={faLocationDot} />
                1800 Franklin Ave, Waco, TX 76701
              </span>
            </div>
            <div className={styles.socials}>
              {SOCIALS.map(({ href, icon, label }) => (
                <Link key={label} href={href} target="_blank" rel="noopener noreferrer"
                  aria-label={label} className={styles.socialBtn}
                  onClick={() => trackEvent({ eventType: 'click', elementLabel: label, section: 'Footer-Social' })}>
                  <FontAwesomeIcon icon={icon} />
                </Link>
              ))}
            </div>
          </div>
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Company</h4>
            <ul className={styles.linkList}>
              {NAV_LINKS.map(({ href, label }) => (
                <li key={href}><Link href={href}>{label}</Link></li>
              ))}
            </ul>
          </div>
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Services</h4>
            <ul className={styles.linkList}>
              {SERVICE_LINKS.map(({ href, label }) => (
                <li key={href}><Link href={href}>{label}</Link></li>
              ))}
            </ul>
          </div>
          <div className={styles.linkCol}>
            <h4 className={styles.colTitle}>Service Areas</h4>
            <ul className={styles.linkList}>
              {LOCAL_AREAS.map((a) => (
                <li key={a}><Link href="/service-areas">{a}</Link></li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomInner}>
          <p className={styles.copy}>
            &copy; {new Date().getFullYear()} PowerHold Generators. All Rights Reserved. | TECL-Aligned Installers · Bonded &amp; Insured
          </p>
          <a href="${TEL}" className={styles.emergencyBtn}
            onClick={() => trackEvent({ eventType: 'phone_click', elementLabel: 'Footer Emergency', section: 'Footer-Bottom' })}>
            Emergency: ${PHONE}
          </a>
        </div>
      </div>
    </footer>
  );
}
`);

// Shared component defaults
w('components/PageComponents/TrustBar/TrustBar.tsx', `'use client';
import { motion } from 'framer-motion';
import styles from './styles.module.scss';

interface TrustBarProps { headline?: string; }

const BADGES = [
  { title: 'Licensed & Insured', sub: 'Bonded · Full Coverage', icon: 'shield' },
  { title: 'Same-Day Service', sub: 'Emergency calls welcome', icon: 'clock' },
  { title: 'Flat-Rate Pricing', sub: 'No surprises, ever', icon: 'dollar' },
  { title: 'TECL-Aligned', sub: 'Bonded & Insured', icon: 'check' },
  { title: 'Storm-Ready Guarantee', sub: '+ 2-Year Workmanship', icon: 'heart' },
  { title: '4.9★ Google Rating', sub: '520+ verified reviews', icon: 'star' },
];

const ICONS: Record<string, React.ReactNode> = {
  shield: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><polyline points="9 12 11 14 15 10"/></svg>,
  clock: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
  dollar: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>,
  check: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"/></svg>,
  heart: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>,
  star: <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>,
};

export default function TrustBar({ headline }: TrustBarProps) {
  return (
    <section className={styles.section} aria-label="Trust signals">
      {headline && <p className={styles.headline}>{headline}</p>}
      <div className={styles.grid}>
        {BADGES.map((b, i) => (
          <motion.div key={b.title} className={styles.badge}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.06, duration: 0.4 }}>
            <span className={styles.icon}>{ICONS[b.icon]}</span>
            <span className={styles.title}>{b.title}</span>
            <span className={styles.sub}>{b.sub}</span>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
`);

w('components/PageComponents/GuaranteeSection/GuaranteeSection.tsx', `"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faShieldHalved, faRotateLeft, faTag, faCertificate, faCalendarCheck, faStar,
} from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";
import Link from "next/link";
import styles from "./styles.module.scss";
import { useTrackEvent } from '&/useTrackEvent';

interface Guarantee { icon: any; title: string; description: string; }
interface GuaranteeSectionProps {
  title?: string; headline?: string; guarantees?: Guarantee[]; ctaText?: string; ctaLink?: string;
}

const DEFAULT_GUARANTEES: Guarantee[] = [
  { icon: faTag, title: "Flat-Rate Pricing. Always.", description: "You get a firm price before we start — no hourly billing, no surprise add-ons. What we quote is what you pay." },
  { icon: faShieldHalved, title: "Storm-Ready Install Guarantee · 2-Year Workmanship", description: "Every installation is covered for two full years of workmanship. If our work fails within 24 months, we make it right at no charge." },
  { icon: faRotateLeft, title: "Satisfaction Guarantee", description: "Not satisfied? We'll return to make it right — or refund you. We stand behind every job." },
  { icon: faCertificate, title: "TECL-Aligned Installers", description: "Every installer who enters your property is TECL-aligned, bonded, and insured. No unlicensed freelancers — ever." },
  { icon: faCalendarCheck, title: "No Contracts. No Lock-In.", description: "We earn your business with every visit — not by holding you hostage with a multi-year service contract." },
  { icon: faStar, title: "On-Time or We Call Ahead", description: "If we're running late, we call before your window closes — and we show up when we say we will." },
];

const GuaranteeSection: React.FC<GuaranteeSectionProps> = ({
  title = "Our Promise to You",
  headline = "We back every job\\nwith real guarantees.",
  guarantees = DEFAULT_GUARANTEES,
  ctaText = "Schedule Service",
  ctaLink = "/contact",
}) => {
  const trackEvent = useTrackEvent();
  return (
    <section className={styles.section} aria-label="Our Guarantees">
      <div className={styles.header}>
        <span className={styles.eyebrow}>{title}</span>
        <h2 className={styles.headline}>{headline.split('\\n').map((line, i) => <span key={i}>{line}{i === 0 && <br />}</span>)}</h2>
      </div>
      <div className={styles.grid}>
        {guarantees.map((g, i) => (
          <motion.div key={g.title} className={styles.card}
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.05 }}>
            <span className={styles.icon}><FontAwesomeIcon icon={g.icon} /></span>
            <h3 className={styles.cardTitle}>{g.title}</h3>
            <p className={styles.cardBody}>{g.description}</p>
          </motion.div>
        ))}
      </div>
      <div className={styles.ctaWrap}>
        <Link href={ctaLink} className={styles.cta}
          onClick={() => trackEvent({ eventType: 'click', elementLabel: ctaText, section: 'GuaranteeSection' })}>
          {ctaText}
        </Link>
      </div>
    </section>
  );
};
export default GuaranteeSection;
`);

w('components/PageComponents/CTABanner/CTABanner.tsx', `'use client';
import Link from 'next/link';
import styles from './styles.module.scss';
import { useTrackEvent } from '&/useTrackEvent';

interface CTABannerProps {
  headline?: string; subline?: string;
  primaryText?: string; primaryLink?: string;
  secondaryText?: string; secondaryLink?: string;
}

export default function CTABanner({
  headline = "Need Backup Power? We're Ready Right Now.",
  subline = "Same-day appointments across Waco and Central Texas. Flat-rate pricing. ${G}.",
  primaryText = "Call ${PHONE}",
  primaryLink = "${TEL}",
  secondaryText = "Book Online",
  secondaryLink = "/contact",
}: CTABannerProps) {
  const trackEvent = useTrackEvent();
  const isTel = primaryLink.startsWith('tel:');
  return (
    <section className={styles.banner} aria-label="Call to action">
      <div className={styles.inner}>
        <h2 className={styles.headline}>{headline}</h2>
        <p className={styles.subline}>{subline}</p>
        <div className={styles.actions}>
          {isTel ? (
            <a href={primaryLink} className={styles.primary}
              onClick={() => trackEvent({ eventType: 'phone_click', elementLabel: primaryText, section: 'CTABanner' })}>
              {primaryText}
            </a>
          ) : (
            <Link href={primaryLink} className={styles.primary}
              onClick={() => trackEvent({ eventType: 'click', elementLabel: primaryText, section: 'CTABanner' })}>
              {primaryText}
            </Link>
          )}
          <Link href={secondaryLink} className={styles.secondary}
            onClick={() => trackEvent({ eventType: 'click', elementLabel: secondaryText, section: 'CTABanner' })}>
            {secondaryText}
          </Link>
        </div>
      </div>
    </section>
  );
}
`);

w('components/PageComponents/WhyChooseUs/WhyChooseUs.tsx', `'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import styles from './styles.module.scss';

interface Feature { icon: IconDefinition; title: string; description: string; }
interface WhyChooseUsProps {
  cityName?: string; title?: string; features: Feature[];
  subheading?: string;
}

export default function WhyChooseUs({
  cityName = 'Waco',
  title = 'Why Central Texas Chooses PowerHold',
  features,
  subheading,
}: WhyChooseUsProps) {
  return (
    <section className={styles.section} aria-label="Why choose us">
      <div className={styles.header}>
        <span className={styles.eyebrow}>The PowerHold Difference</span>
        <h2 className={styles.title}>{title}</h2>
        <p className={styles.sub}>
          {subheading || \`There's no shortage of generator companies in \${cityName}. Here's why homeowners and facility managers call us first.\`}
        </p>
      </div>
      <div className={styles.grid}>
        {features.map((f) => (
          <div key={f.title} className={styles.card}>
            <span className={styles.icon}><FontAwesomeIcon icon={f.icon} /></span>
            <h3 className={styles.cardTitle}>{f.title}</h3>
            <p className={styles.cardBody}>{f.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
`);

w('components/PageComponents/ValueComparison/ValueComparison.tsx', `'use client';
import styles from './styles.module.scss';

interface Row { feature: string; us: string; others: string; }
interface ValueComparisonProps { rows?: Row[]; title?: string; }

const DEFAULT_ROWS: Row[] = [
  { feature: 'Flat-rate price before work starts', us: '✅ Always written', others: '❌ Hourly + estimate only' },
  { feature: '${G}', us: '✅ Every job', others: '❌ Rare or none' },
  { feature: 'TECL-aligned installers', us: '✅ All techs', others: '❌ Not always' },
  { feature: 'Emergency service 7 days/week', us: '✅ Always available', others: '❌ M–F business hours' },
  { feature: 'Proper transfer switch installs', us: '✅ Code-safe ATS', others: '❌ Improvised backfeeds' },
];

export default function ValueComparison({ rows = DEFAULT_ROWS, title = 'PowerHold vs. The Other Guys' }: ValueComparisonProps) {
  return (
    <section className={styles.section} aria-label="Value comparison">
      <h2 className={styles.title}>{title}</h2>
      <div className={styles.tableWrap}>
        <table className={styles.table}>
          <thead>
            <tr>
              <th>Feature</th>
              <th className={styles.usCol}>PowerHold</th>
              <th>Others</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((r) => (
              <tr key={r.feature}>
                <td>{r.feature}</td>
                <td className={styles.usCol}>{r.us}</td>
                <td>{r.others}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
`);

w('components/PageComponents/LocalCitationBlock/LocalCitationBlock.tsx', `'use client';
import styles from './styles.module.scss';

interface LocalCitationBlockProps {
  businessName?: string; phone?: string; email?: string;
  address?: string; googleMapsUrl?: string; hours?: string;
}

export default function LocalCitationBlock({
  businessName  = 'PowerHold Generators',
  phone         = '${PHONE}',
  email         = 'hello@powerholdgenerators.com',
  address       = '1800 Franklin Ave, Waco, TX 76701',
  googleMapsUrl = 'https://maps.google.com/?q=PowerHold+Generators+Waco+TX',
  hours         = 'Mon–Fri 7am–6pm · Sat 8am–2pm · Emergency 24/7',
}: LocalCitationBlockProps) {
  return (
    <section className={styles.section} aria-label="Business information">
      <h2 className={styles.title}>{businessName}</h2>
      <ul className={styles.list}>
        <li><strong>Phone:</strong> <a href="${TEL}">{phone}</a></li>
        <li><strong>Email:</strong> <a href={\`mailto:\${email}\`}>{email}</a></li>
        <li><strong>Address:</strong> <a href={googleMapsUrl} target="_blank" rel="noopener noreferrer">{address}</a></li>
        <li><strong>Hours:</strong> {hours}</li>
      </ul>
    </section>
  );
}
`);

w('components/PageComponents/NearbyAreasHero/NearbyAreasHero.tsx', `'use client';
import styles from './styles.module.scss';

interface NearbyAreasHeroProps {
  cityName: string; county?: string; description?: string;
}

export default function NearbyAreasHero({
  cityName,
  county = 'Central Texas',
  description,
}: NearbyAreasHeroProps) {
  const desc = description ||
    \`PowerHold Generators provides fast, reliable standby generator install and service to \${cityName} and surrounding communities. TECL-aligned installers, flat-rate pricing, ${G}.\`;
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <p className={styles.eyebrow}>{county}</p>
        <h1 className={styles.title}>Generator Service in {cityName}</h1>
        <p className={styles.desc}>{desc}</p>
        <a href="${TEL}" className={styles.phoneBtn}>${PHONE}</a>
      </div>
    </section>
  );
}
`);

w('components/PageComponents/ServiceCardComponent/ServiceCardComponent.tsx', `'use client';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import styles from './styles.module.scss';

interface Card { icon: IconDefinition; title: string; body: string; link: string; }
interface ServiceCardComponentProps {
  heading?: string; subheading?: string; cards: Card[];
}

export default function ServiceCardComponent({
  heading = 'Our Generator Services',
  subheading = 'From emergency outages to whole-home standby installs, PowerHold handles it all — on time, on price.',
  cards,
}: ServiceCardComponentProps) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>{heading}</h2>
        {subheading && <p className={styles.sub}>{subheading}</p>}
      </div>
      <div className={styles.grid}>
        {cards.map((c) => (
          <Link key={c.title} href={c.link} className={styles.card}>
            <span className={styles.icon}><FontAwesomeIcon icon={c.icon} /></span>
            <h3 className={styles.cardTitle}>{c.title}</h3>
            <p className={styles.cardBody}>{c.body}</p>
            <span className={styles.arrow}>Learn more →</span>
          </Link>
        ))}
      </div>
    </section>
  );
}
`);

w('components/PageComponents/SectionIndustriesServed/SectionIndustriesServed.tsx', `"use client";
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHardHat, faIndustry, faHospital, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import styles from './styles.module.scss';

const INDUSTRIES = [
  { slug: 'homebuilders',        label: 'Homebuilders',          icon: faHardHat },
  { slug: 'healthcare-clinics',  label: 'Healthcare Clinics',    icon: faHospital },
  { slug: 'agriculture',         label: 'Agriculture & Ranches', icon: faIndustry },
];

interface SectionIndustriesServedProps {
  title?: string; subtitle?: string; disableLinks?: boolean;
}

export default function SectionIndustriesServed({
  title = 'Industries We Serve Across Texas',
  subtitle = 'Backup power programs — built for how your industry actually works.',
  disableLinks = false,
}: SectionIndustriesServedProps) {
  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.heading}>{title}</h2>
        <p className={styles.sub}>{subtitle}</p>
      </div>
      <div className={styles.grid}>
        {INDUSTRIES.map(({ slug, label, icon }) => {
          const card = (
            <div className={styles.card} key={slug}>
              <div className={styles.iconWrapper}>
                <FontAwesomeIcon icon={icon} className={styles.industryIcon} />
              </div>
              <span className={styles.industryLabel}>{label}</span>
              {!disableLinks && <FontAwesomeIcon icon={faArrowRight} className={styles.arrowIcon} />}
            </div>
          );
          return disableLinks ? card : (
            <Link key={slug} href={\`/industries/\${slug}\`} className={styles.cardLink}
              aria-label={\`Learn about our \${label} industry services\`}>{card}</Link>
          );
        })}
      </div>
    </section>
  );
}
`);

console.log('part2 shared done — continuing pages...');

// Homepage
w('src/app/page.tsx', `// PowerHold Generators — Homepage
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
    { icon: faBolt, title: "Standby Generators", body: "Whole-home and critical-load automatic standby systems with proper transfer switches, pad placement, and fuel coordination.", link: "/services/standby-generators" },
    { icon: faCarBattery, title: "Portable Generators", body: "Portable units and code-safe interlock kits — reliable backup without a full standby install.", link: "/services/portable-generators" },
    { icon: faExchangeAlt, title: "Transfer Switches", body: "Automatic and manual transfer switches installed the legal, utility-safe way. No dangerous backfeeds.", link: "/services/transfer-switches" },
    { icon: faOilCan, title: "Generator Maintenance", body: "Oil, filters, batteries, exercise verification, and load testing so your unit starts when storms hit.", link: "/services/generator-maintenance" },
    { icon: faCalculator, title: "Load Calculations", body: "Honest load studies so you buy the right size generator — not the most expensive one.", link: "/services/load-calculations" },
    { icon: faTruckMedical, title: "Emergency Service", body: "Failed starts, transfer issues, and storm outages — same-day emergency generator service across Central Texas.", link: "/services/emergency-service" },
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
    { number: 4, title: "Done Right, Warrantied", description: "Quality equipment, clean workmanship, ${G}. We leave when you're satisfied.", icon: faCheckCircle },
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
    { question: "Do you offer same-day or emergency service?", answer: "Yes — same-day and emergency generator service is available 7 days a week including evenings. Call us at ${PHONE} anytime." },
    { question: "How quickly can you install a standby system?", answer: "Site assessment is often same-week. Equipment lead times vary by brand and size; install typically completes in 1–2 days once the unit and pad are ready." },
    { question: "What generator services do you offer?", answer: "Standby generators, portable generators, transfer switches, generator maintenance, load calculations, and emergency service." },
    { question: "Are you bonded and insured?", answer: "Yes — PowerHold Generators is bonded and insured with TECL-aligned installers. Credentials available on request." },
    { question: "Do you offer a warranty?", answer: "Yes — ${G} covering labor and installation defects, plus manufacturer warranties on equipment." },
  ];

  return (
    <main className={styles.pageWrapper}>
      <WelcomePage />
      <TrustBar headline="Waco's trusted generator company — TECL-aligned, insured, and warrantied on every job" />
      <div className={styles.section}>
        <ImpactMetrics title="Numbers That Speak for Us" metrics={metrics} cityName="Waco" />
      </div>
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
      <CTABanner
        headline="Power Out? Generator Down? We're Ready Right Now."
        subline={\`Same-day appointments across Waco, Hewitt, Woodway, Temple, and all of Central Texas. Flat-rate pricing. \${"${G}"}.\`}
        primaryText="Call ${PHONE}"
        primaryLink="${TEL}"
        secondaryText="Book Online"
        secondaryLink="/contact"
      />
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
`);

console.log('homepage + shared done');
