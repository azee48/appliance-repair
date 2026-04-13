"use client";

import styles from './ServiceArea.module.css';
import { trackCallConversion } from '@/lib/gtag';

const cities = [
  // New York
  'New York City, NY', 'Brooklyn, NY', 'Queens, NY', 'The Bronx, NY', 'Buffalo, NY', 'Yonkers, NY',
  // New Jersey
  'Newark, NJ', 'Jersey City, NJ', 'Paterson, NJ', 'Elizabeth, NJ', 'Trenton, NJ',
  // Connecticut
  'Bridgeport, CT', 'New Haven, CT', 'Hartford, CT', 'Stamford, CT',
  // Massachusetts
  'Boston, MA', 'Worcester, MA', 'Springfield, MA', 'Cambridge, MA', 'Lowell, MA',
  // Pennsylvania
  'Philadelphia, PA', 'Pittsburgh, PA', 'Allentown, PA', 'Erie, PA',
  // Maryland
  'Baltimore, MD', 'Rockville, MD', 'Frederick, MD',
  // Virginia
  'Virginia Beach, VA', 'Norfolk, VA', 'Arlington, VA', 'Richmond, VA',
  // Florida
  'Miami, FL', 'Orlando, FL', 'Tampa, FL', 'Jacksonville, FL', 'Fort Lauderdale, FL',
  // Georgia
  'Atlanta, GA', 'Augusta, GA', 'Columbus, GA', 'Savannah, GA',
  // Texas
  'Houston, TX', 'Dallas, TX', 'San Antonio, TX', 'Austin, TX', 'Fort Worth, TX',
  // California
  'Los Angeles, CA', 'San Diego, CA', 'San Jose, CA', 'San Francisco, CA', 'Fresno, CA',
  // Illinois
  'Chicago, IL', 'Aurora, IL', 'Naperville, IL', 'Rockford, IL',
];

export default function ServiceArea() {
  return (
    <section className={`section-padding ${styles.serviceArea}`}>
      <div className={`container ${styles.container}`}>
        <h2 className={`text-center ${styles.title}`}>Our Service Areas</h2>
        <p className={`text-center ${styles.subtitle}`}>
          We connect you with top-rated appliance repair professionals across <strong>major metros nationwide</strong>:
        </p>
        
        <div className={styles.cities}>
          {cities.map((city, idx) => (
            <span key={idx} className={styles.cityPill}>{city}</span>
          ))}
        </div>
        <div className={styles.bottomText}>
          <p>Don't see your city? <strong>Call us</strong> — we likely have a pro near you.</p>
        </div>
        
        <div className="text-center" style={{ marginTop: '3rem' }}>
          <a onClick={trackCallConversion} href="tel:8665656212" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.25rem', fontWeight: 'bold', width: '100%', maxWidth: '400px', boxShadow: '0 4px 14px 0 rgba(255, 107, 0, 0.39)' }}>
            Call Now: (866) 565-6212
          </a>
        </div>
      </div>
    </section>
  );
}
