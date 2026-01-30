import { Truck, Shield, Ruler, Headphones, Factory, Leaf, Clock, Award } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

const advantages = [
  {
    icon: Truck,
    title: 'Доставка по России',
    description: 'Бережная доставка до двери в любой город страны. Собственная логистика и надёжные партнёры.',
  },
  {
    icon: Shield,
    title: 'Гарантия 5 лет',
    description: 'Уверенность в качестве каждого предмета. Бесплатный ремонт и замена при производственных дефектах.',
  },
  {
    icon: Ruler,
    title: 'Индивидуальные размеры',
    description: 'Мебель по вашим меркам. Адаптируем любую модель под особенности вашего пространства.',
  },
  {
    icon: Headphones,
    title: 'Персональный менеджер',
    description: 'Сопровождение от выбора до установки. Один контакт для всех вопросов по заказу.',
  },
  {
    icon: Factory,
    title: 'Собственное производство',
    description: 'Полный цикл в Санкт-Петербурге. Контроль качества на каждом этапе изготовления.',
  },
  {
    icon: Leaf,
    title: 'Экологичные материалы',
    description: 'Сертифицированная древесина, безопасные покрытия и ткани европейских производителей.',
  },
  {
    icon: Clock,
    title: 'Сроки от 3 недель',
    description: 'Быстрое изготовление благодаря оптимизированному производственному процессу.',
  },
  {
    icon: Award,
    title: 'Премиальное качество',
    description: 'Европейский уровень исполнения по российским ценам. 10 000+ довольных клиентов.',
  },
];

export const AdvantagesSection = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-[#f8f8f6]">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header */}
        <AnimatedSection className="text-center mb-12 sm:mb-16 lg:mb-20">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-4 sm:mb-6 font-light">
            Почему THE IDEA
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extralight tracking-tight max-w-2xl mx-auto">
            Преимущества работы с нами
          </h2>
        </AnimatedSection>

        {/* Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-10">
          {advantages.map((advantage) => (
            <StaggerItem key={advantage.title}>
              <div className="group p-6 sm:p-8 bg-background border border-border hover:border-foreground transition-colors duration-300 h-full">
                <advantage.icon 
                  className="w-8 sm:w-10 h-8 sm:h-10 mb-5 sm:mb-6 text-foreground transition-transform duration-300 group-hover:scale-110" 
                  strokeWidth={1} 
                />
                <h3 className="text-sm sm:text-base font-medium uppercase tracking-[0.1em] mb-3 sm:mb-4">
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