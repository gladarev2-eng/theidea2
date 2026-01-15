import { Link } from 'react-router-dom';
import { AnimatedSection, AnimatedText } from '@/components/ui/AnimatedSection';

import heroLiving from '@/assets/hero-living-room.jpg';
import heroBedroom from '@/assets/hero-bedroom.jpg';
import heroDining from '@/assets/hero-dining.jpg';

const collections = [
  {
    id: 1,
    name: 'Case',
    description: 'Минимализм и дуб',
    image: heroLiving,
    href: '/collections/case',
  },
  {
    id: 2,
    name: 'Saga',
    description: 'Мягкость и комфорт',
    image: heroBedroom,
    href: '/collections/saga',
  },
  {
    id: 3,
    name: 'Code',
    description: 'Геометрия и гравировка',
    image: heroDining,
    href: '/collections/code',
  },
];

export const CollectionsSection = () => {
  return (
    <section className="py-24 md:py-40 px-6 md:px-20 bg-card">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <AnimatedSection key={collection.id} delay={index * 0.15}>
              <Link 
                to={collection.href}
                className="group block cursor-pointer"
              >
                <div className="aspect-[3/4] overflow-hidden mb-8">
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover img-hover"
                  />
                </div>
                <h3 className="text-2xl font-light tracking-tight mb-2 uppercase">
                  {collection.name}
                </h3>
                <p className="text-xs text-muted-foreground uppercase tracking-widest">
                  {collection.description}
                </p>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
