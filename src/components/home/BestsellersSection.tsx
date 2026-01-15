import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, ArrowRight } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

import productSofa from '@/assets/product-sofa.jpg';
import productArmchair from '@/assets/product-armchair.jpg';
import productBed from '@/assets/product-bed.jpg';
import productChair from '@/assets/product-chair.jpg';

const products = [
  {
    id: 1,
    name: 'Диван Берген',
    collection: 'Case',
    price: '189 000 ₽',
    image: productSofa,
    href: '/product/sofa-bergen',
  },
  {
    id: 2,
    name: 'Кресло Осло',
    collection: 'Saga',
    price: '78 000 ₽',
    image: productArmchair,
    href: '/product/armchair-oslo',
  },
  {
    id: 3,
    name: 'Кровать Нордик',
    collection: 'Case',
    price: '156 000 ₽',
    image: productBed,
    href: '/product/bed-nordic',
  },
  {
    id: 4,
    name: 'Стул Копенгаген',
    collection: 'Code',
    price: '34 000 ₽',
    image: productChair,
    href: '/product/chair-copenhagen',
  },
];

const ProductCard = ({ product }: { product: typeof products[0] }) => {
  const [isLiked, setIsLiked] = useState(false);

  return (
    <Link 
      to={product.href}
      className="group block"
    >
      <div className="relative aspect-[4/5] overflow-hidden mb-6">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover card-hover"
        />
        
        {/* Like Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsLiked(!isLiked);
          }}
          className="absolute top-4 right-4 p-2 bg-white/90 opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Добавить в избранное"
        >
          <Heart 
            className={`w-4 h-4 transition-colors ${isLiked ? 'fill-black text-black' : 'text-black'}`} 
            strokeWidth={1} 
          />
        </button>
      </div>

      <div className="flex justify-between items-start">
        <div>
          <h3 className="text-lg font-light mb-1 group-hover:opacity-60 transition-opacity">
            {product.name}
          </h3>
          <p className="text-xs uppercase tracking-widest text-muted-foreground">
            {product.collection}
          </p>
        </div>
        <p className="text-sm font-light">
          {product.price}
        </p>
      </div>
    </Link>
  );
};

export const BestsellersSection = () => {
  return (
    <section className="py-24 md:py-40 px-6 md:px-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-end mb-16">
          <AnimatedSection>
            <h2 className="heading-section">Бестселлеры</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <Link 
              to="/catalog" 
              className="btn-link hidden md:inline-block"
            >
              Весь каталог
            </Link>
          </AnimatedSection>
        </div>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-10">
          {products.map((product) => (
            <StaggerItem key={product.id}>
              <ProductCard product={product} />
            </StaggerItem>
          ))}
        </StaggerContainer>

        <AnimatedSection delay={0.4} className="mt-12 md:hidden text-center">
          <Link 
            to="/catalog" 
            className="btn-link inline-flex items-center gap-2"
          >
            Весь каталог
            <ArrowRight className="w-4 h-4" />
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};
