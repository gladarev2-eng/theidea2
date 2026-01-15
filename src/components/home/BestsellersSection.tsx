import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';
import { useFavorites } from '@/contexts/FavoritesContext';

import productSofa from '@/assets/product-sofa.jpg';
import productArmchair from '@/assets/product-armchair.jpg';
import productBed from '@/assets/product-bed.jpg';
import productChair from '@/assets/product-chair.jpg';
import heroLiving from '@/assets/hero-living-room.jpg';
import heroBedroom from '@/assets/hero-bedroom.jpg';

const products = [
  {
    id: 'sofa-case-3',
    name: 'Диван Case 3-местный',
    collection: 'Case',
    price: 189000,
    images: [productSofa, heroLiving],
    href: '/product/sofa-case-3',
    badge: 'new' as const,
  },
  {
    id: 'armchair-saga',
    name: 'Кресло Saga Lounge',
    collection: 'Saga',
    price: 78000,
    images: [productArmchair, heroBedroom],
    href: '/product/armchair-saga',
    badge: 'hit' as const,
  },
  {
    id: 'bed-bergen',
    name: 'Кровать Bergen King',
    collection: 'Bergen',
    price: 156000,
    images: [productBed, heroBedroom],
    href: '/product/bed-bergen',
  },
  {
    id: 'chair-copenhagen',
    name: 'Стул Копенгаген',
    collection: 'Copenhagen',
    price: 34000,
    images: [productChair, heroLiving],
    href: '/product/chair-copenhagen',
  },
];

const ProductCardHome = ({ 
  id,
  name, 
  collection, 
  price, 
  images, 
  href, 
  badge 
}: typeof products[0]) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const { toggleFavorite, isFavorite } = useFavorites();
  const isItemFavorite = isFavorite(id);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
  };

  useEffect(() => {
    if (isHovered && images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 1000);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setCurrentImageIndex(0);
    }
    return () => {
      if (intervalRef.current) clearInterval(intervalRef.current);
    };
  }, [isHovered, images.length]);

  const badgeLabels = { new: 'New', hit: 'Hit' };

  return (
    <Link 
      to={href} 
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="aspect-[4/5] bg-[#f5f5f3] overflow-hidden mb-3 sm:mb-5 relative">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={name}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-500 ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            }`}
          />
        ))}
        
        {badge && (
          <div className="absolute top-2 sm:top-4 left-2 sm:left-4 px-2 sm:px-3 py-1 sm:py-1.5 bg-white text-foreground text-[8px] sm:text-[10px] uppercase tracking-[0.1em] sm:tracking-[0.15em] font-medium rounded-full">
            {badgeLabels[badge]}
          </div>
        )}

        {images.length > 1 && (
          <div className={`absolute bottom-3 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-1 sm:gap-1.5 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-4 sm:w-6 h-[2px] transition-all duration-300 ${
                  index === currentImageIndex ? 'bg-foreground' : 'bg-foreground/30'
                }`}
              />
            ))}
          </div>
        )}
        
        <button 
          className={`absolute top-2 sm:top-4 right-2 sm:right-4 w-7 sm:w-9 h-7 sm:h-9 bg-white/90 rounded-full flex items-center justify-center transition-opacity duration-300 ${isHovered || isItemFavorite ? 'opacity-100' : 'opacity-0 sm:opacity-0'}`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
            toggleFavorite({
              id,
              name,
              price,
              collection,
              image: images[0],
            });
          }}
        >
          <Heart 
            className={`w-3.5 sm:w-4 h-3.5 sm:h-4 transition-all duration-300 ${
              isItemFavorite ? 'fill-foreground stroke-foreground' : 'stroke-foreground'
            }`} 
            strokeWidth={1.5} 
          />
        </button>
      </div>
      
      <div className="space-y-1">
        <p className="text-[8px] sm:text-[10px] text-muted-foreground uppercase tracking-[0.15em] sm:tracking-[0.2em]">
          {collection}
        </p>
        <h4 className="text-sm sm:text-base font-normal tracking-tight line-clamp-2">
          {name}
        </h4>
        <p className="text-base sm:text-lg font-medium pt-0.5 sm:pt-1">
          {formatPrice(price)}
        </p>
      </div>
    </Link>
  );
};

export const BestsellersSection = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-40 bg-background">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header */}
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-8 mb-10 sm:mb-16 lg:mb-20">
          <div>
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-4 sm:mb-6 font-light">
              Выбор дизайнеров
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extralight tracking-tight">
              Бестселлеры
            </h2>
          </div>
          <Link 
            to="/catalog"
            className="inline-flex text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium pb-2 border-b border-foreground hover:opacity-60 transition-opacity duration-300 self-start sm:self-auto"
          >
            Весь каталог
          </Link>
        </AnimatedSection>

        {/* Products Grid */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-x-3 sm:gap-x-6 lg:gap-x-8 gap-y-8 sm:gap-y-12 lg:gap-y-16">
          {products.map((product) => (
            <StaggerItem key={product.id}>
              <ProductCardHome {...product} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
