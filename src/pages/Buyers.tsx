import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import { Truck, CreditCard, RotateCcw, Clock, Shield, Package, ChevronDown, MapPin, Phone } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const highlights = [
  { icon: Truck, title: "Доставка по всей России", description: "Собственная служба и надёжные партнёры" },
  { icon: Clock, title: "Точные сроки", description: "Производство от 4 недель" },
  { icon: Shield, title: "Гарантия 2 года", description: "На всю продукцию" },
  { icon: Package, title: "Бережная упаковка", description: "Многослойная защита" },
];

const deliveryOptions = [
  {
    title: "Доставка по Санкт-Петербургу",
    price: "Бесплатно",
    condition: "при заказе от 50 000 ₽",
    details: [
      "Подъём на этаж включён",
      "Сборка мебели включена",
      "Вынос упаковки",
      "Доставка в удобное время",
    ],
  },
  {
    title: "Доставка по Москве",
    price: "Бесплатно",
    condition: "при заказе от 100 000 ₽",
    details: [
      "Подъём на грузовом лифте",
      "Сборка мебели включена",
      "Доставка до подъезда при заказе менее 100 000 ₽",
      "Стоимость подъёма — от 500 ₽/этаж",
    ],
  },
  {
    title: "Доставка по России",
    price: "Рассчитывается индивидуально",
    condition: "в зависимости от региона",
    details: [
      "Транспортные компании: Деловые линии, ПЭК, СДЭК",
      "Срок доставки: 3-14 дней",
      "Страхование груза включено",
      "Отслеживание на всём пути",
    ],
  },
];

const paymentMethods = [
  {
    title: "Банковской картой",
    description: "Visa, Mastercard, МИР. Безопасная оплата через защищённое соединение.",
    icon: CreditCard,
  },
  {
    title: "Банковским переводом",
    description: "Для юридических лиц. Счёт формируется автоматически после оформления заказа.",
    icon: Package,
  },
  {
    title: "Рассрочка",
    description: "Рассрочка от банков-партнёров на срок до 12 месяцев без переплаты.",
    icon: Clock,
  },
];

const faqItems = [
  {
    question: "Какой срок изготовления мебели?",
    answer: "Стандартный срок изготовления — 4-6 недель в зависимости от сложности заказа. Для партнёров-дизайнеров доступно ускоренное производство. Точные сроки указываются в подтверждении заказа.",
  },
  {
    question: "Можно ли изменить размеры или материалы?",
    answer: "Да, мы предлагаем услугу индивидуальной адаптации. Вы можете изменить размеры в пределах конструктивных возможностей, выбрать другую ткань или отделку. Стоимость рассчитывается индивидуально.",
  },
  {
    question: "Как осуществляется доставка крупногабаритной мебели?",
    answer: "Крупногабаритная мебель доставляется в разобранном виде и собирается на месте нашими специалистами. Подъём на этаж возможен при ширине лестничных пролётов от 80 см или наличии грузового лифта.",
  },
  {
    question: "Что входит в гарантию?",
    answer: "Гарантия 2 года распространяется на конструктивные элементы, механизмы и фурнитуру. Мы бесплатно устраняем производственные дефекты. На ткани действует отдельная гарантия от производителя.",
  },
  {
    question: "Можно ли вернуть или обменять мебель?",
    answer: "Мебель надлежащего качества, изготовленная по индивидуальному заказу, обмену и возврату не подлежит. При обнаружении производственного брака мы заменим изделие или вернём деньги.",
  },
  {
    question: "Есть ли у вас шоурумы?",
    answer: "Да, наши шоурумы работают в Санкт-Петербурге, Москве и ещё 15 городах России. Там вы можете увидеть мебель вживую, оценить качество материалов и получить консультацию.",
  },
  {
    question: "Работаете ли вы с дизайнерами?",
    answer: "Да, у нас есть специальная программа для дизайнеров с выгодными условиями: скидки до 25%, приоритетное производство, 3D-модели и персональный менеджер.",
  },
  {
    question: "Как ухаживать за мебелью?",
    answer: "К каждому заказу прилагается инструкция по уходу. Общие рекомендации: протирать пыль мягкой тканью, избегать прямых солнечных лучей, использовать специальные средства для конкретных материалов.",
  },
];

