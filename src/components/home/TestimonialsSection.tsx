import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const testimonials = [
  {
    id: 1,
    text: 'THE IDEA создали для нашего проекта уникальные предметы мебели, которые идеально вписались в концепцию пространства. Высочайшее качество исполнения и внимание к деталям.',
    author: 'Анна Светлова',
    position: 'Дизайнер интерьеров, Studio A+',
  },
  {
    id: 2,
    text: 'Работаем с THE IDEA уже 5 лет. Это надёжный партнёр с безупречной репутацией. Каждый проект выполняется точно в срок с соблюдением всех технических требований.',
    author: 'Михаил Крылов',
    position: 'Архитектор, KRYLOV architects',
  },
  {
    id: 3,
    text: 'Мебель THE IDEA — это инвестиция в комфорт на долгие годы. Диван Case служит уже 4 года и выглядит как новый. Отдельное спасибо за оперативную доставку.',
    author: 'Елена Морозова',
    position: 'Москва',
  },
  {
    id: 4,
    text: 'Превосходное соотношение цены и качества. THE IDEA — это российский бренд европейского уровня. Рекомендую всем своим клиентам.',
    author: 'Дмитрий Волков',
    position: 'Руководитель студии Volkov Design',
  },
];

export const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = window.innerWidth > 768 ? 520 : 300;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="py-20 lg:py-32 bg-background overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <AnimatedSection className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-12 lg:mb-16">
          <div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-6">Отзывы</p>
            <h2 className="text-3xl lg:text-4xl font-light tracking-tight">Что говорят о нас</h2>
          </div>
          <div className="flex items-center gap-2 mt-6 lg:mt-0">
            <button
              onClick={() => scroll('left')}
              className="w-11 h-11 border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-11 h-11 border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
            </button>
          </div>
        </AnimatedSection>
      </div>

      {/* Testimonials Scroll */}
      <AnimatedSection delay={0.15}>
        <div
          ref={scrollRef}
          className="flex gap-5 lg:gap-6 overflow-x-auto no-scrollbar px-6 lg:px-12"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 w-[300px] sm:w-[400px] lg:w-[500px] p-6 sm:p-8 lg:p-10 border border-border bg-card"
            >
              <p className="text-lg lg:text-xl font-light leading-relaxed mb-8">
                "{testimonial.text}"
              </p>
              <div className="pt-6 border-t border-border">
                <p className="text-sm font-medium mb-1">{testimonial.author}</p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};
