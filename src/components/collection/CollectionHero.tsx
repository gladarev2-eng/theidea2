import { motion } from 'framer-motion';

interface CollectionHeroProps {
  name: string;
  tagline: string;
  description: string;
  image: string;
}

const CollectionHero = ({ name, tagline, description, image }: CollectionHeroProps) => {
  return (
    <section className="relative h-[85vh] min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <motion.div
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2, ease: 'easeOut' }}
        className="absolute inset-0"
      >
        <img
          src={image}
          alt={name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
      </motion.div>

      {/* Content */}
      <div className="absolute inset-0 flex items-end">
        <div className="container-wide pb-16 lg:pb-24">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="max-w-3xl text-white"
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/70 mb-4">
              {tagline}
            </p>
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-extralight tracking-tight mb-6">
              {name}
            </h1>
            <p className="text-lg md:text-xl text-white/80 font-light leading-relaxed max-w-2xl">
              {description}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CollectionHero;
