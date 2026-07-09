import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');

function walk(dir, out = []) {
  for (const ent of fs.readdirSync(dir, { withFileTypes: true })) {
    if (['node_modules', '.next', '.git'].includes(ent.name)) continue;
    const p = path.join(dir, ent.name);
    if (ent.isDirectory()) walk(p, out);
    else if (/\.(tsx?|jsx?|scss|css)$/.test(ent.name)) out.push(p);
  }
  return out;
}

const pairs = [
  ['Summit Door Pros', 'PowerHold Generators'],
  ['SUMMIT DOOR PROS', 'POWERHOLD GENERATORS'],
  ['summitdoorpros.com', 'powerholdgenerators.com'],
  ['summitdoorpros', 'powerholdgenerators'],
  ['Marcus Hale', 'Rhea Colton'],
  ['Mike Hawkins', 'Rhea Colton'],
  ['Arctic Air HVAC', 'PowerHold Generators'],
  ['Arctic Air', 'PowerHold'],
  ['arcticairhvac.com', 'powerholdgenerators.com'],
  ['https://www.scottapplications.com', 'https://www.powerholdgenerators.com'],
  ["authorName = 'Scott Applications'", "authorName = 'PowerHold Generators'"],
  ['Admin — Scott Applications', 'Admin — PowerHold Generators'],
  ['Admin - Scott Applications', 'Admin - PowerHold Generators'],
  ['Admin — Summit Door Pros', 'Admin — PowerHold Generators'],
  ["we're your local HVAC team", "we're your local generator team"],
  ['local HVAC team', 'local generator team'],
  ['#f97316', '#facc15'],
  ['(254) 720-1100', '(254) 991-2121'],
  ['254-720-1100', '254-991-2121'],
  ['+12547201100', '+12549912121'],
  ['(254) 900-1234', '(254) 991-2121'],
  ['+12549001234', '+12549912121'],
  ['China Component', 'China Spring'],
  ['IDA-Trained', 'TECL-Aligned'],
  ['IDA-trained', 'TECL-aligned'],
  ['NATE Certified', 'TECL-Aligned'],
  ['NATE-certified', 'TECL-aligned'],
  ['Garage door / lights', 'Doors & lights'],
  ['Lifetime Spring Warranty + 2-Year Workmanship', 'Storm-Ready Install Guarantee · 2-Year Workmanship'],
  ['Lifetime Spring Warranty', 'Storm-Ready Install Guarantee'],
  ['admin@powerholdgenerators.com', 'admin@powerholdgenerators.com'], // no-op keep
  ['admin@scottapps.com', 'admin@powerholdgenerators.com'],
  ['Scott Applications HQ', 'PowerHold Generators HQ'],
  ['eyebrow}>Scott Applications', 'eyebrow}>PowerHold Generators'],
  ['span>Scott Applications', 'span>PowerHold Generators'],
];

let n = 0;
for (const f of walk(ROOT)) {
  if (f.includes(`${path.sep}scripts${path.sep}`)) continue;
  let t = fs.readFileSync(f, 'utf8');
  const o = t;
  for (const [a, b] of pairs) t = t.split(a).join(b);
  if (t !== o) {
    fs.writeFileSync(f, t);
    n++;
    console.log('fixed', path.relative(ROOT, f));
  }
}
console.log('files changed', n);

// AuthorBio clean write
fs.writeFileSync(path.join(ROOT, 'components/PageComponents/AuthorBio/AuthorBio.tsx'), `// components/PageComponents/AuthorBio/AuthorBio.tsx
"use client";
import Image from "next/image";
import styles from "./styles.module.scss";
import { useTrackEvent } from '&/useTrackEvent';

interface AuthorBioProps {
  cityName:  string;
  imageSrc?: string;
  imageAlt?: string;
}

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Rhea Colton",
  jobTitle: "Owner",
  worksFor: {
    "@type": "Organization",
    name: "PowerHold Generators",
    url: "https://www.powerholdgenerators.com",
  },
  url: "https://www.powerholdgenerators.com/about",
  sameAs: [
    "https://www.facebook.com/powerholdgenerators",
    "https://www.powerholdgenerators.com",
  ],
  knowsAbout: [
    "Standby Generators", "Transfer Switches", "Portable Generators",
    "Generator Maintenance", "Load Calculations", "Central Texas Backup Power",
  ],
  description:
    "Owner of PowerHold Generators in Waco, TX. TECL-aligned installers with 15+ years powering Central Texas homes and businesses. Flat-rate pricing, Storm-Ready Install Guarantee · 2-Year Workmanship.",
};

const AuthorBio: React.FC<AuthorBioProps> = ({
  cityName,
  imageSrc = "/pages/seo-template-resources/owner.jpg",
  imageAlt = "Rhea Colton - Owner of PowerHold Generators",
}) => {
  const trackEvent = useTrackEvent();

  return (
    <section className={styles.authorBio} aria-label="About the Author">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
      />
      <div className={styles.card}>
        <div className={styles.imageWrap}>
          <Image src={imageSrc} alt={imageAlt} fill sizes="120px" className={styles.image} />
        </div>
        <div className={styles.body}>
          <p className={styles.eyebrow}>About the Author</p>
          <h3 className={styles.name}>Rhea Colton</h3>
          <p className={styles.role}>Owner · PowerHold Generators</p>
          <p className={styles.bio}>
            Rhea founded PowerHold Generators in Waco in 2011 to bring honest, code-safe backup power to Central Texas.
            Serving {cityName} and surrounding communities with standby generators, transfer switches, and emergency service.
          </p>
          <a
            href="https://www.facebook.com/powerholdgenerators"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.social}
            onClick={() => trackEvent({ eventType: 'click', elementLabel: 'Author Facebook', section: 'AuthorBio' })}
          >
            Follow on Facebook
          </a>
        </div>
      </div>
    </section>
  );
};
export default AuthorBio;
`);
console.log('AuthorBio written');
