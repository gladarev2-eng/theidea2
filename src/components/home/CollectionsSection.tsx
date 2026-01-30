import { useRef, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

import heroLiving from '@/assets/hero-living-room.jpg';
import heroBedroom from '@/assets/hero-bedroom.jpg';
import heroDining from '@/assets/hero-dining.jpg';
import manufacturing from '@/assets/manufacturing.jpg';
import productSofa from '@/assets/product-sofa.jpg';
import productArmchair from '@/assets/product-armchair.jpg';

const collections = [
  {
    id: 1,
    name: 'CASE',
    description: 'Архитектурная строгость линий',
    feature: 'Модульная система',
    images: [heroLiving, heroDining],
    href: '/collections/case',
  },
  {
    id: 2,
    name: 'SAGA',
    description: 'Скандинавская история',
    feature: 'Органические формы',
    images: [productSofa, heroBedroom],
    href: '/collections/saga',
  },
  {
    id: 3,
    name: 'BERGEN',
    description: 'Современная классика',
    feature: 'Вневременной дизайн',
    images: [heroBedroom, heroLiving],
    href: '/collections/bergen',
  },
  {
    id: 4,
    name: 'CODE',
    description: 'Геометрия пространства',
    feature: 'Контрастные материалы',
    images: [heroDining, manufacturing],
    href: '/collections/code',
  },
  {
    id: 5,
    name: 'SAVI',
    description: 'Мягкая роскошь',
    feature: 'Премиальный комфорт',
    images: [productArmchair, heroBedroom],
    href: '/collections/savi',
  },
  {
    id: 6,
    name: 'FRAME',
    description: 'Каркасные решения',
    feature: 'Открытая конструкция',
    images: [manufacturing, heroDining],
    href: '/collections/frame',
  },
];

const CollectionCard = ({ collection }: { collection: typeof collections[0] }) => {
  const [currentImage, setCurrentImage] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isHovered && collection.images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentImage((prev) => (prev + 1) % collection.images.length);
      }, 1200);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setCurrentImage(0);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, collection.images.length]);

  return (
    <Link
      to={collection.href}
      className="group block flex-shrink-0 w-[280px] sm:w-[340px] lg:w-[400px]"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image */}
      <div className="aspect-[4/5] overflow-hidden mb-4 sm:mb-6 bg-muted relative">
        {collection.images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={collection.name}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ${
              index === currentImage ? 'opacity-100 scale-100' : 'opacity-0 scale-105'
            } ${isHovered ? 'scale-105' : ''}`}
          />
        ))}
        
        {/* Image indicators */}
        {collection.images.length > 1 && (
          <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            {collection.images.map((_, index) => (
              <div
                key={index}
                className={`w-6 h-[2px] transition-all duration-300 ${
                  index === currentImage ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div>
        <p className="text-[9px] sm:text-[10px] text-muted-foreground uppercase tracking-[0.15em] mb-1.5">
          {collection.feature}
        </p>
        <h3 className="text-[11px] sm:text-[12px] font-medium uppercase tracking-[0.2em] sm:tracking-[0.3em] mb-1.5 sm:mb-2 group-hover:opacity-70 transition-opacity">
          {collection.name}
        </h3>
        <p className="text-sm sm:text-base font-light text-muted-foreground">
          {collection.description}
        </p>
      </div>
    </Link>
  );
};

export const CollectionsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = window.innerWidth > 768 ? 420 : 300;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="py-16 sm:py-24 lg:py-40 bg-[#f8f8f6] overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header */}
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-8 mb-10 sm:mb-16 lg:mb-20">
          <div>
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-4 sm:mb-6 font-light">
              Наши миры
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extralight tracking-tight">
              Кураторские коллекции
            </h2>
          </div>
          <div className="flex items-center gap-3 sm:gap-4">
            <div className="flex gap-2">
              <button
                onClick={() => scroll('left')}
                className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300"
              >
                <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5" strokeWidth={1} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300"
              >
                <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5" strokeWidth={1} />
              </button>
            </div>
            <Link
              to="/collections"
              className="hidden sm:inline-flex text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium pb-2 border-b border-foreground hover:opacity-60 transition-opacity duration-300"
            >
              Все коллекции
            </Link>
          </div>
        </AnimatedSection>
      </div>

      {/* Scrollable Collections */}
      <div
        ref={scrollRef}
        className="flex gap-4 sm:gap-6 lg:gap-8 overflow-x-auto no-scrollbar px-4 sm:px-6 lg:px-16"
      >
        {collections.map((collection) => (
          <CollectionCard key={collection.id} collection={collection} />
        ))}
      </div>

      {/* Mobile link */}
      <div className="sm:hidden px-4 mt-8">
        <Link
          to="/collections"
          className="inline-flex text-[10px] uppercase tracking-[0.15em] font-medium pb-2 border-b border-foreground hover:opacity-60 transition-opacity duration-300"
        >
          Все коллекции
        </Link>
      </div>
    </section>
  );
};