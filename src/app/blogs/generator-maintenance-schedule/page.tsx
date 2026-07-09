'use client';
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
    calloutText: "PowerHold maintenance plans keep Central Texas generators storm-ready with no multi-year contracts. Call (254) 991-2121 to schedule.",
  },
  {
    type: 'tips',
    heading: 'Before Storm Season',
    items: [
      'Complete oil and battery service before peak ice/storm months',
      'Confirm natural gas or propane supply is unobstructed',
      'Test transfer under load with a technician if you have not recently',
      'Label critical breakers for portable interlock users',
      'Save PowerHold in your phone: (254) 991-2121',
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
