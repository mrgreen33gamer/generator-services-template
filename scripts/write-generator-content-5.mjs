/**
 * Part 5 — blogs, contact, service-areas, forms, remaining shared, package name
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

const PHONE = '(254) 991-2121';
const TEL = 'tel:+12549912121';

// Blogs
w('src/app/blogs/standby-vs-portable-generator/page.tsx', `'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faBolt, faCarBattery, faShieldHalved, faDollarSign, faClock, faHouseChimney, faWrench } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "When Central Texas ice storms or summer grid stress knock out power, the right backup system keeps freezers cold, wells pumping, and medical devices running. The two most common paths for Waco homeowners are automatic standby generators and portable generators with a code-safe interlock. Here's an honest comparison so you can choose with clear eyes — not marketing hype.",
  },
  {
    type: 'cards',
    heading: 'Standby vs Portable at a Glance',
    cards: [
      { icon: faBolt, title: 'Standby: automatic comfort', body: 'Permanently installed, auto-starts on outage, can cover whole-home or critical loads including HVAC when sized correctly.' },
      { icon: faCarBattery, title: 'Portable: lower entry cost', body: 'You start it, wheel it out, and power selected circuits through an interlock — great for essentials on a budget.' },
      { icon: faShieldHalved, title: 'Safety is non-negotiable', body: 'Never backfeed through a dryer outlet. Both paths need proper transfer equipment to protect utility workers and your home.' },
      { icon: faDollarSign, title: 'Cost ranges', body: 'Portable + interlock is often a few thousand dollars total. Whole-home standby commonly runs $8k–$18k installed.' },
      { icon: faClock, title: 'Convenience vs effort', body: 'Standby is set-and-forget. Portable requires storage, fuel, and manual start in the dark — plan for that reality.' },
      { icon: faHouseChimney, title: 'Texas load reality', body: 'A/C starting amps dominate sizing. If you need cooling during summer outages, plan capacity carefully.' },
      { icon: faWrench, title: 'Maintenance either way', body: 'Oil, batteries, and exercise (standby) or fuel freshness (portable) determine whether it starts when you need it.' },
    ],
  },
  {
    type: 'table',
    heading: 'Quick Decision Guide',
    tableHeaders: ['If you need…', 'Choose', 'Why'],
    tableRows: [
      ['Hands-free whole-home power', 'Standby', 'Auto transfer, higher capacity options'],
      ['Budget essentials only', 'Portable + interlock', 'Lower cost, flexible placement'],
      ['Medical equipment reliability', 'Standby (often)', 'Faster, automatic restoration'],
      ['Shop/barn occasional backup', 'Portable', 'Mobile between buildings'],
      ['Maximum safety & code compliance', 'Either with proper transfer gear', 'No illegal backfeeds'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "Pro Tip: Get a load calculation before you buy. PowerHold sizes systems for real Central Texas loads — call ${PHONE} for a flat-rate assessment.",
  },
  {
    type: 'tips',
    heading: 'What To Do Next',
    items: [
      'List must-run circuits (fridge, well, medical, internet, HVAC)',
      'Decide automatic vs manual operation',
      'Budget for proper transfer equipment — not just the generator',
      'Schedule a PowerHold load calculation in Waco or nearby',
      'Ask about Storm-Ready Install Guarantee · 2-Year Workmanship',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Standby vs Portable Generator: Which Is Right for Your Waco Home?"
        description="Automatic whole-home backup or a portable unit with interlock? Compare cost, convenience, fuel, and safety for Central Texas outages."
        imageSrc="/pages/blogs/heat-pump.jpg"
        imageAlt="Standby vs portable generator comparison for Waco TX homeowners"
        category="Buying Guide"
        date="July 3, 2026"
        readTime={7}
      />
      <BlogBody sections={sections} />
      <BlogCTA title="Not Sure Which Path Fits?" body="Get an honest load calculation and flat-rate options from PowerHold Generators — TECL-aligned installers." buttonText="Schedule Assessment" buttonHref="/services/load-calculations" />
      <NewsletterSignup variant={1} spot="standby-vs-portable-blog" />
    </>
  );
}
`);

w('src/app/blogs/standby-vs-portable-generator/layout.tsx', `import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Standby vs Portable Generator | PowerHold Generators",
  description: "Compare standby and portable generators for Waco TX homes — cost, convenience, safety, and sizing guidance from PowerHold Generators.",
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
`);

w('src/app/blogs/how-to-size-home-generator/page.tsx', `'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faCalculator, faSnowflake, faTint, faPlug, faExclamationTriangle, faClipboardCheck, faBolt } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "Buying a generator by square footage alone is how Central Texas homeowners end up with a unit that trips on A/C start or a system far larger than they need. Proper sizing is a load calculation: running watts, starting watts, and which circuits must stay on during an outage.",
  },
  {
    type: 'cards',
    heading: 'Sizing Building Blocks',
    cards: [
      { icon: faCalculator, title: 'Running vs starting watts', body: 'Motors (A/C, well pumps) draw a surge at start. Your generator must cover that surge or breakers will trip.' },
      { icon: faSnowflake, title: 'HVAC dominates', body: 'A single outdoor condenser can dwarf lights and electronics. Decide if cooling is required during outages.' },
      { icon: faTint, title: 'Well pumps & freezers', body: 'Common critical loads on rural McLennan County properties — plan them explicitly.' },
      { icon: faPlug, title: 'Critical-load subpanel', body: 'Often smarter than whole-home: power essentials on a smaller, cheaper generator.' },
      { icon: faExclamationTriangle, title: 'Nameplate ≠ marketing sticker', body: 'Read equipment nameplates and manuals. "7,500-watt" portables may not start a 4-ton A/C.' },
      { icon: faClipboardCheck, title: 'Future circuits', body: 'EV chargers and shop tools change the math — mention planned loads during assessment.' },
      { icon: faBolt, title: 'Transfer strategy matters', body: 'ATS vs interlock changes how loads are selected and protected.' },
    ],
  },
  {
    type: 'table',
    heading: 'Example Critical Load Checklist',
    tableHeaders: ['Load', 'Why it matters', 'Notes'],
    tableRows: [
      ['Refrigerator / freezer', 'Food safety', 'Usually continuous essential'],
      ['Well pump', 'Water for home/livestock', 'High starting watts'],
      ['Medical devices', 'Health', 'Prioritize automatic transfer'],
      ['Furnace blower / mini-split', 'Comfort & pipes', 'Starting surge varies'],
      ['Internet / router', 'Work & safety', 'Low watts, high value'],
      ['Garage door / lights', 'Access & safety', 'Short duration'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "PowerHold performs on-site load calculations across Waco, Hewitt, Woodway, Temple, and Killeen. Call ${PHONE} — flat-rate written recommendations, no upsell pressure.",
  },
  {
    type: 'tips',
    heading: 'DIY Prep Before Your Assessment',
    items: [
      'Photograph your electrical panel schedule',
      'List must-run appliances and any medical equipment',
      'Note fuel availability (natural gas meter vs propane tank space)',
      'Decide whole-home vs critical-load goals',
      'Ask for kW options at two budget tiers',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="How to Size a Home Generator for Central Texas Loads"
        description="HVAC, well pumps, freezers, and medical equipment — an honest guide to load calculations so you do not overbuy or undersize."
        imageSrc="/pages/blogs/energy-savings.jpg"
        imageAlt="How to size a home generator guide for Waco TX"
        category="Installation"
        date="June 24, 2026"
        readTime={6}
      />
      <BlogBody sections={sections} />
      <BlogCTA title="Want a Right-Sized System?" body="Book a PowerHold load calculation — clear kW recommendations and flat-rate install options." buttonText="Book Load Calculation" buttonHref="/services/load-calculations" />
      <NewsletterSignup variant={1} spot="how-to-size-generator-blog" />
    </>
  );
}
`);

w('src/app/blogs/how-to-size-home-generator/layout.tsx', `import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "How to Size a Home Generator | PowerHold Generators",
  description: "Load calculation guide for Waco and Central Texas homes — running watts, starting watts, and critical circuits.",
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
`);

w('src/app/blogs/generator-maintenance-schedule/page.tsx', `'use client';
import BlogHero from '#/BlogComponents/BlogHero/BlogHero';
import BlogBody, { BlogSection } from '#/BlogComponents/BlogBody/BlogBody';
import BlogCTA from '#/BlogComponents/BlogCTA/BlogCTA';
import NewsletterSignup from '#/BlogComponents/NewsletterSignup/NewsletterSignup';
import { faOilCan, faCarBattery, faClock, faClipboardList, faExclamationTriangle, faWrench, faShieldHalved } from '@fortawesome/free-solid-svg-icons';

const sections: BlogSection[] = [
  {
    type: 'prose',
    body: "A standby generator that never exercises or gets its oil changed is a very expensive garden statue. Most failed starts we see in Waco after storms come down to dead batteries, dirty filters, stale fuel (portables), or ignored fault codes — all preventable with a simple maintenance schedule.",
  },
  {
    type: 'cards',
    heading: 'Maintenance Essentials',
    cards: [
      { icon: faOilCan, title: 'Oil & filters', body: 'Follow manufacturer intervals — often yearly or every 100–200 run hours. Texas heat is hard on oil.' },
      { icon: faCarBattery, title: 'Battery health', body: 'Weak batteries are the #1 no-start cause. Test annually; replace every 2–3 years typically.' },
      { icon: faClock, title: 'Exercise cycles', body: 'Weekly exercise keeps seals lubricated and proves the starter works. Verify it actually ran.' },
      { icon: faClipboardList, title: 'Controller faults', body: "Don't ignore yellow lights. Small sensor issues become dark-house problems during outages." },
      { icon: faExclamationTriangle, title: 'Fuel quality (portable)', body: 'Stabilize gasoline or run dual-fuel. Stale gas gums carbs after storage.' },
      { icon: faWrench, title: 'Transfer gear checks', body: 'Confirm clean transfer operation during service — not only engine health.' },
      { icon: faShieldHalved, title: 'Load bank / load test', body: 'Periodic loaded tests reveal problems that no-load exercise can miss.' },
    ],
  },
  {
    type: 'table',
    heading: 'Suggested Annual Cadence',
    tableHeaders: ['When', 'Task', 'Who'],
    tableRows: [
      ['Weekly', 'Verify exercise ran / check alerts', 'Homeowner'],
      ['Monthly', 'Visual inspection, clear debris around unit', 'Homeowner'],
      ['Every 6–12 months', 'Oil/filter/battery service', 'PowerHold tech'],
      ['Annually', 'Full inspection + transfer test', 'PowerHold tech'],
      ['Every 2–3 years', 'Battery replacement (as needed)', 'PowerHold tech'],
      ['As needed', 'Post-storm inspection after hard run hours', 'PowerHold tech'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "PowerHold maintenance plans keep Central Texas generators storm-ready with no multi-year contracts. Call ${PHONE} to schedule.",
  },
  {
    type: 'tips',
    heading: 'Before Storm Season',
    items: [
      'Complete oil and battery service before peak ice/storm months',
      'Confirm natural gas or propane supply is unobstructed',
      'Test transfer under load with a technician if you have not recently',
      'Label critical breakers for portable interlock users',
      'Save PowerHold in your phone: ${PHONE}',
    ],
  },
];

export default function Page() {
  return (
    <>
      <BlogHero
        title="Generator Maintenance Schedule: Keep Your Backup Ready Year-Round"
        description="Oil, filters, batteries, exercise cycles, and load bank testing — the maintenance checklist that prevents failed starts during storms."
        imageSrc="/pages/blogs/ac-replacement.jpg"
        imageAlt="Generator maintenance schedule for Central Texas homeowners"
        category="Maintenance"
        date="June 15, 2026"
        readTime={8}
      />
      <BlogBody sections={sections} />
      <BlogCTA title="Due for Service?" body="Book generator maintenance with PowerHold — TECL-aligned techs, clear pricing, no lock-in contracts." buttonText="Schedule Maintenance" buttonHref="/services/generator-maintenance" />
      <NewsletterSignup variant={1} spot="generator-maintenance-schedule-blog" />
    </>
  );
}
`);

w('src/app/blogs/generator-maintenance-schedule/layout.tsx', `import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Generator Maintenance Schedule | PowerHold Generators",
  description: "Annual generator maintenance checklist for Waco TX — oil, batteries, exercise cycles, and storm prep.",
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
`);

w('src/app/blogs/layout.tsx', `import type { Metadata } from "next";
export const metadata: Metadata = {
  title: "Generator Tips & Guides | PowerHold Generators Blog",
  description: "Standby vs portable, sizing guides, and maintenance schedules from PowerHold Generators in Waco, TX.",
};
export default function Layout({ children }: { children: React.ReactNode }) { return children; }
`);

// Contact forms services
const formServices = `const SERVICES = [
  { icon: faBolt,          label: 'Standby Generators',    sub: 'Whole-home automatic backup' },
  { icon: faCarBattery,    label: 'Portable Generators',   sub: 'Portable + interlock kits' },
  { icon: faExchangeAlt,   label: 'Transfer Switches',     sub: 'Automatic or manual ATS' },
  { icon: faOilCan,        label: 'Generator Maintenance', sub: 'Oil, battery, exercise check' },
  { icon: faCalculator,    label: 'Load Calculations',     sub: 'Right-size your system' },
  { icon: faTruckMedical,  label: 'Emergency Service',     sub: 'Outage / failed start' },
  { icon: faWrench,        label: 'Other / Not Sure',      sub: 'We'll help you decide' },
];`;

// Patch Variant4 fully
w('components/PageComponents/ContactForms/Variant4/Form.tsx', `// Variant4 contact form — PowerHold Generators
'use client';
import { useState, useRef } from 'react';
import styles from './styles.module.scss';
import { PulseLoader } from 'react-spinners';
import ReCAPTCHA from 'react-google-recaptcha';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faCircleCheck, faExclamationTriangle, faArrowRight, faArrowLeft,
  faBolt, faCarBattery, faExchangeAlt, faOilCan, faCalculator, faTruckMedical, faWrench,
} from '@fortawesome/free-solid-svg-icons';
import { motion, AnimatePresence } from 'framer-motion';
import { getJourneyContext } from '&/useJourneyTracker';
import { useTrackEvent } from '&/useTrackEvent';

interface Variant4Props {
  title: string; cityName: string; slug: string; spot: string; formVariant: number;
}

const SERVICES = [
  { icon: faBolt,          label: 'Standby Generators',    sub: 'Whole-home automatic backup' },
  { icon: faCarBattery,    label: 'Portable Generators',   sub: 'Portable + interlock kits' },
  { icon: faExchangeAlt,   label: 'Transfer Switches',     sub: 'Automatic or manual ATS' },
  { icon: faOilCan,        label: 'Generator Maintenance', sub: 'Oil, battery, exercise check' },
  { icon: faCalculator,    label: 'Load Calculations',     sub: 'Right-size your system' },
  { icon: faTruckMedical,  label: 'Emergency Service',     sub: 'Outage / failed start' },
  { icon: faWrench,        label: 'Other / Not Sure',      sub: "We'll help you decide" },
];

const BUDGET_LABELS = ['Under $500', '$500–$1,500', '$1,500–$5,000', '$5,000–$10,000', '$10,000+'];

const slideVariants = {
  enter:  (dir: number) => ({ x: dir > 0 ? 50 : -50, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit:   (dir: number) => ({ x: dir > 0 ? -50 : 50, opacity: 0 }),
};

export default function Variant4({ title, cityName, slug, spot, formVariant }: Variant4Props) {
  const [step, setStep] = useState(1);
  const [dir, setDir] = useState(1);
  const [selectedService, setSelectedService] = useState('');
  const [budget, setBudget] = useState(1);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');
  const recaptchaRef = useRef<ReCAPTCHA>(null);
  const trackEvent = useTrackEvent();

  const goStep2 = () => {
    if (!selectedService) { setError('Please select a service to continue.'); return; }
    setError(''); setDir(1); setStep(2);
    trackEvent({ eventType: 'click', elementLabel: \`Variant4 Continue — \${selectedService}\`, section: spot, serviceType: selectedService });
  };
  const goBack = () => { setDir(-1); setStep(1); setError(''); };
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (isSubmitting) return;
    const token = recaptchaRef.current?.getValue();
    if (!token) { setError('Please complete the reCAPTCHA'); return; }
    setIsSubmitting(true); setError('');
    try {
      const journeyContext = getJourneyContext();
      const res = await fetch('/api/submitContact', {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData, serviceType: selectedService, budget: BUDGET_LABELS[budget],
          cityName, slug, spot, formVariant, recaptchaToken: token, ...journeyContext,
        }),
      });
      if (!res.ok) throw new Error('submit failed');
      trackEvent({ eventType: 'form_submit', elementLabel: 'Variant4 Submit', section: spot, serviceType: selectedService });
      setSubmitted(true);
    } catch {
      setError('Something went wrong. Please call us at ${PHONE}.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitted) {
    return (
      <div className={styles.wrap}>
        <div className={styles.success}>
          <FontAwesomeIcon icon={faCircleCheck} className={styles.successIcon} />
          <h3>Request received</h3>
          <p>A licensed PowerHold tech will reach out about your <strong>{selectedService}</strong> service.</p>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.wrap}>
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.sub}>Serving {cityName} &amp; Central Texas · Flat-rate quotes · No contracts</p>
      <AnimatePresence mode="wait" custom={dir}>
        {step === 1 && (
          <motion.div key="s1" custom={dir} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.25 }}>
            <p className={styles.stepLabel}>Step 1 — Select a service</p>
            {error && <p className={styles.error}><FontAwesomeIcon icon={faExclamationTriangle} /> {error}</p>}
            <div className={styles.serviceGrid}>
              {SERVICES.map(({ icon, label, sub }) => (
                <button key={label} type="button"
                  className={\`\${styles.serviceCard} \${selectedService === label ? styles.selected : ''}\`}
                  onClick={() => { setSelectedService(label); setError(''); }}>
                  <FontAwesomeIcon icon={icon} />
                  <span className={styles.serviceLabel}>{label}</span>
                  <span className={styles.serviceSub}>{sub}</span>
                </button>
              ))}
            </div>
            <button type="button" className={styles.nextBtn} onClick={goStep2}>
              Continue <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </motion.div>
        )}
        {step === 2 && (
          <motion.div key="s2" custom={dir} variants={slideVariants} initial="enter" animate="center" exit="exit" transition={{ duration: 0.25 }}>
            <button type="button" className={styles.backBtn} onClick={goBack}><FontAwesomeIcon icon={faArrowLeft} /> Back</button>
            <p className={styles.stepLabel}>Step 2 — Your details · {selectedService}</p>
            {error && <p className={styles.error}><FontAwesomeIcon icon={faExclamationTriangle} /> {error}</p>}
            <form onSubmit={handleSubmit} className={styles.form}>
              <input name="name" placeholder="Full name" required value={formData.name} onChange={handleChange} />
              <input name="email" type="email" placeholder="Email" required value={formData.email} onChange={handleChange} />
              <input name="phone" type="tel" placeholder="Phone" required value={formData.phone} onChange={handleChange} />
              <label className={styles.budgetLabel}>Budget range: {BUDGET_LABELS[budget]}</label>
              <input type="range" min={0} max={4} value={budget} onChange={(e) => setBudget(Number(e.target.value))} />
              <textarea name="message" placeholder="Tell us about your project or outage" rows={3} value={formData.message} onChange={handleChange} />
              <ReCAPTCHA ref={recaptchaRef} sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || ''} />
              <button type="submit" className={styles.submitBtn} disabled={isSubmitting}>
                {isSubmitting ? <PulseLoader size={8} color="#1c1917" /> : 'Submit Request'}
              </button>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
`);

// Simpler patches for V1-V3 via string replace on existing files
function patchForm(rel, brandReplaces) {
  const p = path.join(ROOT, rel);
  if (!fs.existsSync(p)) return;
  let t = fs.readFileSync(p, 'utf8');
  for (const [a, b] of brandReplaces) t = t.split(a).join(b);
  // service arrays - rough replace common patterns
  t = t.replace(/label: 'Garage[^']*'/g, "label: 'Standby Generators'");
  t = t.replace(/label: 'Spring[^']*'/g, "label: 'Portable Generators'");
  t = t.replace(/label: 'New Door[^']*'/g, "label: 'Transfer Switches'");
  t = t.replace(/label: 'Opener[^']*'/g, "label: 'Load Calculations'");
  t = t.replace(/label: 'Door Maintenance[^']*'/g, "label: 'Generator Maintenance'");
  t = t.replace(/label: 'Commercial[^']*'/g, "label: 'Emergency Service'");
  t = t.replace(/label: 'AC Repair'/g, "label: 'Standby Generators'");
  t = t.replace(/label: 'Heating[^']*'/g, "label: 'Portable Generators'");
  t = t.replace(/label: 'Installation'/g, "label: 'Transfer Switches'");
  t = t.replace(/label: 'Duct Cleaning'/g, "label: 'Generator Maintenance'");
  t = t.replace(/label: 'Indoor Air[^']*'/g, "label: 'Load Calculations'");
  t = t.replace(/label: 'Maintenance'/g, "label: 'Emergency Service'");
  t = t.replace(/PowerHold Generators HVAC/g, 'PowerHold Generators');
  t = t.replace(/licensed PowerHold tech/g, 'licensed PowerHold tech');
  t = t.replace(/NATE Certified/g, 'TECL-Aligned');
  t = t.replace(/NATE · TDLR/g, 'TECL-Aligned');
  t = t.replace(/1-Year Warranty/g, 'Storm-Ready Guarantee');
  fs.writeFileSync(p, t);
  console.log('patched', rel);
}

for (const f of [
  'components/PageComponents/ContactForms/Variant1/Form.tsx',
  'components/PageComponents/ContactForms/Variant2/Form.tsx',
  'components/PageComponents/ContactForms/Variant3/Form.tsx',
]) {
  patchForm(f, [
    ['Summit Door Pros', 'PowerHold Generators'],
    ['Arctic Air HVAC', 'PowerHold Generators'],
    ['Arctic Air', 'PowerHold'],
    ['(254) 720-1100', PHONE],
    ['(254) 900-1234', PHONE],
    ['+12547201100', '+12549912121'],
    ['+12549001234', '+12549912121'],
  ]);
}

// Contact page - rewrite service list and phone via replace on existing
{
  const p = path.join(ROOT, 'src/app/contact/page.tsx');
  let t = fs.readFileSync(p, 'utf8');
  t = t.replace(/const SERVICES = \[[\s\S]*?\];/, `const SERVICES = [
  'Standby Generators', 'Portable Generators', 'Transfer Switches',
  'Generator Maintenance', 'Load Calculations', 'Emergency Service',
  'Other / Not Sure',
];`);
  t = t.replace(/\(254\) 720-1100/g, PHONE);
  t = t.replace(/\(254\) 900-1234/g, PHONE);
  t = t.replace(/\+12547201100/g, '+12549912121');
  t = t.replace(/\+12549001234/g, '+12549912121');
  t = t.replace(/garage door/gi, 'generator');
  t = t.replace(/Summit Door Pros/g, 'PowerHold Generators');
  t = t.replace(/Arctic Air HVAC/g, 'PowerHold Generators');
  t = t.replace(/Arctic Air/g, 'PowerHold');
  fs.writeFileSync(p, t);
  console.log('patched contact page');
}

// Service areas
{
  const p = path.join(ROOT, 'src/app/service-areas/page.tsx');
  let t = fs.readFileSync(p, 'utf8');
  t = t.replace(/Summit Door Pros/g, 'PowerHold Generators');
  t = t.replace(/garage door/gi, 'generator');
  t = t.replace(/Lifetime Spring Warranty \+ 2-Year Workmanship/g, 'Storm-Ready Install Guarantee · 2-Year Workmanship');
  t = t.replace(/Lifetime Spring Warranty/g, 'Storm-Ready Install Guarantee');
  t = t.replace(/IDA-trained/gi, 'TECL-aligned');
  t = t.replace(/\(254\) 720-1100/g, PHONE);
  t = t.replace(/\+12547201100/g, '+12549912121');
  t = t.replace(/China Component/g, 'China Spring');
  fs.writeFileSync(p, t);
  console.log('patched service-areas');
}

// Cookie banner
{
  const p = path.join(ROOT, 'components/GeneralComponents/CookieBanner/CookieBanner.tsx');
  let t = fs.readFileSync(p, 'utf8');
  t = t.replace(/Summit Door Pros/g, 'PowerHold Generators');
  t = t.replace(/Arctic Air[^\n<"]*/g, 'PowerHold Generators');
  t = t.replace(/Summit Template/g, 'PowerHold Template');
  t = t.replace(/Arctic Air Template/g, 'PowerHold Template');
  fs.writeFileSync(p, t);
}

