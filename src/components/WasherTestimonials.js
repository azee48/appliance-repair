"use client";

import { Star } from 'lucide-react';
import styles from './Testimonials.module.css';
import { trackCallConversion } from '@/lib/gtag';

const reviews = [
  {
    text: "Fantastic service! My front-load washer stopped draining on a Friday evening, and they were here within hours. The technician was polite and had the drain pump on hand. Highly recommended!",
    author: "Sarah M.",
  },
  {
    text: "Very professional team. My washing machine was shaking violently. They had it balanced and fixed with new shock absorbers fast and gave a transparent price upfront.",
    author: "James T.",
  },
  {
    text: "The technician knew exactly what the LE error code meant on my LG washer before he even took it apart. Cleaned up after himself and left it running perfectly. 5 stars.",
    author: "Linda R.",
  }
];

export default function Testimonials() {
  return (
    <section className={`section-padding ${styles.testimonialSection}`}>
      <div className={`container ${styles.container}`}>
        <h2 className={`text-center ${styles.title}`}>What Our Customers Say</h2>
        
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
            Schedule Your Repair: (866) 565-6212
          </a>
        </div>
      </div>
    </section>
  );
}
