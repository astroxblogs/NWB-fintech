import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { HeroSection } from '@/components/sections/HeroSection';
import { StickyScrollSection } from '@/components/sections/StickyScrollSection';
import { ProductsSection } from '@/components/sections/ProductsSection';
import { WhyNWBSection } from '@/components/sections/Whynwbsection';
import { TestimonialsSection } from '@/components/sections/TestimonialsSection';
import { CTASection } from '@/components/sections/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <StickyScrollSection />
        <ProductsSection />
        <WhyNWBSection />
        <TestimonialsSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
