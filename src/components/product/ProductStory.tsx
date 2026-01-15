import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

interface ProductStoryProps {
  title: string;
  text: string;
  image: string;
  collectionName: string;
}

const ProductStory = ({ title, text, image, collectionName }: ProductStoryProps) => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative aspect-[4/3] overflow-hidden"
          >
            <img
              src={image}
              alt={title}
              className="w-full h-full object-cover"
            />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-8"
          >
            <div>
              <p className="text-sm uppercase tracking-[0.3em] text-muted-foreground mb-4">
                {collectionName}
              </p>
              <h2 className="text-3xl md:text-4xl font-light tracking-tight mb-6">
                {title}
              </h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                {text}
              </p>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-8 py-8 border-y border-border">
              <div>
                <p className="text-3xl font-light mb-1">15+</p>
                <p className="text-sm text-muted-foreground">Предметов в коллекции</p>
              </div>
              <div>
                <p className="text-3xl font-light mb-1">100%</p>
                <p className="text-sm text-muted-foreground">Натуральные материалы</p>
              </div>
              <div>
                <p className="text-3xl font-light mb-1">10 лет</p>
                <p className="text-sm text-muted-foreground">Гарантия</p>
              </div>
            </div>

            <Link
              to="/catalog?collection=flux"
              className="inline-flex items-center gap-2 text-sm uppercase tracking-[0.2em] hover:gap-4 transition-all group"
            >
              Смотреть коллекцию
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ProductStory;
