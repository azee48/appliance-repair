import { Activity, Droplet, AlertTriangle, Zap, Clock, Volume2 } from 'lucide-react';
import styles from './WasherProblemsGrid.module.css';

const problems = [
  {
    name: 'F5 / F7 Error Code',
    icon: Zap,
    desc: 'Maytag lid lock or motor faults — we diagnose and fix fast.'
  },
  {
    name: 'Not Draining',
    icon: Droplet,
    desc: 'Clogged pump filter or faulty drain pump — same-day repair available.'
  },
  {
    name: 'Not Spinning / Agitating',
    icon: Activity,
    desc: 'Worn drive belt or motor coupling — resolved in one visit.'
  },
  {
    name: 'Leaking Water',
    icon: AlertTriangle,
    desc: 'Door boot seal or pump seal failure — stop the leak today.'
  },
  {
    name: 'Loud Banging Noise',
    icon: Volume2,
    desc: 'Drum bearing or shock absorber failure — diagnosed on-site.'
  },
  {
    name: 'Cycle Won\'t Finish',
    icon: Clock,
    desc: 'Control board or water inlet valve issues — fully fixed same visit.'
  },
];

export default function MaytagWasherProblemsGrid() {
  return (
    <section className={`section-padding ${styles.servicesSection}`}>
      <div className={`container ${styles.container}`}>
        <h2 className={`text-center ${styles.title}`}>Common Maytag Washer Problems We Fix</h2>
        <p className="text-center" style={{ color: 'var(--color-text-muted)', marginBottom: '2rem' }}>
          Our technicians are trained specifically on Maytag's commercial-grade platform and carry genuine OEM replacement parts in every truck.
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
