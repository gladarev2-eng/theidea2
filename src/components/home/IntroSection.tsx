import { Link } from 'react-router-dom';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

import manufacturingImg from '@/assets/manufacturing.jpg';

const stats = [
  { number: '12+', label: 'лет на рынке' },
  { number: '5000+', label: 'довольных клиентов' },
  { number: '100%', label: 'своё производство' },
];

export const IntroSection = () => {
  return (
    <section className="section-padding bg-card">
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Text Content */}
          <AnimatedSection>
            <p className="text-caption mb-4">О компании</p>
            <h2 className="heading-h2 mb-6">
              Создаём мебель, которая вдохновляет
            </h2>
            <p className="text-body text-muted-foreground mb-8">
              THE IDEA — петербургская мастерская, где каждый предмет мебели создаётся 
              с особым вниманием к деталям. Мы объединяем традиции ремесла с современным дизайном,
              чтобы ваш дом стал отражением вашего стиля.
            </p>
            <Link 
              to="/about" 
              className="btn-primary"
            >
              О компании
            </Link>
          </AnimatedSection>

          {/* Image */}
          <AnimatedSection delay={0.15}>
            <div className="relative rounded-lg overflow-hidden">
              <img 
                src={manufacturingImg} 
                alt="Производство THE IDEA"
                className="w-full h-[400px] lg:h-[500px] object-cover"
              />
            </div>
          </AnimatedSection>
        </div>

        {/* Stats */}
        <StaggerContainer className="grid grid-cols-3 gap-6 mt-16">
          {stats.map((stat) => (
            <StaggerItem key={stat.label}>
              <div className="text-center p-6 bg-background rounded-lg">
                <div className="stat-number text-primary">{stat.number}</div>
                <div className="stat-label mt-2">{stat.label}</div>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
