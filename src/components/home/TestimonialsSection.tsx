import { useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const testimonials = [
  {
    id: 1,
    text: 'THE IDEA создали для нашего проекта уникальные предметы мебели, которые идеально вписались в концепцию пространства.',
    author: 'Анна Светлова',
    position: 'Дизайнер интерьеров, Studio A+',
  },
  {
    id: 2,
    text: 'Работаем с THE IDEA уже 5 лет. Это надёжный партнёр с безупречной репутацией.',
    author: 'Михаил Крылов',
    position: 'Архитектор, KRYLOV architects',
  },
  {
    id: 3,
    text: 'Мебель THE IDEA — это инвестиция в комфорт на долгие годы. Диван Case служит уже 4 года и выглядит как новый.',
    author: 'Елена Морозова',
    position: 'Москва',
  },
  {
    id: 4,
    text: 'Превосходное соотношение цены и качества. THE IDEA — это российский бренд европейского уровня.',
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
    <section className="py-24 lg:py-40 bg-background overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
        <AnimatedSection className="flex flex-col lg:flex-row lg:items-end lg:justify-between mb-16">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6 font-light">Отзывы</p>
            <h2 className="text-3xl lg:text-5xl font-extralight tracking-tight">Что говорят о нас</h2>
          </div>
          <div className="flex items-center gap-3 mt-8 lg:mt-0">
            <button
              onClick={() => scroll('left')}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300"
            >
              <ChevronLeft className="w-5 h-5" strokeWidth={1} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300"
            >
              <ChevronRight className="w-5 h-5" strokeWidth={1} />
            </button>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection delay={0.15}>
        <div
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar px-6 lg:px-16"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 w-[320px] sm:w-[420px] lg:w-[520px] p-8 lg:p-12 border border-border bg-background rounded-2xl"
            >
              <p className="text-lg lg:text-xl font-light leading-relaxed mb-10">
                "{testimonial.text}"
              </p>
              <div className="pt-6 border-t border-border">
                <p className="text-sm font-medium mb-1">{testimonial.author}</p>
                <p className="text-[11px] text-muted-foreground uppercase tracking-[0.1em]">
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
