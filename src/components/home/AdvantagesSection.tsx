import { Truck, Shield, Ruler, Headphones } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

const advantages = [
  {
    icon: Truck,
    title: 'Доставка по России',
    description: 'Бережная доставка до двери в любую точку страны',
  },
  {
    icon: Shield,
    title: 'Гарантия 5 лет',
    description: 'Уверенность в качестве каждого предмета',
  },
  {
    icon: Ruler,
    title: 'Индивидуальные размеры',
    description: 'Мебель по вашим меркам без доплаты',
  },
  {
    icon: Headphones,
    title: 'Персональный менеджер',
    description: 'Сопровождение на каждом этапе заказа',
  },
];

export const AdvantagesSection = () => {
  return (
    <section className="py-24 md:py-40 px-6 md:px-20 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <AnimatedSection>
            <h2 className="heading-section">Почему выбирают нас</h2>
          </AnimatedSection>
        </div>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-12 md:gap-16">
          {advantages.map((advantage) => (
            <StaggerItem key={advantage.title}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border border-border">
                  <advantage.icon className="w-6 h-6" strokeWidth={1} />
                </div>
                <h3 className="text-lg font-light mb-3">
                  {advantage.title}
                </h3>
                <p className="text-sm font-light text-muted-foreground leading-relaxed">
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
