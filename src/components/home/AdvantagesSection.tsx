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
    <section className="py-20 lg:py-24 bg-background border-y border-border">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-20">
          {advantages.map((advantage) => (
            <StaggerItem key={advantage.title}>
              <div className="text-center lg:text-left">
                <advantage.icon 
                  className="w-6 h-6 mb-5 mx-auto lg:mx-0 text-foreground" 
                  strokeWidth={1} 
                />
                <h3 className="text-[11px] font-medium uppercase tracking-[0.15em] mb-2">
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
