import { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import heroLiving from '@/assets/hero-living-room.jpg';
import heroBedroom from '@/assets/hero-bedroom.jpg';
import heroDining from '@/assets/hero-dining.jpg';

const slides = [
  {
    id: 1,
    image: heroLiving,
    title: 'Пространство для жизни',
    subtitle: 'Коллекция гостиных',
    cta1: { text: 'Смотреть коллекцию', href: '/collections/living' },
    cta2: { text: 'Заказать консультацию', href: '/contacts' },
  },
  {
    id: 2,
    image: heroBedroom,
    title: 'Искусство отдыха',
    subtitle: 'Коллекция спален',
    cta1: { text: 'Смотреть коллекцию', href: '/collections/bedroom' },
    cta2: { text: 'Подобрать кровать', href: '/catalog/beds' },
  },
  {
    id: 3,
    image: heroDining,
    title: 'Вкус общения',
    subtitle: 'Обеденные группы',
    cta1: { text: 'Смотреть коллекцию', href: '/collections/dining' },
    cta2: { text: 'Выбрать стол', href: '/catalog/tables' },
  },
];

export const HeroSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  const nextSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  }, []);

  const prevSlide = useCallback(() => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(nextSlide, 6000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  return (
    <section 
      className="relative h-screen w-full overflow-hidden"
      onMouseEnter={() => setIsAutoPlaying(false)}
      onMouseLeave={() => setIsAutoPlaying(true)}
    >
      {/* Slides */}
      <AnimatePresence mode="wait">
        {slides.map((slide, index) => (
          index === currentSlide && (
            <motion.div
              key={slide.id}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 1 }}
              className="absolute inset-0"
            >
              {/* Background Image */}
              <motion.div
                initial={{ scale: 1.1 }}
                animate={{ scale: 1 }}
                transition={{ duration: 6 }}
                className="absolute inset-0"
              >
                <img
                  src={slide.image}
                  alt={slide.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-foreground/20" />
              </motion.div>

              {/* Content */}
              <div className="relative h-full container-wide flex items-end pb-32 md:pb-40">
                <div className="max-w-3xl">
                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.6 }}
                    className="text-caption text-primary-foreground mb-4"
                  >
                    {slide.subtitle}
                  </motion.p>
                  
                  <motion.h1
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4, duration: 0.6 }}
                    className="font-display font-light text-5xl md:text-7xl lg:text-8xl text-primary-foreground tracking-tight"
                  >
                    {slide.title}
                  </motion.h1>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                    className="flex flex-col sm:flex-row gap-4 mt-10"
                  >
                    <Link
                      to={slide.cta1.href}
                      className="btn-premium border-primary-foreground text-primary-foreground"
                    >
                      <span>{slide.cta1.text}</span>
                    </Link>
                    <Link
                      to={slide.cta2.href}
                      className="inline-flex items-center gap-2 px-8 py-4 font-display text-sm tracking-[0.2em] uppercase text-primary-foreground hover:opacity-70 transition-opacity"
                    >
                      <span>{slide.cta2.text}</span>
                    </Link>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )
        ))}
      </AnimatePresence>

      {/* Navigation Arrows */}
      <div className="absolute bottom-32 md:bottom-40 right-6 md:right-20 flex items-center gap-4">
        <button
          onClick={prevSlide}
          className="p-3 border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
          aria-label="Предыдущий слайд"
        >
          <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
        </button>
        <button
          onClick={nextSlide}
          className="p-3 border border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 transition-colors"
          aria-label="Следующий слайд"
        >
          <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
        </button>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex items-center gap-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`h-0.5 transition-all duration-500 ${
              index === currentSlide 
                ? 'w-12 bg-primary-foreground' 
                : 'w-6 bg-primary-foreground/40'
            }`}
            aria-label={`Слайд ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
};
