import { Link } from 'react-router-dom';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

import manufacturingImg from '@/assets/manufacturing.jpg';

export const IntroSection = () => {
  return (
    <section className="py-40 px-6 md:px-20 overflow-hidden bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center max-w-7xl mx-auto">
        {/* Text Content */}
        <AnimatedSection>
          <div>
            <p className="text-[10px] uppercase tracking-[0.4em] text-gray-400 mb-8 font-medium">
              Ателье мебели
            </p>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-12 max-w-md leading-[1.1]">
              Собственное производство в Петербурге с 2014 года.
            </h2>
            <p className="text-gray-500 font-light leading-relaxed mb-12 max-w-sm">
              Мы не просто собираем мебель — мы проектируем её с нуля, выбираем лучшие слэбы дуба и вручную доводим каждую деталь до совершенства.
            </p>
            
            {/* Stats */}
            <div className="flex gap-12">
              <div>
                <p className="text-3xl font-light mb-1">10+</p>
                <p className="text-[9px] uppercase tracking-widest text-gray-400">Лет мастерства</p>
              </div>
              <div>
                <p className="text-3xl font-light mb-1">2.5k</p>
                <p className="text-[9px] uppercase tracking-widest text-gray-400">Вариантов отделки</p>
              </div>
            </div>

            <Link 
              to="/about" 
              className="inline-block mt-16 bg-black text-white px-12 py-5 text-[10px] uppercase tracking-[0.3em] hover:bg-[#D2B48C] transition-colors duration-300"
            >
              О компании
            </Link>
          </div>
        </AnimatedSection>

        {/* Image */}
        <AnimatedSection delay={0.2}>
          <div className="relative">
            <img 
              src={manufacturingImg} 
              alt="Производство THE IDEA"
              className="w-full h-[70vh] object-cover"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
