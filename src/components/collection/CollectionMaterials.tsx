import { motion } from 'framer-motion';

interface Material {
  name: string;
  description?: string;
  image?: string;
  options?: string[];
}

interface Decor {
  name: string;
  colors: { name: string; hex: string }[];
}

interface CollectionMaterialsProps {
  materials: Material[];
  decors: Decor[];
  galleryImages: string[];
}

const CollectionMaterials = ({ materials, decors, galleryImages }: CollectionMaterialsProps) => {
  return (
    <section className="py-24 lg:py-32 bg-foreground text-background">
      <div className="container-wide">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <p className="text-[11px] uppercase tracking-[0.3em] text-background/50 mb-4">
            Материалы и декоры
          </p>
          <h2 className="text-3xl lg:text-5xl font-extralight tracking-tight">
            Качество в деталях
          </h2>
        </motion.div>

        {/* Gallery */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-2 mb-16"
        >
          {galleryImages.slice(0, 4).map((image, index) => (
            <div 
              key={index} 
              className={`overflow-hidden ${index === 0 ? 'col-span-2 row-span-2' : ''}`}
            >
              <img
                src={image}
                alt={`Галерея ${index + 1}`}
                className="w-full h-full object-cover aspect-square hover:scale-105 transition-transform duration-700"
              />
            </div>
          ))}
        </motion.div>

        {/* Materials & Decors Grid */}
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Materials */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-xl font-medium mb-8 pb-4 border-b border-background/20">
              Материалы
            </h3>
            <div className="space-y-6">
              {materials.map((material, index) => (
                <div key={index} className="flex justify-between items-start gap-4">
                  <div>
                    <p className="font-medium mb-1">{material.name}</p>
                    {material.description && (
                      <p className="text-sm text-background/60">{material.description}</p>
                    )}
                  </div>
                  {material.options && (
                    <div className="flex flex-wrap gap-2 justify-end">
                      {material.options.slice(0, 3).map((option, i) => (
                        <span 
                          key={i}
                          className="text-xs px-2 py-1 border border-background/30 rounded-full"
                        >
                          {option}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>

          {/* Decors */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-xl font-medium mb-8 pb-4 border-b border-background/20">
              Палитра отделки
            </h3>
            <div className="space-y-8">
              {decors.map((decor, index) => (
                <div key={index}>
                  <p className="text-sm text-background/60 mb-4">{decor.name}</p>
                  <div className="flex flex-wrap gap-3">
                    {decor.colors.map((color, i) => (
                      <div key={i} className="flex items-center gap-2">
                        <div 
                          className="w-8 h-8 rounded-full border border-background/20"
                          style={{ backgroundColor: color.hex }}
                        />
                        <span className="text-sm">{color.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CollectionMaterials;
