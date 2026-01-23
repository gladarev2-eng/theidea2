import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ChevronDown, Download, FileBox } from "lucide-react";
import { toast } from "sonner";

interface Spec {
  label: string;
  value: string;
}

interface ProductSpecsProps {
  specs: Spec[];
  productName?: string;
}

const ProductSpecs = ({ specs, productName = "товар" }: ProductSpecsProps) => {
  const [expandedSection, setExpandedSection] = useState<string | null>("specs");

  const toggleSection = (section: string) => {
    setExpandedSection(expandedSection === section ? null : section);
  };

  const handle3DRequest = () => {
    toast.success("Заявка на 3D-модель отправлена", {
      description: "Мы свяжемся с вами в течение рабочего дня",
    });
  };

  const careInstructions = [
    "Протирайте пыль мягкой сухой тканью",
    "Избегайте прямых солнечных лучей",
    "Используйте специальные средства для натуральных материалов",
    "При появлении пятен обращайтесь к специалистам",
  ];

  const deliveryInfo = [
    { label: "Санкт-Петербург", value: "Бесплатно от 50 000 ₽" },
    { label: "Москва", value: "Бесплатно от 100 000 ₽" },
    { label: "Россия", value: "Рассчитывается индивидуально" },
    { label: "Сборка", value: "Включена в стоимость" },
  ];

  return (
    <section className="py-12 md:py-24">
      <div className="container-wide max-w-4xl">
        {/* 3D Model Request */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-6 md:mb-8 p-5 md:p-8 bg-muted/30 border border-border"
        >
          <div className="flex flex-col md:flex-row md:items-start justify-between gap-4 md:gap-6">
            <div className="flex-1">
              <div className="flex items-center gap-2 md:gap-3 mb-2 md:mb-3">
                <FileBox className="w-5 h-5 md:w-6 md:h-6" strokeWidth={1.5} />
                <h3 className="text-base md:text-lg font-medium">3D-модель для проекта</h3>
              </div>
              <p className="text-xs md:text-sm text-muted-foreground">
                Получите 3D-модель в форматах 3ds, obj, fbx для использования в ваших проектах. 
                Доступно для дизайнеров-партнёров.
              </p>
            </div>
            <button
              onClick={handle3DRequest}
              className="flex-shrink-0 flex items-center justify-center gap-2 px-5 md:px-6 py-2.5 md:py-3 rounded-full border border-foreground text-[10px] md:text-[11px] uppercase tracking-[0.15em] font-medium hover:bg-foreground hover:text-background transition-all duration-300 w-full md:w-auto"
            >
              <Download className="w-4 h-4" />
              Запросить 3D
            </button>
          </div>
        </motion.div>

        {/* Technical Specs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <button
            onClick={() => toggleSection("specs")}
            className="w-full flex items-center justify-between py-4 md:py-6 border-b border-border group"
          >
            <h2 className="text-lg md:text-2xl font-light tracking-tight">
              Технические характеристики
            </h2>
            <ChevronDown
              className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 ${
                expandedSection === "specs" ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {expandedSection === "specs" && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="py-4 md:py-8 space-y-0">
                  {specs.map((spec, index) => (
                    <div
                      key={index}
                      className="flex justify-between py-3 md:py-4 border-b border-border/50 text-sm md:text-base"
                    >
                      <span className="text-muted-foreground">{spec.label}</span>
                      <span className="font-medium text-right">{spec.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
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
            onClick={() => toggleSection("care")}
            className="w-full flex items-center justify-between py-4 md:py-6 border-b border-border group"
          >
            <h2 className="text-lg md:text-2xl font-light tracking-tight">
              Уход за изделием
            </h2>
            <ChevronDown
              className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 ${
                expandedSection === "care" ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {expandedSection === "care" && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <ul className="py-4 md:py-8 space-y-3 md:space-y-4">
                  {careInstructions.map((item, index) => (
                    <li key={index} className="flex items-start gap-2 md:gap-3 text-sm md:text-base">
                      <span className="w-1.5 h-1.5 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
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
            onClick={() => toggleSection("delivery")}
            className="w-full flex items-center justify-between py-4 md:py-6 border-b border-border group"
          >
            <h2 className="text-lg md:text-2xl font-light tracking-tight">
              Доставка и сборка
            </h2>
            <ChevronDown
              className={`w-5 h-5 md:w-6 md:h-6 transition-transform duration-300 ${
                expandedSection === "delivery" ? "rotate-180" : ""
              }`}
            />
          </button>

          <AnimatePresence>
            {expandedSection === "delivery" && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="py-4 md:py-8 space-y-0">
                  {deliveryInfo.map((item, index) => (
                    <div
                      key={index}
                      className="flex justify-between py-3 md:py-4 border-b border-border/50 text-sm md:text-base"
                    >
                      <span className="text-muted-foreground">{item.label}</span>
                      <span className="font-medium text-right">{item.value}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductSpecs;