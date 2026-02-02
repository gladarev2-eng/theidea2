import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

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
  image: string;
  products: Product[];
  collectionId: string;
  reversed?: boolean;
}

const CollectionCategoryBlock = ({
  name,
  description,
  image,
  products,
  collectionId,
  reversed = false,
}: CollectionCategoryBlockProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="container-wide">
        {/* Category Header with Large Image */}
        <div className={`grid lg:grid-cols-2 gap-8 lg:gap-16 items-center mb-12 ${reversed ? 'lg:flex-row-reverse' : ''}`}>
          <motion.div
            initial={{ opacity: 0, x: reversed ? 30 : -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className={`${reversed ? 'lg:order-2' : ''}`}
          >
            <div className="aspect-[4/3] overflow-hidden">
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
            className={`${reversed ? 'lg:order-1' : ''}`}
          >
            <h2 className="text-3xl lg:text-5xl font-extralight tracking-tight mb-4">
              {name}
            </h2>
            <p className="text-lg text-muted-foreground font-light leading-relaxed mb-6">
              {description}
            </p>
            <Link
              to={`/catalog?collection=${collectionId}`}
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] hover:gap-4 transition-all duration-300"
            >
              Смотреть все
              <ArrowRight className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>

        {/* Products Grid */}
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
      </div>
    </section>
  );
};

export default CollectionCategoryBlock;
