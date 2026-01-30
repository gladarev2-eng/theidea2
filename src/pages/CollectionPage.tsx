import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
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

// Collection data
const collectionsData: Record<string, {
  name: string;
  tagline: string;
  description: string;
  heroImage: string;
  keyFeature: string;
  philosophy: string;
  materials: string;
  features: string[];
  storyImage: string;
  products: Array<{
    id: string;
    name: string;
    price: number;
    category: string;
    collection: string;
    images: string[];
    badge?: 'new' | 'hit';
  }>;
}> = {
  case: {
    name: "Case",
    tagline: "Архитектурный минимализм",
    description: "Коллекция Case — это чистые линии и продуманная функциональность. Каждый предмет создан как архитектурный объект, где форма следует за функцией. Минимум деталей, максимум смысла.",
    heroImage: heroLiving,
    keyFeature: "Модульная система",
    philosophy: "Case родилась из идеи создать мебель, которая станет фоном для жизни, а не её главным героем. Мы убрали всё лишнее, оставив только суть — чистую форму, честные материалы и безупречную функциональность.",
    materials: "Массив дуба, натуральный шпон, итальянские ткани категории А, закалённое стекло",
    features: ["Модульная система", "Скрытые механизмы", "Эргономичные пропорции", "Натуральные материалы"],
    storyImage: manufacturing,
    products: [
      { id: "case-1", name: "Диван CASE 3-местный", price: 189000, category: "soft", collection: "Case", images: [productSofa, heroLiving, heroDining], badge: "hit" },
      { id: "case-2", name: "Комод CASE Slim", price: 78000, category: "corpus", collection: "Case", images: [productArmchair, heroLiving], badge: "new" },
      { id: "case-3", name: "Кресло CASE Lounge", price: 95000, category: "soft", collection: "Case", images: [productArmchair, heroBedroom] },
      { id: "case-4", name: "Стол CASE обеденный", price: 112000, category: "tables", collection: "Case", images: [productChair, heroDining] },
      { id: "case-5", name: "Тумба CASE прикроватная", price: 45000, category: "corpus", collection: "Case", images: [productBed, heroBedroom] },
      { id: "case-6", name: "Шкаф CASE модульный", price: 156000, category: "corpus", collection: "Case", images: [heroLiving, heroBedroom] },
    ],
  },
  saga: {
    name: "Saga",
    tagline: "Скандинавская история",
    description: "Вдохновлённая северной природой, коллекция Saga сочетает мягкие органические формы с натуральными материалами. Тепло дерева и уют текстиля создают атмосферу дома.",
    heroImage: productSofa,
    keyFeature: "Органические формы",
    philosophy: "Saga — это наша ода скандинавскому дизайну. Мы взяли лучшее из северной традиции: любовь к природным материалам, внимание к свету и стремление к уюту без излишеств.",
    materials: "Ясень, натуральная кожа, шерстяные ткани, латунная фурнитура",
    features: ["Органические формы", "Тёплая палитра", "Тактильные материалы", "Ручная отделка"],
    storyImage: heroBedroom,
    products: [
      { id: "saga-1", name: "Диван SAGA модульный", price: 210000, category: "soft", collection: "Saga", images: [productSofa, heroLiving], badge: "hit" },
      { id: "saga-2", name: "Кресло SAGA Lounge", price: 89000, category: "soft", collection: "Saga", images: [productArmchair, heroLiving] },
      { id: "saga-3", name: "Стол SAGA журнальный", price: 54000, category: "tables", collection: "Saga", images: [productChair, heroLiving] },
      { id: "saga-4", name: "Кровать SAGA Queen", price: 145000, category: "soft", collection: "Saga", images: [productBed, heroBedroom], badge: "new" },
    ],
  },
  bergen: {
    name: "Bergen",
    tagline: "Современная классика",
    description: "Bergen — это переосмысление классических форм в современном контексте. Элегантность без излишеств, качество в каждой детали, вневременной стиль.",
    heroImage: heroBedroom,
    keyFeature: "Вневременной дизайн",
    philosophy: "Создавая Bergen, мы задались вопросом: как сохранить благородство классики, убрав её тяжеловесность? Ответ — в пропорциях, материалах и внимании к деталям.",
    materials: "Массив бука, мрамор, бархат, матовая латунь",
    features: ["Классические пропорции", "Современные материалы", "Утончённые детали", "Вневременной дизайн"],
    storyImage: heroDining,
    products: [
      { id: "bergen-1", name: "Стол BERGEN обеденный", price: 92000, category: "tables", collection: "Bergen", images: [productChair, heroDining] },
      { id: "bergen-2", name: "Тумба BERGEN прикроватная", price: 38000, category: "corpus", collection: "Bergen", images: [productBed, heroBedroom] },
      { id: "bergen-3", name: "Комод BERGEN высокий", price: 125000, category: "corpus", collection: "Bergen", images: [heroLiving, heroBedroom], badge: "new" },
      { id: "bergen-4", name: "Кресло BERGEN классик", price: 78000, category: "soft", collection: "Bergen", images: [productArmchair, heroLiving] },
      { id: "bergen-5", name: "Консоль BERGEN", price: 67000, category: "tables", collection: "Bergen", images: [heroDining, heroLiving] },
    ],
  },
  code: {
    name: "Code",
    tagline: "Геометрия пространства",
    description: "Коллекция Code играет с геометрическими формами и пропорциями. Каждый предмет — это уравнение идеального баланса между формой и функцией.",
    heroImage: heroDining,
    keyFeature: "Геометрический дизайн",
    philosophy: "Code — это наш эксперимент с геометрией. Мы исследуем, как простые формы могут создавать сложные впечатления, как ритм линий влияет на восприятие пространства.",
    materials: "Металл с порошковой окраской, закалённое стекло, МДФ с лаковым покрытием",
    features: ["Геометрический дизайн", "Контрастные материалы", "Игра с пропорциями", "Акцентные детали"],
    storyImage: manufacturing,
    products: [
      { id: "code-1", name: "Буфет CODE Geometric", price: 115000, category: "corpus", collection: "Code", images: [productArmchair, heroDining], badge: "hit" },
      { id: "code-2", name: "Стол CODE журнальный", price: 54000, category: "tables", collection: "Code", images: [productChair, heroLiving], badge: "new" },
      { id: "code-3", name: "Стеллаж CODE модульный", price: 89000, category: "corpus", collection: "Code", images: [heroLiving, heroDining] },
      { id: "code-4", name: "Консоль CODE", price: 72000, category: "tables", collection: "Code", images: [heroDining, heroLiving] },
    ],
  },
  savi: {
    name: "Savi",
    tagline: "Мягкая роскошь",
    description: "Savi создана для тех, кто ценит комфорт превыше всего. Глубокие посадки, премиальные ткани и безупречная эргономика для истинного отдыха.",
    heroImage: productArmchair,
    keyFeature: "Премиальный комфорт",
    philosophy: "Savi — это признание в любви к комфорту. Мы создали коллекцию, где можно по-настоящему расслабиться, не жертвуя эстетикой.",
    materials: "Пенополиуретан высокой плотности, итальянский велюр, пух-перо",
    features: ["Глубокая посадка", "Премиальный комфорт", "Мягкие формы", "Тактильные ткани"],
    storyImage: heroLiving,
    products: [
      { id: "savi-1", name: "Кровать SAVI King", price: 178000, category: "soft", collection: "Savi", images: [productBed, heroBedroom], badge: "hit" },
      { id: "savi-2", name: "Диван SAVI секционный", price: 245000, category: "soft", collection: "Savi", images: [productSofa, heroLiving], badge: "new" },
      { id: "savi-3", name: "Кресло SAVI Cocoon", price: 112000, category: "soft", collection: "Savi", images: [productArmchair, heroBedroom] },
    ],
  },
  frame: {
    name: "Frame",
    tagline: "Каркасные решения",
    description: "Коллекция Frame раскрывает красоту конструкции. Открытые каркасы, честные материалы, индустриальная эстетика в премиальном исполнении.",
    heroImage: manufacturing,
    keyFeature: "Открытая конструкция",
    philosophy: "Frame — это честность конструкции. Мы показываем то, что обычно скрыто: каркас, соединения, материал в его первозданном виде.",
    materials: "Профильная сталь, массив ореха, натуральная кожа",
    features: ["Открытый каркас", "Индустриальная эстетика", "Честные материалы", "Контрастные текстуры"],
    storyImage: heroDining,
    products: [
      { id: "frame-1", name: "Стеллаж FRAME открытый", price: 98000, category: "corpus", collection: "Frame", images: [heroLiving, manufacturing], badge: "new" },
      { id: "frame-2", name: "Стол FRAME обеденный", price: 135000, category: "tables", collection: "Frame", images: [heroDining, manufacturing] },
      { id: "frame-3", name: "Консоль FRAME", price: 67000, category: "tables", collection: "Frame", images: [manufacturing, heroLiving] },
      { id: "frame-4", name: "Скамья FRAME", price: 45000, category: "soft", collection: "Frame", images: [heroDining, heroLiving] },
      { id: "frame-5", name: "Вешалка FRAME напольная", price: 34000, category: "corpus", collection: "Frame", images: [manufacturing, heroBedroom] },
    ],
  },
};

