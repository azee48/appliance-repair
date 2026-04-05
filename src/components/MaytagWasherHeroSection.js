"use client";

import { Phone } from 'lucide-react';
import styles from './HeroSection.module.css';
import { trackCallConversion } from '@/lib/gtag';

export default function MaytagWasherHeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <div className={styles.dot}></div>
            Maytag Certified Technicians — Same-Day Service in MA
          </div>
          <h1 className={styles.title}>
            Maytag Washer Repair — Fixed Today
          </h1>
          <p className={styles.subtitle}>
            F code? Won't agitate? Loud banging or leaking? Our Maytag-trained technicians carry genuine OEM parts and fix most machines in a single visit.
          </p>
          <div className={styles.ctaGroup}>
            <a onClick={trackCallConversion} href="tel:8665656212" className={`btn btn-primary ${styles.ctaBtn}`}>
              <Phone size={24} className={styles.icon} />
              Call Now: (866) 565-6212
            </a>
            <p className={styles.trustText}>
              ✓ Maytag Experts ✓ Same-Day Parts ✓ No Hidden Fees
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
