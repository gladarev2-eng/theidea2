import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

import productSofa from '@/assets/product-sofa.jpg';
import productArmchair from '@/assets/product-armchair.jpg';
import productBed from '@/assets/product-bed.jpg';
import productChair from '@/assets/product-chair.jpg';
import heroLiving from '@/assets/hero-living-room.jpg';
import heroBedroom from '@/assets/hero-bedroom.jpg';

const products = [
  {
    id: 1,
    name: 'Диван Case 3-местный',
    collection: 'Case',
    price: '189 000',
    images: [productSofa, heroLiving],
    href: '/product/sofa-case-3',
    badge: 'new' as const,
  },
  {
    id: 2,
    name: 'Кресло Saga Lounge',
    collection: 'Saga',
    price: '78 000',
    images: [productArmchair, heroBedroom],
    href: '/product/armchair-saga',
    badge: 'hit' as const,
  },
  {
    id: 3,
    name: 'Кровать Bergen King',
    collection: 'Bergen',
    price: '156 000',
    images: [productBed, heroBedroom],
    href: '/product/bed-bergen',
  },
  {
    id: 4,
    name: 'Стул Копенгаген',
    collection: 'Copenhagen',
    price: '34 000',
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
      <div className="aspect-[4/5] bg-[#f5f5f3] overflow-hidden mb-5 relative">
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
          <div className="absolute top-4 left-4 px-3 py-1.5 bg-white text-foreground text-[10px] uppercase tracking-[0.15em] font-medium">
            {badgeLabels[badge]}
          </div>
        )}

        {images.length > 1 && (
          <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-6 h-[2px] transition-all duration-300 ${
                  index === currentImageIndex ? 'bg-foreground' : 'bg-foreground/30'
                }`}
              />
            ))}
          </div>
        )}
        
        <button 
          className={`absolute top-4 right-4 w-9 h-9 bg-white/90 flex items-center justify-center transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
          onClick={(e) => {
            e.preventDefault();
            e.stopPropagation();
          }}
        >
          <Heart className="w-4 h-4 text-foreground" strokeWidth={1.5} />
        </button>
      </div>
      
      <div className="space-y-1.5">
        <p className="text-[10px] text-muted-foreground uppercase tracking-[0.2em]">
          {collection}
        </p>
        <h4 className="text-base font-normal tracking-tight">
          {name}
        </h4>
        <p className="text-lg font-medium pt-1">
          {price} ₽
        </p>
      </div>
    </Link>
  );
};

export const BestsellersSection = () => {
  return (
    <section className="py-24 lg:py-40 bg-background">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <AnimatedSection className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16 lg:mb-20">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6 font-light">
              Выбор дизайнеров
            </p>
            <h2 className="text-3xl lg:text-5xl font-extralight tracking-tight">
              Бестселлеры
            </h2>
          </div>
          <Link 
            to="/catalog"
            className="mt-8 lg:mt-0 inline-flex text-[11px] uppercase tracking-[0.2em] font-medium pb-2 border-b border-foreground hover:opacity-60 transition-opacity duration-300"
          >
            Весь каталог
          </Link>
        </AnimatedSection>

        {/* Products Grid */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-8 gap-y-12 lg:gap-y-16">
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
