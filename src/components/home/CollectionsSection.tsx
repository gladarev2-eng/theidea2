import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { AnimatedSection, AnimatedText } from '@/components/ui/AnimatedSection';

import heroLiving from '@/assets/hero-living-room.jpg';
import heroBedroom from '@/assets/hero-bedroom.jpg';
import heroDining from '@/assets/hero-dining.jpg';

const collections = [
  {
    id: 1,
    name: 'Гостиные',
    description: 'Пространства для жизни и общения',
    image: heroLiving,
    href: '/collections/living',
  },
  {
    id: 2,
    name: 'Спальни',
    description: 'Искусство комфортного отдыха',
    image: heroBedroom,
    href: '/collections/bedroom',
  },
  {
    id: 3,
    name: 'Столовые',
    description: 'Место для особенных моментов',
    image: heroDining,
    href: '/collections/dining',
  },
];

export const CollectionsSection = () => {
  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <AnimatedText>
              <p className="text-caption mb-4">Коллекции</p>
            </AnimatedText>
            <AnimatedSection delay={0.1}>
              <h2 className="heading-section">Наши миры</h2>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.2}>
            <Link 
              to="/collections" 
              className="link-underline inline-flex items-center gap-2 font-body font-light text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Все коллекции
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {collections.map((collection, index) => (
            <AnimatedSection key={collection.id} delay={index * 0.15}>
              <Link 
                to={collection.href}
                className="group block relative aspect-[3/4] overflow-hidden"
              >
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6 }}
                  className="absolute inset-0"
                >
                  <img
                    src={collection.image}
                    alt={collection.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-foreground/20 to-transparent" />
                </motion.div>

                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <h3 className="font-display text-3xl md:text-4xl font-light text-primary-foreground">
                    {collection.name}
                  </h3>
                  <p className="font-body font-light text-sm text-primary-foreground/80 mt-2">
                    {collection.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-primary-foreground opacity-0 group-hover:opacity-100 translate-y-4 group-hover:translate-y-0 transition-all duration-300">
                    <span className="font-body text-sm tracking-wider uppercase">Смотреть</span>
                    <ArrowRight className="w-4 h-4" />
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
