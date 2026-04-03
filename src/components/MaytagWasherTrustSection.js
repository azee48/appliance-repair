"use client";

import { ShieldCheck, Users, Banknote } from 'lucide-react';
import styles from './TrustSection.module.css';
import { trackCallConversion } from '@/lib/gtag';

const trustFactors = [
  {
    icon: ShieldCheck,
    title: 'Maytag-Trained Technicians',
    desc: 'Our techs are trained on Maytag\'s entire washer platform and carry a full stock of genuine OEM parts — most repairs done in one visit.'
  },
  {
    icon: Users,
    title: 'Same-Day Maytag Repair',
    desc: 'We know every Maytag fault code inside out. Call before noon and we can often have your Maytag washer running again by end of day.'
  },
  {
    icon: Banknote,
    title: 'Transparent Pricing',
    desc: 'Flat-rate diagnosis fee credited toward your repair. No surprise charges — just honest pricing for genuine Maytag parts and labor.'
  }
];

export default function MaytagWasherTrustSection() {
  return (
    <section className={`section-padding ${styles.trustSection}`}>
      <div className={`container ${styles.container}`}>
        <h2 className={`text-center ${styles.title}`}>Why Maytag Owners Choose Us</h2>

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
          <a onClick={trackCallConversion} href="tel:9789153780" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.25rem', fontWeight: 'bold', width: '100%', maxWidth: '400px', boxShadow: '0 4px 14px 0 rgba(255, 107, 0, 0.39)' }}>
            Get Same-Day Maytag Repair: (978) 915-3780
          </a>
        </div>
      </div>
    </section>
  );
}
