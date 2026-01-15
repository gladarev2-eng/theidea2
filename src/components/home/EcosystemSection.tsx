import { Link } from 'react-router-dom';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import heroLiving from '@/assets/hero-living-room.jpg';

export const EcosystemSection = () => {
  return (
    <section className="py-24 lg:py-40 bg-[#f8f8f6]">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Text */}
          <AnimatedSection className="order-2 lg:order-1">
            <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extralight tracking-tight leading-[1.1] mb-10">
              Единая экосистема дизайна
            </h2>
            <p className="text-lg font-light text-muted-foreground leading-relaxed mb-12 max-w-md">
              Все наши предметы спроектированы так, чтобы дополнять друг друга, 
              создавая целостное и гармоничное пространство в едином стиле.
            </p>
            <Link 
              to="/catalog" 
              className="inline-flex px-10 py-4 border border-foreground text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-foreground hover:text-background transition-all duration-300"
            >
              В каталог
            </Link>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection delay={0.15} className="order-1 lg:order-2">
            <div className="aspect-[4/5] overflow-hidden">
              <img
                src={heroLiving}
                alt="Единая экосистема дизайна"
                className="w-full h-full object-cover"
              />
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};
