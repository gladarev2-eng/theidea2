import { Link } from 'react-router-dom';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

import heroLiving from '@/assets/hero-living-room.jpg';
import heroBedroom from '@/assets/hero-bedroom.jpg';
import heroDining from '@/assets/hero-dining.jpg';

const collections = [
  {
    id: 1,
    name: 'CASE',
    description: 'Архитектурная строгость линий',
    image: heroLiving,
    href: '/collections/case',
  },
  {
    id: 2,
    name: 'SAGA',
    description: 'Минимализм и чистота форм',
    image: heroBedroom,
    href: '/collections/saga',
  },
  {
    id: 3,
    name: 'BERGEN',
    description: 'Тепло натурального массива',
    image: heroDining,
    href: '/collections/bergen',
  },
];

export const CollectionsSection = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-40 bg-[#f8f8f6]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header */}
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-8 mb-10 sm:mb-16 lg:mb-20">
          <div>
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-4 sm:mb-6 font-light">
              Наши миры
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extralight tracking-tight">
              Кураторские коллекции
            </h2>
          </div>
          <Link 
            to="/collections" 
            className="inline-flex text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium pb-2 border-b border-foreground hover:opacity-60 transition-opacity duration-300 self-start sm:self-auto"
          >
            Все коллекции
          </Link>
        </AnimatedSection>

        {/* Collections Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 lg:gap-8">
          {collections.map((collection) => (
            <StaggerItem key={collection.id}>
              <Link 
                to={collection.href}
                className="group block"
              >
                {/* Image */}
                <div className="aspect-[4/5] sm:aspect-[3/4] overflow-hidden mb-4 sm:mb-6 bg-muted">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover transition-transform duration-[1.5s] ease-out group-hover:scale-105"
                  />
                </div>
                
                {/* Content */}
                <div>
                  <h3 className="text-[10px] sm:text-[11px] font-medium uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-1.5 sm:mb-2">
                    {collection.name}
                  </h3>
                  <p className="text-xs sm:text-sm font-light text-muted-foreground">
                    {collection.description}
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
