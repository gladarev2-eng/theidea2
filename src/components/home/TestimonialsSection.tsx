import { useState, useRef } from 'react';
import { ChevronLeft, ChevronRight, X, ZoomIn } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { Dialog, DialogContent } from '@/components/ui/dialog';

import heroLiving from '@/assets/hero-living-room.jpg';
import heroBedroom from '@/assets/hero-bedroom.jpg';
import heroDining from '@/assets/hero-dining.jpg';
import productSofa from '@/assets/product-sofa.jpg';
import productArmchair from '@/assets/product-armchair.jpg';

const testimonials = [
  {
    id: 1,
    text: 'THE IDEA создали для нашего проекта уникальные предметы мебели, которые идеально вписались в концепцию пространства. Качество исполнения превзошло все ожидания.',
    author: 'Анна Светлова',
    position: 'Дизайнер интерьеров, Studio A+',
    images: [heroLiving, heroBedroom],
  },
  {
    id: 2,
    text: 'Работаем с THE IDEA уже 5 лет. Это надёжный партнёр с безупречной репутацией. Всегда соблюдают сроки и внимательны к деталям.',
    author: 'Михаил Крылов',
    position: 'Архитектор, KRYLOV architects',
    images: [productSofa],
  },
  {
    id: 3,
    text: 'Мебель THE IDEA — это инвестиция в комфорт на долгие годы. Диван Case служит уже 4 года и выглядит как новый. Рекомендую всем знакомым.',
    author: 'Елена Морозова',
    position: 'Москва',
    images: [heroDining, productArmchair, heroLiving],
  },
  {
    id: 4,
    text: 'Превосходное соотношение цены и качества. THE IDEA — это российский бренд европейского уровня. Особенно впечатлила работа персонального менеджера.',
    author: 'Дмитрий Волков',
    position: 'Руководитель студии Volkov Design',
    images: [],
  },
  {
    id: 5,
    text: 'Заказывали кровать Bergen и прикроватные тумбы. Доставили вовремя, собрали аккуратно. Спим на ней уже год — качество на высоте!',
    author: 'Ольга и Сергей Ивановы',
    position: 'Санкт-Петербург',
    images: [heroBedroom],
  },
];

export const TestimonialsSection = () => {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const scroll = (direction: 'left' | 'right') => {
    if (!scrollRef.current) return;
    const scrollAmount = window.innerWidth > 768 ? 520 : 280;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <section className="py-16 sm:py-24 lg:py-40 bg-background overflow-hidden">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-16">
        <AnimatedSection className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 sm:gap-8 mb-10 sm:mb-16">
          <div>
            <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-4 sm:mb-6 font-light">
              Отзывы
            </p>
            <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extralight tracking-tight">
              Что говорят о&nbsp;нас
            </h2>
          </div>
          <div className="flex items-center gap-2 sm:gap-3">
            <button
              onClick={() => scroll('left')}
              className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300"
            >
              <ChevronLeft className="w-4 sm:w-5 h-4 sm:h-5" strokeWidth={1} />
            </button>
            <button
              onClick={() => scroll('right')}
              className="w-10 sm:w-12 h-10 sm:h-12 rounded-full border border-border flex items-center justify-center hover:bg-foreground hover:text-background hover:border-foreground transition-all duration-300"
            >
              <ChevronRight className="w-4 sm:w-5 h-4 sm:h-5" strokeWidth={1} />
            </button>
          </div>
        </AnimatedSection>
      </div>

      <AnimatedSection delay={0.15}>
        <div
          ref={scrollRef}
          className="flex gap-4 sm:gap-6 overflow-x-auto no-scrollbar px-4 sm:px-6 lg:px-16"
        >
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="flex-shrink-0 w-[300px] sm:w-[400px] lg:w-[520px] p-5 sm:p-8 lg:p-10 border border-border bg-background rounded-xl sm:rounded-2xl flex flex-col"
            >
              {/* Photos */}
              {testimonial.images.length > 0 && (
                <div className="flex gap-2 mb-6">
                  {testimonial.images.slice(0, 3).map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(image)}
                      className="relative group flex-1 aspect-square max-w-[100px] overflow-hidden rounded-lg"
                    >
                      <img
                        src={image}
                        alt={`Фото от ${testimonial.author}`}
                        className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center">
                        <ZoomIn className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                    </button>
                  ))}
                  {testimonial.images.length > 3 && (
                    <div className="flex-1 aspect-square max-w-[100px] rounded-lg bg-muted flex items-center justify-center">
                      <span className="text-sm text-muted-foreground">
                        +{testimonial.images.length - 3}
                      </span>
                    </div>
                  )}
                </div>
              )}

              <p className="text-base sm:text-lg lg:text-xl font-light leading-relaxed mb-6 sm:mb-10 flex-1">
                "{testimonial.text}"
              </p>
              
              <div className="pt-4 sm:pt-6 border-t border-border">
                <p className="text-sm font-medium mb-0.5 sm:mb-1">{testimonial.author}</p>
                <p className="text-[9px] sm:text-[11px] text-muted-foreground uppercase tracking-[0.08em] sm:tracking-[0.1em]">
                  {testimonial.position}
                </p>
              </div>
            </div>
          ))}
        </div>
      </AnimatedSection>

      {/* Image Zoom Dialog */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl p-0 bg-transparent border-none">
          <button
            onClick={() => setSelectedImage(null)}
            className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/90 flex items-center justify-center hover:bg-white transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
          {selectedImage && (
            <img
              src={selectedImage}
              alt="Фото из отзыва"
              className="w-full h-auto max-h-[80vh] object-contain rounded-lg"
            />
          )}
        </DialogContent>
      </Dialog>
    </section>
  );
};