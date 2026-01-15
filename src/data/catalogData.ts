// Categories structure based on theidea.ru
// Level 1: Main categories
// Level 2: Subcategories
// Level 3: Detailed subcategories

import heroLiving from '@/assets/hero-living-room.jpg';
import heroBedroom from '@/assets/hero-bedroom.jpg';
import heroDining from '@/assets/hero-dining.jpg';
import productSofa from '@/assets/product-sofa.jpg';
import productChair from '@/assets/product-chair.jpg';
import productArmchair from '@/assets/product-armchair.jpg';
import productBed from '@/assets/product-bed.jpg';
import manufacturing from '@/assets/manufacturing.jpg';

// 3-Level Category Structure
export interface SubSubCategory {
  id: string;
  name: string;
}

export interface SubCategory {
  id: string;
  name: string;
  subcategories: SubSubCategory[];
}

export interface Category {
  id: string;
  name: string;
  subcategories: SubCategory[];
}

export const categories: Category[] = [
  {
    id: 'all',
    name: 'Все',
    subcategories: [],
  },
  {
    id: 'corpus',
    name: 'Корпусная мебель',
    subcategories: [
      {
        id: 'bufety',
        name: 'Буфеты',
        subcategories: [],
      },
      {
        id: 'vitriny',
        name: 'Витрины',
        subcategories: [],
      },
      {
        id: 'stellazhi',
        name: 'Стеллажи',
        subcategories: [],
      },
      {
        id: 'komody',
        name: 'Комоды',
        subcategories: [
          { id: 'komody-compact', name: 'Компактные комоды' },
          { id: 'komody-wide', name: 'Широкие комоды' },
          { id: 'komody-high', name: 'Высокие комоды' },
        ],
      },
      {
        id: 'tumby-tv',
        name: 'Тумбы под ТВ',
        subcategories: [
          { id: 'tumby-tv-mini', name: 'Компактные тумбы' },
          { id: 'tumby-tv-medium', name: 'Средние тумбы' },
          { id: 'tumby-tv-long', name: 'Длинные тумбы' },
        ],
      },
      {
        id: 'konsoli',
        name: 'Консоли',
        subcategories: [],
      },
      {
        id: 'prikrovatnye-tumby',
        name: 'Прикроватные тумбы',
        subcategories: [
          { id: 'tumby-mini', name: 'Миниатюрные' },
          { id: 'tumby-standard', name: 'Стандартные' },
        ],
      },
      {
        id: 'penaly',
        name: 'Пеналы',
        subcategories: [],
      },
      {
        id: 'shkafy',
        name: 'Шкафы',
        subcategories: [
          { id: 'shkafy-wardrobe', name: 'Платяные шкафы' },
          { id: 'shkafy-storage', name: 'Шкафы для хранения' },
        ],
      },
      {
        id: 'modulnye-sistemy',
        name: 'Модульные системы',
        subcategories: [],
      },
      {
        id: 'garderobnye',
        name: 'Гардеробные системы',
        subcategories: [],
      },
      {
        id: 'tumby-vanna',
        name: 'Тумбы для ванной',
        subcategories: [],
      },
    ],
  },
  {
    id: 'soft',
    name: 'Мягкая мебель',
    subcategories: [
      {
        id: 'divany',
        name: 'Диваны',
        subcategories: [
          { id: 'divany-2', name: 'Двухместные диваны' },
          { id: 'divany-3', name: 'Трёхместные диваны' },
          { id: 'divany-modular', name: 'Модульные диваны' },
          { id: 'divany-corner', name: 'Угловые диваны' },
        ],
      },
      {
        id: 'krovati',
        name: 'Кровати',
        subcategories: [
          { id: 'krovati-140', name: 'Кровати 140 см' },
          { id: 'krovati-160', name: 'Кровати 160 см' },
          { id: 'krovati-180', name: 'Кровати 180 см' },
          { id: 'krovati-200', name: 'Кровати 200 см' },
        ],
      },
      {
        id: 'kresla',
        name: 'Кресла',
        subcategories: [
          { id: 'kresla-lounge', name: 'Лаунж-кресла' },
          { id: 'kresla-accent', name: 'Акцентные кресла' },
        ],
      },
      {
        id: 'pufy',
        name: 'Пуфы',
        subcategories: [],
      },
    ],
  },
  {
    id: 'tables',
    name: 'Столы',
    subcategories: [
      {
        id: 'dinner',
        name: 'Обеденные столы',
        subcategories: [
          { id: 'dinner-4', name: 'На 4 персоны' },
          { id: 'dinner-6', name: 'На 6 персон' },
          { id: 'dinner-8', name: 'На 8 персон' },
          { id: 'dinner-extend', name: 'Раздвижные' },
        ],
      },
      {
        id: 'working',
        name: 'Рабочие столы',
        subcategories: [
          { id: 'working-compact', name: 'Компактные' },
          { id: 'working-full', name: 'Полноразмерные' },
        ],
      },
      {
        id: 'console',
        name: 'Консольные столы',
        subcategories: [],
      },
      {
        id: 'coffee',
        name: 'Журнальные столы',
        subcategories: [
          { id: 'coffee-round', name: 'Круглые' },
          { id: 'coffee-rect', name: 'Прямоугольные' },
          { id: 'coffee-set', name: 'Столики-комплекты' },
        ],
      },
    ],
  },
];

