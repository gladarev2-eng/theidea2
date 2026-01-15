import { Link } from 'react-router-dom';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import heroBedroom from '@/assets/hero-bedroom.jpg';

export const CTASection = () => {
  return (
    <section className="relative py-20 sm:py-32 lg:py-48 overflow-hidden">
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
      <div className="relative z-20 max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-16 text-center text-white">
        <AnimatedSection>
          <p className="text-[9px] sm:text-[11px] uppercase tracking-[0.3em] sm:tracking-[0.4em] text-white/60 mb-4 sm:mb-6 font-light">Готовы начать?</p>
          <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extralight tracking-tight mb-4 sm:mb-6">
            Создайте интерьер вашей&nbsp;мечты
          </h2>
          <p className="text-sm sm:text-lg font-light text-white/70 mb-8 sm:mb-12 max-w-xl mx-auto">
            Свяжитесь с нами для консультации или посетите один из наших шоурумов
          </p>
        </AnimatedSection>
        
        <AnimatedSection delay={0.15}>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <Link
              to="/contacts"
              className="w-full sm:w-auto bg-white text-foreground px-8 sm:px-10 py-3.5 sm:py-4 text-[10px] sm:text-[11px] font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase rounded-full hover:bg-foreground hover:text-white transition-all duration-300 min-w-[180px] sm:min-w-[200px]"
            >
              Отправить заявку
            </Link>
            <Link
              to="/contacts"
              className="w-full sm:w-auto border border-white/40 text-white px-8 sm:px-10 py-3.5 sm:py-4 text-[10px] sm:text-[11px] font-medium tracking-[0.15em] sm:tracking-[0.2em] uppercase rounded-full hover:bg-white hover:text-foreground transition-all duration-300 min-w-[180px] sm:min-w-[200px]"
            >
              Найти шоурум
            </Link>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
