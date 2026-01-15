import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';

const testimonials = [
  {
    id: 1,
    text: 'Качество мебели превзошло все ожидания. Диван из коллекции Case стал центром нашей гостиной. Отдельное спасибо за внимательный сервис.',
    author: 'Анна Петрова',
    location: 'Москва',
  },
  {
    id: 2,
    text: 'Работаем с THE IDEA уже 5 лет. Для наших дизайн-проектов это идеальный партнёр — всегда качественно, в срок и с индивидуальным подходом.',
    author: 'Студия Интерьер+',
    location: 'Санкт-Петербург',
  },
  {
    id: 3,
    text: 'Заказывали кровать и прикроватные тумбы. Мастера сделали точно по нашим размерам. Спим как в лучших отелях мира.',
    author: 'Михаил и Елена',
    location: 'Казань',
  },
  {
    id: 4,
    text: 'Обставили весь загородный дом мебелью THE IDEA. Прошло 3 года — всё как новое. Рекомендую всем, кто ценит качество.',
    author: 'Дмитрий Козлов',
    location: 'Сочи',
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
    <section className="py-24 md:py-40 bg-muted overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-20">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <AnimatedSection>
            <h2 className="heading-section">Отзывы клиентов</h2>
          </AnimatedSection>
          <AnimatedSection delay={0.1}>
            <div className="flex items-center gap-3">
              <button
                onClick={() => scroll('left')}
                className="p-4 border border-border hover:bg-card transition-colors"
                aria-label="Предыдущий отзыв"
              >
                <ChevronLeft className="w-5 h-5" strokeWidth={1} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-4 border border-border hover:bg-card transition-colors"
                aria-label="Следующий отзыв"
              >
                <ChevronRight className="w-5 h-5" strokeWidth={1} />
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <AnimatedSection delay={0.2}>
        <div 
          ref={scrollRef}
          className="flex gap-6 overflow-x-auto no-scrollbar snap-x snap-mandatory pl-6 md:pl-20 pr-6"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
              className="flex-shrink-0 w-[85vw] md:w-[550px] snap-start"
            >
              <div className="bg-card p-8 md:p-12 h-full">
                <blockquote className="text-xl md:text-2xl font-light leading-relaxed mb-8">
                  "{testimonial.text}"
                </blockquote>
                <div className="pt-6 border-t border-border">
                  <p className="text-sm font-light">{testimonial.author}</p>
                  <p className="text-xs text-muted-foreground mt-1">
                    {testimonial.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </AnimatedSection>
    </section>
  );
};
