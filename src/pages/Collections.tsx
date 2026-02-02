import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import CollectionCard from '@/components/catalog/CollectionCard';
import { collectionsData, CollectionType } from '@/data/collectionsData';

type FilterType = 'all' | CollectionType;

const filterOptions: { id: FilterType; name: string }[] = [
  { id: 'all', name: 'Все коллекции' },
  { id: 'corpus', name: 'Корпусная мебель' },
  { id: 'soft', name: 'Мягкая мебель' },
  { id: 'tables', name: 'Столы' },
];

const Collections = () => {
  const [activeFilter, setActiveFilter] = useState<FilterType>('all');

  // Filter collections based on active filter
  const filteredCollections = activeFilter === 'all'
    ? collectionsData
    : collectionsData.filter(c => c.type === activeFilter);

  // Transform data for CollectionCard component
  const transformedCollections = filteredCollections.map(c => ({
    id: c.id,
    name: c.name,
    tagline: c.tagline,
    description: c.heroDescription,
    images: c.galleryImages,
    itemsCount: c.categories.reduce((sum, cat) => sum + cat.products.length, 0),
    year: '',
    type: c.type,
    features: c.advantages.slice(0, 2).map(a => a.title),
  }));

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-8 lg:pt-40 lg:pb-12">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Наши коллекции
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tight mb-8">
              Миры, которые мы создаём
            </h1>
            <p className="text-lg text-muted-foreground font-light leading-relaxed max-w-xl">
              Каждая коллекция — это целостная история со своим характером, 
              философией и настроением. Найдите ту, что резонирует с вами.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-8 border-b border-border sticky top-20 bg-background/95 backdrop-blur-sm z-40">
        <div className="container-wide">
          <div className="flex flex-wrap gap-2 lg:gap-4">
            {filterOptions.map((option) => (
              <button
                key={option.id}
                onClick={() => setActiveFilter(option.id)}
                className={`px-4 lg:px-6 py-2.5 rounded-full text-[11px] uppercase tracking-[0.15em] transition-all duration-300 ${
                  activeFilter === option.id
                    ? 'bg-foreground text-background'
                    : 'bg-muted hover:bg-muted/80 text-foreground'
                }`}
              >
                {option.name}
                <span className="ml-2 text-[10px] opacity-60">
                  {option.id === 'all' 
                    ? collectionsData.length
                    : collectionsData.filter(c => c.type === option.id).length
                  }
                </span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Collections Grid */}
      <section className="py-16 lg:py-24">
        <div className="container-wide">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeFilter}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-20"
            >
              {transformedCollections.map((collection, index) => (
                <motion.div
                  key={collection.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <CollectionCard {...collection} />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>

          {/* Empty State */}
          {filteredCollections.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-24"
            >
              <p className="text-muted-foreground text-lg">
                В этой категории пока нет коллекций
              </p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-foreground text-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-extralight tracking-tight mb-6">
              Не нашли подходящую коллекцию?
            </h2>
            <p className="text-background/60 mb-10">
              Мы создаём индивидуальные решения под ваш проект. 
              Расскажите о своей задаче — найдём идеальное решение.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/catalog"
                className="px-8 py-4 rounded-full bg-background text-foreground text-[11px] uppercase tracking-[0.2em] hover:bg-background/90 transition-colors"
              >
                Смотреть каталог
              </Link>
              <Link
                to="/contacts"
                className="px-8 py-4 rounded-full border border-background/30 text-[11px] uppercase tracking-[0.2em] hover:bg-background/10 transition-colors"
              >
                Связаться с нами
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Collections;
