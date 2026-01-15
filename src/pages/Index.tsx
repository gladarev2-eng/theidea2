import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { HeroSlider } from '@/components/home/HeroSlider';
import { IntroSection } from '@/components/home/IntroSection';
import { CollectionsSection } from '@/components/home/CollectionsSection';
import { BestsellersSection } from '@/components/home/BestsellersSection';
import { EcosystemSection } from '@/components/home/EcosystemSection';
import { PhilosophySection } from '@/components/home/PhilosophySection';
import { AdvantagesSection } from '@/components/home/AdvantagesSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { SocialProofSection } from '@/components/home/SocialProofSection';
import { CTASection } from '@/components/home/CTASection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSlider />
        <IntroSection />
        <CollectionsSection />
        <BestsellersSection />
        <EcosystemSection />
        <PhilosophySection />
        <AdvantagesSection />
        <TestimonialsSection />
        <SocialProofSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
