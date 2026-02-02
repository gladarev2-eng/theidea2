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

// Реальные данные коллекции BERGEN на основе theidea.ru
const bergenCollection = {
  name: "Bergen",
  tagline: "Современная классика с авторскими принтами",
  heroQuote: "Благородство формы, индивидуальность декора",
  
  // Типы товаров в коллекции
  productTypes: [
    { name: "Комоды", count: 15, description: "Разных размеров" },
    { name: "Обеденные столы", count: 8, description: "От 4 до 10 персон" },
    { name: "Тумбы под ТВ", count: 6, description: "Для любых экранов" },
    { name: "Прикроватные тумбы", count: 5, description: "Компактные и вместительные" },
    { name: "Консольные столы", count: 4, description: "Для прихожей и гостиной" },
  ],

  // Ключевые особенности
  features: [
    {
      title: "Авторские принты FACTURA",
      description: "УФ-печать с высочайшей детализацией и защитным лаком от выцветания. Коллаборация с художественной студией FACTURA открывает 4 серии уникальных принтов: ONDA, VISION, ESPANA, ISTANTE.",
    },
    {
      title: "Каплевидные ножки",
      description: "Фирменная форма ножек из массива дуба — визитная карточка Bergen. Элегантное сужение к низу создаёт эффект лёгкости даже у массивных предметов.",
    },
    {
      title: "Скруглённые края столешниц",
      description: "Мягкие радиусы на всех горизонтальных поверхностях обеспечивают безопасность и добавляют утончённости силуэту.",
    },
    {
      title: "Премиальная фурнитура Hettich",
      description: "Направляющие с системой плавного закрывания. Усиленные ящики выдерживают нагрузку до 25 кг.",
    },
  ],

  // Коллаборация с FACTURA
  printCollections: [
    { name: "ONDA", description: "Волны и морские мотивы", colors: ["02", "06", "08", "09"] },
    { name: "VISION", description: "Абстрактные узоры", colors: ["01", "02", "03", "05", "06"] },
    { name: "ESPANA", description: "Средиземноморские орнаменты", colors: ["02", "04", "06"] },
    { name: "ISTANTE", description: "Мраморные текстуры", colors: ["01", "02", "03", "06"] },
  ],

  // Материалы и производство
  materials: {
    corpus: "МДФ, натуральный шпон дуба",
    facade: "МДФ с принтом или эмалью",
    top: "МДФ, натуральный шпон дуба",
    legs: "Массив дуба с тонировкой",
    internal: "ЛДСП для ящиков, полок и задней стенки",
    handles: "Металл с различными отделками (В1, В2)",
    hardware: "Hettich с плавным закрыванием",
  },

  // Доступные тонировки дуба
  oakFinishes: [
    { name: "Дуб белёный", code: "07" },
    { name: "Дуб осветлённый", code: "01" },
    { name: "Дуб натуральный", code: "02" },
    { name: "Дуб шампань", code: "08" },
    { name: "Дуб карамель", code: "09" },
    { name: "Дуб тобакко", code: "05" },
    { name: "Дуб тёмный", code: "04" },
    { name: "Дуб венге", code: "03" },
    { name: "Дуб чёрный", code: "06" },
    { name: "Дуб нуар", code: "10" },
  ],

  // Цвета эмали RAL
  enamels: [
    { name: "Ваниль", code: "RAL 9010" },
    { name: "Слоновая кость", code: "RAL 9001" },
    { name: "Серый шёлк", code: "RAL 7044" },
    { name: "Платиновый", code: "RAL 7036" },
    { name: "Речной камень", code: "RAL 7030" },
    { name: "Дымчатый кварц", code: "RAL 7039" },
    { name: "Олово", code: "RAL 7046" },
    { name: "Сланец", code: "RAL 7015" },
    { name: "Морская волна", code: "RAL 5020" },
    { name: "Оливковый", code: "RAL 7003" },
    { name: "Хвоя", code: "RAL 6009" },
  ],

  // Философия дизайна
  philosophy: {
    main: "Bergen — это переосмысление классических форм в современном контексте. Коллекция сочетает благородство натурального дуба с яркой индивидуальностью авторских принтов.",
    craft: "Каждый предмет создаётся на собственной фабрике в Санкт-Петербурге. Мы контролируем качество на каждом этапе — от распила древесины до финальной сборки.",
    versatility: "Расширенный размерный ряд и богатая палитра отделок позволяют подобрать идеальное решение для любого пространства и стиля интерьера.",
  },

  // Примеры товаров из реального каталога
  products: [
    { 
      id: "bg005", 
      name: "Комод BERGEN BG005", 
      price: 169900, 
      category: "corpus", 
      collection: "Bergen", 
      images: [productArmchair, heroBedroom, heroLiving],
      badge: "hit" as const,
      dimensions: "1585 × 480 × 800 мм",
    },
    { 
      id: "bgt30", 
      name: "Обеденный стол BERGEN BGT30", 
      price: 149000, 
      category: "tables", 
      collection: "Bergen", 
      images: [heroDining, heroLiving, manufacturing],
    },
    { 
      id: "bg077", 
      name: "Тумба под ТВ BERGEN BG077", 
      price: 110300, 
      category: "corpus", 
      collection: "Bergen", 
      images: [heroLiving, heroDining, heroBedroom],
      badge: "new" as const,
    },
    { 
      id: "bg080", 
      name: "Высокий комод BERGEN BG080", 
      price: 108400, 
      category: "corpus", 
      collection: "Bergen", 
      images: [heroBedroom, manufacturing, heroLiving],
    },
    { 
      id: "bg081", 
      name: "Высокий комод BERGEN BG081", 
      price: 128700, 
      category: "corpus", 
      collection: "Bergen", 
      images: [productBed, heroBedroom, heroLiving],
    },
    { 
      id: "bg003", 
      name: "Комод BERGEN BG003", 
      price: 137800, 
      category: "corpus", 
      collection: "Bergen", 
      images: [heroLiving, heroDining, manufacturing],
    },
    { 
      id: "bg001", 
      name: "Прикроватная тумба BERGEN BG001", 
      price: 63400, 
      category: "corpus", 
      collection: "Bergen", 
      images: [productBed, heroBedroom, heroLiving],
    },
    { 
      id: "bg002", 
      name: "Консольный стол BERGEN BG002", 
      price: 96700, 
      category: "tables", 
      collection: "Bergen", 
      images: [heroDining, heroLiving, manufacturing],
    },
    { 
      id: "bgt25", 
      name: "Обеденный стол BERGEN BGT25", 
      price: 123900, 
      category: "tables", 
      collection: "Bergen", 
      images: [productChair, heroDining, heroLiving],
      badge: "hit" as const,
    },
    { 
      id: "bgt20", 
      name: "Обеденный стол BERGEN BGT20", 
      price: 121400, 
      category: "tables", 
      collection: "Bergen", 
      images: [heroDining, manufacturing, heroLiving],
    },
  ],
};

