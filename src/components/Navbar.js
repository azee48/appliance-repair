import Link from 'next/link';
import { Phone } from 'lucide-react';
import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={`container ${styles.container}`}>
        <Link href="/" className={styles.logo}>
          <div className={styles.logoIcon}></div>
          <span className={styles.logoText}>Fast Appliance Repair</span>
        </Link>
        <div className={styles.actions}>
          <a href="tel:9789153780" className={`btn btn-primary ${styles.cta}`}>
            <Phone size={18} className={styles.phoneIcon} />
            CALL (978) 915-3780
          </a>
        </div>
      </div>
    </nav>
  );
}
