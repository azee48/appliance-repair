import { Thermometer, Droplet, AlertTriangle, Volume2, Wind, Zap } from 'lucide-react';
import styles from './WasherProblemsGrid.module.css';

const problems = [
  { name: 'Not Cooling', icon: Thermometer },
  { name: 'Leaking Water', icon: Droplet },
  { name: 'Ice Maker Broken', icon: AlertTriangle },
  { name: 'Loud Noises', icon: Volume2 },
  { name: 'Frost Buildup', icon: Wind },
  { name: 'Not Turning On', icon: Zap },
];

export default function FridgeProblemsGrid() {
  return (
    <section className={`section-padding ${styles.servicesSection}`}>
      <div className={`container ${styles.container}`}>
        <h2 className={`text-center ${styles.title}`}>Common Fridge Problems We Fix</h2>

        <div className={styles.grid}>
          {problems.map((problem, idx) => {
            const Icon = problem.icon;
            return (
              <div key={idx} className={styles.card}>
                <div className={styles.iconWrapper}>
                  <Icon size={32} className={styles.icon} />
                </div>
                <h3 className={styles.cardTitle}>{problem.name}</h3>
                <p className={styles.cardSubtitle}>Same day service available</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
