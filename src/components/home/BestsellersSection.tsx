import { useState } from 'react';
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
    <Link to={product.href} className="group block">
      <div className="card-base overflow-hidden">
        <div className="relative aspect-[3/4] overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover img-hover"
          />
          
          {/* Like Button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              setIsLiked(!isLiked);
            }}
            className="absolute top-4 right-4 p-2 bg-card rounded-md shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-150"
            aria-label="Добавить в избранное"
          >
            <Heart 
              className={`w-4 h-4 transition-colors duration-150 ${
                isLiked ? 'fill-primary text-primary' : 'text-foreground'
              }`} 
              strokeWidth={1.5} 
            />
          </button>
        </div>

        <div className="p-4">
          <h3 className="heading-h6 mb-1">{product.name}</h3>
          <p className="text-body-sm text-muted-foreground mb-2">{product.collection}</p>
          <p className="text-body font-medium">{product.price}</p>
        </div>
      </div>
    </Link>
  );
};

export const BestsellersSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <AnimatedSection className="flex flex-col md:flex-row md:items-end md:justify-between mb-12">
          <div>
            <p className="text-caption mb-4">Популярное</p>
            <h2 className="heading-h2">Бестселлеры</h2>
          </div>
          <Link 
            to="/catalog"
            className="mt-6 md:mt-0 text-body-sm text-primary font-medium hover:underline"
          >
            Смотреть все →
          </Link>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6">
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
