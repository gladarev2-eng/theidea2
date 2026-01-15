import { Truck, Shield, Ruler, Headphones } from 'lucide-react';
import { AnimatedSection, AnimatedText, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

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
    <section className="section-padding bg-background">
      <div className="container-wide">
        <div className="text-center mb-16">
          <AnimatedText>
            <p className="text-caption mb-4">Преимущества</p>
          </AnimatedText>
          <AnimatedSection delay={0.1}>
            <h2 className="heading-section">Почему выбирают нас</h2>
          </AnimatedSection>
        </div>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          {advantages.map((advantage) => (
            <StaggerItem key={advantage.title}>
              <div className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 mb-6 border border-border">
                  <advantage.icon className="w-7 h-7 text-accent" strokeWidth={1.5} />
                </div>
                <h3 className="font-display text-lg md:text-xl font-normal mb-3">
                  {advantage.title}
                </h3>
                <p className="font-body font-light text-sm text-muted-foreground">
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
