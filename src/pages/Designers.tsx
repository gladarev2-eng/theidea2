import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Percent, Clock, Palette, Box, Users, FileText, Headphones, Truck } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import heroLiving from "@/assets/hero-living-room.jpg";
import heroBedroom from "@/assets/hero-bedroom.jpg";
import heroDining from "@/assets/hero-dining.jpg";
import manufacturing from "@/assets/manufacturing.jpg";

const benefits = [
  {
    icon: Percent,
    title: "Специальные цены",
    description: "Скидки до 25% на весь ассортимент для партнёров-дизайнеров",
  },
  {
    icon: Clock,
    title: "Приоритетные сроки",
    description: "Ускоренное производство и первоочередная отгрузка заказов",
  },
  {
    icon: Palette,
    title: "Индивидуальная отделка",
    description: "Возможность выбора материалов и цветов вне стандартной палитры",
  },
  {
    icon: Box,
    title: "3D-модели и чертежи",
    description: "Полная библиотека моделей для ваших проектов в форматах 3ds, obj, fbx",
  },
  {
    icon: Users,
    title: "Персональный менеджер",
    description: "Выделенный специалист для оперативного решения любых вопросов",
  },
  {
    icon: Headphones,
    title: "Техническая поддержка",
    description: "Консультации по интеграции мебели в проект на любом этапе",
  },
];

const loyaltyLevels = [
  {
    name: "Партнёр",
    discount: "10%",
    requirements: "Регистрация в программе",
    perks: ["Скидка 10%", "Доступ к 3D-библиотеке", "Персональный менеджер"],
  },
  {
    name: "Серебряный",
    discount: "15%",
    requirements: "От 500 000 ₽ в год",
    perks: ["Скидка 15%", "Приоритетное производство", "Бесплатная доставка"],
  },
  {
    name: "Золотой",
    discount: "20%",
    requirements: "От 1 500 000 ₽ в год",
    perks: ["Скидка 20%", "Индивидуальные решения", "VIP-поддержка 24/7"],
  },
  {
    name: "Платиновый",
    discount: "25%",
    requirements: "От 5 000 000 ₽ в год",
    perks: ["Скидка 25%", "Эксклюзивные коллекции", "Совместные проекты"],
  },
];

const services = [
  {
    title: "Комплектация проектов",
    description: "Подберём всю мебель для вашего проекта: от концепции до реализации. Работаем с объектами любого масштаба — от квартир до гостиниц.",
    image: heroLiving,
  },
  {
    title: "Индивидуальное производство",
    description: "Изготовим мебель по вашим эскизам или адаптируем существующие модели под требования проекта. Любые размеры, материалы, отделки.",
    image: manufacturing,
  },
  {
    title: "Контрактные поставки",
    description: "Опыт работы с HoReCa-сегментом: отели, рестораны, офисы. Гарантируем сроки и качество при серийном производстве.",
    image: heroDining,
  },
];

const steps = [
  { number: "01", title: "Регистрация", description: "Заполните форму и получите доступ к личному кабинету" },
  { number: "02", title: "Подтверждение", description: "Менеджер свяжется для уточнения деталей сотрудничества" },
  { number: "03", title: "Доступ", description: "Получите специальные цены и полную библиотеку материалов" },
  { number: "04", title: "Работа", description: "Создавайте проекты с нашей мебелью и растите в программе лояльности" },
];

