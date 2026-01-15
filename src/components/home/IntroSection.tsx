import { Link } from 'react-router-dom';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import manufacturingImg from '@/assets/manufacturing.jpg';

export const IntroSection = () => {
  return (
    <section className="py-20 lg:py-32 bg-background">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Text Content */}
          <div className="lg:col-span-7">
            <AnimatedSection>
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-8">О бренде</p>
              <h2 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light tracking-tight leading-[1.05] uppercase mb-8">
                12 лет<br />
                собственного<br />
                дизайна в<br />
                Санкт-Петербурге
              </h2>
            </AnimatedSection>
          </div>
          
          {/* Description */}
          <div className="lg:col-span-5 lg:pt-16">
            <AnimatedSection delay={0.1}>
              <p className="text-lg font-light text-muted-foreground leading-relaxed mb-8 max-w-md">
                Мы создаём объекты, которые становятся основой интерьера. 
                Наше производство — это симбиоз технологий и мастерства, 
                где каждая деталь продумана до миллиметра.
              </p>
              <Link 
                to="/about" 
                className="inline-flex text-[10px] uppercase tracking-[0.2em] font-medium pb-2 border-b border-foreground hover:border-muted-foreground hover:text-muted-foreground transition-colors duration-300"
              >
                Подробнее о нас
              </Link>
            </AnimatedSection>
          </div>
        </div>

        {/* Image */}
        <AnimatedSection delay={0.2} className="mt-16 lg:mt-24">
          <div className="aspect-[21/9] overflow-hidden">
            <img
              src={manufacturingImg}
              alt="Производство THE IDEA"
              className="w-full h-full object-cover"
            />
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
};
