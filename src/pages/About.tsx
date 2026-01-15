import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Award, Users, Factory, Heart } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

import heroLiving from "@/assets/hero-living-room.jpg";
import heroBedroom from "@/assets/hero-bedroom.jpg";
import heroDining from "@/assets/hero-dining.jpg";
import manufacturing from "@/assets/manufacturing.jpg";
import productSofa from "@/assets/product-sofa.jpg";

const stats = [
  { value: "12+", label: "Лет на рынке" },
  { value: "50+", label: "Коллекций" },
  { value: "10 000+", label: "Реализованных проектов" },
  { value: "150+", label: "Человек в команде" },
];

const values = [
  {
    icon: Award,
    title: "Качество без компромиссов",
    description: "Каждый предмет проходит многоступенчатый контроль качества. Мы используем только проверенные материалы от надёжных поставщиков.",
  },
  {
    icon: Factory,
    title: "Собственное производство",
    description: "Полный цикл производства в Санкт-Петербурге позволяет контролировать качество на каждом этапе и гибко подходить к индивидуальным заказам.",
  },
  {
    icon: Users,
    title: "Команда профессионалов",
    description: "Дизайнеры, конструкторы и мастера работают в тесном сотрудничестве, чтобы каждый предмет был идеален.",
  },
  {
    icon: Heart,
    title: "Любовь к деталям",
    description: "Мы верим, что красота — в деталях. Скрытые механизмы, идеальные швы, тактильные материалы — всё имеет значение.",
  },
];

const timeline = [
  { year: "2012", title: "Основание", description: "Первая мастерская в Санкт-Петербурге. Команда из 5 человек." },
  { year: "2015", title: "Первая коллекция", description: "Запуск коллекции Bergen, которая стала бестселлером." },
  { year: "2018", title: "Новое производство", description: "Открытие современной фабрики площадью 5000 м²." },
  { year: "2020", title: "Расширение", description: "Сеть шоурумов в 15 городах России." },
  { year: "2023", title: "Сегодня", description: "150+ человек в команде, 50+ коллекций, международное признание." },
];

const team = [
  { name: "Алексей Волков", role: "Основатель и CEO", image: heroLiving },
  { name: "Мария Соколова", role: "Креативный директор", image: heroBedroom },
  { name: "Дмитрий Петров", role: "Директор производства", image: manufacturing },
  { name: "Анна Козлова", role: "Главный дизайнер", image: heroDining },
];