// Collections data based on theidea.ru
export const collections = [
  // Корпусная мебель collections
  { id: 'case', name: 'Case', type: 'corpus' as const },
  { id: 'bergen', name: 'Bergen', type: 'corpus' as const },
  { id: 'code', name: 'Code', type: 'corpus' as const },
  { id: 'crystal', name: 'Crystal', type: 'corpus' as const },
  { id: 'frame', name: 'Frame', type: 'corpus' as const },
  { id: 'minimal', name: 'Minimal', type: 'corpus' as const },
  { id: 'twin', name: 'Twin', type: 'corpus' as const },
  { id: 'thimon', name: 'Thimon', type: 'corpus' as const },
  { id: 'timeless', name: 'Timeless', type: 'corpus' as const },
  // Мягкая мебель collections
  { id: 'saga', name: 'Saga', type: 'soft' as const },
  { id: 'savi', name: 'Savi', type: 'soft' as const },
  { id: 'soho', name: 'Soho', type: 'soft' as const },
  { id: 'cascade', name: 'Cascade', type: 'soft' as const },
  { id: 'iris', name: 'Iris', type: 'soft' as const },
  { id: 'tulip', name: 'Tulip', type: 'soft' as const },
  { id: 'pebble', name: 'Pebble', type: 'soft' as const },
  { id: 'charm', name: 'Charm', type: 'soft' as const },
  { id: 'kyoto', name: 'Kyoto', type: 'soft' as const },
  // Столы collections
  { id: 'jagger', name: 'Jagger', type: 'tables' as const },
  { id: 'mavis', name: 'Mavis', type: 'tables' as const },
];

// Full collection data for Collections page
export interface CollectionData {
  id: string;
  name: string;
  tagline: string;
  description: string;
  images: string[];
  itemsCount: number;
  year: string;
  type: 'soft' | 'corpus' | 'tables';
  philosophy: string;
  materials: string;
  features: string[];
}

