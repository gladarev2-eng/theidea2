import { motion } from 'framer-motion';

interface Advantage {
  title: string;
  description: string;
}

interface CollectionAdvantagesProps {
  advantages: Advantage[];
}

const CollectionAdvantages = ({ advantages }: CollectionAdvantagesProps) => {
  return (
    <section className="py-24 bg-muted/30">
      <div className="container-wide">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-12"
        >
          Преимущества
        </motion.p>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="space-y-3"
            >
              <div className="w-12 h-px bg-foreground/30" />
              <h3 className="text-lg font-medium">
                {advantage.title}
              </h3>
              <p className="text-muted-foreground font-light leading-relaxed">
                {advantage.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CollectionAdvantages;
