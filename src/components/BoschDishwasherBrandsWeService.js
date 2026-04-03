import styles from './BrandsWeService.module.css';

const models = [
  'Bosch 100 Series', 'Bosch 300 Series', 'Bosch 500 Series', 'Bosch 800 Series', 'Bosch 800 Plus', 'Bosch Benchmark', 'Bosch ADA'
];

export default function BoschDishwasherBrandsWeService() {
  return (
    <section className={`section-padding ${styles.brandsSection}`}>
      <div className={`container ${styles.container}`}>
        <h2 className={`text-center ${styles.title}`}>Bosch Dishwasher Models We Service</h2>
        <p className={`text-center ${styles.subtitle}`}>
          We repair every Bosch dishwasher series — from the entry-level 100 Series to the ultra-quiet Benchmark and 800 Plus models.
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
