import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Users, Layers, Settings, Leaf, Eye, Ruler, Box } from "lucide-react";
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

// Collection data with enhanced structure for CASE
const collectionsData: Record<string, {
  name: string;
  tagline: string;
  subtitle: string;
  microOffer: string[];
  description: string;
  heroImage: string;
  keyFeature: string;
  keyFeatureDescription: string;
  philosophy: string;
  materials: string;
  materialsDetails: string[];
  features: Array<{
    title: string;
    description: string;
    icon: keyof typeof featureIcons;
  }>;
  facts: Array<{
    value: string;
    label: string;
  }>;
  storyImage: string;
  galleryImages: string[];
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
    subtitle: "Чистые линии и продуманная функциональность: каждый предмет — как архитектурный объект, где форма следует за функцией.",
    microOffer: ["Модульная система", "Скрытые механизмы", "Эргономичные пропорции", "Натуральные материалы"],
    description: "Коллекция Case — это чистые линии и продуманная функциональность. Каждый предмет создан как архитектурный объект, где форма следует за функцией. Минимум деталей, максимум смысла.",
    heroImage: heroLiving,
    keyFeature: "Модульная система",
    keyFeatureDescription: "Case проектируется как система: предметы легко комбинировать между собой, собирая интерьер в единой логике — от гостиной до спальни.",
    philosophy: "Case родилась из идеи создать мебель, которая становится фоном для жизни, а не её главным героем. Мы убрали всё лишнее и оставили суть: чистую форму, честные материалы и безупречную функциональность.",
    materials: "Массив дуба, натуральный шпон, итальянские ткани категории А, закалённое стекло",
    materialsDetails: ["Массив дуба", "Натуральный шпон", "Итальянские ткани кат. A", "Закалённое стекло"],
    features: [
      {
        title: "Модульная система",
        description: "Гибкость компоновки без компромиссов по виду. Создавайте уникальные конфигурации под любое пространство.",
        icon: "layers"
      },
      {
        title: "Скрытые механизмы",
        description: "Чистый силуэт, ничего лишнего в поле зрения. Вся фурнитура интегрирована в конструкцию.",
        icon: "settings"
      },
      {
        title: "Эргономичные пропорции",
        description: "Комфорт, который ощущается каждый день. Размеры просчитаны для максимального удобства.",
        icon: "ruler"
      },
      {
        title: "Натуральные материалы",
        description: "Тактильность и долговечность, которые «читаются» визуально. Честность материала в каждой детали.",
        icon: "leaf"
      }
    ],
    facts: [
      { value: "6", label: "Предметов в коллекции" },
      { value: "Модульность", label: "Ключевая особенность" },
      { value: "Дуб, шпон, стекло", label: "Основные материалы" },
      { value: "Минимум → максимум", label: "Формула дизайна" }
    ],
    storyImage: manufacturing,
    galleryImages: [heroLiving, heroBedroom, heroDining],
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
    subtitle: "Вдохновлённая северной природой, коллекция сочетает мягкие органические формы с натуральными материалами.",
    microOffer: ["Органические формы", "Тёплая палитра", "Тактильные материалы", "Ручная отделка"],
    description: "Вдохновлённая северной природой, коллекция Saga сочетает мягкие органические формы с натуральными материалами. Тепло дерева и уют текстиля создают атмосферу дома.",
    heroImage: productSofa,
    keyFeature: "Органические формы",
    keyFeatureDescription: "Saga вдохновлена природными линиями и формами. Плавные изгибы и мягкие переходы создают ощущение гармонии с окружающим пространством.",
    philosophy: "Saga — это наша ода скандинавскому дизайну. Мы взяли лучшее из северной традиции: любовь к природным материалам, внимание к свету и стремление к уюту без излишеств.",
    materials: "Ясень, натуральная кожа, шерстяные ткани, латунная фурнитура",
    materialsDetails: ["Массив ясеня", "Натуральная кожа", "Шерстяные ткани", "Латунная фурнитура"],
    features: [
      { title: "Органические формы", description: "Плавные линии, вдохновлённые природой.", icon: "leaf" },
      { title: "Тёплая палитра", description: "Натуральные оттенки дерева и текстиля.", icon: "eye" },
      { title: "Тактильные материалы", description: "Приятные на ощупь поверхности.", icon: "box" },
      { title: "Ручная отделка", description: "Внимание к деталям в каждом изделии.", icon: "settings" }
    ],
    facts: [
      { value: "4", label: "Предметов в коллекции" },
      { value: "Органика", label: "Ключевая особенность" },
      { value: "Ясень, кожа, шерсть", label: "Основные материалы" },
      { value: "Тепло дома", label: "Концепция" }
    ],
    storyImage: heroBedroom,
    galleryImages: [productSofa, heroLiving, heroBedroom],
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
    subtitle: "Переосмысление классических форм в современном контексте — элегантность без излишеств.",
    microOffer: ["Классические пропорции", "Современные материалы", "Утончённые детали", "Вневременной дизайн"],
    description: "Bergen — это переосмысление классических форм в современном контексте. Элегантность без излишеств, качество в каждой детали, вневременной стиль.",
    heroImage: heroBedroom,
    keyFeature: "Вневременной дизайн",
    keyFeatureDescription: "Bergen создана, чтобы оставаться актуальной десятилетиями. Классические пропорции и благородные материалы не подвластны моде.",
    philosophy: "Создавая Bergen, мы задались вопросом: как сохранить благородство классики, убрав её тяжеловесность? Ответ — в пропорциях, материалах и внимании к деталям.",
    materials: "Массив бука, мрамор, бархат, матовая латунь",
    materialsDetails: ["Массив бука", "Натуральный мрамор", "Бархатные ткани", "Матовая латунь"],
    features: [
      { title: "Классические пропорции", description: "Золотое сечение в каждом предмете.", icon: "ruler" },
      { title: "Современные материалы", description: "Традиции + инновации.", icon: "layers" },
      { title: "Утончённые детали", description: "Тонкая работа в каждом элементе.", icon: "eye" },
      { title: "Вневременной дизайн", description: "Актуальность на десятилетия.", icon: "box" }
    ],
    facts: [
      { value: "5", label: "Предметов в коллекции" },
      { value: "Классика", label: "Ключевая особенность" },
      { value: "Бук, мрамор, латунь", label: "Основные материалы" },
      { value: "Вечная элегантность", label: "Концепция" }
    ],
    storyImage: heroDining,
    galleryImages: [heroBedroom, heroLiving, heroDining],
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
    subtitle: "Игра с геометрическими формами и пропорциями — уравнение идеального баланса.",
    microOffer: ["Геометрический дизайн", "Контрастные материалы", "Игра с пропорциями", "Акцентные детали"],
    description: "Коллекция Code играет с геометрическими формами и пропорциями. Каждый предмет — это уравнение идеального баланса между формой и функцией.",
    heroImage: heroDining,
    keyFeature: "Геометрический дизайн",
    keyFeatureDescription: "Code — это математика красоты. Точные углы, выверенные пропорции и ритм линий создают уникальный визуальный язык.",
    philosophy: "Code — это наш эксперимент с геометрией. Мы исследуем, как простые формы могут создавать сложные впечатления, как ритм линий влияет на восприятие пространства.",
    materials: "Металл с порошковой окраской, закалённое стекло, МДФ с лаковым покрытием",
    materialsDetails: ["Металл", "Закалённое стекло", "МДФ с лаком", "Порошковое покрытие"],
    features: [
      { title: "Геометрический дизайн", description: "Точные формы и углы.", icon: "box" },
      { title: "Контрастные материалы", description: "Металл встречает стекло.", icon: "layers" },
      { title: "Игра с пропорциями", description: "Визуальный баланс.", icon: "ruler" },
      { title: "Акцентные детали", description: "Яркие элементы декора.", icon: "eye" }
    ],
    facts: [
      { value: "4", label: "Предметов в коллекции" },
      { value: "Геометрия", label: "Ключевая особенность" },
      { value: "Металл, стекло, лак", label: "Основные материалы" },
      { value: "Ритм форм", label: "Концепция" }
    ],
    storyImage: manufacturing,
    galleryImages: [heroDining, heroLiving, manufacturing],
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
    subtitle: "Для тех, кто ценит комфорт превыше всего — глубокие посадки и премиальные ткани.",
    microOffer: ["Глубокая посадка", "Премиальный комфорт", "Мягкие формы", "Тактильные ткани"],
    description: "Savi создана для тех, кто ценит комфорт превыше всего. Глубокие посадки, премиальные ткани и безупречная эргономика для истинного отдыха.",
    heroImage: productArmchair,
    keyFeature: "Премиальный комфорт",
    keyFeatureDescription: "Savi — это искусство отдыха. Глубокие сиденья, мягкие подушки и идеальная поддержка спины создают непревзойдённый комфорт.",
    philosophy: "Savi — это признание в любви к комфорту. Мы создали коллекцию, где можно по-настоящему расслабиться, не жертвуя эстетикой.",
    materials: "Пенополиуретан высокой плотности, итальянский велюр, пух-перо",
    materialsDetails: ["ППУ высокой плотности", "Итальянский велюр", "Пух-перо", "Премиум-текстиль"],
    features: [
      { title: "Глубокая посадка", description: "Погружение в комфорт.", icon: "box" },
      { title: "Премиальный комфорт", description: "Эргономика высшего уровня.", icon: "users" },
      { title: "Мягкие формы", description: "Обволакивающие силуэты.", icon: "layers" },
      { title: "Тактильные ткани", description: "Приятные на ощупь материалы.", icon: "leaf" }
    ],
    facts: [
      { value: "3", label: "Предметов в коллекции" },
      { value: "Комфорт", label: "Ключевая особенность" },
      { value: "Велюр, пух, ППУ", label: "Основные материалы" },
      { value: "Искусство отдыха", label: "Концепция" }
    ],
    storyImage: heroLiving,
    galleryImages: [productArmchair, heroLiving, heroBedroom],
    products: [
      { id: "savi-1", name: "Кровать SAVI King", price: 178000, category: "soft", collection: "Savi", images: [productBed, heroBedroom], badge: "hit" },
      { id: "savi-2", name: "Диван SAVI секционный", price: 245000, category: "soft", collection: "Savi", images: [productSofa, heroLiving], badge: "new" },
      { id: "savi-3", name: "Кресло SAVI Cocoon", price: 112000, category: "soft", collection: "Savi", images: [productArmchair, heroBedroom] },
    ],
  },
  frame: {
    name: "Frame",
    tagline: "Каркасные решения",
    subtitle: "Красота конструкции — открытые каркасы и честные материалы в премиальном исполнении.",
    microOffer: ["Открытый каркас", "Индустриальная эстетика", "Честные материалы", "Контрастные текстуры"],
    description: "Коллекция Frame раскрывает красоту конструкции. Открытые каркасы, честные материалы, индустриальная эстетика в премиальном исполнении.",
    heroImage: manufacturing,
    keyFeature: "Открытая конструкция",
    keyFeatureDescription: "Frame показывает то, что обычно скрыто. Каркас становится главным героем, а честность конструкции — основой эстетики.",
    philosophy: "Frame — это честность конструкции. Мы показываем то, что обычно скрыто: каркас, соединения, материал в его первозданном виде.",
    materials: "Профильная сталь, массив ореха, натуральная кожа",
    materialsDetails: ["Профильная сталь", "Массив ореха", "Натуральная кожа", "Металлическая фурнитура"],
    features: [
      { title: "Открытый каркас", description: "Конструкция как декор.", icon: "box" },
      { title: "Индустриальная эстетика", description: "Сила и характер.", icon: "settings" },
      { title: "Честные материалы", description: "Без обмана, без маски.", icon: "eye" },
      { title: "Контрастные текстуры", description: "Сталь + дерево + кожа.", icon: "layers" }
    ],
    facts: [
      { value: "5", label: "Предметов в коллекции" },
      { value: "Честность", label: "Ключевая особенность" },
      { value: "Сталь, орех, кожа", label: "Основные материалы" },
      { value: "Видимая сила", label: "Концепция" }
    ],
    storyImage: heroDining,
    galleryImages: [manufacturing, heroDining, heroLiving],
    products: [
      { id: "frame-1", name: "Стеллаж FRAME открытый", price: 98000, category: "corpus", collection: "Frame", images: [heroLiving, manufacturing], badge: "new" },
      { id: "frame-2", name: "Стол FRAME обеденный", price: 135000, category: "tables", collection: "Frame", images: [heroDining, manufacturing] },
      { id: "frame-3", name: "Консоль FRAME", price: 67000, category: "tables", collection: "Frame", images: [manufacturing, heroLiving] },
      { id: "frame-4", name: "Скамья FRAME", price: 45000, category: "soft", collection: "Frame", images: [heroDining, heroLiving] },
      { id: "frame-5", name: "Вешалка FRAME напольная", price: 34000, category: "corpus", collection: "Frame", images: [manufacturing, heroBedroom] },
    ],
  },
};

