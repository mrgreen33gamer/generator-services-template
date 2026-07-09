'use client';
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
            animate={{ height: `${fill}%` }}
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
            Storm-Ready Install Guarantee · 2-Year Workmanship. Serving Waco and Central Texas with TECL-aligned installers.
          </motion.p>
          <motion.div className={styles.ctaRow}
            initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.34 }}>
            <a href="tel:+12549912121" className={styles.ctaPrimary}>
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.17 12a19.79 19.79 0 0 1-3.07-8.63A2 2 0 0 1 3.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
              </svg>
              Call (254) 991-2121
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
