import Navbar from '@/components/Navbar';
import WasherHeroSection from '@/components/WasherHeroSection';
import FeaturesBar from '@/components/FeaturesBar';
import WasherBrandsWeService from '@/components/WasherBrandsWeService';
import WasherProblemsGrid from '@/components/WasherProblemsGrid';
import WasherTrustSection from '@/components/WasherTrustSection';
import GallerySection from '@/components/GallerySection';
import WasherTestimonials from '@/components/WasherTestimonials';
import ServiceArea from '@/components/ServiceArea';
import Footer from '@/components/Footer';
import StickyCallBar from '@/components/StickyCallBar';

export default function WasherLandingPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingBottom: '70px' }}> {/* Padding for mobile sticky bar */}
        <WasherHeroSection />
        <FeaturesBar />
        <WasherProblemsGrid />
        <WasherBrandsWeService />
        <WasherTrustSection />
        <GallerySection />
        <WasherTestimonials />
        <ServiceArea />
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
