import { Link } from 'react-router-dom';
import { AnimatedSection, AnimatedText } from '@/components/ui/AnimatedSection';

import manufacturingImg from '@/assets/manufacturing.jpg';

export const IntroSection = () => {
  return (
    <section className="py-24 md:py-40 px-6 md:px-20 overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center max-w-7xl mx-auto">
        {/* Text Content */}
        <AnimatedSection>
          <div>
            <p className="text-caption mb-8">Ателье мебели</p>
            <h2 className="text-4xl md:text-5xl font-light tracking-tight mb-12 max-w-md leading-tight">
              Собственное производство в Петербурге с 2014 года.
            </h2>
            <p className="text-muted-foreground font-light leading-relaxed mb-12 max-w-sm">
              Мы не просто собираем мебель — мы проектируем её с нуля, выбираем лучшие слэбы дуба и вручную доводим каждую деталь до совершенства.
            </p>
            
            {/* Stats */}
            <div className="flex gap-12 mb-16">
              <div>
                <p className="stat-number">10+</p>
                <p className="stat-label">Лет мастерства</p>
              </div>
              <div>
                <p className="stat-number">2.5k</p>
                <p className="stat-label">Вариантов отделки</p>
              </div>
            </div>

            <Link 
              to="/about" 
              className="btn-primary"
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
