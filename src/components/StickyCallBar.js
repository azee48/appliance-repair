"use client";

import { Phone } from 'lucide-react';
import styles from './StickyCallBar.module.css';
import { trackCallConversion } from '@/lib/gtag';

export default function StickyCallBar() {
  return (
    <div className={styles.stickyBar}>
      <a onClick={trackCallConversion} href="tel:9789153780" className={styles.callButton}>
        <div className={styles.pulseRing}></div>
        <Phone size={24} className={styles.icon} />
        <span className={styles.text}>
          <span className={styles.sub}>Click to Call for Same-Day Repair</span>
          <strong>(978) 915-3780</strong>
        </span>
      </a>
    </div>
  );
}
