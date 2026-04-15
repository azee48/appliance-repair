"use client";

import { Phone } from 'lucide-react';
import styles from './HeroSection.module.css';
import { trackCallConversion } from '@/lib/gtag';

export default function HeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={styles.badge}>
            Certified Licensed Technicians
          </div>
          <h1 className={styles.title}>
            Same Day Appliance Repair
          </h1>
          <p className={styles.subtitle}>
            Don't let a broken appliance ruin your day. Call our licensed local experts now for fast, same-day repair service.
          </p>
          <div className={styles.ctaGroup}>
            <a onClick={trackCallConversion} href="tel:8665656212" className={`btn btn-primary ${styles.ctaBtn}`}>
              <Phone size={24} className={styles.icon} />
              Call Now: (866) 565-6212
            </a>
            <p className={styles.trustText}>
              ✓ No Hidden Fees ✓ Local Technicians
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
