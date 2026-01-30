import { Instagram } from 'lucide-react';
import { AnimatedSection, StaggerContainer, StaggerItem } from '@/components/ui/AnimatedSection';

import heroLiving from '@/assets/hero-living-room.jpg';
import heroBedroom from '@/assets/hero-bedroom.jpg';
import heroDining from '@/assets/hero-dining.jpg';
import manufacturingImg from '@/assets/manufacturing.jpg';
import productSofa from '@/assets/product-sofa.jpg';
import productArmchair from '@/assets/product-armchair.jpg';

// VK icon component
const VkIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.862-.525-2.049-1.714-1.033-1.01-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.12-5.339-3.202-2.17-3.048-2.763-5.339-2.763-5.814 0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.678.847 2.456 2.273 4.607 2.865 4.607.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.373 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.253-1.406 2.148-3.574 2.148-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.049.17.475-.085.72-.576.72z"/>
  </svg>
);

// Pinterest icon component
const PinterestIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.373 0 0 5.372 0 12c0 5.084 3.163 9.426 7.627 11.174-.105-.949-.2-2.405.042-3.441.218-.937 1.407-5.965 1.407-5.965s-.359-.719-.359-1.782c0-1.668.967-2.914 2.171-2.914 1.023 0 1.518.769 1.518 1.69 0 1.029-.655 2.568-.994 3.995-.283 1.194.599 2.169 1.777 2.169 2.133 0 3.772-2.249 3.772-5.495 0-2.873-2.064-4.882-5.012-4.882-3.414 0-5.418 2.561-5.418 5.207 0 1.031.397 2.138.893 2.738a.36.36 0 01.083.345l-.333 1.36c-.053.22-.174.267-.402.161-1.499-.698-2.436-2.889-2.436-4.649 0-3.785 2.75-7.262 7.929-7.262 4.163 0 7.398 2.967 7.398 6.931 0 4.136-2.607 7.464-6.227 7.464-1.216 0-2.359-.632-2.75-1.378l-.748 2.853c-.271 1.043-1.002 2.35-1.492 3.146C9.57 23.812 10.763 24 12 24c6.627 0 12-5.373 12-12 0-6.628-5.373-12-12-12z"/>
  </svg>
);

// Yandex Dzen/Rhythm icon component
const YandexRhythmIcon = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className}>
    <path d="M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm0 3.6c4.64 0 8.4 3.76 8.4 8.4 0 4.64-3.76 8.4-8.4 8.4-4.64 0-8.4-3.76-8.4-8.4 0-4.64 3.76-8.4 8.4-8.4zm0 2.4a6 6 0 100 12 6 6 0 000-12z"/>
  </svg>
);

const socialNetworks = [
  {
    name: 'Instagram',
    handle: '@theidea_furniture',
    followers: '125K',
    url: 'https://instagram.com/theidea_furniture',
    iconType: 'instagram' as const,
    images: [heroLiving, heroBedroom],
    color: 'from-purple-500 to-pink-500',
  },
  {
    name: 'Pinterest',
    handle: 'theidea.ru',
    followers: '45K',
    url: 'https://pinterest.com/theidea_furniture',
    iconType: 'pinterest' as const,
    images: [heroDining, manufacturingImg],
    color: 'from-red-500 to-red-600',
  },
  {
    name: 'ВКонтакте',
    handle: 'theidea.furniture',
    followers: '89K',
    url: 'https://vk.com/theidea_furniture',
    iconType: 'vk' as const,
    images: [productSofa, productArmchair],
    color: 'from-blue-500 to-blue-600',
  },
  {
    name: 'Яндекс Ритм',
    handle: 'THE IDEA',
    followers: '32K',
    url: 'https://dzen.ru/theidea',
    iconType: 'yandex' as const,
    images: [manufacturingImg, heroLiving],
    color: 'from-yellow-400 to-red-500',
  },
];

const SocialIcon = ({ type, className }: { type: string; className?: string }) => {
  switch (type) {
    case 'instagram':
      return <Instagram className={className} strokeWidth={1.5} />;
    case 'pinterest':
      return <PinterestIcon className={className} />;
    case 'vk':
      return <VkIcon className={className} />;
    case 'yandex':
      return <YandexRhythmIcon className={className} />;
    default:
      return null;
  }
};

export const SocialProofSection = () => {
  return (
    <section className="py-16 sm:py-24 lg:py-32 bg-card">
      <div className="max-w-[1600px] mx-auto px-4 sm:px-6 lg:px-16">
        {/* Header */}
        <AnimatedSection className="text-center mb-12 lg:mb-16">
          <p className="text-[10px] sm:text-[11px] uppercase tracking-[0.2em] sm:tracking-[0.3em] text-muted-foreground mb-4 sm:mb-6 font-light">
            Социальные сети
          </p>
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-extralight tracking-tight mb-4 sm:mb-6">
            Следите за нами
          </h2>
          <p className="text-base sm:text-lg font-light text-muted-foreground max-w-lg mx-auto">
            Вдохновляйтесь нашими проектами, смотрите закулисье производства и будьте в курсе новинок
          </p>
        </AnimatedSection>

        {/* Social Networks Grid */}
        <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {socialNetworks.map((social) => (
            <StaggerItem key={social.name}>
              <a
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group block relative overflow-hidden bg-background border border-border hover:border-foreground transition-all duration-300"
              >
                {/* Images Grid */}
                <div className="grid grid-cols-2 aspect-[2/1.5]">
                  {social.images.map((image, index) => (
                    <div key={index} className="relative overflow-hidden">
                      <img
                        src={image}
                        alt={`${social.name} content`}
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                  ))}
                  {/* Hover overlay with gradient */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${social.color} opacity-0 group-hover:opacity-70 transition-opacity duration-300 flex items-center justify-center`}>
                    <SocialIcon type={social.iconType} className="w-10 h-10 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-foreground transition-colors">
                      <SocialIcon type={social.iconType} className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="text-sm font-medium">{social.name}</p>
                      <p className="text-xs text-muted-foreground">{social.handle}</p>
                    </div>
                  </div>
                  <div className="flex items-center justify-between">
                    <p className="text-2xl font-extralight">{social.followers}</p>
                    <span className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground">
                      подписчиков
                    </span>
                  </div>
                </div>
              </a>
            </StaggerItem>
          ))}
        </StaggerContainer>
      </div>
    </section>
  );
};