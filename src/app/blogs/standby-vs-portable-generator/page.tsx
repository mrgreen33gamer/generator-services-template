'use client';
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
    calloutText: "Pro Tip: Get a load calculation before you buy. PowerHold sizes systems for real Central Texas loads — call (254) 991-2121 for a flat-rate assessment.",
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
