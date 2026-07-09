// Variant4 contact form — PowerHold Generators
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
    trackEvent({ eventType: 'click', elementLabel: `Variant4 Continue — ${selectedService}`, section: spot, serviceType: selectedService });
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
      setError('Something went wrong. Please call us at (254) 991-2121.');
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
                  className={`${styles.serviceCard} ${selectedService === label ? styles.selected : ''}`}
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
