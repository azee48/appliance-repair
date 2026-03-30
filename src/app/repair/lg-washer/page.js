"use client";

import { CheckCircle, Clock, Wrench, Shield, AlertTriangle, Droplets, Activity, Phone } from 'lucide-react';
import styles from '../brand.module.css';
import heroStyles from '@/components/HeroSection.module.css';

export default function LgWasherRepairPage() {
  const brandName = "LG";

  return (
    <div className={styles.pageWrapper}>
      
      {/* ============================================================
           SECTION: HIGHLIGHT NAV
      ============================================================ */}
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <strong>HomeFix {brandName} Repair</strong>
        </div>

        <div className={styles.navLinks}>
          <a href="#services">Common Problems</a>
          <a href="#why-us">Why Us</a>
        </div>

        <a href="tel:9789153780" className={styles.navCta}>
          CALL (978) 915-3780
        </a>
      </nav>

      {/* ============================================================
           SECTION: HERO SPLIT (HOMEPAGE DESIGN)
      ============================================================ */}
      <section className={heroStyles.hero}>
        <div className={heroStyles.overlay}></div>
        <div className={`container ${heroStyles.container}`}>
          <div className={heroStyles.content} style={{ textAlign: 'left', alignItems: 'flex-start' }}>
            <div className={heroStyles.badge}>
              <div className={heroStyles.dot}></div>
              LG Washer Specialists Available Now
            </div>
            
            <h1 className={heroStyles.title}>
              Fast, Same-Day <br/>
              <span style={{ color: 'var(--color-primary)' }}>LG Washer Repair</span>
            </h1>
            
            <p className={heroStyles.subtitle}>
              We fix LG LE errors, draining issues & door locks FAST. Trusted expert technicians equipped with specialized LG diagnostic tools. Call before 12 PM for guaranteed same-day service!
            </p>
            
            <div className={heroStyles.ctaGroup}>
              <a href="tel:9789153780" className={`btn btn-primary ${heroStyles.ctaBtn}`}>
                <Phone size={24} className={heroStyles.icon} />
                Call Now: (978) 915-3780
              </a>
              <p className={heroStyles.trustText}>
                ✓ Original LG Parts ✓ Background Checked
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
            <Clock size={16} /> Fast Response
          </div>
          <h3>Same Day Service</h3>
        </div>

        <div className={styles.statBox}>
          <div className={styles.statHeader}>
            <CheckCircle size={16} /> Our Promise
          </div>
          <h3>90-Day Guarantee</h3>
        </div>

        <div className={styles.statBox}>
          <div className={styles.statHeader}>
            <Wrench size={16} /> Transparent
          </div>
          <h3>Upfront Pricing</h3>
        </div>
      </section>

      {/* ============================================================
           SECTION: SYMPTOMS GRID 
      ============================================================ */}
      <section className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <h2>Is Your LG Washer Acting Up?</h2>
          <p>LG Front-Load and Top-Load washers require specialized diagnostic tools to fix correctly. Don't let an amateur void your warranty.</p>
        </div>
        
        <div className={styles.whyGrid} style={{ marginTop: '3rem' }}>
          
          <div className={styles.whyCard}>
            <div className={styles.whyIcon}>
               <AlertTriangle size={24} />
            </div>
            <h3>LE / dE / tE Error Codes</h3>
            <p>Direct drive motor failures, bad door locks, or sensor wiring issues that stop your washer mid-cycle.</p>
          </div>

          <div className={styles.whyCard}>
            <div className={styles.whyIcon}>
               <Droplets size={24} />
            </div>
            <h3>Not Draining (OE Error)</h3>
            <p>Water sitting in the drum at the end of the cycle due to a clogged drain pump filter or burned-out pump motor.</p>
          </div>

          <div className={styles.whyCard}>
            <div className={styles.whyIcon}>
               <Activity size={24} />
            </div>
            <h3>Violent Shaking & Banging</h3>
            <p>Your LG sounds like a jet engine on spin cycle. We replace worn shock absorbers and rear tub bearings.</p>
          </div>
          
        </div>
        
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a href="tel:9789153780" className={styles.btnSolid} style={{ display: 'inline-flex', width: 'auto' }}>
            MY WASHER HAS THESE ISSUES - CALL NOW
          </a>
        </div>
      </section>

      {/* ============================================================
           SECTION: PROCESS STRIP
      ============================================================ */}
      <section className={styles.whyChooseUs}>
        <div className={styles.whyHeader}>
          <h2>The LG Repair Process</h2>
          <p>We arrive with fully stocked trucks so we can fix your washer in a single visit.</p>
        </div>
        
        <div className={styles.whyGrid}>
          <div className={styles.whyCard} style={{ textAlign: 'center' }}>
            <div className={styles.whyIcon} style={{ margin: '0 auto 1.5rem', borderRadius: '50%', backgroundColor: 'var(--color-navy)', color: 'var(--color-white)', fontSize: '1.5rem', fontWeight: 'bold' }}>1</div>
            <h3>Call For Dispatch</h3>
            <p>Speak to our local dispatcher to lock in your guaranteed same-day appointment window.</p>
          </div>
          <div className={styles.whyCard} style={{ textAlign: 'center' }}>
            <div className={styles.whyIcon} style={{ margin: '0 auto 1.5rem', borderRadius: '50%', backgroundColor: 'var(--color-navy)', color: 'var(--color-white)', fontSize: '1.5rem', fontWeight: 'bold' }}>2</div>
            <h3>Expert Diagnosis</h3>
            <p>Our technician runs onboard LG diagnostics to pinpoint the exact failing component.</p>
          </div>
          <div className={styles.whyCard} style={{ textAlign: 'center' }}>
            <div className={styles.whyIcon} style={{ margin: '0 auto 1.5rem', borderRadius: '50%', backgroundColor: 'var(--color-primary)', color: 'var(--color-white)', fontSize: '1.5rem', fontWeight: 'bold' }}>3</div>
            <h3>Fixed Today</h3>
            <p>We install the replacement part, test the spin cycle, and hand you a 90-day warranty.</p>
          </div>
        </div>
      </section>

      {/* ============================================================
           SECTION: URGENCY CTA
      ============================================================ */}
      <section className={styles.urgencySection}>
        <h2>Need LG Washer Repair Today?</h2>
        <p>Our technicians are currently operating in your area. Skip the automated menus and speak to a local expert right now.</p>
        <a href="tel:9789153780" className={styles.urgencyBtn}>
          <Phone /> CALL (978) 915-3780
        </a>
      </section>

      {/* ============================================================
           SECTION: FOOTER
      ============================================================ */}
      <footer className={styles.footer}>
        <div className={styles.footerContent}>
          <div className={styles.footerBrand}>
            <h3>HomeFix LG Washer Specialists</h3>
            <p>Licensed & Insured dedicated {brandName} experts.</p>
          </div>
          <div className={styles.footerLinks}>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </footer>

    </div>
  );
}
