import Navbar from '@/components/Navbar';
import SamsungDishwasherHeroSection from '@/components/SamsungDishwasherHeroSection';
import FeaturesBar from '@/components/FeaturesBar';
import SamsungDishwasherProblemsGrid from '@/components/SamsungDishwasherProblemsGrid';
import SamsungDishwasherBrandsWeService from '@/components/SamsungDishwasherBrandsWeService';
import SamsungDishwasherTrustSection from '@/components/SamsungDishwasherTrustSection';
import GallerySection from '@/components/GallerySection';
import SamsungDishwasherTestimonials from '@/components/SamsungDishwasherTestimonials';
import ServiceArea from '@/components/ServiceArea';
import Footer from '@/components/Footer';
import StickyCallBar from '@/components/StickyCallBar';

export const metadata = {
  title: 'Samsung Dishwasher Repair Near Me — Same-Day Service | HomeFix',
  description: 'Expert Samsung dishwasher repair for all models and error codes. Samsung-trained technicians with genuine OEM parts. Same-day service available. Call (978) 915-3780.',
};

export default function SamsungDishwasherPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingBottom: '70px' }}>
        <SamsungDishwasherHeroSection />
        <FeaturesBar />
        <SamsungDishwasherProblemsGrid />
        <SamsungDishwasherBrandsWeService />
        <SamsungDishwasherTrustSection />
        <GallerySection />
        <SamsungDishwasherTestimonials />
        <ServiceArea />
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
