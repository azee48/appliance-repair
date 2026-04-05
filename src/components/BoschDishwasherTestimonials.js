"use client";

import { Star } from 'lucide-react';
import styles from './Testimonials.module.css';
import { trackCallConversion } from '@/lib/gtag';

const reviews = [
  {
    text: "My Bosch 800 Series was showing an E15 error and had water pooling in the bottom. The technician came out same day, found a cracked hose fitting, replaced it on the spot. Incredibly fast and professional.",
    author: "Rachel K.",
  },
  {
    text: "My Bosch 500 Series stopped draining after a cycle. Tech arrived within hours, cleared a chunk of glass stuck in the drain pump impeller, and had it running perfectly. Great experience — highly recommend.",
    author: "Tom B.",
  },
  {
    text: "Dishes were coming out wet and cloudy from my Bosch Benchmark. The heating element had failed. Technician had the exact OEM part in his truck and fixed it in one visit. Back to spotless dishes overnight.",
    author: "Catherine H.",
  }
];

export default function BoschDishwasherTestimonials() {
  return (
    <section className={`section-padding ${styles.testimonialSection}`}>
      <div className={`container ${styles.container}`}>
        <h2 className={`text-center ${styles.title}`}>What Bosch Dishwasher Owners Say</h2>

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
            Schedule Your Bosch Repair: (866) 565-6212
          </a>
        </div>
      </div>
    </section>
  );
}
