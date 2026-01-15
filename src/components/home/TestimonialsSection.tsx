import { useRef } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { AnimatedSection, AnimatedText } from '@/components/ui/AnimatedSection';

const testimonials = [
  {
    id: 1,
    text: 'Качество мебели превзошло все ожидания. Диван из коллекции Скандинавия стал центром нашей гостиной. Отдельное спасибо за внимательный сервис.',
    author: 'Анна Петрова',
    location: 'Москва',
  },
  {
    id: 2,
    text: 'Работаем с The Idea уже 5 лет. Для наших дизайн-проектов это идеальный партнёр — всегда качественно, в срок и с индивидуальным подходом.',
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
    text: 'Обставили весь загородный дом мебелью The Idea. Прошло 3 года — всё как новое. Рекомендую всем, кто ценит качество.',
    author: 'Дмитрий Козлов',
    location: 'Сочи',
  },
];

export const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = scrollRef.current.offsetWidth * 0.8;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="section-padding bg-secondary/30">
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <AnimatedText>
              <p className="text-caption mb-4">Отзывы</p>
            </AnimatedText>
            <AnimatedSection delay={0.1}>
              <h2 className="heading-section">Что говорят клиенты</h2>
            </AnimatedSection>
          </div>
          <AnimatedSection delay={0.2}>
            <div className="flex items-center gap-3">
              <button
                onClick={() => scroll('left')}
                className="p-3 border border-border hover:bg-card transition-colors"
                aria-label="Предыдущий отзыв"
              >
                <ChevronLeft className="w-5 h-5" strokeWidth={1.5} />
              </button>
              <button
                onClick={() => scroll('right')}
                className="p-3 border border-border hover:bg-card transition-colors"
                aria-label="Следующий отзыв"
              >
                <ChevronRight className="w-5 h-5" strokeWidth={1.5} />
              </button>
            </div>
          </AnimatedSection>
        </div>
      </div>

      <AnimatedSection delay={0.3}>
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
              className="flex-shrink-0 w-[85vw] md:w-[600px] snap-start"
            >
              <div className="bg-background p-8 md:p-12 h-full">
                <Quote className="w-10 h-10 text-accent/30 mb-6" />
                <blockquote className="font-display text-xl md:text-2xl lg:text-3xl font-light leading-relaxed text-foreground">
                  "{testimonial.text}"
                </blockquote>
                <div className="mt-8 pt-6 border-t border-border">
                  <p className="font-display text-lg">{testimonial.author}</p>
                  <p className="font-body font-light text-sm text-muted-foreground mt-1">
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
