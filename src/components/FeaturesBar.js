import { Banknote, Clock, MapPin, Star, Award } from 'lucide-react';
import styles from './FeaturesBar.module.css';

const features = [
  { icon: Banknote, text: "Affordable" },
  { icon: Clock, text: "24/7 Service" },
  { icon: MapPin, text: "Local Experts" },
  { icon: Star, text: "Top Rated" },
  { icon: Award, text: "Service Awards" }
];

export default function FeaturesBar() {
  return (
    <div className={styles.featuresBar}>
      <div className={`container ${styles.container}`}>
        {features.map((feature, index) => {
          const Icon = feature.icon;
          return (
            <div key={index} className={styles.featureItem}>
              <Icon size={28} className={styles.icon} />
              <span className={styles.text}>{feature.text}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
