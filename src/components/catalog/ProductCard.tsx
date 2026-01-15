import { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  category: string;
  collection: string;
  images: string[];
}

const ProductCard = ({ name, price, category, images }: ProductCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (images.length <= 1) return;
    
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const width = rect.width;
    const segmentWidth = width / images.length;
    const newIndex = Math.min(Math.floor(x / segmentWidth), images.length - 1);
    
    setCurrentImageIndex(newIndex);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    setCurrentImageIndex(0);
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="group cursor-pointer"
    >
      <div
        className="relative aspect-[3/4] overflow-hidden bg-muted mb-4"
        onMouseEnter={() => setIsHovered(true)}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        {/* Image */}
        <img
          src={images[currentImageIndex]}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Image indicators */}
        {images.length > 1 && isHovered && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5">
            {images.map((_, index) => (
              <div
                key={index}
                className={`w-8 h-0.5 transition-all duration-300 ${
                  index === currentImageIndex ? 'bg-white' : 'bg-white/40'
                }`}
              />
            ))}
          </div>
        )}

        {/* Favorite button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            setIsFavorite(!isFavorite);
          }}
          className={`absolute top-4 right-4 p-2 transition-all duration-300 ${
            isHovered || isFavorite ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Heart
            className={`w-5 h-5 transition-all duration-300 ${
              isFavorite ? 'fill-foreground stroke-foreground' : 'stroke-foreground'
            }`}
          />
        </button>

        {/* Quick view on hover */}
        <div
          className={`absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-black/50 to-transparent transition-all duration-300 ${
            isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <button className="w-full py-3 text-xs uppercase tracking-[0.2em] font-medium text-white border border-white/50 hover:bg-white hover:text-black transition-all duration-300">
            Быстрый просмотр
          </button>
        </div>
      </div>

      {/* Product info */}
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
          {category}
        </p>
        <h3 className="text-sm font-light leading-relaxed group-hover:opacity-70 transition-opacity duration-300">
          {name}
        </h3>
        <p className="text-sm font-medium">
          {formatPrice(price)}
        </p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
