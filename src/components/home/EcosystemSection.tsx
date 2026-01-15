import { Link } from 'react-router-dom';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import heroLiving from '@/assets/hero-living-room.jpg';

export const EcosystemSection = () => {
  return (
    <section className="section-gap bg-muted">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Text */}
          <AnimatedSection className="order-2 lg:order-1">
            <h2 className="heading-h2 mb-8 lg:mb-12">
              Единая экосистема дизайна
            </h2>
            <p className="text-body-lg mb-8 lg:mb-12 max-w-md">
              Все наши предметы спроектированы так, чтобы дополнять друг друга, 
              создавая целостное и гармоничное пространство в едином стиле.
            </p>
            <Link to="/catalog" className="btn-outline">
              В каталог категорий
            </Link>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection delay={0.15} className="order-1 lg:order-2">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={heroLiving}
                alt="Единая экосистема дизайна"
                className="w-full h-full object-cover img-hover"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