const FAQItem = ({ question, answer, isOpen, onClick }: { 
  question: string; 
  answer: string; 
  isOpen: boolean; 
  onClick: () => void;
}) => (
  <div className="border-b border-border">
    <button
      onClick={onClick}
      className="w-full py-6 flex items-center justify-between text-left group"
    >
      <span className="text-lg font-light pr-8">{question}</span>
      <ChevronDown 
        className={`w-5 h-5 flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} 
      />
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="overflow-hidden"
        >
          <p className="pb-6 text-muted-foreground leading-relaxed">
            {answer}
          </p>
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

const Buyers = () => {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="pt-32 pb-16 lg:pt-40 lg:pb-24">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
              Покупателям
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tight mb-8">
              Всё, что нужно знать о покупке
            </h1>
            <p className="text-xl text-muted-foreground font-light">
              Доставка, оплата, гарантии и ответы на частые вопросы. 
              Мы сделали процесс покупки максимально простым и прозрачным.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Highlights */}
      <section className="py-12 border-y border-border">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-4 h-4" strokeWidth={1.5} />
                </div>
                <div>
                  <p className="font-medium mb-1">{item.title}</p>
                  <p className="text-sm text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Delivery */}
      <section id="delivery" className="py-24 lg:py-32">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <Truck className="w-6 h-6" strokeWidth={1.5} />
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                Доставка
              </p>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extralight tracking-tight">
              Варианты доставки
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {deliveryOptions.map((option, index) => (
              <motion.div
                key={option.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 border border-border"
              >
                <h3 className="text-xl font-medium mb-2">{option.title}</h3>
                <p className="text-2xl font-light mb-1">{option.price}</p>
                <p className="text-sm text-muted-foreground mb-6">{option.condition}</p>
                <ul className="space-y-3">
                  {option.details.map((detail) => (
                    <li key={detail} className="flex items-start gap-2 text-sm">
                      <span className="w-1 h-1 rounded-full bg-foreground mt-2 flex-shrink-0" />
                      {detail}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Payment */}
      <section id="payment" className="py-24 lg:py-32 bg-muted/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <div className="flex items-center gap-4 mb-6">
              <CreditCard className="w-6 h-6" strokeWidth={1.5} />
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                Оплата
              </p>
            </div>
            <h2 className="text-3xl lg:text-4xl font-extralight tracking-tight">
              Способы оплаты
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {paymentMethods.map((method, index) => (
              <motion.div
                key={method.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center flex-shrink-0">
                  <method.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-lg font-medium mb-2">{method.title}</h3>
                  <p className="text-muted-foreground text-sm">{method.description}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mt-16 p-8 bg-background border border-border"
          >
            <h3 className="text-lg font-medium mb-4">Порядок оплаты</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div>
                <p className="text-3xl font-extralight mb-2">50%</p>
                <p className="text-sm text-muted-foreground">Предоплата при оформлении заказа</p>
              </div>
              <div>
                <p className="text-3xl font-extralight mb-2">50%</p>
                <p className="text-sm text-muted-foreground">Перед отгрузкой готового заказа</p>
              </div>
              <div>
                <p className="text-3xl font-extralight mb-2">100%</p>
                <p className="text-sm text-muted-foreground">Возможна полная оплата со скидкой 3%</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Returns */}
      <section id="returns" className="py-24 lg:py-32">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="flex items-center gap-4 mb-6">
                <RotateCcw className="w-6 h-6" strokeWidth={1.5} />
                <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground">
                  Гарантия и возврат
                </p>
              </div>
              <h2 className="text-3xl lg:text-4xl font-extralight tracking-tight mb-8">
                Мы уверены в качестве
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                На всю продукцию предоставляется гарантия 2 года. 
                Мы несём ответственность за качество материалов, 
                конструкции и сборки каждого предмета.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="p-6 border border-border">
                <h3 className="font-medium mb-2">Гарантийные случаи</h3>
                <p className="text-sm text-muted-foreground">
                  Производственный брак, дефекты материалов, поломка механизмов 
                  при нормальной эксплуатации. Бесплатный ремонт или замена.
                </p>
              </div>
              <div className="p-6 border border-border">
                <h3 className="font-medium mb-2">Не является гарантийным случаем</h3>
                <p className="text-sm text-muted-foreground">
                  Механические повреждения, следы неправильной эксплуатации, 
                  естественный износ материалов, повреждения при самостоятельной сборке.
                </p>
              </div>
              <div className="p-6 border border-border">
                <h3 className="font-medium mb-2">Возврат</h3>
                <p className="text-sm text-muted-foreground">
                  Мебель, изготовленная по индивидуальному заказу, возврату не подлежит. 
                  Серийные изделия можно вернуть в течение 7 дней при сохранении товарного вида.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              FAQ
            </p>
            <h2 className="text-3xl lg:text-4xl font-extralight tracking-tight">
              Частые вопросы
            </h2>
          </motion.div>

          <div className="max-w-3xl">
            {faqItems.map((item, index) => (
              <FAQItem
                key={index}
                question={item.question}
                answer={item.answer}
                isOpen={openFAQ === index}
                onClick={() => setOpenFAQ(openFAQ === index ? null : index)}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 lg:py-32 bg-foreground text-background">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl lg:text-4xl font-extralight tracking-tight mb-6">
              Остались вопросы?
            </h2>
            <p className="text-background/60 mb-10">
              Наши консультанты готовы помочь с выбором, 
              рассчитать доставку или оформить заказ
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:88002225043"
                className="px-8 py-4 rounded-full bg-background text-foreground text-[11px] uppercase tracking-[0.2em] hover:bg-background/90 transition-colors inline-flex items-center justify-center gap-2"
              >
                <Phone className="w-4 h-4" />
                8 800 222-50-43
              </a>
              <Link
                to="/contacts"
                className="px-8 py-4 rounded-full border border-background/30 text-[11px] uppercase tracking-[0.2em] hover:bg-background/10 transition-colors inline-flex items-center justify-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                Найти шоурум
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Buyers;
