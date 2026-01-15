import { Link } from 'react-router-dom';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

import manufacturingImg from '@/assets/manufacturing.jpg';

export const PhilosophySection = () => {
  return (
    <section className="bg-background">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <AnimatedSection className="h-[400px] lg:h-[600px] overflow-hidden">
          <img
            src={manufacturingImg}
            alt="Мастерство THE IDEA"
            className="w-full h-full object-cover"
          />
        </AnimatedSection>

        {/* Content */}
        <AnimatedSection delay={0.15} className="flex flex-col justify-center px-4 md:px-8 lg:px-16 py-12 lg:py-0">
          <p className="text-caption mb-4">Мастерство</p>
          <h2 className="heading-h2 mb-6">
            От эскиза до воплощения
          </h2>
          <p className="text-body text-muted-foreground mb-8 max-w-lg">
            Мы используем современные ЧПУ-станки для идеальной точности и ручную доводку 
            для безупречного тактильного ощущения. Каждый предмет THE IDEA проходит 
            многоступенчатый контроль качества.
          </p>
          <Link 
            to="/about"
            className="btn-outline w-fit"
          >
            О производстве
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};
