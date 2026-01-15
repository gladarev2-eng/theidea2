import { Link } from 'react-router-dom';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import heroBedroom from '@/assets/hero-bedroom.jpg';

export const CTASection = () => {
  return (
    <section className="relative py-24 lg:py-40 overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-black/50 z-10" />
        <img
          src={heroBedroom}
          alt="CTA Background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-[1440px] mx-auto px-6 lg:px-12 text-center text-white">
        <AnimatedSection>
          <p className="text-[10px] uppercase tracking-[0.4em] text-white/60 mb-6">Готовы начать?</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-light tracking-tight mb-6">
            Создайте интерьер<br />вашей мечты
          </h2>
          <p className="text-lg font-light text-white/70 mb-10 max-w-xl mx-auto">
            Свяжитесь с нами для консультации или посетите один из наших шоурумов
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={0.15}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/contacts"
              className="bg-white text-foreground px-10 py-4 text-[10px] font-medium tracking-[0.2em] uppercase hover:bg-foreground hover:text-white transition-all duration-300 min-w-[200px]"
            >
              Отправить заявку
            </Link>
            <Link
              to="/contacts"
              className="border border-white/40 text-white px-10 py-4 text-[10px] font-medium tracking-[0.2em] uppercase hover:bg-white hover:text-foreground transition-all duration-300 min-w-[200px]"
            >
              Найти шоурум
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
