import { Link } from 'react-router-dom';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import heroBedroom from '@/assets/hero-bedroom.jpg';

export const CTASection = () => {
  return (
    <section className="relative py-24 lg:py-40 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/60 z-10" />
        <img
          src={heroBedroom}
          alt="CTA Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 container-wide text-center text-white">
        <AnimatedSection>
          <p className="text-overline-white mb-6">Готовы начать?</p>
          <h2 className="heading-h1 text-white mb-6">
            Создайте интерьер<br />вашей мечты
          </h2>
          <p className="text-lg font-light text-white/70 mb-10 max-w-xl mx-auto">
            Свяжитесь с нами для консультации или посетите один из наших шоурумов
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={0.15}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6">
            <Link
              to="/contacts"
              className="btn-primary min-w-[220px]"
            >
              Отправить заявку
            </Link>
            <Link
              to="/contacts"
              className="btn-outline-white min-w-[220px]"
            >
              Найти шоурум
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
