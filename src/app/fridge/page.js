import Navbar from '@/components/Navbar';
import FridgeHeroSection from '@/components/FridgeHeroSection';
import FeaturesBar from '@/components/FeaturesBar';
import FridgeProblemsGrid from '@/components/FridgeProblemsGrid';
import FridgeBrandsWeService from '@/components/FridgeBrandsWeService';
import FridgeTrustSection from '@/components/FridgeTrustSection';
import GallerySection from '@/components/GallerySection';
import FridgeTestimonials from '@/components/FridgeTestimonials';
import ServiceArea from '@/components/ServiceArea';
import Footer from '@/components/Footer';
import StickyCallBar from '@/components/StickyCallBar';

export const metadata = {
  title: 'Refrigerator Repair Near Me | Same-Day Fridge Repair in MA',
  description: 'Fast, reliable refrigerator repair in Massachusetts. Licensed technicians for all major brands — LG, Samsung, GE, Whirlpool & more. Same-day service available. Call (866) 565-6212.',
};

export default function FridgeLandingPage() {
  return (
    <>
      <Navbar />
      <main style={{ paddingBottom: '70px' }}> {/* Padding for mobile sticky bar */}
        <FridgeHeroSection />
        <FeaturesBar />
        <FridgeProblemsGrid />
        <FridgeBrandsWeService />
        <FridgeTrustSection />
        <GallerySection />
        <FridgeTestimonials />
        <ServiceArea />
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
