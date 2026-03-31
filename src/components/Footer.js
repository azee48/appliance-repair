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
            <p>Phone: <strong>(978) 915-3780</strong></p>
            <p>24/7 Emergency Service Available</p>
          </div>
        </div>
        <div className={styles.bottom}>
          <p>&copy; {currentYear} HomeFix Appliance Repair. All rights reserved.</p>
          <div className={styles.legal}>
            <Link href="#">Privacy Policy</Link>
            <Link href="#">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
