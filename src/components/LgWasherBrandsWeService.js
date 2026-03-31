import styles from './BrandsWeService.module.css';

const models = [
  'LG Front-Load', 'LG Top-Load', 'LG WashTower', 'LG TwinWash', 'LG SIGNATURE', 'LG TurboWash', 'LG SmartDiagnosis'
];

export default function LgWasherBrandsWeService() {
  return (
    <section className={`section-padding ${styles.brandsSection}`}>
      <div className={`container ${styles.container}`}>
        <h2 className={`text-center ${styles.title}`}>LG Washer Models We Service</h2>
        <p className={`text-center ${styles.subtitle}`}>
          We repair every LG washer lineup — from budget front-loaders to the premium LG SIGNATURE series and TwinWash systems.
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
