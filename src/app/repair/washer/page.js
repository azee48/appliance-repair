import { CheckCircle, Clock, Wrench, Shield, AlertTriangle, Droplets, Activity, Phone } from 'lucide-react';
import styles from '../brand.module.css';
import heroStyles from '@/components/HeroSection.module.css';
import { useSearchParams } from 'next/navigation';

export default function WasherRepairPage() {
  const searchParams = useSearchParams();
  const rawCity = searchParams.get('city');
  const cityName = rawCity ? rawCity.charAt(0).toUpperCase() + rawCity.slice(1) : 'Your Area';

  return (
    <div className={styles.pageWrapper}>
      
      {/* ============================================================
           SECTION: HIGHLIGHT NAV
      ============================================================ */}
      <nav className={styles.nav}>
        <div className={styles.logo}>
          <strong>HomeFix Washer Repair</strong>
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
              Local Washer Specialists Available Now
            </div>
            
            <h1 className={heroStyles.title}>
              Fast, Same-Day <br/>
              <span style={{ color: 'var(--color-primary)' }}>Washer Repair</span> In<br/>
              {cityName}
            </h1>
            
            <p className={heroStyles.subtitle}>
              We fix top-load and front-load washers FAST. Trusted expert technicians equipped to solve draining, spinning, and leaking issues. Call before 12 PM for guaranteed same-day service!
            </p>
            
            <div className={heroStyles.ctaGroup}>
              <a href="tel:9789153780" className={`btn btn-primary ${heroStyles.ctaBtn}`}>
                <Phone size={24} className={heroStyles.icon} />
                Call Now: (978) 915-3780
              </a>
              <p className={heroStyles.trustText}>
                ✓ Original Parts ✓ Background Checked
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
          <h3 style={{ textAlign: 'left' }}>Same Day Service</h3>
        </div>

        <div className={styles.statBox}>
          <div className={styles.statHeader}>
            <CheckCircle size={16} /> Our Promise
          </div>
          <h3 style={{ textAlign: 'left' }}>90-Day Guarantee</h3>
        </div>

        <div className={styles.statBox}>
          <div className={styles.statHeader}>
            <Wrench size={16} /> Transparent
          </div>
          <h3 style={{ textAlign: 'left' }}>Upfront Pricing</h3>
        </div>
      </section>

      {/* ============================================================
           SECTION: SYMPTOMS GRID 
      ============================================================ */}
      <section className={styles.sectionBlock}>
        <div className={styles.sectionHeader}>
          <h2>Is Your Washer Acting Up?</h2>
          <p>Don't let a mountain of dirty laundry stress you out. We specialize in diagnosing washer components to fix them on the first visit.</p>
        </div>
        
        <div className={styles.whyGrid} style={{ marginTop: '3rem' }}>
          
          <div className={styles.whyCard}>
            <div className={styles.whyIcon}>
               <Activity size={24} />
            </div>
            <h3>Not Spinning</h3>
            <p>Broken drive belts, lid switch failures, or worn motor couplings can completely stop your spin cycle.</p>
          </div>

          <div className={styles.whyCard}>
            <div className={styles.whyIcon}>
               <AlertTriangle size={24} />
            </div>
            <h3>Leaking Water</h3>
            <p>Torn front-load door boot seals, cracked hoses, or a failing water inlet valve causing puddles.</p>
          </div>

          <div className={styles.whyCard}>
            <div className={styles.whyIcon}>
               <Droplets size={24} />
            </div>
            <h3>Not Draining</h3>
            <p>A damaged drain pump, clogged internal hose, or blocked filter keeping dirty water trapped inside.</p>
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
          <h2>The Washer Repair Process</h2>
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
            <p>Our technician will tear down the machine to pinpoint the exact failing belt, pump, or switch.</p>
          </div>
          <div className={styles.whyCard} style={{ textAlign: 'center' }}>
            <div className={styles.whyIcon} style={{ margin: '0 auto 1.5rem', borderRadius: '50%', backgroundColor: 'var(--color-primary)', color: 'var(--color-white)', fontSize: '1.5rem', fontWeight: 'bold' }}>3</div>
            <h3>Fixed Today</h3>
            <p>We install the replacement part, test a load, and hand you a 90-day parts and labor warranty.</p>
          </div>
        </div>
      </section>

      {/* ============================================================
           SECTION: URGENCY CTA
      ============================================================ */}
      <section className={styles.urgencySection}>
        <h2>Need Washer Repair Today?</h2>
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
            <h3>HomeFix Washer Specialists</h3>
            <p>Licensed & Insured dedicated appliance experts.</p>
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