export const collectionsFullData: CollectionData[] = [
  // Корпусная мебель
  {
    id: 'case',
    name: 'Case',
    tagline: 'Архитектурный минимализм',
    description: 'Коллекция Case — это чистые линии и продуманная функциональность. Каждый предмет создан как архитектурный объект, где форма следует за функцией.',
    images: [heroLiving, heroDining, manufacturing],
    itemsCount: 48,
    year: '2019',
    type: 'corpus',
    philosophy: 'Case родилась из идеи создать мебель, которая станет фоном для жизни. Мы убрали всё лишнее, оставив только суть — чистую форму и безупречную функциональность.',
    materials: 'Массив дуба, натуральный шпон, закалённое стекло, металлическая фурнитура',
    features: ['Модульная система', 'Скрытые механизмы', 'Эргономичные пропорции'],
  },
  {
    id: 'bergen',
    name: 'Bergen',
    tagline: 'Современная классика',
    description: 'Bergen — переосмысление классических форм в современном контексте. Элегантность без излишеств, качество в каждой детали.',
    images: [heroBedroom, heroLiving, heroDining],
    itemsCount: 52,
    year: '2018',
    type: 'corpus',
    philosophy: 'Как сохранить благородство классики, убрав её тяжеловесность? Ответ — в пропорциях, материалах и внимании к деталям.',
    materials: 'Массив бука, мрамор, бархат, матовая латунь',
    features: ['Классические пропорции', 'Утончённые детали', 'Вневременной дизайн'],
  },
  {
    id: 'code',
    name: 'Code',
    tagline: 'Геометрия пространства',
    description: 'Коллекция Code играет с геометрическими формами. Каждый предмет — это уравнение идеального баланса между формой и функцией.',
    images: [heroDining, manufacturing, heroLiving],
    itemsCount: 28,
    year: '2021',
    type: 'corpus',
    philosophy: 'Code — эксперимент с геометрией. Как простые формы создают сложные впечатления, как ритм линий влияет на восприятие пространства.',
    materials: 'Металл с порошковой окраской, закалённое стекло, МДФ с лаковым покрытием',
    features: ['Геометрический дизайн', 'Контрастные материалы', 'Игра с пропорциями'],
  },
  {
    id: 'frame',
    name: 'Frame',
    tagline: 'Каркасные решения',
    description: 'Коллекция Frame раскрывает красоту конструкции. Открытые каркасы, честные материалы, индустриальная эстетика.',
    images: [manufacturing, heroDining, heroLiving],
    itemsCount: 20,
    year: '2023',
    type: 'corpus',
    philosophy: 'Frame — честность конструкции. Мы показываем то, что обычно скрыто: каркас, соединения, материал в его первозданном виде.',
    materials: 'Профильная сталь, массив ореха, натуральная кожа',
    features: ['Открытый каркас', 'Индустриальная эстетика', 'Честные материалы'],
  },
  {
    id: 'minimal',
    name: 'Minimal',
    tagline: 'Чистота формы',
    description: 'Minimal — коллекция для тех, кто ценит пространство. Лаконичные формы и функциональность в каждом элементе.',
    images: [heroLiving, heroBedroom, manufacturing],
    itemsCount: 35,
    year: '2020',
    type: 'corpus',
    philosophy: 'Минимализм — не отсутствие, а концентрация. Каждая линия имеет значение, каждый элемент выполняет свою роль.',
    materials: 'МДФ, натуральный шпон дуба, алюминий',
    features: ['Лаконичный дизайн', 'Скрытая фурнитура', 'Оптимизация пространства'],
  },
  // Мягкая мебель
  {
    id: 'saga',
    name: 'Saga',
    tagline: 'Скандинавская история',
    description: 'Вдохновлённая северной природой, Saga сочетает мягкие формы с натуральными материалами. Тепло дерева и уют текстиля.',
    images: [productSofa, heroLiving, heroBedroom],
    itemsCount: 24,
    year: '2020',
    type: 'soft',
    philosophy: 'Saga — ода скандинавскому дизайну. Любовь к природным материалам, внимание к свету и стремление к уюту без излишеств.',
    materials: 'Ясень, натуральная кожа, шерстяные ткани, латунная фурнитура',
    features: ['Органические формы', 'Тёплая палитра', 'Тактильные материалы'],
  },
  {
    id: 'savi',
    name: 'Savi',
    tagline: 'Мягкая роскошь',
    description: 'Savi создана для ценителей комфорта. Глубокие посадки, премиальные ткани и безупречная эргономика.',
    images: [productArmchair, heroLiving, heroBedroom],
    itemsCount: 18,
    year: '2022',
    type: 'soft',
    philosophy: 'Savi — признание в любви к комфорту. Коллекция, где можно расслабиться, не жертвуя эстетикой.',
    materials: 'Пенополиуретан высокой плотности, итальянский велюр, пух-перо',
    features: ['Глубокая посадка', 'Премиальный комфорт', 'Мягкие формы'],
  },
  {
    id: 'cascade',
    name: 'Cascade',
    tagline: 'Плавность линий',
    description: 'Cascade — коллекция кроватей с мягким изголовьем. Каскадные формы создают ощущение волны комфорта.',
    images: [productBed, heroBedroom, heroLiving],
    itemsCount: 12,
    year: '2021',
    type: 'soft',
    philosophy: 'Вдохновение водопадом — плавное течение форм от изголовья к основанию.',
    materials: 'Массив, велюр, пенополиуретан, ортопедическое основание',
    features: ['Каскадное изголовье', 'Ортопедическое основание', 'Съёмные чехлы'],
  },
  {
    id: 'kyoto',
    name: 'Kyoto',
    tagline: 'Японский минимализм',
    description: 'Kyoto — модульные диваны в японском стиле. Низкая посадка, чистые линии, философия пустоты.',
    images: [productSofa, heroDining, heroLiving],
    itemsCount: 8,
    year: '2024',
    type: 'soft',
    philosophy: 'Японская эстетика ма — красота пустого пространства. Диван как остров покоя.',
    materials: 'Массив ясеня, итальянские ткани, латекс',
    features: ['Низкая посадка', 'Модульность', 'Минималистичный силуэт'],
  },
  // Столы
  {
    id: 'mavis',
    name: 'Mavis',
    tagline: 'Обеденные традиции',
    description: 'Mavis — коллекция обеденных столов для большой семьи. Прочность и элегантность в каждой детали.',
    images: [productChair, heroDining, heroLiving],
    itemsCount: 15,
    year: '2020',
    type: 'tables',
    philosophy: 'Стол — центр семейной жизни. Mavis создан для долгих обедов и тёплых разговоров.',
    materials: 'Массив дуба, металлическое подстолье, керамическая столешница',
    features: ['Раздвижной механизм', 'Устойчивая конструкция', 'Разнообразие размеров'],
  },
  {
    id: 'jagger',
    name: 'Jagger',
    tagline: 'Индустриальный характер',
    description: 'Jagger — столы с характером. Сочетание дерева и металла создаёт брутальный, но утончённый образ.',
    images: [heroDining, manufacturing, heroLiving],
    itemsCount: 10,
    year: '2019',
    type: 'tables',
    philosophy: 'Индустриальное наследие переосмысленное для современного дома.',
    materials: 'Массив, металлический каркас с порошковой окраской',
    features: ['Металлический каркас', 'Брутальный дизайн', 'Надёжная конструкция'],
  },
];

