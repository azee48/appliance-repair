"use client";

import Link from 'next/link';
import { Phone } from 'lucide-react';
import styles from './Navbar.module.css';
import { trackCallConversion } from '@/lib/gtag';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}></div>
          <span className={styles.logoText}>HomeFix Appliance Repair</span>
        </Link>
        <div className={styles.actions}>
          <a onClick={trackCallConversion} href="tel:8665656212" className={`btn btn-primary ${styles.cta}`}>
            <Phone size={18} className={styles.phoneIcon} />
            CALL (866) 565-6212
          </a>
        </div>
      </div>
    </nav>
  );
}
