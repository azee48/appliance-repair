"use client";

import { Phone } from 'lucide-react';
import styles from './HeroSection.module.css';
import { trackCallConversion } from '@/lib/gtag';

export default function LgWasherHeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <div className={styles.dot}></div>
            LG Certified Technicians — Same-Day Service in MA
          </div>
          <h1 className={styles.title}>
            LG Washer Repair — Fixed Today
          </h1>
          <p className={styles.subtitle}>
            LG error code? Won't spin? Leaking? Our LG-trained technicians carry genuine LG parts and fix most machines in a single visit.
          </p>
          <div className={styles.ctaGroup}>
            <a onClick={trackCallConversion} href="tel:8665656212" className={`btn btn-primary ${styles.ctaBtn}`}>
              <Phone size={24} className={styles.icon} />
              Call Now: (866) 565-6212
            </a>
            <p className={styles.trustText}>
              ✓ LG Certified ✓ Same-Day Parts ✓ No Hidden Fees
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
