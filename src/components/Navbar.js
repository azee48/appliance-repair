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
          <svg className={styles.logoIcon} viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
            <rect width="32" height="32" rx="8" fill="#E85D04"/>
            <path d="M22.5 9.5C20.6 7.6 17.8 7.1 15.4 8.2L18.5 11.3L17.1 14.6L13.8 16L10.7 12.9C9.6 15.3 10.1 18.1 12 20C13.7 21.7 16.1 22.3 18.3 21.6L23.5 26.8C24.3 27.6 25.6 27.6 26.4 26.8C27.2 26 27.2 24.7 26.4 23.9L21.2 18.7C21.9 16.5 21.3 14.1 22.5 9.5Z" fill="white"/>
            <circle cx="11" cy="11" r="3" fill="white" fillOpacity="0.3"/>
          </svg>
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
