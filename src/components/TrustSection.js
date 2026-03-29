import { ShieldCheck, Users, Banknote } from 'lucide-react';
import styles from './TrustSection.module.css';

const trustFactors = [
  {
    icon: ShieldCheck,
    title: 'Same-Day Response',
    desc: 'When an appliance breaks down, act fast to get it online.'
  },
  {
    icon: Users,
    title: 'Professional Technicians',
    desc: 'Highly trained professionals you can trust with your appliances.'
  },
  {
    icon: Banknote,
    title: 'Transparent Pricing',
    desc: 'Always know what you pay up front, with no hidden fees.'
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
          <a href="tel:9789153780" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.25rem', fontWeight: 'bold', width: '100%', maxWidth: '400px', boxShadow: '0 4px 14px 0 rgba(255, 107, 0, 0.39)' }}>
            Get Same-Day Service: (978) 915-3780
          </a>
        </div>
      </div>
    </section>
  );
}
