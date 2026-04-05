"use client";

import { Star } from 'lucide-react';
import styles from './Testimonials.module.css';
import { trackCallConversion } from '@/lib/gtag';

const reviews = [
  {
    text: "My LG front-load washer was throwing an OE code and wouldn't drain. They came out the same day, cleared the pump, and had it running perfectly within an hour. Amazing service!",
    author: "Maria G.",
  },
  {
    text: "LG TwinWash unit stopped spinning mid-cycle. The technician used the Smart Diagnosis app on the spot, identified the motor issue, and had the right part in his truck. Done in one visit.",
    author: "Kevin L.",
  },
  {
    text: "Called about an LE error on my LG washer. Super knowledgeable — explained it was the hall sensor, showed me the part, replaced it and tested before leaving. Extremely professional.",
    author: "Diane W.",
  }
];

export default function LgWasherTestimonials() {
  return (
    <section className={`section-padding ${styles.testimonialSection}`}>
      <div className={`container ${styles.container}`}>
        <h2 className={`text-center ${styles.title}`}>What LG Washer Owners Say</h2>

        <div className={styles.grid}>
          {reviews.map((review, idx) => (
            <div key={idx} className={styles.card}>
              <div className={styles.stars}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={20} className={styles.starIcon} fill="currentColor" />
                ))}
              </div>
              <p className={styles.text}>"{review.text}"</p>
              <p className={styles.author}>- {review.author}</p>
            </div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: '3rem' }}>
          <a onClick={trackCallConversion} href="tel:8665656212" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.25rem', fontWeight: 'bold', width: '100%', maxWidth: '400px', boxShadow: '0 4px 14px 0 rgba(255, 107, 0, 0.39)' }}>
            Schedule Your LG Repair: (866) 565-6212
          </a>
        </div>
      </div>
    </section>
  );
}
