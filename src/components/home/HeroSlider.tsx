import { useState, useEffect, useCallback } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

import heroLiving from '@/assets/hero-living-room.jpg';
import heroBedroom from '@/assets/hero-bedroom.jpg';
import heroDining from '@/assets/hero-dining.jpg';

const slides = [
  {
    id: 1,
    image: heroLiving,
    overline: 'Мебельное ателье — Санкт-Петербург',
    title: 'ЭСТЕТИКА\nПРОСТРАНСТВА',
    primaryCTA: { text: 'В каталог', href: '/catalog' },
    secondaryCTA: { text: 'Коллекции', href: '/collections' },
  },
  {
    id: 2,
    image: heroBedroom,
    overline: 'Коллекция 2024',
    title: 'ЧИСТАЯ\nФОРМА',
    primaryCTA: { text: 'Смотреть коллекцию', href: '/collection/case' },
    secondaryCTA: { text: 'Все коллекции', href: '/collections' },
  },
  {
    id: 3,
    image: heroDining,
    overline: 'Премиальный комфорт',
    title: 'АРХИТЕКТУРА\nПРЕДМЕТА',
    primaryCTA: { text: 'Перейти в каталог', href: '/catalog' },
    secondaryCTA: { text: 'О бренде', href: '/about' },
  },
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
    setProgress(0);
  }, []);

  // Autoplay
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      nextSlide();
    }, 6000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide, currentSlide]);

  // Progress animation
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    setProgress(0);
    const startTime = Date.now();
    const duration = 6000;

    const updateProgress = () => {
      const elapsed = Date.now() - startTime;
      const newProgress = Math.min((elapsed / duration) * 100, 100);
      setProgress(newProgress);
      
      if (elapsed < duration) {
        requestAnimationFrame(updateProgress);
      }
    };

    const animationId = requestAnimationFrame(updateProgress);
    return () => cancelAnimationFrame(animationId);
  }, [currentSlide, isAutoPlaying]);

  const handleDotClick = (index: number) => {
    setCurrentSlide(index);
    setProgress(0);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth',
    });
  };

  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Full-screen Background Image */}
      <AnimatePresence mode="wait">
        <motion.div
          key={currentSlide}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className="absolute inset-0"
        >
          <div className="absolute inset-0 bg-black/30 z-10" />
          <motion.img
            src={slides[currentSlide].image}
            alt={slides[currentSlide].title}
            className="w-full h-full object-cover"
            initial={{ scale: 1 }}
            animate={{ scale: 1.05 }}
            transition={{ duration: 6, ease: 'linear' }}
          />
        </motion.div>
      </AnimatePresence>

      {/* Content */}
      <div className="absolute inset-0 z-20 flex flex-col items-center justify-center text-center text-white px-6">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="max-w-5xl"
          >
            <span className="text-[11px] tracking-[0.4em] uppercase text-white/60 mb-8 block font-light">
              {slides[currentSlide].overline}
            </span>
            <h1 className="text-5xl sm:text-7xl lg:text-8xl xl:text-[140px] font-extralight tracking-[-0.02em] leading-[0.9] whitespace-pre-line mb-14">
              {slides[currentSlide].title}
            </h1>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to={slides[currentSlide].primaryCTA.href}
                className="inline-block bg-white text-foreground px-12 py-5 text-[11px] font-medium tracking-[0.25em] uppercase rounded-full hover:bg-foreground hover:text-white transition-all duration-300"
              >
                {slides[currentSlide].primaryCTA.text}
              </Link>
              <Link
                to={slides[currentSlide].secondaryCTA.href}
                className="inline-block border border-white/40 text-white px-12 py-5 text-[11px] font-medium tracking-[0.25em] uppercase rounded-full hover:bg-white/10 transition-all duration-300"
              >
                {slides[currentSlide].secondaryCTA.text}
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-24 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => handleDotClick(index)}
            className="relative w-12 h-[2px] bg-white/30 overflow-hidden"
          >
            <div 
              className="absolute inset-y-0 left-0 bg-white transition-all duration-100"
              style={{ 
                width: index === currentSlide ? `${progress}%` : index < currentSlide ? '100%' : '0%'
              }}
            />
          </button>
        ))}
      </div>

      {/* Scroll Indicator */}
      <button
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-30 text-white/40 hover:text-white/70 transition-colors"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <ChevronDown className="w-6 h-6" strokeWidth={1} />
        </motion.div>
      </button>
    </section>
  );
};
