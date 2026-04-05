"use client";

import { ShieldCheck, Users, Banknote } from 'lucide-react';
import styles from './TrustSection.module.css';
import { trackCallConversion } from '@/lib/gtag';

const trustFactors = [
  {
    icon: ShieldCheck,
    title: 'Same-Day Response',
    desc: 'When your washer breaks down, act fast to get your laundry routine back online.'
  },
  {
    icon: Users,
    title: 'Professional Technicians',
    desc: 'Highly trained professionals you can trust with your front-load and top-load machines.'
  },
  {
    icon: Banknote,
    title: 'Transparent Pricing',
    desc: 'Always know what you pay up front, with no hidden fees for diagnostics or parts.'
  }
];

export default function TrustSection() {
  return (
    <section className={`section-padding ${styles.trustSection}`}>
      <div className={`container ${styles.container}`}>
        <h2 className={`text-center ${styles.title}`}>Why Homeowners Trust Us</h2>
        
        <div className={styles.grid}>
          {trustFactors.map((factor, idx) => {
            const Icon = factor.icon;
            return (
              <div key={idx} className={styles.card}>
                <Icon size={32} className={styles.icon} />
                <h3 className={styles.cardTitle}>{factor.title}</h3>
                <p className={styles.cardDesc}>{factor.desc}</p>
              </div>
            );
          })}
        </div>
        
        <div className="text-center" style={{ marginTop: '3rem' }}>
          <a onClick={trackCallConversion} href="tel:8665656212" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.25rem', fontWeight: 'bold', width: '100%', maxWidth: '400px', boxShadow: '0 4px 14px 0 rgba(255, 107, 0, 0.39)' }}>
            Get Same-Day Service: (866) 565-6212
          </a>
        </div>
      </div>
    </section>
  );
}
