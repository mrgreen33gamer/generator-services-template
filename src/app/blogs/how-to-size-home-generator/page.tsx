'use client';
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
      ['Doors & lights', 'Access & safety', 'Short duration'],
    ],
  },
  {
    type: 'callout',
    calloutAccent: true,
    calloutText: "PowerHold performs on-site load calculations across Waco, Hewitt, Woodway, Temple, and Killeen. Call (254) 991-2121 — flat-rate written recommendations, no upsell pressure.",
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
