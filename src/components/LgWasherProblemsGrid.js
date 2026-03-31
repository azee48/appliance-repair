import { Activity, Droplet, AlertTriangle, Zap, Clock, Lock } from 'lucide-react';
import styles from './WasherProblemsGrid.module.css';

const problems = [
  {
    name: 'LE / tE Error Code',
    icon: Zap,
    desc: 'LG motor or thermistor fault — we diagnose and fix fast.'
  },
  {
    name: 'Not Draining (OE Code)',
    icon: Droplet,
    desc: 'Clogged drain pump or filter — same-day repair available.'
  },
  {
    name: 'Not Spinning / UE Code',
    icon: Activity,
    desc: 'Unbalanced load or worn drum bearing — resolved in one visit.'
  },
  {
    name: 'Leaking Water',
    icon: AlertTriangle,
    desc: 'Door gasket or pump seal failure — stop the leak today.'
  },
  {
    name: 'Cycle Won\'t Finish',
    icon: Clock,
    desc: 'Control board or sensor issues — fully diagnosed on-site.'
  },
  {
    name: 'Door Won\'t Lock (dE Code)',
    icon: Lock,
    desc: 'LG door latch assembly replaced with genuine LG parts.'
  },
];

export default function LgWasherProblemsGrid() {
  return (
    <section className={`section-padding ${styles.servicesSection}`}>
      <div className={`container ${styles.container}`}>
        <h2 className={`text-center ${styles.title}`}>Common LG Washer Problems We Fix</h2>
        <p className="text-center" style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
          Our technicians are factory-trained on LG's Smart Diagnosis system and carry genuine LG replacement parts in every truck.
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
