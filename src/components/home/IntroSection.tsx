import { AnimatedSection, AnimatedText } from '@/components/ui/AnimatedSection';

export const IntroSection = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="max-w-5xl mx-auto text-center">
          <AnimatedText>
            <p className="text-caption mb-6">О бренде</p>
          </AnimatedText>
          
          <AnimatedSection delay={0.1}>
            <h2 className="heading-display text-foreground">
              Создаём мебель, которая вдохновляет на жизнь
            </h2>
          </AnimatedSection>

          <AnimatedSection delay={0.2}>
            <p className="text-body max-w-3xl mx-auto mt-8 md:mt-12">
              The Idea — это собственное производство дизайнерской мебели в Санкт-Петербурге. 
              Уже 12 лет мы создаём предметы интерьера, которые сочетают в себе эстетику 
              современного дизайна и безупречное качество исполнения.
            </p>
          </AnimatedSection>

          <AnimatedSection delay={0.3}>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 mt-16 md:mt-24">
              {[
                { value: '12', label: 'Лет опыта' },
                { value: '5000+', label: 'Реализованных проектов' },
                { value: '200+', label: 'Моделей мебели' },
                { value: '15', label: 'Шоурумов по России' },
              ].map((stat, index) => (
                <div key={index} className="text-center">
                  <span className="font-display text-4xl md:text-5xl lg:text-6xl font-light text-accent">
                    {stat.value}
                  </span>
                  <p className="font-body font-light text-sm text-muted-foreground mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
