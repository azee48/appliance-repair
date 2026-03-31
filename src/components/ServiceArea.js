"use client";

import styles from './ServiceArea.module.css';
import { trackCallConversion } from '@/lib/gtag';

const cities = [
  'Cambridge', 'Newton', 'Somerville', 'Framingham', 
  'Waltham', 'Quincy', 'Brookline', 'Weymouth', 
  'Braintree', 'Dedham', 'Norwood', 'Wellesley'
];

export default function ServiceArea() {
  return (
    <section className={`section-padding ${styles.serviceArea}`}>
      <div className={`container ${styles.container}`}>
        <h2 className={`text-center ${styles.title}`}>Our Service Area</h2>
        <p className={`text-center ${styles.subtitle}`}>
          We proudly provide fast, same-day appliance repair across <strong>Middlesex</strong> and <strong>Norfolk</strong> counties:
        </p>
        
        <div className={styles.cities}>
          {cities.map((city, idx) => (
            <span key={idx} className={styles.cityPill}>{city}</span>
          ))}
        </div>
        <div className={styles.bottomText}>
          <p>Don't see your city listed? <strong>Contact us</strong> to see if we service your area.</p>
        </div>
        
        <div className="text-center" style={{ marginTop: '3rem' }}>
          <a onClick={trackCallConversion} href="tel:9789153780" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.25rem', fontWeight: 'bold', width: '100%', maxWidth: '400px', boxShadow: '0 4px 14px 0 rgba(255, 107, 0, 0.39)' }}>
            Call Now: (978) 915-3780
          </a>
        </div>
      </div>
    </section>
  );
}
