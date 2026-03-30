import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import FeaturesBar from '@/components/FeaturesBar';
import BrandsWeService from '@/components/BrandsWeService';
import ServicesGrid from '@/components/ServicesGrid';
import TrustSection from '@/components/TrustSection';
import GallerySection from '@/components/GallerySection';
import Testimonials from '@/components/Testimonials';
import ServiceArea from '@/components/ServiceArea';
import Footer from '@/components/Footer';
import StickyCallBar from '@/components/StickyCallBar';

export default function Home() {
  return (
    <>
      <Navbar />
      <main style={{ paddingBottom: '70px' }}> {/* Padding for mobile sticky bar */}
        <HeroSection />
        <FeaturesBar />
        <ServicesGrid />
        <BrandsWeService />
        <TrustSection />
        <GallerySection />
        <Testimonials />
        <ServiceArea />
      </main>
      <Footer />
      <StickyCallBar />
    </>
  );
}
