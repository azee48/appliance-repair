"use client";

import { ShieldCheck, Users, Banknote } from 'lucide-react';
import styles from './TrustSection.module.css';
import { trackCallConversion } from '@/lib/gtag';

const trustFactors = [
  {
    icon: ShieldCheck,
    title: 'LG-Trained Technicians',
    desc: 'Our techs are specifically trained on LG Smart Diagnosis and carry a full stock of genuine LG parts — most repairs done in one visit.'
  },
  {
    icon: Users,
    title: 'Same-Day LG Repair',
    desc: 'We know LG error codes inside out. Call before noon and we can often have your LG washer running again by end of day.'
  },
  {
    icon: Banknote,
    title: 'Transparent LG Pricing',
    desc: 'Flat-rate diagnosis fee credited toward your repair. No surprise charges — just honest pricing for genuine LG parts and labor.'
  }
];

export default function LgWasherTrustSection() {
  return (
    <section className={`section-padding ${styles.trustSection}`}>
      <div className={`container ${styles.container}`}>
        <h2 className={`text-center ${styles.title}`}>Why LG Owners Choose Us</h2>

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
            Get Same-Day LG Repair: (866) 565-6212
          </a>
        </div>
      </div>
    </section>
  );
}
