import Navbar from '@/components/Navbar';
import MaytagWasherHeroSection from '@/components/MaytagWasherHeroSection';
import FeaturesBar from '@/components/FeaturesBar';
import MaytagWasherProblemsGrid from '@/components/MaytagWasherProblemsGrid';
import MaytagWasherBrandsWeService from '@/components/MaytagWasherBrandsWeService';
import MaytagWasherTrustSection from '@/components/MaytagWasherTrustSection';
import GallerySection from '@/components/GallerySection';
import MaytagWasherTestimonials from '@/components/MaytagWasherTestimonials';
import ServiceArea from '@/components/ServiceArea';
import Footer from '@/components/Footer';
import StickyCallBar from '@/components/StickyCallBar';

export const metadata = {
  title: 'Maytag Washer Repair Near Me — Same-Day Service | HomeFix',
  description: 'Expert Maytag washer repair for all models and error codes. Maytag-trained technicians with genuine OEM parts. Same-day service available. Call (978) 915-3780.',
};

export default function MaytagWasherPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingBottom: '70px' }}>
        <MaytagWasherHeroSection />
        <FeaturesBar />
        <MaytagWasherProblemsGrid />
        <MaytagWasherBrandsWeService />
        <MaytagWasherTrustSection />
        <GallerySection />
        <MaytagWasherTestimonials />
        <ServiceArea />
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
