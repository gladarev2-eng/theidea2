import { Truck, Shield, Ruler, Headphones } from 'lucide-react';
import { StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

const advantages = [
  {
    icon: Truck,
    title: 'Доставка по России',
    description: 'Бережная доставка до двери',
  },
  {
    icon: Shield,
    title: 'Гарантия 5 лет',
    description: 'Уверенность в качестве',
  },
  {
    icon: Ruler,
    title: 'Индивидуальные размеры',
    description: 'Мебель по вашим меркам',
  },
  {
    icon: Headphones,
    title: 'Персональный менеджер',
    description: 'Сопровождение заказа',
  },
];

export const AdvantagesSection = () => {
  return (
    <section className="py-16 lg:py-20 bg-card border-y border-border">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16">
          {advantages.map((advantage) => (
            <StaggerItem key={advantage.title}>
              <div className="text-center lg:text-left">
                <advantage.icon 
                  className="w-5 h-5 mb-4 mx-auto lg:mx-0 text-muted-foreground" 
                  strokeWidth={1} 
                />
                <h3 className="text-xs font-medium uppercase tracking-[0.1em] mb-2">
                  {advantage.title}
                </h3>
                <p className="text-sm font-light text-muted-foreground">
                  {advantage.description}
                </p>
              </div>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};
