import { Link } from 'react-router-dom';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

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
    <section className="section-padding bg-background">
      <div className="container-wide">
        <AnimatedSection className="text-center mb-12">
          <p className="text-caption mb-4">Наши коллекции</p>
          <h2 className="heading-h2">Выберите свой стиль</h2>
        </AnimatedSection>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {collections.map((collection, index) => (
            <AnimatedSection key={collection.id} delay={index * 0.1}>
              <Link 
                to={collection.href}
                className="group block"
              >
                <div className="card-base overflow-hidden">
                  <div className="aspect-[4/5] overflow-hidden">
                    <img
                      src={collection.image}
                      alt={collection.name}
                      className="w-full h-full object-cover img-hover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="heading-h5 mb-2">{collection.name}</h3>
                    <p className="text-body-sm text-muted-foreground">
                      {collection.description}
                    </p>
                  </div>
                </div>
              </Link>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
};
