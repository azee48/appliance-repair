import { Droplet, AlertTriangle, Zap, Wind, ThumbsDown, Lock } from 'lucide-react';
import styles from './WasherProblemsGrid.module.css';

const problems = [
  {
    name: 'E15 Error (Water in Base)',
    icon: Droplet,
    desc: 'Float switch triggered by a leak in the base pan — we find the source and fix it fast.'
  },
  {
    name: 'E24 / E25 — Not Draining',
    icon: AlertTriangle,
    desc: 'Blocked drain hose or faulty drain pump — cleared and fixed same day.'
  },
  {
    name: 'E09 — Heating Failure',
    icon: Zap,
    desc: 'Heating element or control board fault — dishes left wet and cold, resolved in one visit.'
  },
  {
    name: 'Dishes Not Getting Clean',
    icon: ThumbsDown,
    desc: 'Spray arm blockage, water pressure issues, or worn wash pump — fully diagnosed on-site.'
  },
  {
    name: 'Noisy / Grinding Sound',
    icon: Wind,
    desc: 'Worn wash pump impeller or debris in the sump — quiet and clean after we leave.'
  },
  {
    name: 'Door Won\'t Latch / Seal',
    icon: Lock,
    desc: 'Door latch assembly or gasket replaced with genuine Bosch OEM parts.'
  },
];

export default function BoschDishwasherProblemsGrid() {
  return (
    <section className={`section-padding ${styles.servicesSection}`}>
      <div className={`container ${styles.container}`}>
        <h2 className={`text-center ${styles.title}`}>Common Bosch Dishwasher Problems We Fix</h2>
        <p className="text-center" style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
          Our technicians are factory-trained on Bosch's full dishwasher lineup and carry genuine OEM replacement parts in every truck — ready to fix your machine in one visit.
        </p>
        <div className={styles.grid}>
          {problems.map((problem, idx) => {
            const Icon = problem.icon;
            return (
              <div key={idx} className={styles.card}>
                <div className={styles.iconWrapper}>
                  <Icon size={32} className={styles.icon} />
                </div>
                <h3 className={styles.cardTitle}>{problem.name}</h3>
                <p className={styles.cardSubtitle}>{problem.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
