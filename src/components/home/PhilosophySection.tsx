import { Link } from 'react-router-dom';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import manufacturingImg from '@/assets/manufacturing.jpg';

export const PhilosophySection = () => {
  return (
    <section className="bg-background overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <AnimatedSection className="h-[400px] lg:h-[700px] overflow-hidden">
          <img
            src={manufacturingImg}
            alt="Производство THE IDEA"
            className="w-full h-full object-cover"
          />
        </AnimatedSection>

        {/* Content */}
        <AnimatedSection 
          delay={0.15} 
          className="flex flex-col justify-center px-6 lg:px-12 xl:px-20 py-12 lg:py-0"
        >
          <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">Философия</p>
          <h2 className="text-3xl lg:text-4xl font-light tracking-tight mb-6 lg:mb-8">
            От эскиза до воплощения
          </h2>
          <p className="text-lg font-light text-muted-foreground leading-relaxed mb-8 lg:mb-10 max-w-lg">
            Мы используем современные ЧПУ-станки для идеальной точности и ручную доводку 
            для безупречного тактильного ощущения. Каждый предмет THE IDEA проходит 
            многоступенчатый контроль качества.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 lg:gap-8 mb-8 lg:mb-10">
            <div>
              <p className="text-2xl lg:text-3xl font-light mb-1">12</p>
              <p className="text-xs text-muted-foreground">лет на рынке</p>
            </div>
            <div>
              <p className="text-2xl lg:text-3xl font-light mb-1">500+</p>
              <p className="text-xs text-muted-foreground">предметов</p>
            </div>
            <div>
              <p className="text-2xl lg:text-3xl font-light mb-1">10</p>
              <p className="text-xs text-muted-foreground">коллекций</p>
            </div>
          </div>

          <Link 
            to="/about" 
            className="inline-flex w-fit px-8 py-4 border border-foreground text-[10px] uppercase tracking-[0.2em] font-medium hover:bg-foreground hover:text-background transition-all duration-300"
          >
            О производстве
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};
