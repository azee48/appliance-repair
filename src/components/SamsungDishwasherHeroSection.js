"use client";

import { Phone } from 'lucide-react';
import styles from './HeroSection.module.css';
import { trackCallConversion } from '@/lib/gtag';

export default function SamsungDishwasherHeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <div className={styles.dot}></div>
            Samsung Certified Technicians — Same-Day Service in MA
          </div>
          <h1 className={styles.title}>
            Samsung Dishwasher Repair — Fixed Today
          </h1>
          <p className={styles.subtitle}>
            HE, 7E, or LC error? Not draining? Leaving dishes dirty? Our Samsung-trained technicians carry genuine OEM parts and fix most machines in a single visit.
          </p>
          <div className={styles.ctaGroup}>
            <a onClick={trackCallConversion} href="tel:9789153780" className={`btn btn-primary ${styles.ctaBtn}`}>
              <Phone size={24} className={styles.icon} />
              Call Now: (978) 915-3780
            </a>
            <p className={styles.trustText}>
              ✓ Samsung Experts ✓ Same-Day Parts ✓ No Hidden Fees
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
