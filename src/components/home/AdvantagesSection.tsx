import { Truck, Shield, Ruler, Headphones } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

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
    <section className="section-gap bg-card border-y border-border">
      <div className="container-wide">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {advantages.map((advantage) => (
            <StaggerItem key={advantage.title}>
              <div className="text-center lg:text-left">
                <advantage.icon 
                  className="w-6 h-6 mb-4 mx-auto lg:mx-0 text-muted-foreground" 
                  strokeWidth={1} 
                />
                <h3 className="text-sm font-medium mb-2 tracking-wide">
                  {advantage.title}
                </h3>
                <p className="text-body-sm">
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
