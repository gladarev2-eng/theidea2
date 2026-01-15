import { motion } from "framer-motion";
import { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Spec {
  label: string;
  value: string;
}

interface ProductSpecsProps {
  specs: Spec[];
}

const ProductSpecs = ({ specs }: ProductSpecsProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section className="py-24">
      <div className="container-wide max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex items-center justify-between py-6 border-b border-border group"
          >
            <h2 className="text-2xl font-light tracking-tight">
              Технические характеристики
            </h2>
            <ChevronDown
              className={`w-6 h-6 transition-transform duration-300 ${
                isExpanded ? "rotate-180" : ""
              }`}
            />
          </button>

          <motion.div
            initial={false}
            animate={{
              height: isExpanded ? "auto" : 0,
              opacity: isExpanded ? 1 : 0,
            }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden"
          >
            <div className="py-8 space-y-0">
              {specs.map((spec, index) => (
                <div
                  key={index}
                  className="flex justify-between py-4 border-b border-border/50"
                >
                  <span className="text-muted-foreground">{spec.label}</span>
                  <span className="font-medium">{spec.value}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>

        {/* Care Instructions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-2"
        >
          <button
            className="w-full flex items-center justify-between py-6 border-b border-border group"
          >
            <h2 className="text-2xl font-light tracking-tight">
              Уход за изделием
            </h2>
            <ChevronDown className="w-6 h-6" />
          </button>
        </motion.div>

        {/* Delivery */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-2"
        >
          <button
            className="w-full flex items-center justify-between py-6 border-b border-border group"
          >
            <h2 className="text-2xl font-light tracking-tight">
              Доставка и сборка
            </h2>
            <ChevronDown className="w-6 h-6" />
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSpecs;
