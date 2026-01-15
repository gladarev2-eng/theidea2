import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Play } from 'lucide-react';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import manufacturingImg from '@/assets/manufacturing.jpg';

export const PhilosophySection = () => {
  const [isVideoPlaying, setIsVideoPlaying] = useState(false);
  
  // Video URL - can be updated with actual video
  const videoUrl = "https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&mute=1";

  return (
    <section className="bg-background overflow-hidden">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Image / Video */}
        <AnimatedSection className="h-[450px] lg:h-[750px] overflow-hidden relative group">
          {!isVideoPlaying ? (
            <>
              <img
                src={manufacturingImg}
                alt="Производство THE IDEA"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* Video play overlay */}
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsVideoPlaying(true)}
                  className="w-24 h-24 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 hover:scale-110 hover:bg-white group/btn"
                >
                  <Play className="w-8 h-8 ml-1 text-foreground" fill="currentColor" />
                </button>
              </div>
              <div className="absolute bottom-6 left-6 text-[11px] uppercase tracking-[0.3em] text-white font-light">
                Смотреть видео о производстве
              </div>
            </>
          ) : (
            <iframe
              src={videoUrl}
              title="Видео о производстве THE IDEA"
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          )}
        </AnimatedSection>

        {/* Content */}
        <AnimatedSection 
          delay={0.15} 
          className="flex flex-col justify-center px-6 lg:px-16 xl:px-24 py-16 lg:py-0"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-8 font-light">
            Философия
          </p>
          <h2 className="text-3xl lg:text-4xl xl:text-5xl font-extralight tracking-tight leading-[1.1] mb-8">
            От эскиза до воплощения
          </h2>
          <p className="text-lg font-light text-muted-foreground leading-relaxed mb-12 max-w-lg">
            Мы используем современные ЧПУ-станки для идеальной точности и ручную доводку 
            для безупречного тактильного ощущения. Каждый предмет THE IDEA проходит 
            многоступенчатый контроль качества.
          </p>
          
          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 lg:gap-12 mb-12">
            <div>
              <p className="text-3xl lg:text-4xl font-extralight mb-2">12</p>
              <p className="text-[11px] text-muted-foreground uppercase tracking-[0.1em]">лет на рынке</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-extralight mb-2">500+</p>
              <p className="text-[11px] text-muted-foreground uppercase tracking-[0.1em]">предметов</p>
            </div>
            <div>
              <p className="text-3xl lg:text-4xl font-extralight mb-2">10</p>
              <p className="text-[11px] text-muted-foreground uppercase tracking-[0.1em]">коллекций</p>
            </div>
          </div>

          <Link 
            to="/about" 
            className="inline-flex w-fit px-10 py-4 rounded-full border border-foreground text-[11px] uppercase tracking-[0.2em] font-medium hover:bg-foreground hover:text-background transition-all duration-300"
          >
            О производстве
          </Link>
        </AnimatedSection>
      </div>
    </section>
  );
};