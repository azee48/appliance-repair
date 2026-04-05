"use client";

import { Phone } from 'lucide-react';
import styles from './HeroSection.module.css';
import { trackCallConversion } from '@/lib/gtag';

export default function LgHeroSection() {
  return (
    <section className={styles.hero}>
      <div className={styles.overlay}></div>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <div className={styles.badge}>
            <div className={styles.dot}></div>
            LG Certified Experts in MA
          </div>
          <h1 className={styles.title}>
            Fast & Reliable LG Appliance Repair
          </h1>
          <p className={styles.subtitle}>
            LG linear compressor failure? LE error code on your washer? Don't let a broken LG appliance ruin your day. Call our licensed local experts now for fast, same-day repair.
          </p>
          <div className={styles.ctaGroup}>
            <a onClick={trackCallConversion} href="tel:8665656212" className={`btn btn-primary ${styles.ctaBtn}`}>
              <Phone size={24} className={styles.icon} />
              Call For LG Repair: (866) 565-6212
            </a>
            <p className={styles.trustText}>
              ✓ LG Specialists ✓ Same-Day Service
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
