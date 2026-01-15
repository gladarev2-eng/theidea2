import { Link } from 'react-router-dom';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import manufacturingImg from '@/assets/manufacturing.jpg';

export const PhilosophySection = () => {
  return (
    <section className="bg-background overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image */}
        <AnimatedSection className="h-[500px] lg:h-[700px] overflow-hidden">
          <img
            src={manufacturingImg}
            alt="Производство THE IDEA"
            className="w-full h-full object-cover img-hover"
          />
        </AnimatedSection>

        {/* Content */}
        <AnimatedSection 
          delay={0.15} 
          className="flex flex-col justify-center px-6 lg:px-16 xl:px-24 py-16 lg:py-0"
        >
          <p className="text-overline mb-6">Философия</p>
          <h2 className="heading-h2 mb-8">
            От эскиза до воплощения
          </h2>
          <p className="text-body-lg mb-10 max-w-lg">
            Мы используем современные ЧПУ-станки для идеальной точности и ручную доводку 
            для безупречного тактильного ощущения. Каждый предмет THE IDEA проходит 
            многоступенчатый контроль качества.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mb-10">
            <div>
              <p className="text-3xl lg:text-4xl font-light mb-2">12</p>
              <p className="text-body-sm">лет на рынке</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-light mb-2">500+</p>
              <p className="text-body-sm">предметов</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-light mb-2">10</p>
              <p className="text-body-sm">коллекций</p>
            </div>
          </div>

          <Link to="/about" className="btn-outline w-fit">
            О производстве
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};
