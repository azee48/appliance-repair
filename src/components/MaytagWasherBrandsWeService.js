import styles from './BrandsWeService.module.css';

const models = [
  'Maytag Bravos', 'Maytag Centennial', 'Maytag Maxima', 'Maytag MedX', 'Maytag MHW', 'Maytag MVW', 'Maytag Commercial'
];

export default function MaytagWasherBrandsWeService() {
  return (
    <section className={`section-padding ${styles.brandsSection}`}>
      <div className={`container ${styles.container}`}>
        <h2 className={`text-center ${styles.title}`}>Maytag Washer Models We Service</h2>
        <p className={`text-center ${styles.subtitle}`}>
          We repair every Maytag washer lineup — from the classic Centennial top-loaders to the high-efficiency Maxima and MedX front-loaders.
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