// AboutHero / AboutStory / TechStack / FAQ / ProcessTimeline / BlogPreviewGrid
for (const rel of [
  'components/PageComponents/AboutHero/AboutHero.tsx',
  'components/PageComponents/AboutStory/AboutStory.tsx',
  'components/PageComponents/TechStack/TechStack.tsx',
  'components/PageComponents/FAQ/FAQ.tsx',
  'components/PageComponents/ProcessTimeline/ProcessTimeline.tsx',
  'components/PageComponents/BlogPreviewGrid/BlogPreviewGrid.tsx',
  'components/PageComponents/AuthorBio/AuthorBio.tsx',
  'src/app/privacy-policy/page.tsx',
  'src/app/privacy-policy/layout.tsx',
  'src/app/not-found.tsx',
  'src/app/contact/layout.tsx',
  'src/app/service-areas/layout.tsx',
  'src/app/blogs/page.tsx',
]) {
  const p = path.join(ROOT, rel);
  if (!fs.existsSync(p)) continue;
  let t = fs.readFileSync(p, 'utf8');
  const o = t;
  t = t.replace(/Summit Door Pros/g, 'PowerHold Generators');
  t = t.replace(/Arctic Air HVAC/g, 'PowerHold Generators');
  t = t.replace(/Arctic Air/g, 'PowerHold');
  t = t.replace(/Marcus Hale/g, 'Rhea Colton');
  t = t.replace(/Mike Hawkins/g, 'Rhea Colton');
  t = t.replace(/\(254\) 720-1100/g, PHONE);
  t = t.replace(/\(254\) 900-1234/g, PHONE);
  t = t.replace(/\+12547201100/g, '+12549912121');
  t = t.replace(/\+12549001234/g, '+12549912121');
  t = t.replace(/summitdoorpros\.com/g, 'powerholdgenerators.com');
  t = t.replace(/arcticairhvac\.com/g, 'powerholdgenerators.com');
  t = t.replace(/1401 Franklin Ave/g, '1800 Franklin Ave');
  t = t.replace(/NATE-certified/gi, 'TECL-aligned');
  t = t.replace(/NATE Certified/g, 'TECL-Aligned');
  t = t.replace(/IDA-Trained/g, 'TECL-Aligned');
  t = t.replace(/IDA-trained/g, 'TECL-aligned');
  t = t.replace(/Lifetime Spring Warranty \+ 2-Year Workmanship/g, 'Storm-Ready Install Guarantee · 2-Year Workmanship');
  t = t.replace(/Lifetime Spring Warranty/g, 'Storm-Ready Install Guarantee');
  t = t.replace(/garage door/gi, 'generator');
  t = t.replace(/HVAC/g, 'generator');
  t = t.replace(/China Component/g, 'China Spring');
  t = t.replace(/#1d4ed8/gi, '#facc15');
  t = t.replace(/#f97316/gi, '#facc15');
  if (t !== o) { fs.writeFileSync(p, t); console.log('brand-patched', rel); }
}

// package.json name
{
  const p = path.join(ROOT, 'package.json');
  const j = JSON.parse(fs.readFileSync(p, 'utf8'));
  j.name = 'generator-services-template';
  fs.writeFileSync(p, JSON.stringify(j, null, 2) + '\\n');
  console.log('package.json name set');
}

// Fix homepage CTABanner subline if broken
{
  const p = path.join(ROOT, 'src/app/page.tsx');
  let t = fs.readFileSync(p, 'utf8');
  t = t.replace(/subline=\{\`Same-day appointments[\s\S]*?\`\}/,
    'subline="Same-day appointments across Waco, Hewitt, Woodway, Temple, and all of Central Texas. Flat-rate pricing. Storm-Ready Install Guarantee · 2-Year Workmanship."');
  // fix any nested template issues
  t = t.replace(/\$\{"\$\{G\}"\}/g, 'Storm-Ready Install Guarantee · 2-Year Workmanship');
  t = t.replace(/\$\{G\}/g, 'Storm-Ready Install Guarantee · 2-Year Workmanship');
  fs.writeFileSync(p, t);
  console.log('fixed homepage');
}

// Admin chart colors
for (const rel of [
  'components/AdminComponents/Charts/BarChart.tsx',
  'components/AdminComponents/Charts/DoughnutChart.tsx',
  'components/AdminComponents/Charts/HourHeatmap.tsx',
]) {
  const p = path.join(ROOT, rel);
  if (!fs.existsSync(p)) continue;
  let t = fs.readFileSync(p, 'utf8');
  t = t.replace(/#1d4ed8/gi, '#facc15').replace(/#f97316/gi, '#facc15');
  fs.writeFileSync(p, t);
}

console.log('part5 complete');
