import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <div className={styles.top}>
          <div className={styles.brand}>
            <h3>HomeFix Appliance Repair</h3>
            <p>Your trusted local experts for all major household appliance repairs.</p>
          </div>
          <div className={styles.links}>
            <h4>Quick Links</h4>
            <Link href="#schedule">Schedule Service</Link>
            <Link href="#">About Us</Link>
            <Link href="#">Services</Link>
          </div>
          <div className={styles.contact}>
            <h4>Contact</h4>
            <p>Phone: <strong>(866) 565-6212</strong></p>
            <p>24/7 Emergency Service Available</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {currentYear} HomeFix Appliance Repair. All rights reserved.</p>
          <div className={styles.legal}>
            <Link href="/privacy-policy">Privacy Policy</Link>
            <Link href="/terms-of-service">Terms of Service</Link>
          </div>
        </div>
      </div>
      <div className={styles.disclaimer}>
        <p>
          <strong>Disclaimer:</strong> HomeFix Appliance Repair is a marketing and referral service. We are not a direct service provider and do not perform appliance repair services ourselves. When you contact us, we connect you with experienced, pre-screened appliance repair professionals in your area so you receive the best possible service. Service availability and response times may vary by location and provider.
        </p>
      </div>
    </footer>
  );
}
