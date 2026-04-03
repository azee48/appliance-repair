"use client";

import { Star } from 'lucide-react';
import styles from './Testimonials.module.css';
import { trackCallConversion } from '@/lib/gtag';

const reviews = [
  {
    text: "My Maytag Bravos top-loader was stuck mid-cycle and showing an F5 error. They came out the same day, replaced the lid lock assembly, and had it running perfectly. Super fast and professional!",
    author: "Sandra M.",
  },
  {
    text: "My Maytag Maxima front-loader was making a horrible banging noise during the spin cycle. The tech found a broken drum bearing, had the part on his truck, and fixed it in under 2 hours.",
    author: "James T.",
  },
  {
    text: "Called about my Maytag Centennial not draining. They showed up on time, cleared a sock blocking the pump filter, and cleaned everything up. Honest pricing and great communication throughout.",
    author: "Lisa R.",
  }
];

export default function MaytagWasherTestimonials() {
  return (
    <section className={`section-padding ${styles.testimonialSection}`}>
      <div className={`container ${styles.container}`}>
        <h2 className={`text-center ${styles.title}`}>What Maytag Washer Owners Say</h2>

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
            Schedule Your Maytag Repair: (978) 915-3780
          </a>
        </div>
      </div>
    </section>
  );
}
