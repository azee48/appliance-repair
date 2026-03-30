"use client";

import { CheckCircle, Clock, Wrench, Shield, Refrigerator, Waves, ThermometerSnowflake, Phone } from 'lucide-react';
import styles from '../brand.module.css';
import heroStyles from '@/components/HeroSection.module.css';
import { useParams, useSearchParams } from 'next/navigation';

export default function BrandApplianceRepair() {
  const params = useParams();
  const searchParams = useSearchParams();
  
  const rawBrand = typeof params?.brand === 'string' ? params.brand : (Array.isArray(params?.brand) ? params.brand[0] : 'appliance');
  const brandName = rawBrand.charAt(0).toUpperCase() + rawBrand.slice(1);
  
  const rawCity = searchParams.get('city');
  const cityName = rawCity ? rawCity.charAt(0).toUpperCase() + rawCity.slice(1) : 'Your Area';

  return (
    <div className={styles.pageWrapper}>
      
      {/* ============================================================
           SECTION: NAV BAR (PROFIX STYLE)
      ============================================================ */}
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <div className={styles.logoIcon}>
            <Wrench size={20} />
          </div>
          <strong>HomeFixApplianceRepair</strong>
        </div>

        <div className={styles.navLinks}>
          <a href="#services">Expert Services</a>
          <a href="#why-us">Why Choose Us</a>
          <a href="#faq">FAQs</a>
        </div>

        <a href="tel:9789153780" className={styles.navCta}>
          CALL (978) 915-3780
        </a>
      </nav>

      {/* ============================================================
           SECTION: HERO SPLIT
      ============================================================ */}
      <section className={heroStyles.hero}>
        <div className={heroStyles.overlay}></div>
        <div className={`container ${heroStyles.container}`}>
          <div className={heroStyles.content} style={{ textAlign: 'left', alignItems: 'flex-start' }}>
            <div className={heroStyles.badge}>
              <div className={heroStyles.dot}></div>
              {brandName} Technicians Near You Available Now
            </div>
            
            <h1 className={heroStyles.title}>
              Fast, Same-Day <br/>
              <span style={{ color: 'var(--color-primary)' }}>{brandName} Repair</span> In<br/>
              {cityName}
            </h1>
            
            <p className={heroStyles.subtitle}>
              Trusted expert local technicians specifically trained for all {brandName} models. 90-day warranty on all parts and labor. Call before 12 PM for guaranteed same-day service!
            </p>
            
            <div className={heroStyles.ctaGroup}>
              <a href="tel:9789153780" className={`btn btn-primary ${heroStyles.ctaBtn}`}>
                <Phone size={24} className={heroStyles.icon} />
                Call Now: (978) 915-3780
              </a>
              <p className={heroStyles.trustText}>
                ✓ Licensed, Bonded & Insured ✓ Background Checked
              </p>
            </div>
            
            <div className={styles.heroReviewsRow} style={{ marginTop: '2.5rem', zIndex: 2, position: 'relative' }}>
              <div className={styles.avatarGroup}>
                <div className={styles.avatar} style={{ backgroundColor: '#cbd5e1' }}></div>
                <div className={styles.avatar} style={{ backgroundColor: '#94a3b8' }}></div>
                <div className={styles.avatar} style={{ backgroundColor: '#64748b' }}></div>
              </div>
              <div className={styles.reviewText}>
                <div className={styles.stars} style={{ color: 'var(--color-primary)' }}>★★★★★</div>
                <span style={{ color: 'rgba(255,255,255,0.9)' }}>Over 5,000+ 5-Star Reviews Locally</span>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ============================================================
           SECTION: STATS STRIP
      ============================================================ */}
      <section className={styles.statsStrip}>
        <div className={styles.statBox}>
          <div className={styles.statHeader}>
            <Clock size={16} /> FAST RESPONSE
          </div>
          <h3>Same Day Service</h3>
        </div>

        <div className={styles.statBox}>
          <div className={styles.statHeader}>
            <Wrench size={16} /> RELIABLE RESULTS
          </div>
          <h3>90-Day Guarantee</h3>
        </div>

        <div className={styles.statBox}>
          <div className={styles.statHeader}>
            <Shield size={16} /> FAIR PRICING
          </div>
          <h3>Upfront Pricing</h3>
        </div>
      </section>

      {/* ============================================================
           SECTION: PAIN POINTS (ENGAGING, EMPATHETIC REWRITE)
      ============================================================ */}
      <section id="pain-points" className={`${styles.sectionBlock} ${styles.sectionLight}`} style={{ backgroundColor: 'var(--color-white)' }}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
            <span className={styles.heroEyebrow}>Diagnostics</span>
            <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: 'var(--color-navy)', textTransform: 'uppercase' }}>IS YOUR {brandName} ACTING UP?</h2>
        </div>

        <div className={`${styles.servicesGrid} ${styles.symptomsGrid}`} style={{ marginBottom: '3rem' }}>
          <div className={styles.serviceCard} style={{ padding: '0', background: 'var(--color-bg-gray)' }}>
             <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--color-navy)' }}>Won't drain or spin</h3>
                <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>Standing water in the drum, cycles refusing to finish, or terrifying banging noises during the high-speed spin cycle.</p>
             </div>
          </div>
          <div className={styles.serviceCard} style={{ padding: '0', background: 'var(--color-bg-gray)' }}>
            <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--color-navy)' }}>Leaking water</h3>
                <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>Mysterious, disastrous puddles forming under the machine, ripped door seals causing drips, or damaged inlet hoses.</p>
            </div>
          </div>
          <div className={styles.serviceCard} style={{ padding: '0', background: 'var(--color-bg-gray)' }}>
             <div style={{ padding: '2rem' }}>
                <h3 style={{ fontSize: '1.25rem', fontWeight: '800', marginBottom: '0.5rem', color: 'var(--color-navy)' }}>Digital Error Codes</h3>
                <p style={{ color: 'var(--color-text-light)', fontSize: '0.9rem' }}>Cryptic alarms and error codes flashing violently across the control board while the machine locks you out entirely.</p>
             </div>
          </div>
        </div>

        <div style={{ textAlign: 'center', maxWidth: '600px', margin: '0 auto', fontSize: '1.35rem', fontWeight: '900', color: 'var(--color-navy)', lineHeight: '1.4' }}>
          <p>Don't let an amateur void your {brandName} warranty.</p>
          <p style={{ color: 'var(--color-primary)', marginTop: '0.5rem', fontSize: '1.1rem', fontWeight: '700' }}>We dispatch factory-trained experts equipped with genuine {brandName} replacement parts directly to your door today.</p>
        </div>
      </section>

      {/* ============================================================
           SECTION: SERVICES GRID (PROFIX STYLE)
      ============================================================ */}
      <section id="services" className={styles.sectionBlock}>
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#0f172a' }}>Our {brandName} Repair Services</h2>
          <p style={{ color: '#64748b' }}>Comprehensive solutions for all of your {brandName} household appliances.</p>
        </div>

        <div className={styles.servicesGrid}>
          
          <div className={styles.serviceCard}>
            <div className={styles.cardImgWrap}>
              <img src="/images/services/refrigerator.png" alt={`${brandName} Refrigerator Repair`} />
            </div>
            <div className={styles.cardContent}>
              <h3>Refrigerator</h3>
              <p>Cooling issues, leaks, & compressor repairs.</p>
              <a href="tel:9789153780" className={styles.btnBlock}>CALL FOR REFRIGERATOR REPAIR</a>
            </div>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.cardImgWrap}>
               <img src="/images/services/washer.png" alt={`${brandName} Washer Repair`} />
            </div>
            <div className={styles.cardContent}>
              <h3>Washer</h3>
              <p>Spinning, vibration, & drainage problems.</p>
              <a href="tel:9789153780" className={styles.btnBlock}>CALL FOR WASHER REPAIR</a>
            </div>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.cardImgWrap}>
               <img src="/images/services/dryer.png" alt={`${brandName} Dryer Repair`} />
            </div>
            <div className={styles.cardContent}>
              <h3>Dryer</h3>
              <p>Heating elements, drums, & belt issues.</p>
              <a href="tel:9789153780" className={styles.btnBlock}>CALL FOR DRYER REPAIR</a>
            </div>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.cardImgWrap}>
               <img src="/images/services/dishwasher.png" alt={`${brandName} Dishwasher Repair`} />
            </div>
            <div className={styles.cardContent}>
              <h3>Dishwasher</h3>
              <p>Cleaning performance & leak prevention.</p>
              <a href="tel:9789153780" className={styles.btnBlock}>CALL FOR DISHWASHER REPAIR</a>
            </div>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.cardImgWrap}>
               <img src="/images/services/oven.png" alt={`${brandName} Oven & Range Repair`} />
            </div>
            <div className={styles.cardContent}>
              <h3>Oven & Range</h3>
              <p>Igniters, thermostats, & burner fixes.</p>
              <a href="tel:9789153780" className={styles.btnBlock}>CALL FOR OVEN/RANGE REPAIR</a>
            </div>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.cardImgWrap}>
               <img src="/images/services/microwave.png" alt={`${brandName} Microwave Repair`} />
            </div>
            <div className={styles.cardContent}>
              <h3>Microwave</h3>
              <p>Magnetrons, touchpads, & sparking.</p>
              <a href="tel:9789153780" className={styles.btnBlock}>CALL FOR MICROWAVE REPAIR</a>
            </div>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.cardImgWrap}>
               <img src="/images/services/freezer.png" alt={`${brandName} Freezer Repair`} />
            </div>
            <div className={styles.cardContent}>
              <h3>Freezer</h3>
              <p>Defrosting issues & ice buildup repairs.</p>
              <a href="tel:9789153780" className={styles.btnBlock}>CALL FOR FREEZER REPAIR</a>
            </div>
          </div>

          <div className={styles.serviceCard}>
            <div className={styles.cardImgWrap}>
               <img src="/images/services/disposal.png" alt={`Garbage Disposal Repair`} />
            </div>
            <div className={styles.cardContent}>
              <h3>Garbage Disposal</h3>
              <p>Jams, motor resets, & leaky seals.</p>
              <a href="tel:9789153780" className={styles.btnBlock}>CALL FOR DISPOSAL REPAIR</a>
            </div>
          </div>

        </div>
      </section>

      {/* ============================================================
           SECTION: WHY CHOOSE US
      ============================================================ */}
      <section id="why-us" className={styles.whyChooseUs}>
        <div className={styles.whyHeader}>
          <h2>Why Homeowners Choose HomeFix For {brandName}?</h2>
          <p style={{ color: '#64748b', fontSize: '1.1rem' }}>Reliable, honest, and lightning-fast appliance repair services directly to your doorstep.</p>
        </div>

        <div className={styles.whyGrid}>
          <div className={styles.whyCard}>
            <div className={styles.whyIcon}><Clock size={24} /></div>
            <h3>Same-Day Response</h3>
            <p>Laundry piling up? Fridge getting warm? We dispatch technicians immediately. Call before 12 PM and your {brandName} appliance is fixed today.</p>
          </div>
          <div className={styles.whyCard}>
            <div className={styles.whyIcon}><Wrench size={24} /></div>
            <h3>Expert Local Techs</h3>
            <p>Our technicians aren't just generic handymen. They are specialists trained exclusively on major brands like {brandName} who arrive with fully-stocked trucks.</p>
          </div>
          <div className={styles.whyCard}>
            <div className={styles.whyIcon}><Shield size={24} /></div>
            <h3>Iron-Clad Guarantee</h3>
            <p>Every repair includes a comprehensive 90-day warranty on parts and labor. If the exact same issue returns, so do we — at zero cost.</p>
          </div>
        </div>
      </section>

      {/* ============================================================
           SECTION: BRANDS WE SERVICE
      ============================================================ */}
      <section style={{ padding: '6rem 5%', backgroundColor: '#f8fafc', borderTop: '1px solid #e2e8f0', textAlign: 'center' }}>
        <h2 style={{ fontSize: '2.5rem', fontWeight: '900', color: '#0f172a', marginBottom: '3rem' }}>Brands We Service</h2>
        <div style={{ display: 'flex', gap: '3rem', justifyContent: 'center', flexWrap: 'wrap', opacity: '0.6', filter: 'grayscale(100%)' }}>
          <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>SAMSUNG</h3>
          <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>LG</h3>
          <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>Whirlpool</h3>
          <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>GE</h3>
          <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>Maytag</h3>
          <h3 style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>KitchenAid</h3>
        </div>
      </section>

      {/* ============================================================
           SECTION: URGENCY CTA
      ============================================================ */}
      <section className={styles.urgencySection}>
        <h2>Your {brandName} Appliance Down?</h2>
        <p>Don't wait days for a repair. Our local technicians are in your area now and can fix it today. Spots are limited!</p>
        <a href="tel:9789153780" className={styles.urgencyBtn}>
          <Clock size={24} /> CALL (978) 915-3780 NOW
        </a>
      </section>

      {/* ============================================================
           SECTION: FOOTER
      ============================================================ */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <h3><Wrench size={24} color="var(--color-primary)" /> HomeFixApplianceRepair</h3>
            <p>Your trusted local partner for fast, reliable, and professional household appliance repairs. Available 7 days a week.</p>
          </div>
          
          <div className={styles.footerLinks}>
            <a href="#services">Services</a>
            <a href="#why-us">Why Us</a>
            <a href="tel:9789153780" style={{ color: 'var(--color-primary)' }}>Call Now</a>
          </div>
        </div>
        
        <div className={styles.footerBottom}>
          <p>&copy; {new Date().getFullYear()} HomeFixApplianceRepair. All rights reserved.</p>
        </div>
      </footer>

    </div>
  );
}
