import Navbar from '@/components/Navbar';
import BoschDishwasherHeroSection from '@/components/BoschDishwasherHeroSection';
import FeaturesBar from '@/components/FeaturesBar';
import BoschDishwasherProblemsGrid from '@/components/BoschDishwasherProblemsGrid';
import BoschDishwasherBrandsWeService from '@/components/BoschDishwasherBrandsWeService';
import BoschDishwasherTrustSection from '@/components/BoschDishwasherTrustSection';
import GallerySection from '@/components/GallerySection';
import BoschDishwasherTestimonials from '@/components/BoschDishwasherTestimonials';
import ServiceArea from '@/components/ServiceArea';
import Footer from '@/components/Footer';
import StickyCallBar from '@/components/StickyCallBar';

export const metadata = {
  title: 'Bosch Dishwasher Repair Near Me — Same-Day Service | HomeFix',
  description: 'Expert Bosch dishwasher repair for all series and error codes. Bosch-trained technicians with genuine OEM parts. Same-day service available. Call (978) 915-3780.',
};

export default function BoschDishwasherPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingBottom: '70px' }}>
        <BoschDishwasherHeroSection />
        <FeaturesBar />
        <BoschDishwasherProblemsGrid />
        <BoschDishwasherBrandsWeService />
        <BoschDishwasherTrustSection />
        <GallerySection />
        <BoschDishwasherTestimonials />
        <ServiceArea />
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
