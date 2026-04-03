import { Droplet, AlertTriangle, Zap, ThumbsDown, Wind, Lock } from 'lucide-react';
import styles from './WasherProblemsGrid.module.css';

const problems = [
  {
    name: 'LC / LC1 Error (Leak)',
    icon: Droplet,
    desc: 'Samsung leak sensor tripped — we find the source, stop the leak, and reset the system.'
  },
  {
    name: '7E Error — Waterwall Issue',
    icon: AlertTriangle,
    desc: 'WaterWall reflector or sensor fault unique to Samsung — diagnosed and fixed same day.'
  },
  {
    name: 'HE Error — Heating Fault',
    icon: Zap,
    desc: 'Heating element or thermistor failure — dishes come out wet and cold. Fixed in one visit.'
  },
  {
    name: 'Not Draining (5C / SC)',
    icon: Wind,
    desc: 'Clogged filter, drain pump, or kinked hose — cleared and running same day.'
  },
  {
    name: 'Dishes Not Getting Clean',
    icon: ThumbsDown,
    desc: 'Blocked spray arms, low water pressure, or wash motor failure — fully diagnosed on-site.'
  },
  {
    name: 'Door Latch / Won\'t Start',
    icon: Lock,
    desc: 'Samsung door latch assembly or control board replaced with genuine OEM parts.'
  },
];

export default function SamsungDishwasherProblemsGrid() {
  return (
    <section className={`section-padding ${styles.servicesSection}`}>
      <div className={`container ${styles.container}`}>
        <h2 className={`text-center ${styles.title}`}>Common Samsung Dishwasher Problems We Fix</h2>
        <p className="text-center" style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
          Our technicians are trained on Samsung's full dishwasher lineup — including the WaterWall system — and carry genuine OEM parts in every truck for a first-visit fix.
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
