import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Heart } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ProductCardProps {
  id: string;
  name: string;
  price: number;
  category: string;
  collection: string;
  images: string[];
  badge?: 'new' | 'hit';
}

const ProductCard = ({ id, name, price, collection, images, badge }: ProductCardProps) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [isFavorite, setIsFavorite] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  // Auto-scroll images on hover
  useEffect(() => {
    if (isHovered && images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 1000);
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
      className="group"
    >
      <Link
        to={`/product/${id}`}
        className="block"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="relative aspect-[4/5] overflow-hidden bg-[#f5f5f3] mb-6">
          {/* Images with crossfade */}
          {images.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={`${name} - изображение ${index + 1}`}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-500 ${
                index === currentImageIndex ? 'opacity-100' : 'opacity-0'
              }`}
            />
          ))}

          {/* Badge */}
          {badge && (
            <div className="absolute top-5 left-5 px-3 py-1.5 bg-white text-foreground text-[10px] uppercase tracking-[0.2em] font-medium">
              {badgeLabels[badge]}
            </div>
          )}

          {/* Image indicators */}
          {images.length > 1 && (
            <div className={`absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2 transition-opacity duration-300 ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
              {images.map((_, index) => (
                <div
                  key={index}
                  className={`w-6 h-[2px] transition-all duration-300 ${
                    index === currentImageIndex ? 'bg-foreground' : 'bg-foreground/30'
                  }`}
                />
              ))}
            </div>
          )}

          {/* Favorite button */}
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              setIsFavorite(!isFavorite);
            }}
            className={`absolute top-5 right-5 w-10 h-10 bg-white/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 ${
              isHovered || isFavorite ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <Heart
              className={`w-4 h-4 transition-all duration-300 ${
                isFavorite ? 'fill-foreground stroke-foreground' : 'stroke-foreground'
              }`}
              strokeWidth={1.5}
            />
          </button>
        </div>

        {/* Product info */}
        <div className="space-y-2">
          <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-light">
            {collection}
          </p>
          <h3 className="text-lg font-normal leading-snug tracking-tight">
            {name}
          </h3>
          <p className="text-xl font-medium tracking-tight pt-1">
            {formatPrice(price)}
          </p>
        </div>
      </Link>
    </motion.div>
  );
};

export default ProductCard;
