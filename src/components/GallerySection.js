import styles from './GallerySection.module.css';
import Image from 'next/image';

const images = [
  { src: '/images/sink.png', alt: 'Technician working under sink' },
  { src: '/images/team.png', alt: 'Team of appliance repair technicians' },
  { src: '/images/handshake.png', alt: 'Technician shaking hands with customer' }
];

export default function GallerySection() {
  return (
    <section className={`section-padding ${styles.gallerySection}`}>
      <div className={`container ${styles.container}`}>
        <div className={styles.grid}>
          {images.map((img, idx) => (
            <div key={idx} className={styles.imageWrapper}>
              <Image 
                src={img.src} 
                alt={img.alt} 
                fill
                className={styles.image}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
