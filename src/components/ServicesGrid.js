import { Refrigerator, WashingMachine, Flame, ChefHat, Microwave, ThermometerSnowflake, Droplet, Wind } from 'lucide-react';
import styles from './ServicesGrid.module.css';

const services = [
  { name: 'Refrigerators', icon: Refrigerator },
  { name: 'Washers', icon: WashingMachine },
  { name: 'Dryers', icon: Wind }, // Using Wind for Dryer
  { name: 'Dishwashers', icon: Droplet }, // Using Droplet for Dishwasher
  { name: 'Ovens/Ranges', icon: Flame },
  { name: 'Microwaves', icon: Microwave },
  { name: 'Freezers', icon: ThermometerSnowflake },
  { name: 'HVAC/AC', icon: Wind }
];

export default function ServicesGrid() {
  return (
    <section className={`section-padding ${styles.servicesSection}`}>
      <div className={`container ${styles.container}`}>
        <h2 className={`text-center ${styles.title}`}>We Repair All Major Appliances</h2>
        
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
