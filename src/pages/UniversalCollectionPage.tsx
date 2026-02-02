import { useParams, Navigate } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import CollectionHero from '@/components/collection/CollectionHero';
import CollectionPhilosophy from '@/components/collection/CollectionPhilosophy';
import CollectionAdvantages from '@/components/collection/CollectionAdvantages';
import CollectionCategoryBlock from '@/components/collection/CollectionCategoryBlock';
import CollectionMaterials from '@/components/collection/CollectionMaterials';
import { getCollectionById } from '@/data/collectionsData';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const UniversalCollectionPage = () => {
  const { id } = useParams<{ id: string }>();
  const collection = id ? getCollectionById(id) : undefined;

  // Redirect to 404 if collection not found
  if (!collection) {
    return <Navigate to="/collections" replace />;
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <CollectionHero
        name={collection.name}
        tagline={collection.tagline}
        description={collection.heroDescription}
        image={collection.heroImage}
      />

      {/* Philosophy */}
      <CollectionPhilosophy
        philosophy={collection.philosophy}
        image={collection.galleryImages[1]}
      />

      {/* Advantages */}
      <CollectionAdvantages advantages={collection.advantages} />

      {/* Category Blocks */}
      {collection.categories.map((category, index) => (
        <CollectionCategoryBlock
          key={category.id}
          id={category.id}
          name={category.name}
          description={category.description}
          image={category.image}
          products={category.products}
          collectionId={collection.id}
          reversed={index % 2 !== 0}
        />
      ))}

      {/* Materials & Decors */}
      <CollectionMaterials
        materials={collection.materials}
        decors={collection.decors}
        galleryImages={collection.galleryImages}
      />

      {/* CTA Section */}
      <section className="py-24 lg:py-32">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-extralight tracking-tight mb-6">
              Хотите увидеть коллекцию {collection.name} вживую?
            </h2>
            <p className="text-muted-foreground mb-10">
              Посетите наш шоу-рум в Санкт-Петербурге или закажите бесплатную консультацию дизайнера.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={`/catalog?collection=${collection.id}`}
                className="px-8 py-4 rounded-full bg-foreground text-background text-[11px] uppercase tracking-[0.2em] hover:bg-foreground/90 transition-colors"
              >
                Смотреть каталог
              </Link>
              <Link
                to="/contacts"
                className="px-8 py-4 rounded-full border border-foreground/30 text-[11px] uppercase tracking-[0.2em] hover:bg-foreground/5 transition-colors"
              >
                Записаться в шоу-рум
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default UniversalCollectionPage;
