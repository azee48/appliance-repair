import styles from './BrandsWeService.module.css';

const models = [
  'Samsung StormWash', 'Samsung WaterWall', 'Samsung AutoRelease', 'Samsung Chef Collection', 'Samsung Linear Wash', 'Samsung DW80', 'Samsung Top Control'
];

export default function SamsungDishwasherBrandsWeService() {
  return (
    <section className={`section-padding ${styles.brandsSection}`}>
      <div className={`container ${styles.container}`}>
        <h2 className={`text-center ${styles.title}`}>Samsung Dishwasher Models We Service</h2>
        <p className={`text-center ${styles.subtitle}`}>
          We repair every Samsung dishwasher lineup — from standard top-control models to the advanced WaterWall and StormWash series.
        </p>

        <div className={styles.grid}>
          {models.map((model, idx) => (
            <div key={idx} className={styles.brandCard}>
              <span className={styles.brandName}>{model}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
