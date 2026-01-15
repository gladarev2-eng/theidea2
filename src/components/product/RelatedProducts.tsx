import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface Product {
  id: string;
  name: string;
  price: number;
  image: string;
  collection: string;
}

interface RelatedProductsProps {
  products: Product[];
  collectionName: string;
}

const RelatedProducts = ({ products, collectionName }: RelatedProductsProps) => {
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU").format(price) + " ₽";
  };

  return (
    <section className="py-24">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-end justify-between mb-12"
        >
          <div>
            <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-3">
              Коллекция {collectionName}
            </p>
            <h2 className="text-3xl md:text-4xl font-light tracking-tight">
              Другие предметы коллекции
            </h2>
          </div>
          <Link
            to={`/catalog?collection=${collectionName.toLowerCase()}`}
            className="hidden md:inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] hover:gap-4 transition-all group"
          >
            Вся коллекция
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Link to={`/product/${product.id}`} className="group block">
                <div className="relative aspect-[4/3] overflow-hidden bg-muted mb-6">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-light mb-2 group-hover:opacity-70 transition-opacity">
                    {product.name}
                  </h3>
                  <p className="text-lg text-muted-foreground">
                    {formatPrice(product.price)}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

        <Link
          to={`/catalog?collection=${collectionName.toLowerCase()}`}
          className="md:hidden flex items-center justify-center gap-2 mt-10 text-sm uppercase tracking-[0.2em]"
        >
          Вся коллекция
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </section>
  );
};

export default RelatedProducts;