const CollectionPage = () => {
  const { id } = useParams();
  const collection = collectionsData[id || "case"] || collectionsData.case;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[500px] flex items-end">
        <div className="absolute inset-0">
          <img
            src={collection.heroImage}
            alt={collection.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
        </div>

        <div className="relative container-wide pb-16 lg:pb-24 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/70 mb-4">
              {collection.keyFeature}
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight mb-4">
              {collection.name}
            </h1>
            <p className="text-xl md:text-2xl font-light text-white/80">
              {collection.tagline}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 lg:py-32">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xl md:text-2xl font-light leading-relaxed text-muted-foreground">
                {collection.description}
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-8"
            >
              <div>
                <p className="text-4xl font-extralight mb-2">{collection.products.length}</p>
                <p className="text-sm text-muted-foreground">Предметов в коллекции</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-2">Ключевая особенность</p>
                <p className="text-lg font-light">{collection.keyFeature}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] overflow-hidden"
            >
              <img
                src={collection.storyImage}
                alt="Философия коллекции"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
                Философия
              </p>
              <h2 className="text-3xl lg:text-4xl font-extralight tracking-tight mb-8">
                История создания
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                {collection.philosophy}
              </p>

              <div className="space-y-4">
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Материалы
                </p>
                <p className="text-sm">{collection.materials}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Immersive Gallery */}
      <section className="py-0">
        <div className="grid grid-cols-1 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="aspect-[4/3] lg:aspect-auto lg:h-[600px]"
          >
            <img
              src={collection.heroImage}
              alt={`${collection.name} атмосфера`}
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="aspect-[4/3] lg:aspect-auto lg:h-[600px]"
          >
            <img
              src={collection.storyImage}
              alt={`${collection.name} детали`}
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Design Principles */}
      <section className="py-24 lg:py-32">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center mb-20"
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Принципы дизайна
            </p>
            <h2 className="text-3xl lg:text-5xl font-extralight tracking-tight mb-8">
              Каждая деталь имеет значение
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Создавая коллекцию {collection.name}, мы придерживались нескольких 
              ключевых принципов, которые определяют характер каждого предмета.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {collection.features.map((feature, index) => (
              <motion.div
                key={feature}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-5xl font-extralight text-muted-foreground/30 mb-4">
                  0{index + 1}
                </p>
                <p className="text-sm font-medium">{feature}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-end justify-between mb-16"
          >
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Предметы коллекции
              </p>
              <h2 className="text-3xl lg:text-4xl font-extralight tracking-tight">
                {collection.name}
              </h2>
            </div>
            <Link
              to={`/catalog?collection=${id}`}
              className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] hover:gap-4 transition-all group"
            >
              Все товары
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12 lg:gap-x-8 lg:gap-y-16">
            {collection.products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <ProductCard {...product} />
              </motion.div>
            ))}
          </div>

          <div className="md:hidden mt-12 text-center">
            <Link
              to={`/catalog?collection=${id}`}
              className="inline-flex items-center gap-2 px-8 py-4 border border-foreground text-[11px] uppercase tracking-[0.2em] hover:bg-foreground hover:text-background transition-colors"
            >
              Все товары коллекции
              <ArrowRight className="w-4 h-4" />
            </Link>
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
              Хотите увидеть коллекцию вживую?
            </h2>
            <p className="text-background/60 mb-10">
              Посетите наш шоурум, чтобы оценить качество материалов 
              и примерить мебель к своему интерьеру.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contacts"
                className="px-8 py-4 rounded-full bg-background text-foreground text-[11px] uppercase tracking-[0.2em] hover:bg-background/90 transition-colors"
              >
                Найти шоурум
              </Link>
              <Link
                to="/catalog"
                className="px-8 py-4 rounded-full border border-background/30 text-[11px] uppercase tracking-[0.2em] hover:bg-background/10 transition-colors"
              >
                Смотреть каталог
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default CollectionPage;