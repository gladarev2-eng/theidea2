import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { MessageCircle, Phone } from "lucide-react";

interface ProductCTAProps {
  productName: string;
}

const ProductCTA = ({ productName }: ProductCTAProps) => {
  return (
    <section className="py-24 bg-foreground text-background">
      <div className="container-wide">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-5xl font-light tracking-tight mb-6">
            Понравился предмет?
          </h2>
          <p className="text-lg text-background/70 mb-10 max-w-xl mx-auto">
            Наши специалисты помогут подобрать оптимальную конфигурацию, 
            расскажут о материалах и сроках изготовления
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="outline"
              className="h-14 px-8 rounded-full border-background/30 text-background hover:bg-background hover:text-foreground transition-all"
            >
              <Phone className="w-5 h-5 mr-3" />
              Заказать звонок
            </Button>
            <Button
              className="h-14 px-8 rounded-full bg-background text-foreground hover:bg-background/90"
            >
              <MessageCircle className="w-5 h-5 mr-3" />
              Написать в WhatsApp
            </Button>
          </div>

          <p className="text-sm text-background/50 mt-8">
            Ответим в течение 15 минут в рабочее время
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductCTA;
