import { motion } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

import heroLiving from '@/assets/hero-living-room.jpg';

export const HeroSlider = () => {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      {/* Background Image with Ken Burns */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 8, ease: "easeOut" }}
        className="absolute inset-0"
      >
        <img
          src={heroLiving}
          alt="THE IDEA интерьер"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/10" />
      </motion.div>

      {/* Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white px-6">
        <motion.p
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-[10px] uppercase tracking-[0.5em] mb-8"
        >
          Мебельное ателье — Санкт-Петербург
        </motion.p>
        
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="hero-title uppercase"
        >
          Эстетика<br />пространства
        </motion.h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="mt-12"
        >
          <Link
            to="/catalog"
            className="border border-white/30 hover:bg-white hover:text-black transition-all duration-500 px-16 py-6 text-[10px] uppercase tracking-[0.3em] inline-block"
          >
            Перейти в каталог
          </Link>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.4 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce"
      >
        <ChevronDown className="w-6 h-6 text-white" strokeWidth={1} />
      </motion.div>
    </section>
  );
};
