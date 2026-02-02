// Comprehensive collection data structure for THE IDEA furniture collections
// Universal format supporting different category counts and material configurations

import heroLiving from '@/assets/hero-living-room.jpg';
import heroBedroom from '@/assets/hero-bedroom.jpg';
import heroDining from '@/assets/hero-dining.jpg';
import productSofa from '@/assets/product-sofa.jpg';
import productChair from '@/assets/product-chair.jpg';
import productArmchair from '@/assets/product-armchair.jpg';
import productBed from '@/assets/product-bed.jpg';
import manufacturing from '@/assets/manufacturing.jpg';

// Types
export type CollectionType = 'corpus' | 'soft' | 'tables';

export interface CategoryFeature {
  title: string;
  description: string;
}

export interface CollectionCategory {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  image: string;
  galleryImages?: string[];
  features?: CategoryFeature[];
  products: CollectionProduct[];
}

export interface CollectionProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  badge?: 'new' | 'hit';
}

export interface CollectionAdvantage {
  title: string;
  description: string;
}

export interface CollectionMaterial {
  name: string;
  description?: string;
  image?: string;
  options?: string[];
}

export interface CollectionDecor {
  name: string;
  colors: { name: string; hex: string }[];
}

export interface FullCollectionData {
  id: string;
  name: string;
  type: CollectionType;
  tagline: string;
  heroImage: string;
  heroDescription: string;
  philosophy: string;
  advantages: CollectionAdvantage[];
  categories: CollectionCategory[];
  materials: CollectionMaterial[];
  decors: CollectionDecor[];
  galleryImages: string[];
}

