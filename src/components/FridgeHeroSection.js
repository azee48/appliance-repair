"use client";

import { Phone } from 'lucide-react';
import styles from './HeroSection.module.css';
import fridgeStyles from './FridgeHeroSection.module.css';
import { trackCallConversion } from '@/lib/gtag';

export default function FridgeHeroSection() {
  return (
    <section className={`${styles.hero} ${fridgeStyles.hero}`}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <div className={styles.dot}></div>
            Same-Day Service Available in MA
          </div>
          <h1 className={styles.title}>
            Fast &amp; Reliable Fridge Repair
          </h1>
          <p className={styles.subtitle}>
            Don&apos;t let a broken refrigerator spoil your food. Call our licensed local experts now for fast, same-day repair on all fridge types.
          </p>
          <div className={styles.ctaGroup}>
            <a onClick={trackCallConversion} href="tel:8665656212" className={`btn btn-primary ${styles.ctaBtn}`}>
              <Phone size={24} className={styles.icon} />
              Call Now: (866) 565-6212
            </a>
            <p className={styles.trustText}>
              ✓ No Hidden Fees &nbsp;✓ Local Technicians
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
