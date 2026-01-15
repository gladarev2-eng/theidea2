import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

import heroLiving from '@/assets/hero-living-room.jpg';

export const HeroSlider = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with subtle scale */}
      <motion.div
        initial={{ scale: 1.05 }}
        animate={{ scale: 1 }}
        transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
        className="absolute inset-0"
      >
        <img
          src={heroLiving}
          alt="THE IDEA интерьер"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/30" />
      </motion.div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-4 md:px-8">
        <motion.p
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="text-caption text-white/80 mb-6"
        >
          Мебельное ателье — Санкт-Петербург
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.5, ease: [0.4, 0, 0.2, 1] }}
          className="text-h1 md:text-[72px] md:leading-[1.1] text-white text-center"
        >
          Эстетика пространства
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 0.3 }}
          className="text-body-lg text-white/80 mt-6 max-w-xl"
        >
          Премиальная мебель ручной работы для вашего интерьера
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.3, ease: [0.4, 0, 0.2, 1] }}
          className="mt-8"
        >
          <Link
            to="/catalog"
            className="btn-primary"
          >
            Перейти в каталог
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.6 }}
        transition={{ delay: 1, duration: 0.3 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-6 h-6 text-white" strokeWidth={1.5} />
      </motion.div>
    </section>
  );
};
