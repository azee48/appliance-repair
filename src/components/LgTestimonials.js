"use client";

import { Star } from 'lucide-react';
import styles from './Testimonials.module.css'; // Reusing CSS from Testimonials
import { trackCallConversion } from '@/lib/gtag';

const reviews = [
  {
    text: "Fantastic service! My LG refrigerator stopped cooling on a Friday evening, and they were here within hours. The technician knew exactly how to fix the LG linear compressor. Highly recommended!",
    author: "Sarah M.",
  },
  {
    text: "Very professional team. I had an LE error code on my LG front-load washer. They had the precise part needed on the truck and fixed my washing machine fast.",
    author: "James T.",
  },
  {
    text: "The technician knew exactly what the problem was with my LG oven before he even took it apart. Cleaned up after himself and left everything working perfectly. 5 stars all the way.",
    author: "Linda R.",
  }
];

export default function LgTestimonials() {
  return (
    <section className={`section-padding ${styles.testimonialSection}`}>
      <div className={`container ${styles.container}`}>
        <h2 className={`text-center ${styles.title}`}>What Our LG Customers Say</h2>
        
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
            Call For LG Repair: (978) 915-3780
          </a>
        </div>
      </div>
    </section>
  );
}
