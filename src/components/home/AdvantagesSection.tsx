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
    <section className="section-padding bg-card">
      <div className="container-wide">
        <AnimatedSection className="text-center mb-12">
          <p className="text-caption mb-4">Преимущества</p>
          <h2 className="heading-h2">Почему выбирают нас</h2>
        </AnimatedSection>

        <StaggerContainer className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {advantages.map((advantage) => (
            <StaggerItem key={advantage.title}>
              <div className="card-base p-6 text-center h-full">
                <div className="inline-flex items-center justify-center w-12 h-12 mb-4 bg-primary/10 rounded-lg">
                  <advantage.icon className="w-6 h-6 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="heading-h6 mb-2">{advantage.title}</h3>
                <p className="text-body-sm text-muted-foreground">
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
