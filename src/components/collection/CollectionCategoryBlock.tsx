import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight, Check } from 'lucide-react';

interface CategoryFeature {
  title: string;
  description: string;
}

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  badge?: 'new' | 'hit';
}

interface CollectionCategoryBlockProps {
  id: string;
  name: string;
  description: string;
  longDescription?: string;
  image: string;
  galleryImages?: string[];
  features?: CategoryFeature[];
  products: Product[];
  collectionId: string;
  reversed?: boolean;
  compact?: boolean; // For use on product pages
}

const CollectionCategoryBlock = ({
  name,
  description,
  longDescription,
  image,
  galleryImages = [],
  features = [],
  products,
  collectionId,
  reversed = false,
  compact = false,
}: CollectionCategoryBlockProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
  };

  // Compact version for product pages
  if (compact) {
    return (
      <section className="py-12">
        <div className="container-wide">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-2xl font-extralight">{name}</h3>
            <Link
              to={`/catalog?collection=${collectionId}`}
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] hover:gap-4 transition-all duration-300"
            >
              Все товары
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {products.slice(0, 4).map((product) => (
              <Link key={product.id} to={`/product/${product.id}`} className="group block">
                <div className="relative aspect-square overflow-hidden bg-muted mb-3">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-sm font-light group-hover:opacity-70 transition-opacity">{product.name}</p>
                <p className="text-sm text-muted-foreground">{formatPrice(product.price)}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 lg:py-32">
      <div className="container-wide">
        {/* Hero Block - Large Image with Text Overlay */}
        <div className={`grid lg:grid-cols-2 gap-0 mb-16 ${reversed ? '' : ''}`}>
          <motion.div
            initial={{ opacity: 0, x: reversed ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`${reversed ? 'lg:order-2' : ''}`}
          >
            <div className="aspect-[4/5] lg:aspect-[3/4] overflow-hidden">
              <img
                src={image}
                alt={name}
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: reversed ? -30 : 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className={`flex flex-col justify-center p-8 lg:p-16 bg-muted/30 ${reversed ? 'lg:order-1' : ''}`}
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Категория
            </p>
            <h2 className="text-3xl lg:text-5xl xl:text-6xl font-extralight tracking-tight mb-6">
              {name}
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground font-light leading-relaxed mb-4">
              {description}
            </p>
            {longDescription && (
              <p className="text-base text-muted-foreground/80 font-light leading-relaxed mb-8">
                {longDescription}
              </p>
            )}
            <Link
              to={`/catalog?collection=${collectionId}`}
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] hover:gap-4 transition-all duration-300 mt-auto"
            >
              Смотреть каталог
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Gallery Row - Multiple Images */}
        {galleryImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 lg:grid-cols-3 gap-2 lg:gap-4 mb-16"
          >
            {galleryImages.slice(0, 3).map((img, index) => (
              <div 
                key={index} 
                className={`overflow-hidden ${index === 0 ? 'col-span-2 lg:col-span-1' : ''}`}
              >
                <img
                  src={img}
                  alt={`${name} галерея ${index + 1}`}
                  className="w-full h-full object-cover aspect-[4/3] hover:scale-105 transition-transform duration-700"
                />
              </div>
            ))}
          </motion.div>
        )}

        {/* Features Grid */}
        {features.length > 0 && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-16 py-12 border-y border-border/50"
          >
            {features.map((feature, index) => (
              <div key={index} className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-foreground/5 flex items-center justify-center">
                  <Check className="w-4 h-4 text-foreground/70" />
                </div>
                <div>
                  <h4 className="font-medium mb-1">{feature.title}</h4>
                  <p className="text-sm text-muted-foreground font-light">{feature.description}</p>
                </div>
              </div>
            ))}
          </motion.div>
        )}

        {/* Products Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl lg:text-2xl font-extralight">
              Товары категории
            </h3>
            <span className="text-sm text-muted-foreground">
              {products.length} {products.length === 1 ? 'товар' : products.length < 5 ? 'товара' : 'товаров'}
            </span>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
            {products.map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link to={`/product/${product.id}`} className="group block">
                  <div className="relative aspect-square overflow-hidden bg-muted mb-4">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {product.badge && (
                      <span className={`absolute top-3 left-3 px-2 py-1 text-[10px] uppercase tracking-wider ${
                        product.badge === 'new' 
                          ? 'bg-foreground text-background' 
                          : 'bg-amber-500 text-white'
                      }`}>
                        {product.badge === 'new' ? 'Новинка' : 'Хит'}
                      </span>
                    )}
                  </div>
                  <h3 className="text-sm lg:text-base font-light mb-1 group-hover:opacity-70 transition-opacity">
                    {product.name}
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    {formatPrice(product.price)}
                  </p>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default CollectionCategoryBlock;
