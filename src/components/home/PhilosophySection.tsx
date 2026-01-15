import { Link } from 'react-router-dom';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

import manufacturingImg from '@/assets/manufacturing.jpg';

export const PhilosophySection = () => {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 bg-white">
      {/* Image */}
      <AnimatedSection className="h-[60vh] md:h-[80vh] overflow-hidden">
        <img
          src={manufacturingImg}
          alt="Мастерство THE IDEA"
          className="w-full h-full object-cover"
        />
      </AnimatedSection>

      {/* Content */}
      <AnimatedSection delay={0.2} className="flex flex-col justify-center px-6 md:px-20 py-20">
        <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 mb-8">Мастерство</p>
        <h3 className="text-4xl font-light mb-8 tracking-tight leading-[1.1]">
          От эскиза до воплощения.
        </h3>
        <p className="text-gray-500 font-light leading-relaxed mb-12 max-w-md">
          Мы используем современные ЧПУ-станки для идеальной точности и ручную доводку для безупречного тактильного ощущения. Каждый предмет THE IDEA проходит многоступенчатый контроль качества.
        </p>
        <Link 
          to="/about"
          className="inline-block text-xs uppercase tracking-widest border-b border-black pb-2 w-max hover:opacity-60 transition-opacity duration-300"
        >
          О производстве
        </Link>
      </AnimatedSection>
    </section>
  );
};
