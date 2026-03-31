import { Activity, Droplet, AlertTriangle, Wind, Clock, Lock } from 'lucide-react';
import styles from './WasherProblemsGrid.module.css';

const services = [
  { name: 'Not Spinning', icon: Activity },
  { name: 'Not Draining', icon: Droplet },
  { name: 'Leaking Water', icon: AlertTriangle },
  { name: 'Loud Banging', icon: Wind },
  { name: 'Cycle Wont Finish', icon: Clock },
  { name: 'Door Wont Lock', icon: Lock }
];

export default function WasherProblemsGrid() {
  return (
    <section className={`section-padding ${styles.servicesSection}`}>
      <div className={`container ${styles.container}`}>
        <h2 className={`text-center ${styles.title}`}>Common Washer Problems We Fix</h2>
        
        <div className={styles.grid}>
          {services.map((service, idx) => {
            const Icon = service.icon;
            return (
              <div key={idx} className={styles.card}>
                <div className={styles.iconWrapper}>
                  <Icon size={32} className={styles.icon} />
                </div>
                <h3 className={styles.cardTitle}>{service.name}</h3>
                <p className={styles.cardSubtitle}>Same day service available</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
