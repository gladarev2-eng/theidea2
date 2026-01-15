import { Link } from 'react-router-dom';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

import heroBedroom from '@/assets/hero-bedroom.jpg';
import heroDining from '@/assets/hero-dining.jpg';
import manufacturingImg from '@/assets/manufacturing.jpg';
import productSofa from '@/assets/product-sofa.jpg';

const images = [heroBedroom, heroDining, manufacturingImg, productSofa];

export const CTASection = () => {
  return (
    <section className="bg-black text-white py-40 px-6 md:px-20 text-center">
      <AnimatedSection>
        <h2 className="text-4xl md:text-6xl font-light mb-12 tracking-tight">
          Вдохновение каждый день
        </h2>
      </AnimatedSection>
      
      <AnimatedSection delay={0.1}>
        <p className="text-gray-400 uppercase tracking-widest text-[10px] mb-20 font-light">
          Следите за новинками в наших социальных сетях
        </p>
      </AnimatedSection>

      <AnimatedSection delay={0.2}>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-7xl mx-auto">
          {images.map((img, index) => (
            <div key={index} className="aspect-square bg-gray-900 overflow-hidden">
              <img 
                src={img} 
                alt={`Вдохновение ${index + 1}`}
                className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-500"
              />
            </div>
          ))}
        </div>
      </AnimatedSection>

      <AnimatedSection delay={0.3}>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-20">
          <Link
            to="/contacts"
            className="bg-white text-black px-16 py-6 text-[10px] uppercase tracking-[0.3em] hover:bg-[#D2B48C] transition-colors duration-300"
          >
            Отправить заявку
          </Link>
          <Link
            to="/contacts"
            className="border border-white/30 px-16 py-6 text-[10px] uppercase tracking-[0.3em] hover:bg-white hover:text-black transition-all duration-300"
          >
            Найти шоурум
          </Link>
        </div>
      </AnimatedSection>
    </section>
  );
};
