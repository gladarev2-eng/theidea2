import { motion } from "framer-motion";
import { ArrowRight, ArrowDown } from "lucide-react";
import { Link } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import ProductCard from "@/components/catalog/ProductCard";

import heroLiving from "@/assets/hero-living-room.jpg";
import heroBedroom from "@/assets/hero-bedroom.jpg";
import heroDining from "@/assets/hero-dining.jpg";
import productSofa from "@/assets/product-sofa.jpg";
import productArmchair from "@/assets/product-armchair.jpg";
import productChair from "@/assets/product-chair.jpg";
import productBed from "@/assets/product-bed.jpg";
import manufacturing from "@/assets/manufacturing.jpg";

// Реальные данные коллекции CASE на основе theidea.ru
const caseCollection = {
  name: "Case",
  tagline: "Архитектурный минимализм в каждой детали",
  heroQuote: "Форма следует за функцией",
  
  // Типы товаров в коллекции (без стеллажей)
  productTypes: [
    { name: "Диваны", count: 12, description: "Модульные и стационарные" },
    { name: "Кресла", count: 4, description: "Для отдыха и акцента" },
    { name: "Системы хранения", count: 35, description: "Комоды, витрины, тумбы" },
    { name: "Столы", count: 8, description: "Консольные и рабочие" },
    { name: "Банкетки", count: 6, description: "Для прихожей и спальни" },
  ],

  // Ключевые особенности
  features: [
    {
      title: "Модульная система",
      description: "Диваны CASE собираются из независимых секций, что позволяет создавать конфигурации любой формы и размера",
    },
    {
      title: "Фирменная фрезеровка",
      description: "Уникальный узнаваемый рисунок на фасадах корпусной мебели — визитная карточка коллекции",
    },
    {
      title: "Скругленные углы",
      description: "Мягкие радиусы на ножках и деталях создают безопасный и элегантный силуэт",
    },
    {
      title: "Съёмные чехлы",
      description: "Все чехлы на мягкой мебели можно снять для стирки, что упрощает уход",
    },
  ],

  // Материалы и производство
  materials: {
    frame: "Берёзовая фанера и массив сосны",
    legs: "Массив бука с тонировкой",
    fillings: ["Латексный ППУ", "Пенополиуретан", "Периотек", "Синтепух для подушек"],
    facade: "МДФ с эмалью и натуральный шпон дуба",
    hardware: "Европейская фурнитура Hettich",
  },

  // Доступные категории тканей
  fabricCategories: [
    { name: "Enigma", type: "Рогожка", cleaning: "Легко чистится" },
    { name: "Bentley", type: "Велюр", cleaning: "Премиум комфорт" },
    { name: "Milan", type: "Микрофибра", cleaning: "Практичная" },
    { name: "Gravitacia", type: "Текстиль", cleaning: "Богатая текстура" },
    { name: "Aquarelle", type: "Хлопок", cleaning: "Натуральный" },
  ],

  // Тонировки ножек (бук)
  legFinishes: [
    { name: "Бук натуральный", code: "01" },
    { name: "Бук тёмный", code: "02" },
    { name: "Бук венге", code: "03" },
    { name: "Бук тобакко", code: "04" },
  ],

  // Философия дизайна
  philosophy: {
    main: "Диваны CASE отличаются строгими геометричными линиями и широкими посадочными местами. Коллекция создана для тех, кто ценит продуманный минимализм и функциональность.",
    comfort: "Объёмные подушки из прорезиненного пенополиуретана нескольких степеней жёсткости вместе с удобной глубокой посадкой создают необычайно комфортную зону отдыха. Если убрать приспинные подушки, гостевое спальное место станет заметно шире.",
    versatility: "Диваны не имеют оборотной стороны и могут устанавливаться в центре помещения. В комплекте поставляются декоративные подушки.",
  },

  // Примеры товаров из реального каталога
  products: [
    { 
      id: "case-901-902", 
      name: "3-х местный диван Case 901/902", 
      price: 252200, 
      category: "soft", 
      collection: "Case", 
      images: [productSofa, heroLiving, heroDining],
      badge: "hit" as const,
      dimensions: "2480 × 940 × 800 мм",
    },
    { 
      id: "case-913-905-904", 
      name: "4-х местный диван с кушеткой Case", 
      price: 386600, 
      category: "soft", 
      collection: "Case", 
      images: [productSofa, heroBedroom, heroLiving],
    },
    { 
      id: "case-920", 
      name: "Кресло CASE 920", 
      price: 123900, 
      category: "soft", 
      collection: "Case", 
      images: [productArmchair, heroLiving, heroBedroom],
    },
    { 
      id: "case-950", 
      name: "Банкетка CASE 950", 
      price: 58100, 
      category: "soft", 
      collection: "Case", 
      images: [productChair, heroDining, heroLiving],
      badge: "new" as const,
    },
    { 
      id: "case-cs029", 
      name: "Комод Case CS029", 
      price: 83400, 
      category: "corpus", 
      collection: "Case", 
      images: [productArmchair, heroBedroom, heroLiving],
    },
    { 
      id: "case-cs024", 
      name: "Высокий комод Case CS024", 
      price: 103500, 
      category: "corpus", 
      collection: "Case", 
      images: [heroBedroom, manufacturing, heroLiving],
    },
    { 
      id: "case-cs090", 
      name: "Тумба под ТВ Case CS090", 
      price: 106800, 
      category: "corpus", 
      collection: "Case", 
      images: [heroLiving, heroDining, heroBedroom],
    },
    { 
      id: "case-cs159", 
      name: "Витрина Case CS159", 
      price: 160700, 
      category: "corpus", 
      collection: "Case", 
      images: [heroDining, heroLiving, manufacturing],
      badge: "hit" as const,
    },
    { 
      id: "case-cs009", 
      name: "Прикроватная тумба Case CS009", 
      price: 54600, 
      category: "corpus", 
      collection: "Case", 
      images: [productBed, heroBedroom, heroLiving],
    },
    { 
      id: "case-cst33", 
      name: "Рабочий стол CASE CST33", 
      price: 117090, 
      category: "tables", 
      collection: "Case", 
      images: [heroDining, manufacturing, heroLiving],
      badge: "new" as const,
    },
  ],
};

const CaseCollectionPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section — Full Screen */}
      <section className="relative h-screen flex items-end">
        <div className="absolute inset-0">
          <img
            src={heroLiving}
            alt="Коллекция Case — интерьер"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>

        <div className="relative container-wide pb-20 lg:pb-32 text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3 }}
          >
            <p className="text-[11px] uppercase tracking-[0.4em] text-white/60 mb-6">
              Коллекция
            </p>
            <h1 className="text-6xl md:text-8xl lg:text-[10rem] font-extralight tracking-tight mb-6">
              Case
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light text-white/80 max-w-2xl">
              {caseCollection.tagline}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, delay: 1.2 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2"
          >
            <ArrowDown className="w-6 h-6 text-white/50 animate-bounce" />
          </motion.div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-24 lg:py-40 bg-muted/20">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-3xl md:text-4xl lg:text-5xl font-extralight leading-relaxed tracking-tight text-foreground/80">
              «{caseCollection.heroQuote}»
            </p>
            <p className="text-sm text-muted-foreground mt-8 uppercase tracking-[0.3em]">
              Принцип коллекции Case
            </p>
          </motion.div>
        </div>
      </section>

      {/* Product Types Grid */}
      <section className="py-20 lg:py-32">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Состав коллекции
            </p>
            <h2 className="text-3xl lg:text-4xl font-extralight tracking-tight">
              Более 60 предметов
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {caseCollection.productTypes.map((type, index) => (
              <motion.div
                key={type.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 lg:p-8 bg-muted/30 hover:bg-muted/50 transition-colors group"
              >
                <p className="text-4xl lg:text-5xl font-extralight mb-2 group-hover:text-primary transition-colors">
                  {type.count}
                </p>
                <p className="font-medium mb-1">{type.name}</p>
                <p className="text-sm text-muted-foreground">{type.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Philosophy — Split Screen */}
      <section className="py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/3] lg:aspect-auto lg:h-[80vh] relative overflow-hidden"
          >
            <img
              src={productSofa}
              alt="Диван Case"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center p-8 lg:p-16 xl:p-24 bg-muted/20"
          >
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
                Философия дизайна
              </p>
              <h2 className="text-3xl lg:text-4xl font-extralight tracking-tight mb-8 leading-tight">
                Строгие геометричные линии. Широкие посадочные места.
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {caseCollection.philosophy.main}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {caseCollection.philosophy.comfort}
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-24 lg:py-32">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-20"
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Особенности
            </p>
            <h2 className="text-3xl lg:text-5xl font-extralight tracking-tight">
              Что делает Case особенной
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {caseCollection.features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6 lg:gap-8"
              >
                <div className="flex-shrink-0">
                  <span className="text-5xl lg:text-6xl font-extralight text-muted-foreground/30">
                    0{index + 1}
                  </span>
                </div>
                <div>
                  <h3 className="text-xl lg:text-2xl font-light mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Full Width Image */}
      <section className="relative h-[60vh] lg:h-[80vh]">
        <img
          src={heroDining}
          alt="Case в интерьере"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white text-3xl md:text-4xl lg:text-5xl font-extralight text-center px-4"
          >
            {caseCollection.philosophy.versatility}
          </motion.p>
        </div>
      </section>

      {/* Materials Section */}
      <section className="py-24 lg:py-32 bg-foreground text-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-[11px] uppercase tracking-[0.3em] text-background/50 mb-6">
                Материалы и производство
              </p>
              <h2 className="text-3xl lg:text-4xl font-extralight tracking-tight mb-8">
                Только качественные материалы
              </h2>
              
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-background/50 mb-1">Каркас</p>
                  <p className="text-lg">{caseCollection.materials.frame}</p>
                </div>
                <div>
                  <p className="text-sm text-background/50 mb-1">Ножки</p>
                  <p className="text-lg">{caseCollection.materials.legs}</p>
                </div>
                <div>
                  <p className="text-sm text-background/50 mb-1">Фасады</p>
                  <p className="text-lg">{caseCollection.materials.facade}</p>
                </div>
                <div>
                  <p className="text-sm text-background/50 mb-1">Фурнитура</p>
                  <p className="text-lg">{caseCollection.materials.hardware}</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-[11px] uppercase tracking-[0.3em] text-background/50 mb-6">
                Наполнитель мягкой мебели
              </p>
              <div className="space-y-4 mb-12">
                {caseCollection.materials.fillings.map((filling) => (
                  <p key={filling} className="text-lg flex items-center gap-3">
                    <span className="w-2 h-2 bg-background/30 rounded-full" />
                    {filling}
                  </p>
                ))}
              </div>

              <p className="text-[11px] uppercase tracking-[0.3em] text-background/50 mb-6">
                Доступные тонировки ножек
              </p>
              <div className="grid grid-cols-2 gap-4">
                {caseCollection.legFinishes.map((finish) => (
                  <div key={finish.code} className="p-4 bg-background/10 rounded">
                    <p className="text-sm text-background/50 mb-1">Код {finish.code}</p>
                    <p>{finish.name}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fabric Categories */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Ткани
            </p>
            <h2 className="text-3xl lg:text-4xl font-extralight tracking-tight mb-4">
              Широкий выбор обивки
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Диваны и кресла CASE доступны в нескольких категориях ткани
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {caseCollection.fabricCategories.map((fabric, index) => (
              <motion.div
                key={fabric.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 bg-background border border-border hover:border-foreground/30 transition-colors text-center"
              >
                <p className="font-medium mb-1">{fabric.name}</p>
                <p className="text-sm text-muted-foreground mb-2">{fabric.type}</p>
                <p className="text-xs text-muted-foreground/70">{fabric.cleaning}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Mosaic */}
      <section className="py-0">
        <div className="grid grid-cols-2 lg:grid-cols-3">
          {[heroLiving, manufacturing, heroBedroom, productArmchair, heroDining, productSofa].map((img, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`aspect-square overflow-hidden ${index === 1 ? 'lg:col-span-2 lg:row-span-2 lg:aspect-auto' : ''}`}
            >
              <img
                src={img}
                alt={`Case интерьер ${index + 1}`}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </motion.div>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 lg:py-32">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
          >
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Товары коллекции
              </p>
              <h2 className="text-3xl lg:text-4xl font-extralight tracking-tight">
                Выберите свой Case
              </h2>
            </div>
            <Link
              to="/catalog?collection=case"
              className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] hover:gap-4 transition-all group mt-4 md:mt-0"
            >
              Все товары коллекции
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 lg:gap-x-6 lg:gap-y-14">
            {caseCollection.products.slice(0, 8).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="mt-16 text-center"
          >
            <Link
              to="/catalog?collection=case"
              className="inline-flex items-center gap-3 px-10 py-4 bg-foreground text-background text-[11px] uppercase tracking-[0.2em] hover:bg-foreground/90 transition-colors"
            >
              Смотреть все товары
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 lg:py-32 bg-muted/20">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={manufacturing}
                alt="Производство Case"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
                Хотите увидеть вживую?
              </p>
              <h2 className="text-3xl lg:text-4xl font-extralight tracking-tight mb-6">
                Посетите наш шоурум
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Оцените качество материалов, посидите на диване, откройте ящики комодов. 
                Наши консультанты помогут подобрать конфигурацию под ваш интерьер.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/contacts"
                  className="px-8 py-4 bg-foreground text-background text-[11px] uppercase tracking-[0.2em] hover:bg-foreground/90 transition-colors text-center"
                >
                  Найти шоурум
                </Link>
                <Link
                  to="/designers"
                  className="px-8 py-4 border border-foreground text-foreground text-[11px] uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors text-center"
                >
                  Для дизайнеров
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CaseCollectionPage;
