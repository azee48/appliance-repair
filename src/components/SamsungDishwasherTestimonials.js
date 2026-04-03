"use client";

import { Star } from 'lucide-react';
import styles from './Testimonials.module.css';
import { trackCallConversion } from '@/lib/gtag';

const reviews = [
  {
    text: "My Samsung StormWash was showing an LC error and had water leaking under the unit. They came the same day, found a cracked door gasket, replaced it with an OEM part, and had it back running perfectly. Incredible service!",
    author: "Priya S.",
  },
  {
    text: "The WaterWall mechanism on my Samsung stopped moving and was throwing a 7E code. The tech knew exactly what it was without even looking it up — replaced the sensor and reflector strip in under 90 minutes. Highly recommend.",
    author: "Derek M.",
  },
  {
    text: "My Samsung dishwasher wouldn't drain and was showing a 5C code. Tech came out fast, cleared a bone lodged in the drain pump, cleaned the filter, and tested two full cycles before leaving. Very thorough and professional.",
    author: "Angela C.",
  }
];

export default function SamsungDishwasherTestimonials() {
  return (
    <section className={`section-padding ${styles.testimonialSection}`}>
      <div className={`container ${styles.container}`}>
        <h2 className={`text-center ${styles.title}`}>What Samsung Dishwasher Owners Say</h2>

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
          <a onClick={trackCallConversion} href="tel:9789153780" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.25rem', fontWeight: 'bold', width: '100%', maxWidth: '400px', boxShadow: '0 4px 14px 0 rgba(255, 107, 0, 0.39)' }}>
            Schedule Your Samsung Repair: (978) 915-3780
          </a>
        </div>
      </div>
    </section>
  );
}
