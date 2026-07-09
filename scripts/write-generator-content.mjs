/**
 * Overwrite PowerHold Generators trade content with clean copy.
 * Run: node scripts/write-generator-content.mjs
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

const BASE = 'https://www.powerholdgenerators.com';
const PHONE = '(254) 991-2121';
const TEL = 'tel:+12549912121';
const EMAIL = 'hello@powerholdgenerators.com';
const ADDR = '1800 Franklin Ave, Waco, TX 76701';
const GUARANTEE = 'Storm-Ready Install Guarantee · 2-Year Workmanship';
const LICENSE = 'TECL-Aligned Installers · Bonded & Insured';

// ── globalVariables ──────────────────────────────────────────────────────────
w('src/app/globalVariables.scss', `// src/app/globalVariables.scss
// ─────────────────────────────────────────────────────────────────────────────
// PowerHold Generators — Brand Tokens
//
// THREE DISTINCT FONTS:
//   $titleFont  → Barlow Condensed  — bold condensed display (hero h1, section titles)
//   $headerFont → Outfit            — clean geometric sans   (nav, card titles, labels, CTAs)
//   $textFont   → Inter             — refined humanist sans  (body copy, form text, paragraphs)
//
// Usage guide:
//   h1, .hero headline              → $titleFont  (uppercase, tight tracking)
//   h2, h3, nav links, btn text     → $headerFont (medium weight, normal case)
//   p, label, input, small text     → $textFont   (regular/medium weight)
// ─────────────────────────────────────────────────────────────────────────────

$titleFont:  var(--font-barlow-condensed), 'Barlow Condensed', sans-serif;
$headerFont: var(--font-outfit),           'Outfit',           sans-serif;
$textFont:   var(--font-inter),            'Inter',            sans-serif;

// ── Core Palette ─────────────────────────────────────────────────────────────
$black:      #000000;
$obsidian:   #1c1917;
$blackflat:  #292524;
$white:      #FFFFFF;
$offwhite:   #fafaf9;

// Greys (stone-tinted)
$darkgrey:   #a8a29e;
$grey:       #78716c;
$lightgrey:  #e7e5e4;

// Brand Accent — electric yellow
$orange:     #facc15;
$lightorange:#fde047;
$darkorange: #ca8a04;

// Legacy aliases
$green:      $orange;
$lightgreen: $lightorange;
$darkgreen:  $darkorange;
$blue:       #1e6fa8;

// Error
$danger-red: #ef4444;
`);

// ── reviews ──────────────────────────────────────────────────────────────────
w('libs/local-db/reviews.ts', `// libs/local-db/reviews.ts
// Static testimonials for PowerHold Generators

export interface Review {
  name:     string;
  location: string;
  rating:   number;
  date:     string;
  text:     string;
  service?: string;
}

const reviews: Review[] = [
  {
    name:     'Marcus T.',
    location: 'Waco, TX',
    rating:   5,
    date:     'March 2026',
    service:  'Standby Generators',
    text:     "After the ice storm left us without power for three days, we called PowerHold. They sized a whole-home standby unit, installed the ATS, and walked us through the exercise schedule. Lights stayed on through the next outage. Highly recommend.",
  },
  {
    name:     'Sandra K.',
    location: 'Hewitt, TX',
    rating:   5,
    date:     'February 2026',
    service:  'Emergency Service',
    text:     "Generator wouldn't start during a blackout. PowerHold had a tech at our house the same afternoon, replaced a failed starter and dirty fuel filter, and got us back online before dark. Fair price, clear communication.",
  },
  {
    name:     'James R.',
    location: 'Woodway, TX',
    rating:   5,
    date:     'January 2026',
    service:  'Transfer Switches',
    text:     "Had three companies quote transfer switch installs. PowerHold was honest about the load calculation we actually needed — not just upselling the biggest ATS. Clean install, code-safe, and they trained us on the manual override.",
  },
  {
    name:     'Patricia L.',
    location: 'Temple, TX',
    rating:   5,
    date:     'December 2025',
    service:  'Load Calculations',
    text:     "They measured our critical circuits, recommended a right-sized standby unit, and saved us from buying something oversized. The layout advice for the pad was excellent. Worth every penny.",
  },
  {
    name:     'David M.',
    location: 'Killeen, TX',
    rating:   5,
    date:     'November 2025',
    service:  'Portable Generators',
    text:     "We needed a portable + interlock for our ranch workshop. PowerHold installed a proper interlock kit (no dryer-plug hack), labeled circuits, and tested under load. Professional from start to finish.",
  },
  {
    name:     'Angela W.',
    location: 'China Spring, TX',
    rating:   5,
    date:     'October 2025',
    service:  'Generator Maintenance',
    text:     "Signed up for their maintenance plan after years of ignoring oil changes and battery checks. Unit starts on the first crank every exercise cycle now. My go-to generator company for life.",
  },
  {
    name:     'Robert H.',
    location: 'Bellmead, TX',
    rating:   5,
    date:     'September 2025',
    service:  'Emergency Service',
    text:     "Storm took out power and our old unit failed to transfer. PowerHold diagnosed a transfer switch contact issue, fixed it same visit, and left with everything tested. No after-hours gouge.",
  },
  {
    name:     'Cheryl B.',
    location: 'McGregor, TX',
    rating:   5,
    date:     'August 2025',
    service:  'Standby Generators',
    text:     "Rhea's crew installed our Generac standby with propane. Pad, gas, ATS, and panel work all coordinated. 2-year workmanship and clear pricing. Thank you PowerHold.",
  },
];

export default reviews;
`);

// ── blog-posts ───────────────────────────────────────────────────────────────
w('libs/blog-posts.ts', `// libs/blog-posts.ts
export interface BlogPost {
  slug:      string;
  title:     string;
  excerpt:   string;
  category:  string;
  date:      string;
  readTime:  number;
  imageSrc:  string;
  imageAlt:  string;
  featured?: boolean;
}

const ALL_POSTS: BlogPost[] = [
  {
    slug:     'standby-vs-portable-generator',
    title:    'Standby vs Portable Generator: Which Is Right for Your Waco Home?',
    excerpt:  'Automatic whole-home backup or a portable unit with interlock? Compare cost, convenience, fuel, and safety for Central Texas outages.',
    category: 'Buying Guide',
    date:     'July 3, 2026',
    readTime: 7,
    imageSrc: '/pages/blogs/heat-pump.jpg',
    imageAlt: 'Standby vs portable generator comparison for Waco TX homeowners',
    featured: true,
  },
  {
    slug:     'how-to-size-home-generator',
    title:    'How to Size a Home Generator for Central Texas Loads',
    excerpt:  'HVAC, well pumps, freezers, and medical equipment — an honest guide to load calculations so you do not overbuy or undersize.',
    category: 'Installation',
    date:     'June 24, 2026',
    readTime: 6,
    imageSrc: '/pages/blogs/energy-savings.jpg',
    imageAlt: 'How to size a home generator guide for Waco TX',
  },
  {
    slug:     'generator-maintenance-schedule',
    title:    'Generator Maintenance Schedule: Keep Your Backup Ready Year-Round',
    excerpt:  'Oil, filters, batteries, exercise cycles, and load bank testing — the maintenance checklist that prevents failed starts during storms.',
    category: 'Maintenance',
    date:     'June 15, 2026',
    readTime: 8,
    imageSrc: '/pages/blogs/ac-replacement.jpg',
    imageAlt: 'Generator maintenance schedule for Central Texas homeowners',
  },
];

export function getAllPosts(): BlogPost[] { return ALL_POSTS; }
export function getRecentPosts(count: number = 3): BlogPost[] { return ALL_POSTS.slice(0, count); }
export function getFeaturedPost(): BlogPost { return ALL_POSTS.find((p) => p.featured) ?? ALL_POSTS[0]; }
export function getPostsByCategory(category: string): BlogPost[] { return ALL_POSTS.filter((p) => p.category.toLowerCase() === category.toLowerCase()); }
export function getPostBySlug(slug: string): BlogPost | undefined { return ALL_POSTS.find((p) => p.slug === slug); }
export function getAllCategories(): string[] { return Array.from(new Set(ALL_POSTS.map((p) => p.category))); }
export function getAllSlugs(): string[] { return ALL_POSTS.map((p) => p.slug); }
`);

// ── WelcomePage ──────────────────────────────────────────────────────────────
w('components/Pages/Home/WelcomePage/WelcomePage.tsx', `'use client';
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './styles.module.scss';

function ParticleCanvas() {
  const ref = useRef<HTMLCanvasElement>(null);
  useEffect(() => {
    const canvas = ref.current; if (!canvas) return;
    const ctx = canvas.getContext('2d'); if (!ctx) return;
    const resize = () => { canvas.width = canvas.offsetWidth; canvas.height = canvas.offsetHeight; };
    resize(); window.addEventListener('resize', resize);
    const pts = Array.from({ length: 38 }, () => ({
      x: Math.random() * canvas.width, y: Math.random() * canvas.height,
      r: Math.random() * 5 + 0.5, vx: (Math.random() - 0.5) * 3,
      vy: Math.random() * 0.25 + 0.06, o: Math.random() * 0.35 + 0.7,
      flake: Math.random() > 0.3,
    }));
    let raf: number;
    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      pts.forEach(p => {
        ctx.save(); ctx.globalAlpha = p.o;
        if (p.flake) {
          ctx.strokeStyle = '#facc15'; ctx.lineWidth = 0.6;
          ctx.translate(p.x, p.y);
          for (let i = 0; i < 6; i++) { ctx.rotate(Math.PI / 3); ctx.beginPath(); ctx.moveTo(0, 0); ctx.lineTo(0, p.r * 3.2); ctx.stroke(); }
        } else { ctx.fillStyle = '#facc15'; ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2); ctx.fill(); }
        ctx.restore();
        p.x += p.vx; p.y += p.vy;
        if (p.y > canvas.height + 10) { p.y = -10; p.x = Math.random() * canvas.width; }
        if (p.x < -10) p.x = canvas.width + 10;
        if (p.x > canvas.width + 10) p.x = -10;
      });
      raf = requestAnimationFrame(draw);
    };
    draw();
    return () => { cancelAnimationFrame(raf); window.removeEventListener('resize', resize); };
  }, []);
  return <canvas ref={ref} className={styles.particleCanvas} aria-hidden="true" />;
}

function PowerMeter() {
  const [fill, setFill] = useState(0);
  useEffect(() => { const t = setTimeout(() => setFill(92), 750); return () => clearTimeout(t); }, []);
  return (
    <div className={styles.thermo} aria-hidden="true">
      <div className={styles.thermoColumn}>
        <div className={styles.thermoTube}>
          <motion.div
            className={styles.thermoFill}
            initial={{ height: '0%' }}
            animate={{ height: \`\${fill}%\` }}
            transition={{ duration: 2.0, delay: 0.85, ease: [0.34, 1.2, 0.64, 1] }}
          />
        </div>
        <div className={styles.thermoBulb} />
      </div>
      <div className={styles.thermoLabels}>
        <span className={styles.thermoTop}>Online</span>
        <span className={styles.thermoMid}>Waco, TX</span>
        <span className={styles.thermoBot}>Backup</span>
      </div>
    </div>
  );
}

const CHIPS = ['Same-Day Service', 'No Contracts', 'TECL-Aligned', '15+ Yrs Local', 'Storm-Ready Guarantee'];

export default function WelcomePage() {
  return (
    <section className={styles.hero} aria-label="Hero">
      <ParticleCanvas />
      <div className={styles.shard} aria-hidden="true" />
      <div className={styles.layout}>
        <div className={styles.content}>
          <motion.div className={styles.badge}
            initial={{ opacity: 0, y: -12 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}>
            <span className={styles.badgeDot} />
            Waco&apos;s Trusted Generator Pros — Since 2011
          </motion.div>
          <motion.h1 className={styles.headline}
            initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}>
            Standby. Portable.<br />Transfer Switches.<br />
            <span className={styles.accentLine}>PowerHold.</span>
          </motion.h1>
          <motion.p className={styles.sub}
            initial={{ opacity: 0, y: 14 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.22 }}>
            Standby Generators · Install · Service · Transfer Switches. Flat-rate pricing. Same-day emergency service.
            {GUARANTEE}. Serving Waco and Central Texas with TECL-aligned installers.
          </motion.p>
          <motion.div className={styles.ctaRow}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}>
            <a href="${TEL}" className={styles.ctaPrimary}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.17 12a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call ${PHONE}
            </a>
            <Link href="/contact" className={styles.ctaSecondary}>
              Free Estimate
              <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <polyline points="9 18 15 12 9 6"/>
              </svg>
            </Link>
          </motion.div>
          <motion.div className={styles.chips}
            initial={{ opacity: 0 }} animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.45 }}>
            {CHIPS.map((c) => (
              <span key={c} className={styles.chip}>{c}</span>
            ))}
          </motion.div>
        </div>
        <div className={styles.visual} aria-hidden="true">
          <PowerMeter />
        </div>
      </div>
    </section>
  );
}
`);

// ── Header ───────────────────────────────────────────────────────────────────
w('components/GeneralComponents/Header/Header.tsx', `'use client';
import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from './styles.module.scss';

const NAV_LINKS = [
  { href: '/',              label: 'Home' },
  { href: '/services',      label: 'Services' },
  { href: '/service-areas', label: 'Service Areas' },
  { href: '/blogs',         label: 'Blog' },
  { href: '/about',         label: 'About' },
  { href: '/contact',       label: 'Contact' },
];

const MARQUEE_ITEMS = [
  'Same-Day Emergency Generator Service',
  'Storm-Ready Install Guarantee · 2-Year Workmanship',
  'Flat-Rate Pricing — No Surprises',
  '4.9★ Google Rating · 520+ Reviews',
  'TECL-Aligned Installers',
  'No Contracts — Ever',
  'Serving Central Texas Since 2011',
  'Licensed & Insured · Waco, TX',
];

export default function Header() {
  const pathname  = usePathname();
  const [scrolled,  setScrolled]  = useState(false);
  const [compact,   setCompact]   = useState(false);
  const [marqueeOn, setMarqueeOn] = useState(true);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const drawerRef   = useRef<HTMLDivElement>(null);
  const triggerRef  = useRef<HTMLButtonElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = document.body;
    let frame = 0;
    let prevScrolled  = false;
    let prevCompact   = false;
    let prevMarqueeOn = true;
    const update = () => {
      frame = 0;
      const y    = el.scrollTop;
      const docH = el.scrollHeight - el.clientHeight;
      const ratio = docH > 0 ? Math.min(1, Math.max(0, y / docH)) : 0;
      if (progressRef.current) progressRef.current.style.transform = \`scaleX(\${ratio})\`;
      const nextScrolled  = y > 10;
      const nextCompact   = y > 60;
      const nextMarqueeOn = y < 30;
      if (nextScrolled  !== prevScrolled)  { prevScrolled  = nextScrolled;  setScrolled(nextScrolled);   }
      if (nextCompact   !== prevCompact)   { prevCompact   = nextCompact;   setCompact(nextCompact);     }
      if (nextMarqueeOn !== prevMarqueeOn) { prevMarqueeOn = nextMarqueeOn; setMarqueeOn(nextMarqueeOn); }
    };
    const onScroll = () => { if (frame !== 0) return; frame = requestAnimationFrame(update); };
    update();
    el.addEventListener('scroll', onScroll, { passive: true });
    return () => { el.removeEventListener('scroll', onScroll); if (frame !== 0) cancelAnimationFrame(frame); };
  }, []);

  useEffect(() => {
    document.body.scrollTo({ top: 0, behavior: 'instant' as ScrollBehavior });
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    if (!menuOpen) return;
    const fn = (e: MouseEvent) => {
      if (drawerRef.current && !drawerRef.current.contains(e.target as Node) &&
          triggerRef.current && !triggerRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', fn);
    return () => document.removeEventListener('mousedown', fn);
  }, [menuOpen]);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  return (
    <header className={\`\${styles.header} \${scrolled ? styles.scrolled : ''} \${compact ? styles.compact : ''}\`}>
      <div className={\`\${styles.marquee} \${marqueeOn ? '' : styles.marqueeHidden}\`} aria-hidden={!marqueeOn}>
        <div className={styles.marqueeTrack}>
          {[...MARQUEE_ITEMS, ...MARQUEE_ITEMS].map((item, i) => (
            <span key={i} className={styles.marqueeItem}>{item}</span>
          ))}
        </div>
      </div>
      <div className={styles.bar}>
        <div className={styles.inner}>
          <Link href="/" className={styles.logo} aria-label="PowerHold Generators home">
            <span className={styles.logoMark}>
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </span>
            <div className={styles.logoText}>
              <span className={styles.logoName}>PowerHold Generators</span>
              <span className={styles.logoTagline}>Standby · Install · Transfer Switches</span>
            </div>
          </Link>
          <nav className={styles.nav} aria-label="Main">
            {NAV_LINKS.map(({ href, label }) => (
              <Link key={href} href={href} className={\`\${styles.navLink} \${pathname === href ? styles.active : ''}\`}>
                {label}
              </Link>
            ))}
          </nav>
          <a href="${TEL}" className={styles.callBtn}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.17 12a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
            </svg>
            ${PHONE}
          </a>
          <button ref={triggerRef} className={styles.menuBtn} aria-label="Open menu" aria-expanded={menuOpen} onClick={() => setMenuOpen(v => !v)}>
            <span /><span /><span />
          </button>
        </div>
        <div ref={progressRef} className={styles.progress} aria-hidden="true" />
      </div>
      <div ref={drawerRef} className={\`\${styles.drawer} \${menuOpen ? styles.drawerOpen : ''}\`}>
        <div className={styles.drawerHead}>
          <span className={styles.drawerBrand}>PowerHold Generators</span>
          <button className={styles.drawerClose} aria-label="Close menu" onClick={() => setMenuOpen(false)}>×</button>
        </div>
        <nav className={styles.drawerNav}>
          {NAV_LINKS.map(({ href, label }) => (
            <Link key={href} href={href} className={styles.drawerLink} onClick={() => setMenuOpen(false)}>{label}</Link>
          ))}
        </nav>
        <a href="${TEL}" className={styles.drawerCallBtn} onClick={() => setMenuOpen(false)}>
          Call ${PHONE}
        </a>
      </div>
      {menuOpen && <div className={styles.overlay} onClick={() => setMenuOpen(false)} aria-hidden="true" />}
    </header>
  );
}
`);

console.log('batch 1 core done');
