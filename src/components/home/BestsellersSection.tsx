import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, ArrowRight } from 'lucide-react';
import { AnimatedSection, AnimatedText, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

import productSofa from '@/assets/product-sofa.jpg';
import productArmchair from '@/assets/product-armchair.jpg';
import productBed from '@/assets/product-bed.jpg';
import productChair from '@/assets/product-chair.jpg';

const products = [
  {
    id: 1,
    name: 'Диван Берген',
    collection: 'Скандинавия',
    price: '189 000 ₽',
    image: productSofa,
    href: '/product/sofa-bergen',
  },
  {
    id: 2,
    name: 'Кресло Осло',
    collection: 'Минимал',
    price: '78 000 ₽',
    image: productArmchair,
    href: '/product/armchair-oslo',
  },
  {
    id: 3,
    name: 'Кровать Нордик',
    collection: 'Скандинавия',
    price: '156 000 ₽',
    image: productBed,
    href: '/product/bed-nordic',
  },
  {
    id: 4,
    name: 'Стул Копенгаген',
    collection: 'Модерн',
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
      <div className="relative aspect-product overflow-hidden bg-card">
        <motion.img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover"
          whileHover={{ scale: 1.03 }}
          transition={{ duration: 0.6 }}
        />
        
        {/* Like Button */}
        <button
          onClick={(e) => {
            e.preventDefault();
            setIsLiked(!isLiked);
          }}
          className="absolute top-4 right-4 p-2 bg-background/80 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-opacity"
          aria-label="Добавить в избранное"
        >
          <Heart 
            className={`w-5 h-5 transition-colors ${isLiked ? 'fill-accent text-accent' : 'text-foreground'}`} 
            strokeWidth={1.5} 
          />
        </button>
      </div>

      <div className="mt-6">
        <p className="text-caption text-muted-foreground">
          {product.collection}
        </p>
        <h3 className="heading-card mt-1 group-hover:text-accent transition-colors">
          {product.name}
        </h3>
        <p className="font-body font-light text-lg mt-2">
          {product.price}
        </p>
      </div>
    </Link>
  );
};

export const BestsellersSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16">
          <div>
            <AnimatedText>
              <p className="text-caption mb-4">Популярное</p>
            </AnimatedText>
            <AnimatedSection delay={0.1}>
              <h2 className="heading-section">Бестселлеры</h2>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.2}>
            <Link 
              to="/catalog" 
              className="link-underline inline-flex items-center gap-2 font-body font-light text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              Весь каталог
              <ArrowRight className="w-4 h-4" />
            </Link>
          </AnimatedSection>
        </div>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {products.map((product) => (
            <StaggerItem key={product.id}>
              <ProductCard product={product} />
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
