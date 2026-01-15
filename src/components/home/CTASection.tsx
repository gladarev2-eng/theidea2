import { Link } from 'react-router-dom';
import { AnimatedSection, AnimatedText } from '@/components/ui/AnimatedSection';
import { ArrowRight, MapPin } from 'lucide-react';

export const CTASection = () => {
  return (
    <section className="section-padding bg-primary text-primary-foreground">
      <div className="container-wide">
        <div className="max-w-4xl mx-auto text-center">
          <AnimatedText>
            <p className="text-caption opacity-60 mb-6">Начните сегодня</p>
          </AnimatedText>
          
          <AnimatedSection delay={0.1}>
            <h2 className="font-display font-light text-4xl md:text-5xl lg:text-6xl tracking-tight">
              Создадим интерьер вашей мечты вместе
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="font-body font-light text-lg opacity-70 mt-8 max-w-2xl mx-auto">
              Оставьте заявку на консультацию или посетите один из наших шоурумов, 
              чтобы увидеть мебель вживую и получить персональные рекомендации.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
              <Link
                to="/contacts"
                className="btn-premium border-primary-foreground text-primary-foreground"
              >
                <span className="flex items-center gap-2">
                  Отправить заявку
                  <ArrowRight className="w-4 h-4" />
                </span>
              </Link>
              <Link
                to="/showrooms"
                className="inline-flex items-center gap-2 px-8 py-4 font-display text-sm tracking-[0.2em] uppercase text-primary-foreground hover:opacity-70 transition-opacity"
              >
                <MapPin className="w-4 h-4" />
                <span>Найти шоурум</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
