import { Link } from 'react-router-dom';
import { AnimatedSection, AnimatedText, AnimatedImage } from '@/components/ui/AnimatedSection';
import { ArrowRight } from 'lucide-react';

import manufacturingImg from '@/assets/manufacturing.jpg';

export const PhilosophySection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <AnimatedImage className="order-2 lg:order-1">
            <div className="relative aspect-collection overflow-hidden">
              <img
                src={manufacturingImg}
                alt="Производство мебели The Idea"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
            </div>
          </AnimatedImage>

          {/* Content */}
          <div className="order-1 lg:order-2">
            <AnimatedText>
              <p className="text-caption mb-4">Философия</p>
            </AnimatedText>
            
            <AnimatedSection delay={0.1}>
              <h2 className="heading-section">
                Мастерство в каждой детали
              </h2>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <p className="text-body mt-8">
                Каждый предмет мебели The Idea — это результат работы наших мастеров, 
                которые передают своё мастерство из поколения в поколение. Мы используем 
                только лучшие материалы и современные технологии, сохраняя при этом 
                традиции ручной работы.
              </p>
            </AnimatedSection>

            <AnimatedSection delay={0.3}>
              <ul className="mt-10 space-y-4">
                {[
                  'Собственное производство в Санкт-Петербурге',
                  'Экологичные материалы высшего качества',
                  'Индивидуальный подход к каждому заказу',
                  'Гарантия 5 лет на всю продукцию',
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-4">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2.5 flex-shrink-0" />
                    <span className="font-body font-light text-foreground/80">{item}</span>
                  </li>
                ))}
              </ul>
            </AnimatedSection>

            <AnimatedSection delay={0.4}>
              <Link 
                to="/about"
                className="inline-flex items-center gap-3 mt-12 font-display text-sm tracking-[0.15em] uppercase text-foreground hover:text-accent transition-colors"
              >
                Подробнее о производстве
                <ArrowRight className="w-4 h-4" />
              </Link>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  );
};
