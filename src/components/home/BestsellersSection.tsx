import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

import productSofa from '@/assets/product-sofa.jpg';
import productArmchair from '@/assets/product-armchair.jpg';
import productBed from '@/assets/product-bed.jpg';
import productChair from '@/assets/product-chair.jpg';

const products = [
  {
    id: 1,
    name: 'Диван Case 3-местный',
    category: 'Мягкая мебель',
    price: '189 000',
    image: productSofa,
    href: '/product/sofa-case-3',
  },
  {
    id: 2,
    name: 'Кресло Saga Lounge',
    category: 'Кресла',
    price: '78 000',
    image: productArmchair,
    href: '/product/armchair-saga',
  },
  {
    id: 3,
    name: 'Кровать Bergen King',
    category: 'Спальня',
    price: '156 000',
    image: productBed,
    href: '/product/bed-bergen',
  },
  {
    id: 4,
    name: 'Стул Копенгаген',
    category: 'Стулья',
    price: '34 000',
    image: productChair,
    href: '/product/chair-copenhagen',
  },
];

export const BestsellersSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <AnimatedSection className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-16">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">Выбор дизайнеров</p>
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight">Бестселлеры</h2>
          </div>
          <Link 
            to="/catalog"
            className="mt-6 lg:mt-0 inline-flex text-[10px] uppercase tracking-[0.2em] font-medium pb-2 border-b border-foreground hover:border-muted-foreground hover:text-muted-foreground transition-colors duration-300"
          >
            Весь каталог
          </Link>
        </AnimatedSection>

        {/* Products Grid */}
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 lg:gap-x-6 gap-y-10 lg:gap-y-12">
          {products.map((product) => (
            <StaggerItem key={product.id}>
              <Link to={product.href} className="group block">
                {/* Image */}
                <div className="aspect-[4/5] bg-muted overflow-hidden mb-5 relative">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-105"
                    style={{ filter: 'grayscale(0.15)' }}
                    onMouseEnter={(e) => e.currentTarget.style.filter = 'grayscale(0)'}
                    onMouseLeave={(e) => e.currentTarget.style.filter = 'grayscale(0.15)'}
                  />
                  {/* Like Button */}
                  <button 
                    className="absolute top-3 right-3 p-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                    onClick={(e) => {
                      e.preventDefault();
                      e.stopPropagation();
                    }}
                  >
                    <Heart className="w-4 h-4 text-foreground" strokeWidth={1.5} />
                  </button>
                </div>
                
                {/* Content */}
                <div className="space-y-1">
                  <h4 className="text-sm font-medium tracking-wide line-clamp-1">
                    {product.name}
                  </h4>
                  <p className="text-[10px] text-muted-foreground uppercase tracking-[0.15em]">
                    {product.category}
                  </p>
                  <p className="text-sm font-medium pt-2">
                    {product.price} ₽
                  </p>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
