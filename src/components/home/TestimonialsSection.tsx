import { useRef } from 'react';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const testimonials = [
  {
    id: 1,
    text: 'Качество мебели превзошло все ожидания. Диван из коллекции Case стал центром нашей гостиной. Отдельное спасибо за внимательный сервис.',
    author: 'Анна Петрова',
    role: 'Дизайнер интерьеров',
    rating: 5,
  },
  {
    id: 2,
    text: 'Работаем с THE IDEA уже 5 лет. Для наших дизайн-проектов это идеальный партнёр — всегда качественно, в срок и с индивидуальным подходом.',
    author: 'Студия Интерьер+',
    role: 'Санкт-Петербург',
    rating: 5,
  },
  {
    id: 3,
    text: 'Заказывали кровать и прикроватные тумбы. Мастера сделали точно по нашим размерам. Спим как в лучших отелях мира.',
    author: 'Михаил и Елена',
    role: 'Казань',
    rating: 5,
  },
  {
    id: 4,
    text: 'Обставили весь загородный дом мебелью THE IDEA. Прошло 3 года — всё как новое. Рекомендую всем, кто ценит качество.',
    author: 'Дмитрий Козлов',
    role: 'Сочи',
    rating: 5,
  },
];

export const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.offsetWidth * 0.6;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="section-padding bg-card overflow-hidden">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <AnimatedSection>
            <p className="text-caption mb-4">Отзывы</p>
            <h2 className="heading-h2">Что говорят клиенты</h2>
          </AnimatedSection>
          
          <AnimatedSection delay={0.1}>
            <div className="flex items-center gap-2">
              <button
                onClick={() => scroll('left')}
                className="p-3 border border-border rounded-md hover:bg-muted transition-colors duration-150"
                aria-label="Предыдущий отзыв"
              >
                <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-3 border border-border rounded-md hover:bg-muted transition-colors duration-150"
                aria-label="Следующий отзыв"
              >
                <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <AnimatedSection delay={0.15}>
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory px-4 md:px-8"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 w-[85vw] md:w-[450px] snap-start"
            >
              <div className="card-base p-6 md:p-8 h-full flex flex-col">
                {/* Stars */}
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-warning text-warning" />
                  ))}
                </div>

                {/* Text */}
                <blockquote className="text-body-lg text-foreground mb-6 flex-1">
                  "{testimonial.text}"
                </blockquote>

                {/* Author */}
                <div className="pt-4 border-t border-border">
                  <p className="heading-h6">{testimonial.author}</p>
                  <p className="text-body-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};
