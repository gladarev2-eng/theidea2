import { Instagram } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

import heroLiving from '@/assets/hero-living-room.jpg';
import heroBedroom from '@/assets/hero-bedroom.jpg';
import heroDining from '@/assets/hero-dining.jpg';
import manufacturingImg from '@/assets/manufacturing.jpg';

const instagramPosts = [
  { id: 1, image: heroLiving },
  { id: 2, image: heroBedroom },
  { id: 3, image: heroDining },
  { id: 4, image: manufacturingImg },
];

export const SocialProofSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <AnimatedSection className="text-center mb-12 lg:mb-16">
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">Социальные сети</p>
          <h2 className="text-2xl lg:text-3xl font-light tracking-tight mb-4">@theidea_furniture</h2>
          <p className="text-base font-light text-muted-foreground max-w-lg mx-auto">
            Вдохновляйтесь нашими проектами и делитесь своими интерьерами с THE IDEA
          </p>
        </AnimatedSection>

        {/* Instagram Grid */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-2 lg:gap-3">
          {instagramPosts.map((post) => (
            <StaggerItem key={post.id}>
              <a
                href="https://instagram.com/theidea_furniture"
                target="_blank"
                rel="noopener noreferrer"
                className="group block aspect-square overflow-hidden relative"
              >
                <img
                  src={post.image}
                  alt="Instagram"
                  className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-center justify-center">
                  <Instagram 
                    className="w-6 h-6 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" 
                    strokeWidth={1.5} 
                  />
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>

        {/* Follow Button */}
        <AnimatedSection delay={0.2} className="text-center mt-10">
          <a
            href="https://instagram.com/theidea_furniture"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-8 py-4 border border-foreground text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-foreground hover:text-background transition-all duration-300"
          >
            <Instagram className="w-4 h-4" strokeWidth={1.5} />
            Подписаться
          </a>
        </AnimatedSection>
      </div>
    </section>
  );
};