const Designers = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[80vh] min-h-[600px] flex items-end">
        <div className="absolute inset-0">
          <img
            src={heroBedroom}
            alt="Интерьер для дизайнеров"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        </div>

        <div className="relative container-wide pb-16 lg:pb-24 text-white">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-white/70 mb-6">
              Программа для дизайнеров
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tight mb-6">
              Создавайте вместе с нами
            </h1>
            <p className="text-xl text-white/80 font-light mb-10">
              Специальные условия, персональный сервис и безграничные 
              возможности для реализации ваших проектов
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#register"
                className="px-8 py-4 rounded-full bg-white text-foreground text-[11px] uppercase tracking-[0.2em] hover:bg-white/90 transition-colors text-center"
              >
                Стать партнёром
              </a>
              <a
                href="#benefits"
                className="px-8 py-4 rounded-full border border-white/30 text-[11px] uppercase tracking-[0.2em] hover:bg-white/10 transition-colors text-center"
              >
                Узнать больше
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-b border-border">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-4xl font-extralight mb-2">500+</p>
              <p className="text-sm text-muted-foreground">Дизайнеров-партнёров</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-extralight mb-2">25%</p>
              <p className="text-sm text-muted-foreground">Максимальная скидка</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-extralight mb-2">1000+</p>
              <p className="text-sm text-muted-foreground">3D-моделей</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-extralight mb-2">24/7</p>
              <p className="text-sm text-muted-foreground">Поддержка партнёров</p>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section id="benefits" className="py-24 lg:py-32">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 lg:mb-20"
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Преимущества
            </p>
            <h2 className="text-3xl lg:text-4xl font-extralight tracking-tight mb-4">
              Почему дизайнеры выбирают нас
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Мы создали программу, которая делает сотрудничество 
              максимально удобным и выгодным для профессионалов
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-12">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-8 border border-border hover:border-foreground transition-colors group"
              >
                <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center mb-6 group-hover:border-foreground transition-colors">
                  <benefit.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-medium mb-3">{benefit.title}</h3>
                <p className="text-muted-foreground">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Loyalty Program */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 lg:mb-20"
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Программа лояльности
            </p>
            <h2 className="text-3xl lg:text-4xl font-extralight tracking-tight mb-4">
              Растите вместе с нами
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Чем больше проектов — тем выгоднее условия. 
              Четыре уровня партнёрства с растущими привилегиями.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {loyaltyLevels.map((level, index) => (
              <motion.div
                key={level.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`p-8 ${
                  index === loyaltyLevels.length - 1 
                    ? 'bg-foreground text-background' 
                    : 'bg-background border border-border'
                }`}
              >
                <p className={`text-[10px] uppercase tracking-[0.2em] mb-4 ${
                  index === loyaltyLevels.length - 1 ? 'text-background/60' : 'text-muted-foreground'
                }`}>
                  {level.name}
                </p>
                <p className="text-5xl font-extralight mb-2">{level.discount}</p>
                <p className={`text-sm mb-6 ${
                  index === loyaltyLevels.length - 1 ? 'text-background/60' : 'text-muted-foreground'
                }`}>
                  {level.requirements}
                </p>
                <ul className="space-y-3">
                  {level.perks.map((perk) => (
                    <li key={perk} className="flex items-center gap-2 text-sm">
                      <span className={`w-1 h-1 rounded-full ${
                        index === loyaltyLevels.length - 1 ? 'bg-background' : 'bg-foreground'
                      }`} />
                      {perk}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 lg:py-32">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 lg:mb-20"
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Услуги
            </p>
            <h2 className="text-3xl lg:text-4xl font-extralight tracking-tight">
              Что мы можем для вас
            </h2>
          </motion.div>

          <div className="space-y-24">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center ${
                  index % 2 === 1 ? 'lg:flex-row-reverse' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="relative aspect-[4/3] overflow-hidden">
                    <img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={index % 2 === 1 ? 'lg:order-1' : ''}>
                  <h3 className="text-2xl lg:text-3xl font-light tracking-tight mb-6">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed mb-8">
                    {service.description}
                  </p>
                  <a
                    href="#register"
                    className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] hover:gap-4 transition-all group"
                  >
                    Обсудить проект
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 lg:mb-20"
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Как начать
            </p>
            <h2 className="text-3xl lg:text-4xl font-extralight tracking-tight">
              Четыре шага к сотрудничеству
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-6xl font-extralight text-muted-foreground/30 mb-4">
                  {step.number}
                </p>
                <h3 className="text-xl font-medium mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA / Registration */}
      <section id="register" className="py-24 lg:py-32 bg-foreground text-background">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[11px] uppercase tracking-[0.3em] text-background/60 mb-6">
                Присоединяйтесь
              </p>
              <h2 className="text-3xl lg:text-5xl font-extralight tracking-tight mb-6">
                Станьте частью профессионального сообщества
              </h2>
              <p className="text-background/70 leading-relaxed mb-8">
                Более 500 дизайнеров уже работают с нами. Получите доступ к 
                эксклюзивным условиям, материалам и поддержке экспертов.
              </p>
              <ul className="space-y-4 mb-10">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-background" />
                  <span>Мгновенный доступ к 3D-библиотеке</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-background" />
                  <span>Скидка 10% с первого заказа</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-background" />
                  <span>Персональный менеджер</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="bg-background/10 backdrop-blur-sm p-8 lg:p-12"
            >
              <h3 className="text-2xl font-light mb-8">Заявка на партнёрство</h3>
              <form className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    className="w-full px-0 py-4 bg-transparent border-b border-background/30 text-background placeholder:text-background/50 focus:border-background outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="email"
                    placeholder="Email"
                    className="w-full px-0 py-4 bg-transparent border-b border-background/30 text-background placeholder:text-background/50 focus:border-background outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="tel"
                    placeholder="Телефон"
                    className="w-full px-0 py-4 bg-transparent border-b border-background/30 text-background placeholder:text-background/50 focus:border-background outline-none transition-colors"
                  />
                </div>
                <div>
                  <input
                    type="text"
                    placeholder="Название студии / компании"
                    className="w-full px-0 py-4 bg-transparent border-b border-background/30 text-background placeholder:text-background/50 focus:border-background outline-none transition-colors"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-background text-foreground text-[11px] uppercase tracking-[0.2em] hover:bg-background/90 transition-colors mt-8"
                >
                  Отправить заявку
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Secondary CTA */}
      <section className="py-16 border-b border-border">
        <div className="container-wide">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-2xl font-light mb-2">Остались вопросы?</h3>
              <p className="text-muted-foreground">
                Свяжитесь с нами — менеджер ответит в течение часа
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="tel:88002225043"
                className="px-8 py-4 rounded-full border border-border hover:border-foreground text-[11px] uppercase tracking-[0.2em] transition-colors text-center"
              >
                8 800 222-50-43
              </a>
              <a
                href="mailto:designers@theidea.ru"
                className="px-8 py-4 rounded-full bg-foreground text-background text-[11px] uppercase tracking-[0.2em] hover:bg-foreground/90 transition-colors text-center"
              >
                designers@theidea.ru
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Designers;