const BergenCollectionPage = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section — Full Screen */}
      <section className="relative h-screen flex items-end">
        <div className="absolute inset-0">
          <img
            src={heroBedroom}
            alt="Коллекция Bergen — интерьер"
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
              Bergen
            </h1>
            <p className="text-xl md:text-2xl lg:text-3xl font-light text-white/80 max-w-2xl">
              {bergenCollection.tagline}
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
              «{bergenCollection.heroQuote}»
            </p>
            <p className="text-sm text-muted-foreground mt-8 uppercase tracking-[0.3em]">
              Принцип коллекции Bergen
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
              Системы хранения и столы
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
            {bergenCollection.productTypes.map((type, index) => (
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

      {/* FACTURA Collaboration Section */}
      <section className="py-0 bg-foreground text-background">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-square lg:aspect-auto lg:h-[80vh] relative overflow-hidden"
          >
            <img
              src={productArmchair}
              alt="Bergen x Factura"
              className="w-full h-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center p-8 lg:p-16 xl:p-24"
          >
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-background/50 mb-6">
                Эксклюзивная коллаборация
              </p>
              <h2 className="text-3xl lg:text-5xl font-extralight tracking-tight mb-8 leading-tight">
                THE IDEA × FACTURA
              </h2>
              <p className="text-background/70 leading-relaxed mb-8">
                Художественная графика и авторские обои FACTURA адаптированы под особенности фасадов мебели THE IDEA. 
                Четыре коллекции принтов: морские волны ONDA, абстрактные VISION, средиземноморские ESPANA и мраморные ISTANTE.
              </p>
              
              <div className="grid grid-cols-2 gap-6">
                {bergenCollection.printCollections.map((print) => (
                  <div key={print.name} className="p-4 bg-background/10 rounded">
                    <p className="font-medium mb-1">{print.name}</p>
                    <p className="text-sm text-background/50">{print.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Philosophy — Split Screen */}
      <section className="py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex items-center p-8 lg:p-16 xl:p-24 bg-muted/20 order-2 lg:order-1"
          >
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
                Философия дизайна
              </p>
              <h2 className="text-3xl lg:text-4xl font-extralight tracking-tight mb-8 leading-tight">
                Переосмысление классики
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {bergenCollection.philosophy.main}
              </p>
              <p className="text-muted-foreground leading-relaxed">
                {bergenCollection.philosophy.craft}
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/3] lg:aspect-auto lg:h-[80vh] relative overflow-hidden order-1 lg:order-2"
          >
            <img
              src={manufacturing}
              alt="Производство Bergen"
              className="w-full h-full object-cover"
            />
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
              Что делает Bergen особенной
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {bergenCollection.features.map((feature, index) => (
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
          alt="Bergen в интерьере"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
          <motion.p
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-white text-3xl md:text-4xl lg:text-5xl font-extralight text-center px-4 max-w-4xl"
          >
            {bergenCollection.philosophy.versatility}
          </motion.p>
        </div>
      </section>

      {/* Materials and Finishes Section */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Палитра отделок
            </p>
            <h2 className="text-3xl lg:text-4xl font-extralight tracking-tight mb-4">
              10 тонировок дуба. 11 цветов эмали.
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Комбинируйте оттенки дерева с цветами эмали для создания уникального образа
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Oak Finishes */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">
                Тонировки дуба
              </p>
              <div className="grid grid-cols-2 gap-3">
                {bergenCollection.oakFinishes.map((finish) => (
                  <div key={finish.code} className="p-4 bg-background border border-border hover:border-foreground/30 transition-colors">
                    <p className="text-xs text-muted-foreground mb-1">Код {finish.code}</p>
                    <p className="font-medium">{finish.name}</p>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Enamels */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="text-sm uppercase tracking-[0.2em] text-muted-foreground mb-6">
                Цвета эмали
              </p>
              <div className="grid grid-cols-2 gap-3">
                {bergenCollection.enamels.map((enamel) => (
                  <div key={enamel.code} className="p-4 bg-background border border-border hover:border-foreground/30 transition-colors">
                    <p className="text-xs text-muted-foreground mb-1">{enamel.code}</p>
                    <p className="font-medium">{enamel.name}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Materials Details */}
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
                Качество в каждой детали
              </h2>
              
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-background/50 mb-1">Корпус</p>
                  <p className="text-lg">{bergenCollection.materials.corpus}</p>
                </div>
                <div>
                  <p className="text-sm text-background/50 mb-1">Фасады</p>
                  <p className="text-lg">{bergenCollection.materials.facade}</p>
                </div>
                <div>
                  <p className="text-sm text-background/50 mb-1">Столешница</p>
                  <p className="text-lg">{bergenCollection.materials.top}</p>
                </div>
                <div>
                  <p className="text-sm text-background/50 mb-1">Ножки</p>
                  <p className="text-lg">{bergenCollection.materials.legs}</p>
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
                Конструктивные элементы
              </p>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-background/50 mb-1">Ящики и полки</p>
                  <p className="text-lg">{bergenCollection.materials.internal}</p>
                </div>
                <div>
                  <p className="text-sm text-background/50 mb-1">Ручки</p>
                  <p className="text-lg">{bergenCollection.materials.handles}</p>
                </div>
                <div>
                  <p className="text-sm text-background/50 mb-1">Фурнитура</p>
                  <p className="text-lg">{bergenCollection.materials.hardware}</p>
                </div>
              </div>

              <div className="mt-12 p-6 bg-background/10 rounded-lg">
                <p className="text-xl font-light mb-2">Нагрузка до 25 кг</p>
                <p className="text-background/60">на каждый усиленный ящик</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Gallery Mosaic */}
      <section className="py-0">
        <div className="grid grid-cols-2 lg:grid-cols-3">
          {[heroBedroom, manufacturing, heroLiving, productChair, heroDining, productSofa].map((img, index) => (
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
                alt={`Bergen интерьер ${index + 1}`}
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
                Выберите свой Bergen
              </h2>
            </div>
            <Link
              to="/catalog?collection=bergen"
              className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] hover:gap-4 transition-all group mt-4 md:mt-0"
            >
              Все товары коллекции
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-10 lg:gap-x-6 lg:gap-y-14">
            {bergenCollection.products.slice(0, 8).map((product, index) => (
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
              to="/catalog?collection=bergen"
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
                src={heroLiving}
                alt="Bergen в интерьере"
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
                Оцените текстуру принтов, тактильность отделок и качество фурнитуры. 
                Наши консультанты помогут подобрать идеальную комбинацию материалов для вашего интерьера.
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

export default BergenCollectionPage;