const About = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero */}
      <section className="relative h-[80vh] min-h-[600px] flex items-end">
        <div className="absolute inset-0">
          <img
            src={manufacturing}
            alt="Производство The Idea"
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
              О компании
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tight mb-6">
              Создаём мебель, которая вдохновляет
            </h1>
            <p className="text-xl text-white/80 font-light">
              12 лет мы проектируем и производим дизайнерскую мебель 
              в Санкт-Петербурге. Каждый предмет — результат любви к деталям.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 lg:py-20 border-b border-border">
        <div className="container-wide">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <p className="text-4xl lg:text-5xl font-extralight mb-2">{stat.value}</p>
                <p className="text-sm text-muted-foreground">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 lg:py-32">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
                Наша миссия
              </p>
              <h2 className="text-3xl lg:text-5xl font-extralight tracking-tight mb-8">
                Делать премиальный дизайн доступным
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Мы верим, что качественная дизайнерская мебель не должна быть привилегией 
                избранных. Собственное производство в России позволяет нам создавать 
                предметы мирового уровня по справедливой цене.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Каждая коллекция The Idea — это результат работы команды дизайнеров, 
                конструкторов и мастеров, объединённых общей страстью к совершенству.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-[4/3] overflow-hidden"
            >
              <img
                src={heroLiving}
                alt="Интерьер с мебелью The Idea"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
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
              Наши ценности
            </p>
            <h2 className="text-3xl lg:text-4xl font-extralight tracking-tight">
              Что делает нас особенными
            </h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex gap-6"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-full border border-border flex items-center justify-center">
                  <value.icon className="w-5 h-5" strokeWidth={1.5} />
                </div>
                <div>
                  <h3 className="text-xl font-medium mb-3">{value.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Production */}
      <section className="py-24 lg:py-32">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative aspect-[4/3] overflow-hidden order-2 lg:order-1"
            >
              <img
                src={manufacturing}
                alt="Производство"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="order-1 lg:order-2"
            >
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
                Производство
              </p>
              <h2 className="text-3xl lg:text-4xl font-extralight tracking-tight mb-8">
                Фабрика в Санкт-Петербурге
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                Наша фабрика площадью 5000 м² оснащена современным оборудованием 
                от ведущих европейских производителей. Это позволяет сочетать 
                точность станков с ручной работой мастеров.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                  <span>Полный цикл производства</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                  <span>Европейское оборудование</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                  <span>Собственная лаборатория качества</span>
                </li>
                <li className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                  <span>Экологичные материалы</span>
                </li>
              </ul>
              <Link
                to="/contacts"
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] hover:gap-4 transition-all group"
              >
                Посетить производство
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mb-16 lg:mb-20"
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              История
            </p>
            <h2 className="text-3xl lg:text-4xl font-extralight tracking-tight">
              Наш путь
            </h2>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-border -translate-x-1/2" />

            <div className="space-y-12 lg:space-y-0">
              {timeline.map((item, index) => (
                <motion.div
                  key={item.year}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className={`lg:flex lg:items-center lg:gap-16 ${
                    index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className={`lg:w-1/2 ${index % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                    <p className="text-4xl font-extralight text-muted-foreground mb-2">{item.year}</p>
                    <h3 className="text-xl font-medium mb-2">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                  <div className="hidden lg:flex items-center justify-center relative z-10">
                    <div className="w-4 h-4 rounded-full bg-foreground" />
                  </div>
                  <div className="lg:w-1/2" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-24 lg:py-32">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 lg:mb-20"
          >
            <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
              Команда
            </p>
            <h2 className="text-3xl lg:text-4xl font-extralight tracking-tight mb-4">
              Люди, которые создают The Idea
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              За каждым предметом стоит команда увлечённых профессионалов — 
              от дизайнеров до мастеров на производстве.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="relative aspect-square overflow-hidden bg-muted mb-6">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="font-medium mb-1">{member.name}</h3>
                <p className="text-sm text-muted-foreground">{member.role}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container-wide">
          <motion.blockquote
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <p className="text-2xl lg:text-4xl font-extralight leading-relaxed mb-8">
              «Мы не просто делаем мебель. Мы создаём пространство, 
              в котором хочется жить, работать и вдохновляться.»
            </p>
            <footer>
              <p className="font-medium">Алексей Волков</p>
              <p className="text-sm text-muted-foreground">Основатель The Idea</p>
            </footer>
          </motion.blockquote>
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
              Готовы создать ваш идеальный интерьер?
            </h2>
            <p className="text-background/60 mb-10">
              Посетите наш шоурум, чтобы увидеть коллекции вживую, 
              или закажите консультацию дизайнера онлайн.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contacts"
                className="px-8 py-4 rounded-full bg-background text-foreground text-[11px] uppercase tracking-[0.2em] hover:bg-background/90 transition-colors"
              >
                Найти шоурум
              </Link>
              <Link
                to="/catalog"
                className="px-8 py-4 rounded-full border border-background/30 text-[11px] uppercase tracking-[0.2em] hover:bg-background/10 transition-colors"
              >
                Смотреть каталог
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation to other pages */}
      <section className="py-16 border-t border-border">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/collections" className="group p-8 border border-border hover:border-foreground transition-colors">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">Исследуйте</p>
              <h3 className="text-xl font-light mb-2 group-hover:translate-x-2 transition-transform">Коллекции</h3>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            </Link>
            <Link to="/designers" className="group p-8 border border-border hover:border-foreground transition-colors">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">Сотрудничество</p>
              <h3 className="text-xl font-light mb-2 group-hover:translate-x-2 transition-transform">Дизайнерам</h3>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            </Link>
            <Link to="/buyers" className="group p-8 border border-border hover:border-foreground transition-colors">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground mb-3">Информация</p>
              <h3 className="text-xl font-light mb-2 group-hover:translate-x-2 transition-transform">Покупателям</h3>
              <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-foreground transition-colors" />
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
