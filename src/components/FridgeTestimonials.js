"use client";

import { Star } from 'lucide-react';
import styles from './Testimonials.module.css';
import { trackCallConversion } from '@/lib/gtag';

const reviews = [
  {
    text: "My fridge stopped cooling overnight and I was worried about losing everything. They sent a tech out the same morning, diagnosed a faulty compressor relay, and had it fixed in under an hour. Truly saved the day!",
    author: "Maria G.",
  },
  {
    text: "The ice maker on my Samsung fridge had been broken for weeks. The technician came out within hours of my call, replaced the ice maker module, and everything has worked perfectly since. Very professional.",
    author: "Kevin L.",
  },
  {
    text: "I noticed a big puddle under my fridge on a Sunday. Called and they still came out same day. Turned out to be a clogged defrost drain — super easy fix for them. Very honest, no upselling, fair price.",
    author: "Donna P.",
  }
];

export default function FridgeTestimonials() {
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
              <p className={styles.text}>&ldquo;{review.text}&rdquo;</p>
              <p className={styles.author}>- {review.author}</p>
            </div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: '3rem' }}>
          <a onClick={trackCallConversion} href="tel:9789153780" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.25rem', fontWeight: 'bold', width: '100%', maxWidth: '400px', boxShadow: '0 4px 14px 0 rgba(255, 107, 0, 0.39)' }}>
            Schedule Your Repair: (978) 915-3780
          </a>
        </div>
      </div>
    </section>
  );
}
