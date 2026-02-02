import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import CollectionCard from "@/components/catalog/CollectionCard";
import { collectionsFullData } from "@/data/catalogData";

const Collections = () => {
  // Group collections by type
  const corpusCollections = collectionsFullData.filter(c => c.type === 'corpus');
  const softCollections = collectionsFullData.filter(c => c.type === 'soft');
  const tablesCollections = collectionsFullData.filter(c => c.type === 'tables');

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
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

      {/* Корпусная мебель */}
      <section className="pb-24">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl lg:text-3xl font-extralight tracking-tight mb-2">
              Корпусная мебель
            </h2>
            <p className="text-muted-foreground">
              Системы хранения, комоды, тумбы и стеллажи
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-20">
            {corpusCollections.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CollectionCard {...collection} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Мягкая мебель */}
      <section className="py-24 bg-muted/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl lg:text-3xl font-extralight tracking-tight mb-2">
              Мягкая мебель
            </h2>
            <p className="text-muted-foreground">
              Диваны, кровати, кресла и пуфы
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-20">
            {softCollections.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CollectionCard {...collection} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Столы */}
      <section className="py-24">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h2 className="text-2xl lg:text-3xl font-extralight tracking-tight mb-2">
              Столы
            </h2>
            <p className="text-muted-foreground">
              Обеденные, журнальные, рабочие и консольные столы
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-20">
            {tablesCollections.map((collection, index) => (
              <motion.div
                key={collection.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <CollectionCard {...collection} />
              </motion.div>
            ))}
          </div>
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