// Feature icons mapping
const featureIcons = {
  layers: Layers,
  settings: Settings,
  ruler: Ruler,
  leaf: Leaf,
  eye: Eye,
  box: Box,
  users: Users,
};

const CollectionPage = () => {
  const { id } = useParams();
  const collection = collectionsData[id || "case"] || collectionsData.case;

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* BLOCK 1: HERO - First Screen */}
      <section className="relative min-h-screen flex items-center">
        <div className="absolute inset-0">
          <img
            src={collection.heroImage}
            alt={collection.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/40 to-transparent" />
        </div>

        <div className="relative container-wide py-32 lg:py-40 text-white">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-3xl"
          >
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight mb-6">
              {collection.name}
              <span className="block text-2xl md:text-3xl lg:text-4xl mt-4 text-white/90 font-light">
                — {collection.tagline.toLowerCase()}
              </span>
            </h1>
            
            <p className="text-lg md:text-xl lg:text-2xl font-light text-white/80 leading-relaxed mb-8 max-w-2xl">
              {collection.subtitle}
            </p>

            {/* Micro-offer */}
            <div className="flex flex-wrap gap-3 mb-12">
              {collection.microOffer.map((item, index) => (
                <span 
                  key={index}
                  className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-white/60 border border-white/20 px-4 py-2"
                >
                  {item}
                </span>
              ))}
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                to={`/catalog?collection=${id}`}
                className="inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-black text-[11px] uppercase tracking-[0.2em] hover:bg-white/90 transition-colors"
              >
                Смотреть товары
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                to="/contacts"
                className="inline-flex items-center justify-center gap-3 px-8 py-4 border border-white/40 text-[11px] uppercase tracking-[0.2em] hover:bg-white/10 transition-colors"
              >
                Найти шоурум
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/50"
        >
          <div className="flex flex-col items-center gap-2">
            <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
            <div className="w-px h-12 bg-white/30" />
          </div>
        </motion.div>
      </section>

      {/* BLOCK 2: Quick Facts */}
      <section className="py-12 lg:py-16 border-b border-border">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {collection.facts.map((fact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center lg:text-left"
              >
                <p className="text-2xl lg:text-3xl font-extralight mb-2">
                  {fact.value}
                </p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  {fact.label}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* BLOCK 3: Philosophy / Story */}
      <section className="py-20 lg:py-32">
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
                alt="Производство"
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
              <h2 className="text-3xl lg:text-5xl font-extralight tracking-tight mb-8">
                История создания
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {collection.philosophy}
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* BLOCK 4: Key Feature - Accent */}
      <section className="py-20 lg:py-32 bg-foreground text-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-background/50 mb-6">
              Ключевая особенность
            </p>
            <h2 className="text-4xl lg:text-6xl font-extralight tracking-tight mb-8">
              {collection.keyFeature}
            </h2>
            <p className="text-lg lg:text-xl text-background/70 leading-relaxed max-w-2xl mx-auto">
              {collection.keyFeatureDescription}
            </p>
          </motion.div>
        </div>
      </section>

      {/* BLOCK 5: Design Principles */}
      <section className="py-24 lg:py-32">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center mb-16 lg:mb-24"
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Принципы дизайна
            </p>
            <h2 className="text-3xl lg:text-5xl font-extralight tracking-tight">
              Каждая деталь имеет значение
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {collection.features.map((feature, index) => {
              const IconComponent = featureIcons[feature.icon];
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center p-8 border border-border hover:border-foreground/30 transition-colors"
                >
                  <div className="w-12 h-12 mx-auto mb-6 flex items-center justify-center text-muted-foreground">
                    <IconComponent className="w-6 h-6" />
                  </div>
                  <h3 className="text-lg font-medium mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              );
            })}
          </div>

          {/* Lifestyle Gallery */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-20"
          >
            {collection.galleryImages.map((image, index) => (
              <div 
                key={index} 
                className={`aspect-[4/3] overflow-hidden ${index === 1 ? 'md:mt-12' : ''}`}
              >
                <img
                  src={image}
                  alt={`${collection.name} интерьер ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* BLOCK 6: Materials */}
      <section className="py-20 lg:py-32 bg-muted/30">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
                Качество
              </p>
              <h2 className="text-3xl lg:text-5xl font-extralight tracking-tight mb-8">
                Материалы
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                {collection.materials}
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {collection.materialsDetails.map((material, index) => (
                  <div 
                    key={index}
                    className="flex items-center gap-3 text-sm"
                  >
                    <div className="w-2 h-2 bg-foreground/20 rounded-full" />
                    {material}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="grid grid-cols-2 gap-4"
            >
              {collection.galleryImages.slice(0, 4).map((image, index) => (
                <div 
                  key={index} 
                  className="aspect-square overflow-hidden"
                >
                  <img
                    src={image}
                    alt={`Материал ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* BLOCK 7: Products Grid */}
      <section className="py-24 lg:py-32">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex flex-col md:flex-row md:items-end justify-between mb-16"
          >
            <div>
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
                Предметы коллекции
              </p>
              <h2 className="text-3xl lg:text-5xl font-extralight tracking-tight">
                {collection.name}
              </h2>
            </div>
            <Link
              to={`/catalog?collection=${id}`}
              className="hidden md:inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] hover:gap-4 transition-all group mt-4 md:mt-0"
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

      {/* BLOCK 8: CTA - See in Person */}
      <section className="py-24 lg:py-32 bg-foreground text-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl lg:text-5xl font-extralight tracking-tight mb-6">
              Хотите увидеть коллекцию вживую?
            </h2>
            <p className="text-lg text-background/60 mb-10 leading-relaxed">
              Посетите шоурум, чтобы оценить качество материалов 
              и примерить мебель к своему интерьеру.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contacts"
                className="px-10 py-5 bg-background text-foreground text-[11px] uppercase tracking-[0.2em] hover:bg-background/90 transition-colors"
              >
                Найти шоурум
              </Link>
              <Link
                to="/catalog"
                className="px-10 py-5 border border-background/30 text-[11px] uppercase tracking-[0.2em] hover:bg-background/10 transition-colors"
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
