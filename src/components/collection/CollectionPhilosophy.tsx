import { motion } from 'framer-motion';

interface CollectionPhilosophyProps {
  philosophy: string;
  image?: string;
}

const CollectionPhilosophy = ({ philosophy, image }: CollectionPhilosophyProps) => {
  return (
    <section className="py-24 lg:py-32">
      <div className="container-wide">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Философия
            </p>
            <blockquote className="text-2xl md:text-3xl lg:text-4xl font-extralight leading-relaxed text-foreground/90">
              «{philosophy}»
            </blockquote>
          </motion.div>

          {image && (
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="aspect-[4/3] overflow-hidden"
            >
              <img
                src={image}
                alt="Философия коллекции"
                className="w-full h-full object-cover"
              />
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
};

export default CollectionPhilosophy;
