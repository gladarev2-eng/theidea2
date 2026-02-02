import { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface CollectionCardProps {
  id: string;
  name: string;
  tagline: string;
  description: string;
  images: string[];
  itemsCount: number;
  year: string;
  type: 'soft' | 'corpus' | 'tables';
  features?: string[];
}

const CollectionCard = ({
  id,
  name,
  tagline,
  description,
  images,
  itemsCount,
  features = [],
}: CollectionCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isHovered && images.length > 1) {
      intervalRef.current = setInterval(() => {
        setCurrentImageIndex((prev) => (prev + 1) % images.length);
      }, 1200);
    } else {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
      setCurrentImageIndex(0);
    }

    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isHovered, images.length]);

  return (
    <Link
      to={`/collections/${id}`}
      className="group block"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container - Larger aspect ratio */}
      <div className="relative aspect-[3/2] lg:aspect-[16/10] overflow-hidden mb-8">
        {images.map((image, index) => (
          <motion.img
            key={index}
            src={image}
            alt={`${name} - ${index + 1}`}
            className="absolute inset-0 w-full h-full object-cover"
            initial={false}
            animate={{
              opacity: currentImageIndex === index ? 1 : 0,
              scale: currentImageIndex === index && isHovered ? 1.05 : 1,
            }}
            transition={{
              opacity: { duration: 0.6, ease: 'easeInOut' },
              scale: { duration: 4, ease: 'easeOut' },
            }}
          />
        ))}

        {/* Overlay on hover */}
        <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />

        {/* Image indicators */}
        {images.length > 1 && (
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {images.map((_, index) => (
              <motion.div
                key={index}
                className="w-1.5 h-1.5 rounded-full bg-white/50"
                animate={{
                  backgroundColor: currentImageIndex === index ? 'rgba(255,255,255,1)' : 'rgba(255,255,255,0.5)',
                  scale: currentImageIndex === index ? 1.2 : 1,
                }}
                transition={{ duration: 0.3 }}
              />
            ))}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="space-y-4">
        {/* Key feature and count */}
        <div className="flex items-center gap-4 flex-wrap">
          {features.length > 0 && (
            <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
              {features[0]}
            </span>
          )}
          <span className="w-6 h-px bg-border hidden sm:block" />
          <span className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
            {itemsCount} предметов
          </span>
        </div>

        <h2 className="text-3xl lg:text-4xl font-extralight tracking-tight group-hover:opacity-70 transition-opacity">
          {name}
        </h2>

        <p className="text-lg text-muted-foreground">
          {tagline}
        </p>

        <p className="text-muted-foreground font-light leading-relaxed line-clamp-2">
          {description}
        </p>

        <span className="inline-flex items-center gap-3 text-[11px] uppercase tracking-[0.2em] pt-2 group-hover:gap-5 transition-all duration-300">
          Смотреть коллекцию
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </span>
      </div>
    </Link>
  );
};

export default CollectionCard;