// Collection data
export const collectionsData: FullCollectionData[] = [
  // ==================== КОРПУСНАЯ МЕБЕЛЬ ====================
  {
    id: 'bergen',
    name: 'Bergen',
    type: 'corpus',
    tagline: 'Современная классика с дизайнерскими принтами',
    heroImage: heroBedroom,
    heroDescription: 'Bergen — переосмысление классических форм в современном контексте. Коллаборация THE IDEA × FACTURA открывает новые горизонты кастомизации.',
    philosophy: 'Как сохранить благородство классики, убрав её тяжеловесность? Ответ — в безупречных пропорциях, благородных материалах и внимании к деталям. Bergen — мост между эпохами.',
    advantages: [
      { title: 'Ножки «капля»', description: 'Фирменная деталь коллекции — точёные ножки с плавным силуэтом' },
      { title: 'Фурнитура Hettich', description: 'Немецкое качество механизмов с плавным закрыванием' },
      { title: 'Коллаборация FACTURA', description: '4 серии дизайнерских принтов: ONDA, VISION, ESPANA, ISTANTE' },
      { title: 'Палитра отделки', description: '10 оттенков дуба + 11 эмалей RAL для любого интерьера' },
    ],
    categories: [
      {
        id: 'storage',
        name: 'Системы хранения',
        description: 'Комоды, тумбы и пеналы в едином стиле',
        longDescription: 'Классические формы с современными пропорциями. Каждый предмет — самостоятельное произведение, которое легко комбинируется с другими элементами коллекции.',
        image: heroLiving,
        galleryImages: [heroBedroom, manufacturing, heroDining],
        features: [
          { title: 'Ножки «капля»', description: 'Фирменная точёная деталь' },
          { title: 'Soft-close', description: 'Плавное закрывание всех ящиков' },
          { title: 'Шпон дуба', description: 'Натуральный рисунок древесины' },
          { title: 'Принты FACTURA', description: 'Уникальные дизайнерские декоры' },
        ],
        products: [
          { id: 'bergen-chest-6', name: 'Комод 6 ящиков', price: 89900, image: productArmchair },
          { id: 'bergen-chest-4', name: 'Комод 4 ящика', price: 69900, image: productArmchair },
          { id: 'bergen-nightstand', name: 'Прикроватная тумба', price: 32900, image: productArmchair },
          { id: 'bergen-console', name: 'Консоль', price: 54900, image: productArmchair },
        ],
      },
      {
        id: 'tables',
        name: 'Обеденные столы',
        description: 'Раздвижные и стационарные модели для столовой',
        longDescription: 'Столы Bergen созданы для семейных обедов и дружеских встреч. Раздвижные механизмы позволяют трансформировать пространство под любое количество гостей.',
        image: heroDining,
        galleryImages: [heroLiving, heroBedroom],
        features: [
          { title: 'Механизм раздвижения', description: 'Простое увеличение на 40-60 см' },
          { title: 'Столешница 40 мм', description: 'Массив дуба высшего сорта' },
          { title: 'До 10 персон', description: 'В раздвинутом состоянии' },
          { title: 'Устойчивая база', description: 'Надёжная конструкция подстолья' },
        ],
        products: [
          { id: 'bergen-table-180', name: 'Стол обеденный 180', price: 129900, image: productChair },
          { id: 'bergen-table-160', name: 'Стол обеденный 160', price: 109900, image: productChair },
          { id: 'bergen-table-ext', name: 'Стол раздвижной', price: 149900, image: productChair, badge: 'hit' },
        ],
      },
    ],
    materials: [
      { name: 'Корпус', description: 'ЛДСП Egger 22 мм, кромка ABS 2 мм', options: ['Белый', 'Дуб натуральный', 'Графит'] },
      { name: 'Фасады', description: 'МДФ 18 мм с эмалью или шпоном' },
      { name: 'Столешницы', description: 'Массив дуба 40 мм или HPL-пластик' },
      { name: 'Фурнитура', description: 'Hettich с доводчиками' },
    ],
    decors: [
      {
        name: 'Оттенки дуба',
        colors: [
          { name: 'Натуральный', hex: '#C4A77D' },
          { name: 'Светлый', hex: '#E8D5B7' },
          { name: 'Тёмный', hex: '#6B4423' },
          { name: 'Серый', hex: '#9B9B8A' },
          { name: 'Графит', hex: '#4A4A4A' },
        ],
      },
      {
        name: 'Эмали RAL',
        colors: [
          { name: 'Белый 9016', hex: '#F7F7F7' },
          { name: 'Слоновая кость', hex: '#FFFFF0' },
          { name: 'Серый 7035', hex: '#CBD0CC' },
          { name: 'Чёрный 9005', hex: '#0A0A0A' },
          { name: 'Шалфей', hex: '#9CAF88' },
        ],
      },
    ],
    galleryImages: [heroBedroom, heroLiving, heroDining, manufacturing],
  },
  {
    id: 'case',
    name: 'Case',
    type: 'corpus',
    tagline: 'Архитектурный минимализм',
    heroImage: heroLiving,
    heroDescription: 'Case — это чистые линии и продуманная функциональность. Каждый предмет создан как архитектурный объект, где форма безоговорочно следует за функцией.',
    philosophy: 'Родилась из идеи создать мебель, которая станет фоном для жизни. Мы убрали всё лишнее, оставив только суть — чистую форму и безупречную функциональность.',
    advantages: [
      { title: 'Модульная система', description: 'Гибкая конфигурация под любую планировку' },
      { title: 'Скрытые механизмы', description: 'Фасады без ручек с системой push-to-open' },
      { title: 'Берёзовая фанера', description: 'Экологичный и прочный материал каркаса' },
      { title: 'Латексный наполнитель', description: 'Для мягкой мебели — долговечность и комфорт' },
    ],
    categories: [
      {
        id: 'soft',
        name: 'Мягкая мебель',
        description: 'Диваны и кресла в архитектурном стиле',
        longDescription: 'Мягкая мебель Case — это геометрия комфорта. Чёткие линии подлокотников контрастируют с мягкостью посадки. Латексный наполнитель обеспечивает долговечность формы.',
        image: productSofa,
        galleryImages: [heroLiving, manufacturing, heroBedroom],
        features: [
          { title: 'Латексная пена', description: 'Не деформируется 10+ лет' },
          { title: 'Берёзовый каркас', description: 'Прочность и экологичность' },
          { title: '5 категорий ткани', description: 'От Enigma до Aquarelle' },
          { title: 'Съёмные чехлы', description: 'Простой уход и замена' },
        ],
        products: [
          { id: 'case-sofa-3', name: 'Диван трёхместный', price: 189000, image: productSofa, badge: 'hit' },
          { id: 'case-sofa-2', name: 'Диван двухместный', price: 149000, image: productSofa },
          { id: 'case-armchair', name: 'Кресло', price: 89000, image: productArmchair },
          { id: 'case-ottoman', name: 'Пуф', price: 45000, image: productArmchair },
        ],
      },
      {
        id: 'storage',
        name: 'Системы хранения',
        description: 'Комоды и тумбы без лишних деталей',
        longDescription: 'Модульные системы хранения Case объединяют архитектурную строгость с практичностью. Фасады без ручек с системой push-to-open создают монолитный облик.',
        image: heroLiving,
        galleryImages: [heroDining, manufacturing],
        features: [
          { title: 'Push-to-open', description: 'Открывание нажатием' },
          { title: 'Скрытые петли', description: 'Чистый минималистичный вид' },
          { title: 'Фанера ФК', description: 'Берёзовая фанера высшего сорта' },
          { title: 'Hettich Quadro', description: 'Направляющие с полным выдвижением' },
        ],
        products: [
          { id: 'case-chest', name: 'Комод широкий', price: 98000, image: productArmchair },
          { id: 'case-nightstand', name: 'Прикроватная тумба', price: 38000, image: productArmchair },
          { id: 'case-console', name: 'Консоль', price: 67000, image: productArmchair },
          { id: 'case-tv', name: 'Тумба под ТВ', price: 78000, image: productArmchair, badge: 'new' },
        ],
      },
      {
        id: 'tables',
        name: 'Столы',
        description: 'Рабочие и консольные столы',
        longDescription: 'Рабочие столы Case спроектированы для концентрации. Лаконичный дизайн убирает визуальный шум, встроенный кабель-менеджмент поддерживает порядок.',
        image: heroDining,
        galleryImages: [heroLiving],
        features: [
          { title: 'Кабель-менеджмент', description: 'Скрытая разводка проводов' },
          { title: 'Столешница 30 мм', description: 'Берёзовая фанера или массив' },
          { title: 'Регулировка высоты', description: 'Опционально для рабочих моделей' },
        ],
        products: [
          { id: 'case-desk', name: 'Рабочий стол', price: 89000, image: productChair },
          { id: 'case-console-table', name: 'Консольный стол', price: 67000, image: productChair },
        ],
      },
      {
        id: 'benches',
        name: 'Скамьи',
        description: 'Функциональный акцент интерьера',
        longDescription: 'Скамьи Case — универсальный элемент для прихожей, спальни или гостиной. Минималистичная форма позволяет интегрировать их в любой интерьер.',
        image: manufacturing,
        galleryImages: [heroLiving, heroBedroom],
        features: [
          { title: 'Массив бука', description: 'Ножки из твёрдой породы' },
          { title: 'Войлочная подкладка', description: 'Защита пола от царапин' },
          { title: 'Два размера', description: '120 и 160 см в длину' },
        ],
        products: [
          { id: 'case-bench-120', name: 'Скамья 120 см', price: 54000, image: productArmchair },
          { id: 'case-bench-160', name: 'Скамья 160 см', price: 68000, image: productArmchair },
        ],
      },
    ],
    materials: [
      { name: 'Каркас', description: 'Берёзовая фанера высшего сорта', options: ['Натуральный', 'Тонированный'] },
      { name: 'Массив', description: 'Бук для ножек и деталей' },
      { name: 'Наполнитель', description: 'Латексная пена, пенополиуретан' },
      { name: 'Фурнитура', description: 'Hettich с плавным закрыванием' },
    ],
    decors: [
      {
        name: 'Категории тканей',
        colors: [
          { name: 'Enigma', hex: '#4A4A4A' },
          { name: 'Bentley', hex: '#8B4513' },
          { name: 'Milan', hex: '#F5F5DC' },
          { name: 'Gravitacia', hex: '#2F4F4F' },
          { name: 'Aquarelle', hex: '#87CEEB' },
        ],
      },
    ],
    galleryImages: [heroLiving, heroDining, manufacturing, productSofa],
  },
  {
    id: 'code',
    name: 'Code',
    type: 'corpus',
    tagline: 'Вертикальная геометрия',
    heroImage: heroDining,
    heroDescription: 'Code — система хранения с выразительным вертикальным ритмом. Рельефные фасады создают игру света и тени.',
    philosophy: 'Геометрия как язык. Вертикальные линии фасадов задают ритм, структурируют пространство и создают архитектурную выразительность.',
    advantages: [
      { title: 'Рельефные фасады', description: 'Фрезерованный паттерн создаёт игру света' },
      { title: 'Вертикальный ритм', description: 'Выразительный силуэт даже в компактных моделях' },
      { title: 'Скрытые ручки', description: 'Интегрированные профили для чистого дизайна' },
      { title: 'Модульность', description: 'Комбинируйте элементы под свои задачи' },
    ],
    categories: [
      {
        id: 'storage',
        name: 'Системы хранения',
        description: 'Комоды, пеналы и тумбы',
        image: heroLiving,
        products: [
          { id: 'code-chest', name: 'Комод CODE', price: 92000, image: productArmchair, badge: 'hit' },
          { id: 'code-penal', name: 'Пенал высокий', price: 78000, image: productArmchair },
          { id: 'code-nightstand', name: 'Тумба прикроватная', price: 36000, image: productArmchair },
          { id: 'code-tv', name: 'Тумба под ТВ', price: 85000, image: productArmchair },
        ],
      },
    ],
    materials: [
      { name: 'Фасады', description: 'МДФ с фрезеровкой и эмалью' },
      { name: 'Корпус', description: 'ЛДСП 22 мм Egger' },
      { name: 'Фурнитура', description: 'Hettich Quadro с доводчиками' },
    ],
    decors: [
      {
        name: 'Цвета эмали',
        colors: [
          { name: 'Белый матовый', hex: '#FFFFFF' },
          { name: 'Серый', hex: '#808080' },
          { name: 'Графит', hex: '#3C3C3C' },
          { name: 'Зелёный', hex: '#4A6741' },
        ],
      },
    ],
    galleryImages: [heroDining, heroLiving, manufacturing],
  },
  {
    id: 'crystal',
    name: 'Crystal',
    type: 'corpus',
    tagline: 'Прозрачность и лёгкость',
    heroImage: heroLiving,
    heroDescription: 'Crystal объединяет стекло и дерево в изящных пропорциях. Витрины и консоли, которые не утяжеляют пространство.',
    philosophy: 'Мебель должна быть видимой и невидимой одновременно. Crystal — про баланс между присутствием и воздухом.',
    advantages: [
      { title: 'Закалённое стекло', description: 'Безопасность и прочность витринных элементов' },
      { title: 'Подсветка LED', description: 'Встроенная подсветка для акцентирования' },
      { title: 'Шпон дуба', description: 'Натуральная текстура в сочетании со стеклом' },
      { title: 'Лаконичный силуэт', description: 'Минимум деталей, максимум воздуха' },
    ],
    categories: [
      {
        id: 'vitrines',
        name: 'Витрины',
        description: 'Для коллекций и декора',
        image: heroLiving,
        products: [
          { id: 'crystal-vitrine-high', name: 'Витрина высокая', price: 145000, image: productArmchair },
          { id: 'crystal-vitrine-low', name: 'Витрина низкая', price: 98000, image: productArmchair },
        ],
      },
      {
        id: 'tables',
        name: 'Столы',
        description: 'Журнальные и консольные',
        image: heroDining,
        products: [
          { id: 'crystal-coffee', name: 'Журнальный стол', price: 67000, image: productChair },
          { id: 'crystal-console', name: 'Консоль', price: 78000, image: productChair, badge: 'new' },
        ],
      },
    ],
    materials: [
      { name: 'Стекло', description: 'Закалённое 8-10 мм' },
      { name: 'Каркас', description: 'Шпон дуба или эмаль' },
      { name: 'Подсветка', description: 'LED с сенсорным управлением' },
    ],
    decors: [
      {
        name: 'Отделка',
        colors: [
          { name: 'Дуб натуральный', hex: '#C4A77D' },
          { name: 'Дуб тёмный', hex: '#5C4033' },
          { name: 'Белая эмаль', hex: '#FFFFFF' },
        ],
      },
    ],
    galleryImages: [heroLiving, manufacturing],
  },
  {
    id: 'minimal',
    name: 'Minimal',
    type: 'corpus',
    tagline: 'Только консоли и стеллажи',
    heroImage: manufacturing,
    heroDescription: 'Minimal — редуцированная эстетика для тех, кто ценит пустоту. Консоли, стеллажи и пеналы без единой лишней детали.',
    philosophy: 'Минимализм — не отсутствие, а концентрация. Каждая линия имеет значение, каждый элемент выполняет свою функцию.',
    advantages: [
      { title: 'Скрытый крепёж', description: 'Парящий эффект настенных элементов' },
      { title: 'Тонкие полки', description: '18 мм создают визуальную лёгкость' },
      { title: 'Модульность', description: 'Наращивайте систему по мере необходимости' },
      { title: 'Универсальность', description: 'Подходит для любого стиля интерьера' },
    ],
    categories: [
      {
        id: 'consoles',
        name: 'Консоли',
        description: 'Настенные и напольные',
        image: heroLiving,
        products: [
          { id: 'minimal-console-120', name: 'Консоль 120', price: 48000, image: productArmchair },
          { id: 'minimal-console-160', name: 'Консоль 160', price: 58000, image: productArmchair },
        ],
      },
      {
        id: 'shelves',
        name: 'Стеллажи',
        description: 'Открытые системы хранения',
        image: manufacturing,
        products: [
          { id: 'minimal-shelf-3', name: 'Стеллаж 3 полки', price: 67000, image: productArmchair },
          { id: 'minimal-shelf-5', name: 'Стеллаж 5 полок', price: 89000, image: productArmchair, badge: 'hit' },
        ],
      },
      {
        id: 'penals',
        name: 'Пеналы',
        description: 'Вертикальное хранение',
        image: heroLiving,
        products: [
          { id: 'minimal-penal', name: 'Пенал', price: 72000, image: productArmchair },
        ],
      },
    ],
    materials: [
      { name: 'Материал', description: 'МДФ с эмалевым покрытием' },
      { name: 'Крепёж', description: 'Скрытая система навески' },
    ],
    decors: [
      {
        name: 'Цвета',
        colors: [
          { name: 'Белый', hex: '#FFFFFF' },
          { name: 'Чёрный', hex: '#1A1A1A' },
          { name: 'Серый', hex: '#9B9B9B' },
        ],
      },
    ],
    galleryImages: [manufacturing, heroLiving],
  },
  {
    id: 'twin',
    name: 'Twin',
    type: 'corpus',
    tagline: 'Симметрия и баланс',
    heroImage: heroBedroom,
    heroDescription: 'Twin — про гармонию парных элементов. Симметричные композиции для спален и гостиных. ТВ-тумбы и стеллажи исключены.',
    philosophy: 'Симметрия — основа классической гармонии. Twin создаёт упорядоченное, спокойное пространство через зеркальные формы.',
    advantages: [
      { title: 'Парные решения', description: 'Идеально для симметричных планировок' },
      { title: 'Единый стиль', description: 'Все элементы в одной эстетике' },
      { title: 'Качественная фурнитура', description: 'Механизмы с плавным ходом' },
      { title: 'Вариативность', description: 'Комоды и тумбы разных размеров' },
    ],
    categories: [
      {
        id: 'storage',
        name: 'Системы хранения',
        description: 'Комоды, тумбы и пеналы',
        image: heroBedroom,
        products: [
          { id: 'twin-chest', name: 'Комод TWIN', price: 86000, image: productArmchair },
          { id: 'twin-nightstand', name: 'Тумба прикроватная', price: 34000, image: productArmchair },
          { id: 'twin-console', name: 'Консоль', price: 52000, image: productArmchair },
        ],
      },
    ],
    materials: [
      { name: 'Корпус', description: 'ЛДСП Egger, кромка ABS' },
      { name: 'Фасады', description: 'МДФ с эмалью' },
      { name: 'Фурнитура', description: 'Hettich InnoTech' },
    ],
    decors: [
      {
        name: 'Палитра',
        colors: [
          { name: 'Белый', hex: '#FFFFFF' },
          { name: 'Слоновая кость', hex: '#FFFFF0' },
          { name: 'Серый', hex: '#A0A0A0' },
          { name: 'Чёрный', hex: '#2A2A2A' },
        ],
      },
    ],
    galleryImages: [heroBedroom, heroLiving],
  },
  {
    id: 'garda',
    name: 'Garda',
    type: 'corpus',
    tagline: 'Гардеробная система',
    heroImage: manufacturing,
    heroDescription: 'Garda — модульная гардеробная система для организации хранения. Открытые и закрытые секции, аксессуары и подсветка.',
    philosophy: 'Гардеробная как личное пространство. Garda помогает организовать вещи так, чтобы каждое утро начиналось с порядка.',
    advantages: [
      { title: 'Модульность', description: 'Конфигурируйте под любую нишу' },
      { title: 'Аксессуары', description: 'Выдвижные ящики, штанги, полки' },
      { title: 'Подсветка', description: 'LED-освещение для удобства' },
      { title: 'Качество', description: 'Немецкая фурнитура и материалы' },
    ],
    categories: [
      {
        id: 'wardrobe',
        name: 'Гардеробные секции',
        description: 'Открытые и закрытые модули',
        image: manufacturing,
        products: [
          { id: 'garda-open', name: 'Открытая секция', price: 78000, image: productArmchair },
          { id: 'garda-closed', name: 'Закрытая секция', price: 98000, image: productArmchair },
          { id: 'garda-corner', name: 'Угловой модуль', price: 125000, image: productArmchair, badge: 'hit' },
        ],
      },
    ],
    materials: [
      { name: 'Каркас', description: 'ЛДСП 18 мм премиум' },
      { name: 'Штанги', description: 'Хромированный металл' },
      { name: 'Направляющие', description: 'Hettich полного выдвижения' },
    ],
    decors: [
      {
        name: 'Отделка',
        colors: [
          { name: 'Белый', hex: '#FFFFFF' },
          { name: 'Дуб молочный', hex: '#F5E6D3' },
          { name: 'Графит', hex: '#4A4A4A' },
        ],
      },
    ],
    galleryImages: [manufacturing],
  },
  {
    id: 'timeless',
    name: 'Timeless',
    type: 'corpus',
    tagline: 'Вневременная классика',
    heroImage: heroBedroom,
    heroDescription: 'Timeless — коллекция для ценителей классических форм. Благородные пропорции, качественные материалы и внимание к деталям.',
    philosophy: 'Некоторые вещи не устаревают. Timeless создана по канонам, которые работают столетиями.',
    advantages: [
      { title: 'Классические пропорции', description: 'Золотое сечение в каждой детали' },
      { title: 'Массив дуба', description: 'Натуральный материал с благородной текстурой' },
      { title: 'Ручная отделка', description: 'Патина и состаривание по желанию' },
      { title: 'Долговечность', description: 'Мебель, которую передают по наследству' },
    ],
    categories: [
      {
        id: 'storage',
        name: 'Системы хранения',
        description: 'Комоды, буфеты и тумбы',
        image: heroBedroom,
        products: [
          { id: 'timeless-chest', name: 'Комод Timeless', price: 145000, image: productArmchair, badge: 'hit' },
          { id: 'timeless-buffet', name: 'Буфет', price: 198000, image: productArmchair },
          { id: 'timeless-nightstand', name: 'Тумба', price: 52000, image: productArmchair },
        ],
      },
      {
        id: 'tables',
        name: 'Столы',
        description: 'Обеденные и журнальные',
        image: heroDining,
        products: [
          { id: 'timeless-dining', name: 'Обеденный стол', price: 189000, image: productChair },
          { id: 'timeless-coffee', name: 'Журнальный стол', price: 78000, image: productChair },
        ],
      },
    ],
    materials: [
      { name: 'Массив', description: 'Дуб, бук или ясень' },
      { name: 'Фасады', description: 'Филёнка с обкладкой' },
      { name: 'Отделка', description: 'Лак, масло или патина' },
    ],
    decors: [
      {
        name: 'Тонировка',
        colors: [
          { name: 'Натуральный', hex: '#C4A77D' },
          { name: 'Орех', hex: '#5C4033' },
          { name: 'Венге', hex: '#3D2B1F' },
          { name: 'Слоновая кость', hex: '#FFFFF0' },
        ],
      },
    ],
    galleryImages: [heroBedroom, heroDining, manufacturing],
  },

  // ==================== СТОЛЫ ====================
  {
    id: 'mavis',
    name: 'Mavis',
    type: 'tables',
    tagline: 'Обеденные традиции',
    heroImage: heroDining,
    heroDescription: 'Mavis — коллекция обеденных столов для большой семьи. Раздвижные механизмы, устойчивые конструкции и разнообразие размеров.',
    philosophy: 'Стол — центр семейной жизни. Mavis создан для долгих обедов, тёплых разговоров и важных моментов.',
    advantages: [
      { title: 'Раздвижной механизм', description: 'Синхронное раздвижение с центральной вставкой' },
      { title: 'Устойчивость', description: 'Массивные ножки и усиленная царга' },
      { title: 'Разнообразие', description: 'Размеры от 140 до 260 см' },
      { title: 'Материалы', description: 'Массив дуба или керамика' },
    ],
    categories: [
      {
        id: 'dining',
        name: 'Обеденные столы',
        description: 'Для 4-12 персон',
        image: heroDining,
        products: [
          { id: 'mavis-140', name: 'Mavis 140', price: 98000, image: productChair },
          { id: 'mavis-180', name: 'Mavis 180', price: 128000, image: productChair, badge: 'hit' },
          { id: 'mavis-220', name: 'Mavis 220 раздвижной', price: 168000, image: productChair },
        ],
      },
    ],
    materials: [
      { name: 'Столешница', description: 'Массив дуба 40 мм или HPL' },
      { name: 'Подстолье', description: 'Металл с порошковой окраской' },
      { name: 'Механизм', description: 'Синхронное раздвижение' },
    ],
    decors: [
      {
        name: 'Столешницы',
        colors: [
          { name: 'Дуб натуральный', hex: '#C4A77D' },
          { name: 'Дуб тёмный', hex: '#5C4033' },
          { name: 'Керамика белая', hex: '#F5F5F5' },
          { name: 'Керамика мрамор', hex: '#E8E8E8' },
        ],
      },
    ],
    galleryImages: [heroDining, heroLiving],
  },

  // ==================== МЯГКАЯ МЕБЕЛЬ ====================
  {
    id: 'saga',
    name: 'Saga',
    type: 'soft',
    tagline: 'Скандинавская история',
    heroImage: productSofa,
    heroDescription: 'Saga — модульная система диванов с глубокой посадкой и мягкими формами. Скандинавская эстетика в каждой линии.',
    philosophy: 'Saga — ода скандинавскому дизайну. Любовь к природным материалам, внимание к свету и стремление к уюту без излишеств.',
    advantages: [
      { title: 'Модульность', description: 'Создавайте конфигурации под свою гостиную' },
      { title: 'Глубокая посадка', description: 'Комфортный отдых в любой позе' },
      { title: 'Съёмные чехлы', description: 'Легко стирать и менять' },
      { title: 'Экологичность', description: 'Натуральные материалы каркаса' },
    ],
    categories: [
      {
        id: 'sofas',
        name: 'Диваны',
        description: 'Модульные и стационарные',
        image: productSofa,
        products: [
          { id: 'saga-3', name: 'Диван трёхместный', price: 198000, image: productSofa, badge: 'hit' },
          { id: 'saga-corner', name: 'Угловой диван', price: 298000, image: productSofa },
          { id: 'saga-2', name: 'Диван двухместный', price: 158000, image: productSofa },
        ],
      },
      {
        id: 'armchairs',
        name: 'Кресла',
        description: 'Для уютных уголков',
        image: productArmchair,
        products: [
          { id: 'saga-armchair', name: 'Кресло Saga', price: 89000, image: productArmchair },
          { id: 'saga-ottoman', name: 'Пуф', price: 45000, image: productArmchair },
        ],
      },
    ],
    materials: [
      { name: 'Каркас', description: 'Массив берёзы, фанера' },
      { name: 'Наполнитель', description: 'ППУ, синтепон, пух-перо' },
      { name: 'Ножки', description: 'Массив дуба или бука' },
    ],
    decors: [
      {
        name: 'Ткани',
        colors: [
          { name: 'Лён', hex: '#C4B89B' },
          { name: 'Шерсть', hex: '#8B7355' },
          { name: 'Велюр', hex: '#2F4F4F' },
          { name: 'Рогожка', hex: '#A89078' },
        ],
      },
    ],
    galleryImages: [productSofa, heroLiving, heroBedroom],
  },
  {
    id: 'savi',
    name: 'Savi',
    type: 'soft',
    tagline: 'Мягкая роскошь',
    heroImage: productArmchair,
    heroDescription: 'Savi — коллекция для ценителей комфорта. Глубокие посадки, премиальные ткани и безупречная эргономика.',
    philosophy: 'Признание в любви к комфорту. Коллекция, где можно расслабиться, не жертвуя эстетикой.',
    advantages: [
      { title: 'Глубокая посадка', description: 'Увеличенная глубина сиденья' },
      { title: 'Премиум ткани', description: '25 коллекций на выбор' },
      { title: 'Модульность', description: 'Секции работают вместе и отдельно' },
      { title: 'Деревянные акценты', description: 'Ножки из массива добавляют тепло' },
    ],
    categories: [
      {
        id: 'sofas',
        name: 'Диваны',
        description: 'Для просторных гостиных',
        image: productSofa,
        products: [
          { id: 'savi-3', name: 'Диван трёхместный', price: 248000, image: productSofa, badge: 'hit' },
          { id: 'savi-corner', name: 'Угловой диван', price: 378000, image: productSofa },
          { id: 'savi-modular', name: 'Модульная система', price: 428000, image: productSofa, badge: 'new' },
        ],
      },
      {
        id: 'armchairs',
        name: 'Кресла',
        description: 'Лаунж и акцентные',
        image: productArmchair,
        products: [
          { id: 'savi-lounge', name: 'Кресло лаунж', price: 128000, image: productArmchair },
          { id: 'savi-accent', name: 'Кресло акцентное', price: 98000, image: productArmchair },
        ],
      },
    ],
    materials: [
      { name: 'Каркас', description: 'Берёзовая фанера, массив бука' },
      { name: 'Наполнитель', description: 'HR-пена, пух-перо' },
      { name: 'Ножки', description: 'Дуб или бук с лаком' },
    ],
    decors: [
      {
        name: 'Категории тканей',
        colors: [
          { name: 'Velvet Lux', hex: '#4A3728' },
          { name: 'Boucle', hex: '#E8DCC8' },
          { name: 'Premium Wool', hex: '#6B5B4F' },
        ],
      },
    ],
    galleryImages: [productArmchair, productSofa, heroLiving],
  },
  {
    id: 'soho',
    name: 'Soho',
    type: 'soft',
    tagline: 'Городской характер',
    heroImage: productSofa,
    heroDescription: 'Soho — диваны для современного города. Компактные формы, практичные ткани и универсальный дизайн.',
    philosophy: 'Жизнь в городе — про мобильность и практичность. Soho легко вписывается в любое пространство.',
    advantages: [
      { title: 'Компактность', description: 'Оптимизированы для городских квартир' },
      { title: 'Практичность', description: 'Ткани easy clean' },
      { title: 'Универсальность', description: 'Нейтральный дизайн под любой стиль' },
      { title: 'Доступность', description: 'Демократичная цена без потери качества' },
    ],
    categories: [
      {
        id: 'sofas',
        name: 'Диваны',
        description: 'Для компактных пространств',
        image: productSofa,
        products: [
          { id: 'soho-2', name: 'Диван двухместный', price: 128000, image: productSofa },
          { id: 'soho-3', name: 'Диван трёхместный', price: 168000, image: productSofa, badge: 'hit' },
        ],
      },
    ],
    materials: [
      { name: 'Каркас', description: 'ДСП, фанера' },
      { name: 'Наполнитель', description: 'ППУ средней плотности' },
      { name: 'Ножки', description: 'Металл или дерево' },
    ],
    decors: [
      {
        name: 'Ткани',
        colors: [
          { name: 'Серый', hex: '#808080' },
          { name: 'Бежевый', hex: '#D2B48C' },
          { name: 'Синий', hex: '#4A5568' },
          { name: 'Зелёный', hex: '#5D6B4A' },
        ],
      },
    ],
    galleryImages: [productSofa, heroLiving],
  },
  {
    id: 'cascade',
    name: 'Cascade',
    type: 'soft',
    tagline: 'Каскадные кровати',
    heroImage: productBed,
    heroDescription: 'Cascade — кровати с мягким каскадным изголовьем. Плавные линии и многофункциональное основание.',
    philosophy: 'Вдохновение водопадом — плавное течение форм от изголовья к основанию. Cascade — это про мягкость засыпания.',
    advantages: [
      { title: 'Каскадное изголовье', description: 'Многоуровневая мягкая структура' },
      { title: 'Три типа основания', description: 'Подиум, ножки или бельевой ящик' },
      { title: 'Все размеры', description: '140, 160, 180 и 200 см' },
      { title: 'Безопасность', description: 'Округлые формы без острых углов' },
    ],
    categories: [
      {
        id: 'beds',
        name: 'Кровати',
        description: 'Все размеры и конфигурации',
        image: productBed,
        products: [
          { id: 'cascade-160', name: 'Cascade 160', price: 148000, image: productBed, badge: 'hit' },
          { id: 'cascade-180', name: 'Cascade 180', price: 168000, image: productBed },
          { id: 'cascade-200', name: 'Cascade 200', price: 188000, image: productBed },
        ],
      },
    ],
    materials: [
      { name: 'Каркас', description: 'Берёзовая фанера, массив' },
      { name: 'Изголовье', description: 'ППУ повышенной плотности' },
      { name: 'Основание', description: 'Ортопедические ламели' },
    ],
    decors: [
      {
        name: 'Ткани',
        colors: [
          { name: 'Velvet Ivory', hex: '#FFFFF0' },
          { name: 'Velvet Grey', hex: '#A0A0A0' },
          { name: 'Velvet Green', hex: '#5D6B4A' },
          { name: 'Boucle Sand', hex: '#C4B89B' },
        ],
      },
    ],
    galleryImages: [productBed, heroBedroom],
  },
  {
    id: 'iris',
    name: 'Iris',
    type: 'soft',
    tagline: 'Изящные кровати',
    heroImage: heroBedroom,
    heroDescription: 'Iris — кровати с утончённым силуэтом. Высокое изголовье, элегантные пропорции и внимание к деталям.',
    philosophy: 'Кровать как главный акцент спальни. Iris создаёт атмосферу камерной роскоши.',
    advantages: [
      { title: 'Высокое изголовье', description: 'До 140 см — визуальный якорь спальни' },
      { title: 'Тонкое основание', description: 'Визуальная лёгкость конструкции' },
      { title: 'Стёжка', description: 'Вертикальная или горизонтальная' },
      { title: 'Премиум ткани', description: 'Велюр, бархат, букле' },
    ],
    categories: [
      {
        id: 'beds',
        name: 'Кровати',
        description: 'Изголовья разной высоты',
        image: productBed,
        products: [
          { id: 'iris-160', name: 'Iris 160', price: 168000, image: productBed },
          { id: 'iris-180', name: 'Iris 180', price: 188000, image: productBed, badge: 'hit' },
          { id: 'iris-200', name: 'Iris 200', price: 208000, image: productBed },
        ],
      },
    ],
    materials: [
      { name: 'Изголовье', description: 'Каркас + ППУ + стёжка' },
      { name: 'Основание', description: 'С ящиком или без' },
      { name: 'Ткань', description: 'Велюр, букле, кожа' },
    ],
    decors: [
      {
        name: 'Популярные цвета',
        colors: [
          { name: 'Dusty Rose', hex: '#D4A5A5' },
          { name: 'Sage', hex: '#9CAF88' },
          { name: 'Ivory', hex: '#FFFFF0' },
          { name: 'Graphite', hex: '#4A4A4A' },
        ],
      },
    ],
    galleryImages: [heroBedroom, productBed],
  },
  {
    id: 'tulip',
    name: 'Tulip',
    type: 'soft',
    tagline: 'Цветочная эстетика',
    heroImage: productBed,
    heroDescription: 'Tulip — кровати с лепестковым изголовьем. Органические формы, вдохновлённые природой.',
    philosophy: 'Природные формы в интерьере. Tulip — метафора распускающегося цветка, приглашающего ко сну.',
    advantages: [
      { title: 'Лепестковое изголовье', description: 'Уникальная форма — фокус спальни' },
      { title: 'Анатомическая поддержка', description: 'Изгиб для комфортного чтения' },
      { title: 'Съёмные чехлы', description: 'Практичность в уходе' },
      { title: 'Ножки на выбор', description: 'Металл или дерево' },
    ],
    categories: [
      {
        id: 'beds',
        name: 'Кровати',
        description: 'С лепестковым изголовьем',
        image: productBed,
        products: [
          { id: 'tulip-160', name: 'Tulip 160', price: 178000, image: productBed },
          { id: 'tulip-180', name: 'Tulip 180', price: 198000, image: productBed, badge: 'hit' },
        ],
      },
    ],
    materials: [
      { name: 'Изголовье', description: 'Формованный ППУ' },
      { name: 'Обивка', description: 'Велюр, букле' },
      { name: 'Каркас', description: 'Металл + дерево' },
    ],
    decors: [
      {
        name: 'Цвета',
        colors: [
          { name: 'Blush', hex: '#E8B4B8' },
          { name: 'Cream', hex: '#FFFDD0' },
          { name: 'Moss', hex: '#8A9A5B' },
        ],
      },
    ],
    galleryImages: [productBed, heroBedroom],
  },
  {
    id: 'pebble',
    name: 'Pebble',
    type: 'soft',
    tagline: 'Округлые формы',
    heroImage: productSofa,
    heroDescription: 'Pebble — диваны и кресла с органическими формами, напоминающими морскую гальку. Memory Foam для идеального комфорта.',
    philosophy: 'Природа сглаживает углы. Pebble — про естественную мягкость форм, созерцательный комфорт и slow living.',
    advantages: [
      { title: 'Органические формы', description: 'Обтекаемый силуэт без острых углов' },
      { title: 'Memory Foam', description: 'Наполнитель, подстраивающийся под тело' },
      { title: 'Универсальность', description: 'От частных интерьеров до HoReCa' },
      { title: 'Долговечность', description: 'Берёзовый каркас, качественные ткани' },
    ],
    categories: [
      {
        id: 'sofas',
        name: 'Диваны',
        description: 'Органические формы',
        image: productSofa,
        products: [
          { id: 'pebble-2', name: 'Pebble двухместный', price: 178000, image: productSofa },
          { id: 'pebble-3', name: 'Pebble трёхместный', price: 228000, image: productSofa, badge: 'hit' },
        ],
      },
      {
        id: 'armchairs',
        name: 'Кресла',
        description: 'Акцентные решения',
        image: productArmchair,
        products: [
          { id: 'pebble-armchair', name: 'Кресло Pebble', price: 118000, image: productArmchair },
        ],
      },
    ],
    materials: [
      { name: 'Каркас', description: 'Берёзовая фанера' },
      { name: 'Наполнитель', description: 'Memory Foam + ППУ' },
      { name: 'Ткани', description: 'Велюр, букле, экокожа' },
    ],
    decors: [
      {
        name: 'Палитра',
        colors: [
          { name: 'Stone', hex: '#A09484' },
          { name: 'Sand', hex: '#C4B89B' },
          { name: 'Ocean', hex: '#5D7B93' },
          { name: 'Moss', hex: '#6B7B5C' },
        ],
      },
    ],
    galleryImages: [productSofa, productArmchair, heroLiving],
  },
  {
    id: 'charm',
    name: 'Charm',
    type: 'soft',
    tagline: 'Очарование комфорта',
    heroImage: productArmchair,
    heroDescription: 'Charm — женственные формы для утончённых интерьеров. Мягкие изгибы, нежные ткани и романтическая эстетика.',
    philosophy: 'Charm — про нежность и изящество. Для тех, кто ценит романтику в деталях.',
    advantages: [
      { title: 'Женственный силуэт', description: 'Плавные линии и изгибы' },
      { title: 'Нежные ткани', description: 'Велюр, бархат, букле' },
      { title: 'Детали', description: 'Пуговицы, каретная стяжка' },
      { title: 'Компактность', description: 'Для спален и будуаров' },
    ],
    categories: [
      {
        id: 'armchairs',
        name: 'Кресла',
        description: 'Акцентные и будуарные',
        image: productArmchair,
        products: [
          { id: 'charm-armchair', name: 'Кресло Charm', price: 89000, image: productArmchair, badge: 'hit' },
          { id: 'charm-pouf', name: 'Пуф Charm', price: 38000, image: productArmchair },
        ],
      },
      {
        id: 'sofas',
        name: 'Диваны',
        description: 'Компактные модели',
        image: productSofa,
        products: [
          { id: 'charm-loveseat', name: 'Мини-диван', price: 128000, image: productSofa },
        ],
      },
    ],
    materials: [
      { name: 'Каркас', description: 'Берёза, бук' },
      { name: 'Наполнитель', description: 'ППУ + синтепон' },
      { name: 'Декор', description: 'Пуговицы, кант, стяжка' },
    ],
    decors: [
      {
        name: 'Романтика',
        colors: [
          { name: 'Rose', hex: '#E8B4B8' },
          { name: 'Lavender', hex: '#C4A5CF' },
          { name: 'Ivory', hex: '#FFFFF0' },
          { name: 'Sage', hex: '#9CAF88' },
        ],
      },
    ],
    galleryImages: [productArmchair, heroBedroom],
  },
  {
    id: 'kyoto',
    name: 'Kyoto',
    type: 'soft',
    tagline: 'Японский минимализм',
    heroImage: productSofa,
    heroDescription: 'Kyoto — модульные диваны с низкой посадкой. Философия «ма» — красота пустоты и созерцания.',
    philosophy: 'Японская эстетика ма — красота пустого пространства. Диван как остров покоя в потоке жизни.',
    advantages: [
      { title: 'Низкая посадка', description: 'Близость к земле — японская традиция' },
      { title: 'Модульность', description: 'Секции и дополнительные элементы' },
      { title: 'Минимализм', description: 'Чистые линии без декора' },
      { title: 'Натуральность', description: 'Массив ясеня в основании' },
    ],
    categories: [
      {
        id: 'sofas',
        name: 'Диваны',
        description: 'Модульная система',
        image: productSofa,
        products: [
          { id: 'kyoto-base', name: 'Базовая секция', price: 98000, image: productSofa },
          { id: 'kyoto-corner', name: 'Угловая секция', price: 118000, image: productSofa, badge: 'new' },
          { id: 'kyoto-ottoman', name: 'Оттоманка', price: 68000, image: productSofa },
        ],
      },
    ],
    materials: [
      { name: 'Основание', description: 'Массив ясеня' },
      { name: 'Наполнитель', description: 'Латекс + ППУ' },
      { name: 'Ткани', description: 'Лён, хлопок, букле' },
    ],
    decors: [
      {
        name: 'Wabi-sabi',
        colors: [
          { name: 'Rice Paper', hex: '#F5F5DC' },
          { name: 'Charcoal', hex: '#36454F' },
          { name: 'Bamboo', hex: '#A08050' },
          { name: 'Moss', hex: '#6B7B5C' },
        ],
      },
    ],
    galleryImages: [productSofa, heroLiving],
  },
];

// Helper function to get collection by ID
export function getCollectionById(id: string): FullCollectionData | undefined {
  return collectionsData.find(c => c.id === id);
}

// Helper function to get collections by type
export function getCollectionsByType(type: CollectionType): FullCollectionData[] {
  return collectionsData.filter(c => c.type === type);
}
