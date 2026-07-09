// components/PageComponents/AuthorBio/AuthorBio.tsx
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