// Mock products for catalog
export interface Product {
  id: string;
  name: string;
  price: number;
  category: string;
  subcategory: string;
  subsubcategory?: string;
  collection: string;
  images: string[];
  badge?: 'new' | 'hit';
}

export const mockProducts: Product[] = [
  // Корпусная мебель - Комоды
  {
    id: '1',
    name: 'Комод CASE широкий',
    price: 98000,
    category: 'corpus',
    subcategory: 'komody',
    subsubcategory: 'komody-wide',
    collection: 'case',
    images: [productArmchair, heroLiving, heroBedroom],
    badge: 'hit',
  },
  {
    id: '2',
    name: 'Комод BERGEN компактный',
    price: 72000,
    category: 'corpus',
    subcategory: 'komody',
    subsubcategory: 'komody-compact',
    collection: 'bergen',
    images: [heroBedroom, heroLiving, manufacturing],
    badge: 'new',
  },
  // Корпусная мебель - Тумбы
  {
    id: '3',
    name: 'Тумба под ТВ MINIMAL длинная',
    price: 85000,
    category: 'corpus',
    subcategory: 'tumby-tv',
    subsubcategory: 'tumby-tv-long',
    collection: 'minimal',
    images: [heroLiving, heroDining, manufacturing],
  },
  {
    id: '4',
    name: 'Прикроватная тумба CASE',
    price: 38000,
    category: 'corpus',
    subcategory: 'prikrovatnye-tumby',
    subsubcategory: 'tumby-standard',
    collection: 'case',
    images: [productBed, heroBedroom],
  },
  // Мягкая мебель - Диваны
  {
    id: '5',
    name: 'Диван SAGA 3-местный',
    price: 189000,
    category: 'soft',
    subcategory: 'divany',
    subsubcategory: 'divany-3',
    collection: 'saga',
    images: [productSofa, heroLiving, heroDining],
    badge: 'hit',
  },
  {
    id: '6',
    name: 'Диван SAVI модульный',
    price: 245000,
    category: 'soft',
    subcategory: 'divany',
    subsubcategory: 'divany-modular',
    collection: 'savi',
    images: [productSofa, heroLiving, heroBedroom],
    badge: 'new',
  },
  {
    id: '7',
    name: 'Диван KYOTO угловой',
    price: 320000,
    category: 'soft',
    subcategory: 'divany',
    subsubcategory: 'divany-corner',
    collection: 'kyoto',
    images: [productSofa, heroDining, heroLiving],
    badge: 'new',
  },
  // Мягкая мебель - Кровати
  {
    id: '8',
    name: 'Кровать CASCADE 160 см',
    price: 145000,
    category: 'soft',
    subcategory: 'krovati',
    subsubcategory: 'krovati-160',
    collection: 'cascade',
    images: [productBed, heroBedroom, heroLiving],
    badge: 'hit',
  },
  {
    id: '9',
    name: 'Кровать SAVI King 180 см',
    price: 178000,
    category: 'soft',
    subcategory: 'krovati',
    subsubcategory: 'krovati-180',
    collection: 'savi',
    images: [productBed, heroBedroom, manufacturing],
  },
  // Мягкая мебель - Кресла
  {
    id: '10',
    name: 'Кресло SAGA Lounge',
    price: 89000,
    category: 'soft',
    subcategory: 'kresla',
    subsubcategory: 'kresla-lounge',
    collection: 'saga',
    images: [productArmchair, heroLiving, heroBedroom],
  },
  // Столы - Обеденные
  {
    id: '11',
    name: 'Стол MAVIS обеденный 6 персон',
    price: 125000,
    category: 'tables',
    subcategory: 'dinner',
    subsubcategory: 'dinner-6',
    collection: 'mavis',
    images: [productChair, heroDining, heroLiving],
  },
  {
    id: '12',
    name: 'Стол JAGGER раздвижной',
    price: 145000,
    category: 'tables',
    subcategory: 'dinner',
    subsubcategory: 'dinner-extend',
    collection: 'jagger',
    images: [heroDining, manufacturing, heroLiving],
    badge: 'new',
  },
  // Столы - Журнальные
  {
    id: '13',
    name: 'Журнальный столик CODE круглый',
    price: 54000,
    category: 'tables',
    subcategory: 'coffee',
    subsubcategory: 'coffee-round',
    collection: 'code',
    images: [productChair, heroLiving, heroDining],
  },
  {
    id: '14',
    name: 'Журнальный столик CASE комплект',
    price: 78000,
    category: 'tables',
    subcategory: 'coffee',
    subsubcategory: 'coffee-set',
    collection: 'case',
    images: [heroLiving, heroDining, manufacturing],
    badge: 'hit',
  },
];
