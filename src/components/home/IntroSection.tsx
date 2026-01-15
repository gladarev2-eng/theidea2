import { Link } from 'react-router-dom';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import manufacturingImg from '@/assets/manufacturing.jpg';

export const IntroSection = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-40 bg-background">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-16 lg:gap-24 items-start">
          {/* Text Content */}
          <div>
            <AnimatedSection>
              <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-6 sm:mb-10 font-light">
                О бренде
              </p>
              <h2 className="text-2xl sm:text-4xl lg:text-5xl xl:text-6xl font-extralight tracking-tight leading-[1.15] mb-6 sm:mb-10">
                12 лет собственного дизайна в&nbsp;Санкт-Петербурге
              </h2>
              <p className="text-base sm:text-lg font-light text-muted-foreground leading-relaxed mb-8 sm:mb-10 max-w-lg">
                Мы создаём объекты, которые становятся основой интерьера. 
                Наше производство — это симбиоз технологий и мастерства, 
                где каждая деталь продумана до миллиметра.
              </p>
              <Link 
                to="/about" 
                className="inline-flex text-[10px] sm:text-[11px] uppercase tracking-[0.15em] sm:tracking-[0.2em] font-medium pb-2 border-b border-foreground hover:opacity-60 transition-opacity duration-300"
              >
                Подробнее о нас
              </Link>
            </AnimatedSection>
          </div>

          {/* Image */}
          <AnimatedSection delay={0.2}>
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={manufacturingImg}
                alt="Производство THE IDEA"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
