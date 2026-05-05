import HeroSection from "@/components/HeroSection";
import AboutPreview from "@/components/AboutPreview";
import ProductGrid from "@/components/ProductGrid";
import WhyChooseUs from "@/components/WhyChooseUs";
import Testimonials from "@/components/Testimonials";
import CTABanner from "@/components/CTABanner";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutPreview />
      <div className="brand-divider" />
      <ProductGrid />
      <div className="brand-divider" />
      <WhyChooseUs />
      <Testimonials />
      <CTABanner />
    </>
  );
}
