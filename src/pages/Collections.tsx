import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import heroLiving from "@/assets/hero-living-room.jpg";
import heroBedroom from "@/assets/hero-bedroom.jpg";
import heroDining from "@/assets/hero-dining.jpg";
import productSofa from "@/assets/product-sofa.jpg";
import productArmchair from "@/assets/product-armchair.jpg";
import manufacturing from "@/assets/manufacturing.jpg";

const collections = [
  {
    id: "case",
    name: "Case",
    tagline: "Архитектурный минимализм",
    description: "Коллекция Case — это чистые линии и продуманная функциональность. Каждый предмет создан как архитектурный объект, где форма следует за функцией.",
    image: heroLiving,
    itemsCount: 24,
    year: "2019",
  },
  {
    id: "saga",
    name: "Saga",
    tagline: "Скандинавская история",
    description: "Вдохновлённая северной природой, коллекция Saga сочетает мягкие формы с натуральными материалами. Тепло дерева и уют текстиля.",
    image: productSofa,
    itemsCount: 18,
    year: "2020",
  },
  {
    id: "bergen",
    name: "Bergen",
    tagline: "Современная классика",
    description: "Bergen — это переосмысление классических форм в современном контексте. Элегантность без излишеств, качество в деталях.",
    image: heroBedroom,
    itemsCount: 32,
    year: "2018",
  },
  {
    id: "code",
    name: "Code",
    tagline: "Геометрия пространства",
    description: "Коллекция Code играет с геометрическими формами и пропорциями. Каждый предмет — это уравнение идеального баланса.",
    image: heroDining,
    itemsCount: 15,
    year: "2021",
  },
  {
    id: "savi",
    name: "Savi",
    tagline: "Мягкая роскошь",
    description: "Savi создана для тех, кто ценит комфорт. Глубокие посадки, премиальные ткани и безупречная эргономика.",
    image: productArmchair,
    itemsCount: 12,
    year: "2022",
  },
  {
    id: "frame",
    name: "Frame",
    tagline: "Каркасные решения",
    description: "Коллекция Frame раскрывает красоту конструкции. Открытые каркасы, честные материалы, индустриальная эстетика.",
    image: manufacturing,
    itemsCount: 20,
    year: "2023",
  },
];

const Collections = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-20 lg:pt-40 lg:pb-28">
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

      {/* Collections List */}
      <section className="pb-24">
        {collections.map((collection, index) => (
          <motion.article
            key={collection.id}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className={`${index % 2 === 1 ? 'bg-muted/30' : ''}`}
          >
            <Link
              to={`/collections/${collection.id}`}
              className="group block"
            >
              <div className="container-wide py-16 lg:py-24">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}>
                  {/* Image */}
                  <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <img
                        src={collection.image}
                        alt={collection.name}
                        className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                      />
                      {/* Overlay on hover */}
                      <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                    <div className="max-w-lg">
                      <div className="flex items-center gap-4 mb-6">
                        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                          {collection.year}
                        </span>
                        <span className="w-8 h-px bg-border" />
                        <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                          {collection.itemsCount} предметов
                        </span>
                      </div>

                      <h2 className="text-4xl lg:text-5xl font-extralight tracking-tight mb-3">
                        {collection.name}
                      </h2>
                      
                      <p className="text-lg text-muted-foreground mb-6">
                        {collection.tagline}
                      </p>

                      <p className="text-muted-foreground font-light leading-relaxed mb-10">
                        {collection.description}
                      </p>

                      <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] group-hover:gap-5 transition-all duration-300">
                        Смотреть коллекцию
                        <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>
        ))}
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
