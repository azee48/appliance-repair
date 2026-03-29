import styles from './BrandsWeService.module.css';

const brands = [
  'LG', 'GE', 'Samsung', 'Whirlpool', 'Maytag', 'Bosch', 'KitchenAid'
];

export default function BrandsWeService() {
  return (
    <section className={`section-padding ${styles.brandsSection}`}>
      <div className={`container ${styles.container}`}>
        <h2 className={`text-center ${styles.title}`}>Top Brands We Service</h2>
        <p className={`text-center ${styles.subtitle}`}>
          Our technicians are certified to repair all major appliance brands quickly and reliably.
        </p>
        
        <div className={styles.grid}>
          {brands.map((brand, idx) => (
            <div key={idx} className={styles.brandCard}>
              <span className={styles.brandName}>{brand}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
