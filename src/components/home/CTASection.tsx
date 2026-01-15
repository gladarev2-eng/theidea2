import { Link } from 'react-router-dom';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

export const CTASection = () => {
  return (
    <section className="footer-section py-16 md:py-24 px-4 md:px-8 text-center">
      <div className="container-wide">
        <AnimatedSection>
          <p className="text-caption text-white/60 mb-4">Готовы начать?</p>
          <h2 className="heading-h2 text-white mb-6">
            Создайте интерьер вашей мечты
          </h2>
          <p className="text-body-lg text-white/70 mb-8 max-w-2xl mx-auto">
            Свяжитесь с нами для консультации или посетите один из наших шоурумов
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={0.15}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contacts"
              className="btn-primary"
            >
              Отправить заявку
            </Link>
            <Link
              to="/contacts"
              className="btn-outline border-white/30 text-white hover:bg-white hover:text-foreground"
            >
              Найти шоурум
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
