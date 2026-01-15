import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  category: string;
  collection: string;
  images: string[];
  badge?: 'new' | 'hit';
}

const ProductCard = ({ name, price, collection, images, badge }: ProductCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll images on hover
  useEffect(() => {
    if (isHovered && images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 1200);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
      setCurrentImageIndex(0);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, images.length]);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
  };

  const badgeLabels = {
    new: 'New',
    hit: 'Hit',
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
        className="relative aspect-[4/5] overflow-hidden bg-muted mb-5"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Images with crossfade */}
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${name} - изображение ${index + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out ${
              index === currentImageIndex ? 'opacity-100' : 'opacity-0'
            } ${isHovered ? 'scale-105' : 'scale-100'}`}
          />
        ))}

        {/* Badge */}
        {badge && (
          <div className="absolute top-4 left-4 px-3 py-1.5 bg-background text-foreground text-xs uppercase tracking-[0.15em]">
            {badgeLabels[badge]}
          </div>
        )}

        {/* Image indicators */}
        {images.length > 1 && (
          <div className={`absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1.5 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
            {images.map((_, index) => (
              <button
                key={index}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentImageIndex(index);
                }}
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
          className={`absolute top-4 right-4 p-2.5 bg-background/80 backdrop-blur-sm transition-all duration-300 ${
            isHovered || isFavorite ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <Heart
            className={`w-5 h-5 transition-all duration-300 ${
              isFavorite ? 'fill-foreground stroke-foreground' : 'stroke-foreground'
            }`}
          />
        </button>
      </div>

      {/* Product info */}
      <div className="space-y-2">
        <p className="text-xs uppercase tracking-[0.2em] text-muted-foreground">
          {collection}
        </p>
        <h3 className="text-base md:text-lg font-light leading-snug group-hover:opacity-70 transition-opacity duration-300">
          {name}
        </h3>
        <p className="text-lg md:text-xl font-medium tracking-tight">
          {formatPrice(price)}
        </p>
      </div>
    </motion.div>
  );
};

export default ProductCard;
