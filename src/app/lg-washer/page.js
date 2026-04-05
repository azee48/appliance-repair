import Navbar from '@/components/Navbar';
import LgWasherHeroSection from '@/components/LgWasherHeroSection';
import FeaturesBar from '@/components/FeaturesBar';
import LgWasherProblemsGrid from '@/components/LgWasherProblemsGrid';
import LgWasherBrandsWeService from '@/components/LgWasherBrandsWeService';
import LgWasherTrustSection from '@/components/LgWasherTrustSection';
import GallerySection from '@/components/GallerySection';
import LgWasherTestimonials from '@/components/LgWasherTestimonials';
import ServiceArea from '@/components/ServiceArea';
import Footer from '@/components/Footer';
import StickyCallBar from '@/components/StickyCallBar';

export const metadata = {
  title: 'LG Washer Repair Near Me — Same-Day Service | HomeFix',
  description: 'Expert LG washer repair for all models and error codes. LG-trained technicians with genuine parts. Same-day service available. Call (866) 565-6212.',
};

export default function LgWasherPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingBottom: '70px' }}>
        <LgWasherHeroSection />
        <FeaturesBar />
        <LgWasherProblemsGrid />
        <LgWasherBrandsWeService />
        <LgWasherTrustSection />
        <GallerySection />
        <LgWasherTestimonials />
        <ServiceArea />
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
