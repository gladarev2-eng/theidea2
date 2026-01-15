import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

import heroLiving from '@/assets/hero-living-room.jpg';
import heroBedroom from '@/assets/hero-bedroom.jpg';
import heroDining from '@/assets/hero-dining.jpg';

const collections = [
  {
    id: 1,
    name: 'CASE',
    description: 'Архитектурная строгость линий и безупречные пропорции.',
    image: heroLiving,
    href: '/collections/case',
  },
  {
    id: 2,
    name: 'SAGA',
    description: 'Минимализм и чистота форм для современного интерьера.',
    image: heroBedroom,
    href: '/collections/saga',
  },
  {
    id: 3,
    name: 'BERGEN',
    description: 'Скандинавский характер и тепло натурального массива.',
    image: heroDining,
    href: '/collections/bergen',
  },
];

export const CollectionsSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-card">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <AnimatedSection className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-20">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">Наши миры</p>
            <h2 className="text-3xl lg:text-5xl font-light tracking-tight">Кураторские коллекции</h2>
          </div>
          <Link 
            to="/collections" 
            className="mt-6 lg:mt-0 inline-flex text-[10px] uppercase tracking-[0.2em] font-medium pb-2 border-b border-foreground hover:border-muted-foreground hover:text-muted-foreground transition-colors duration-300"
          >
            Все коллекции
          </Link>
        </AnimatedSection>

        {/* Collections Grid */}
        <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((collection) => (
            <StaggerItem key={collection.id}>
              <Link 
                to={collection.href}
                className="group block relative"
              >
                {/* Image */}
                <div className="aspect-[4/5] overflow-hidden mb-6">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-110"
                  />
                </div>
                
                {/* Content */}
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-xs font-medium uppercase tracking-[0.3em] mb-2">
                      {collection.name}
                    </h3>
                    <p className="text-sm font-light text-muted-foreground max-w-[200px] leading-relaxed">
                      {collection.description}
                    </p>
                  </div>
                  <button className="w-10 h-10 border border-border flex items-center justify-center transition-all duration-300 group-hover:bg-foreground group-hover:text-background group-hover:border-foreground flex-shrink-0">
                    <ChevronRight className="w-4 h-4" strokeWidth={1.5} />
                  </button>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
