import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Clock, Mail, ChevronDown, MessageCircle } from "lucide-react";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const cities = [
  {
    name: "Санкт-Петербург",
    region: "Северо-Запад",
    stores: [
      {
        name: "Флагманский шоурум",
        address: "Большой проспект П.С., 32",
        phone: "+7 (812) 309-52-88",
        hours: "Пн-Вс: 10:00 - 21:00",
        metro: "м. Петроградская",
        isMain: true,
      },
      {
        name: "Шоурум Московский",
        address: "Московский пр., 115",
        phone: "+7 (812) 309-52-89",
        hours: "Пн-Вс: 10:00 - 21:00",
        metro: "м. Московские ворота",
      },
    ],
  },
  {
    name: "Москва",
    region: "Центр",
    stores: [
      {
        name: "Шоурум на Кутузовском",
        address: "Кутузовский пр., 36, стр. 2",
        phone: "+7 (495) 150-52-88",
        hours: "Пн-Вс: 10:00 - 21:00",
        metro: "м. Кутузовская",
        isMain: true,
      },
      {
        name: "Шоурум МКАД",
        address: "МКАД 65 км, ТЦ Мебель Park",
        phone: "+7 (495) 150-52-89",
        hours: "Пн-Вс: 10:00 - 21:00",
      },
    ],
  },
  {
    name: "Екатеринбург",
    region: "Урал",
    stores: [
      {
        name: "Шоурум",
        address: "ул. Малышева, 51",
        phone: "+7 (343) 302-52-88",
        hours: "Пн-Сб: 10:00 - 20:00, Вс: 11:00 - 19:00",
      },
    ],
  },
  {
    name: "Новосибирск",
    region: "Сибирь",
    stores: [
      {
        name: "Шоурум",
        address: "Красный пр., 65",
        phone: "+7 (383) 209-52-88",
        hours: "Пн-Сб: 10:00 - 20:00, Вс: 11:00 - 19:00",
      },
    ],
  },
  {
    name: "Казань",
    region: "Поволжье",
    stores: [
      {
        name: "Шоурум",
        address: "ул. Петербургская, 52",
        phone: "+7 (843) 202-52-88",
        hours: "Пн-Сб: 10:00 - 20:00, Вс: 11:00 - 19:00",
      },
    ],
  },
  {
    name: "Краснодар",
    region: "Юг",
    stores: [
      {
        name: "Шоурум",
        address: "ул. Красная, 154",
        phone: "+7 (861) 202-52-88",
        hours: "Пн-Сб: 10:00 - 20:00, Вс: 11:00 - 19:00",
      },
    ],
  },
  {
    name: "Ростов-на-Дону",
    region: "Юг",
    stores: [
      {
        name: "Шоурум",
        address: "Большая Садовая ул., 73",
        phone: "+7 (863) 303-52-88",
        hours: "Пн-Сб: 10:00 - 20:00, Вс: 11:00 - 19:00",
      },
    ],
  },
  {
    name: "Нижний Новгород",
    region: "Поволжье",
    stores: [
      {
        name: "Шоурум",
        address: "Большая Покровская ул., 35",
        phone: "+7 (831) 202-52-88",
        hours: "Пн-Сб: 10:00 - 20:00, Вс: 11:00 - 19:00",
      },
    ],
  },
];

const regions = ["Все", "Северо-Запад", "Центр", "Урал", "Сибирь", "Поволжье", "Юг"];

const Contacts = () => {
  const [activeRegion, setActiveRegion] = useState("Все");
  const [expandedCity, setExpandedCity] = useState<string | null>("Санкт-Петербург");
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", message: "" });

  const filteredCities = activeRegion === "Все" 
    ? cities 
    : cities.filter(city => city.region === activeRegion);

  const totalStores = cities.reduce((acc, city) => acc + city.stores.length, 0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic
    console.log("Form submitted");
  };

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
              Контакты
            </p>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tight mb-8">
              Где нас найти
            </h1>
            <p className="text-xl text-muted-foreground font-light">
              {totalStores} шоурумов в {cities.length} городах России. 
              Приходите увидеть мебель вживую и получить консультацию.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quick contacts */}
      <section className="py-12 border-y border-border">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <a href="tel:88002225043" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-foreground transition-colors">
                <Phone className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Бесплатный звонок</p>
                <p className="text-lg font-light">8 800 222-50-43</p>
              </div>
            </a>
            <a href="mailto:info@theidea.ru" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-foreground transition-colors">
                <Mail className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <p className="text-lg font-light">info@theidea.ru</p>
              </div>
            </a>
            <a href="https://t.me/theidea_furniture" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 group">
              <div className="w-12 h-12 rounded-full border border-border flex items-center justify-center group-hover:border-foreground transition-colors">
                <MessageCircle className="w-5 h-5" strokeWidth={1.5} />
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-1">Telegram</p>
                <p className="text-lg font-light">@theidea_furniture</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* Map placeholder + Stores */}
      <section className="py-24 lg:py-32">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="sticky top-32">
                <div className="aspect-square bg-muted/50 flex items-center justify-center border border-border">
                  <div className="text-center p-8">
                    <MapPin className="w-12 h-12 mx-auto mb-4 text-muted-foreground" strokeWidth={1} />
                    <p className="text-muted-foreground">
                      Интерактивная карта шоурумов
                    </p>
                    <p className="text-sm text-muted-foreground mt-2">
                      {totalStores} точек продаж по всей России
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Stores list */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className="mb-8">
                <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-4">
                  Регион
                </p>
                <div className="flex flex-wrap gap-2">
                  {regions.map((region) => (
                    <button
                      key={region}
                      onClick={() => setActiveRegion(region)}
                      className={`px-4 py-2 text-[11px] uppercase tracking-[0.15em] rounded-full transition-all ${
                        activeRegion === region
                          ? "bg-foreground text-background"
                          : "border border-border hover:border-foreground"
                      }`}
                    >
                      {region}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-4">
                {filteredCities.map((city) => (
                  <div key={city.name} className="border border-border">
                    <button
                      onClick={() => setExpandedCity(expandedCity === city.name ? null : city.name)}
                      className="w-full p-6 flex items-center justify-between text-left"
                    >
                      <div>
                        <h3 className="text-xl font-light">{city.name}</h3>
                        <p className="text-sm text-muted-foreground">
                          {city.stores.length} {city.stores.length === 1 ? "шоурум" : "шоурума"}
                        </p>
                      </div>
                      <ChevronDown
                        className={`w-5 h-5 transition-transform duration-300 ${
                          expandedCity === city.name ? "rotate-180" : ""
                        }`}
                      />
                    </button>

                    {expandedCity === city.name && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        className="border-t border-border"
                      >
                        {city.stores.map((store, index) => (
                          <div
                            key={index}
                            className={`p-6 ${index > 0 ? "border-t border-border/50" : ""}`}
                          >
                            <div className="flex items-start justify-between mb-4">
                              <div>
                                <h4 className="font-medium mb-1">{store.name}</h4>
                                {store.isMain && (
                                  <span className="text-[10px] uppercase tracking-[0.15em] px-2 py-1 bg-foreground text-background">
                                    Флагман
                                  </span>
                                )}
                              </div>
                            </div>
                            <div className="space-y-2 text-sm">
                              <p className="flex items-start gap-3">
                                <MapPin className="w-4 h-4 flex-shrink-0 mt-0.5" strokeWidth={1.5} />
                                <span>
                                  {store.address}
                                  {store.metro && <span className="text-muted-foreground"> ({store.metro})</span>}
                                </span>
                              </p>
                              <p className="flex items-center gap-3">
                                <Phone className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
                                <a href={`tel:${store.phone.replace(/\D/g, '')}`} className="hover:underline">
                                  {store.phone}
                                </a>
                              </p>
                              <p className="flex items-center gap-3 text-muted-foreground">
                                <Clock className="w-4 h-4 flex-shrink-0" strokeWidth={1.5} />
                                {store.hours}
                              </p>
                            </div>
                          </div>
                        ))}
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact form */}
      <section className="py-24 lg:py-32 bg-muted/30">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-6">
                Обратная связь
              </p>
              <h2 className="text-3xl lg:text-4xl font-extralight tracking-tight mb-8">
                Напишите нам
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Задайте вопрос, запишитесь на консультацию или расскажите 
                о своём проекте. Мы ответим в течение рабочего дня.
              </p>
              <div className="space-y-4 text-sm">
                <p className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
                  Ответ в течение 2 часов в рабочее время
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                  Консультация дизайнера — бесплатно
                </p>
                <p className="flex items-center gap-3">
                  <span className="w-1.5 h-1.5 rounded-full bg-foreground" />
                  Расчёт проекта за 24 часа
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-0 py-4 bg-transparent border-b border-border placeholder:text-muted-foreground focus:border-foreground outline-none transition-colors"
                    required
                  />
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <input
                    type="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-0 py-4 bg-transparent border-b border-border placeholder:text-muted-foreground focus:border-foreground outline-none transition-colors"
                    required
                  />
                  <input
                    type="tel"
                    placeholder="Телефон"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-0 py-4 bg-transparent border-b border-border placeholder:text-muted-foreground focus:border-foreground outline-none transition-colors"
                  />
                </div>
                <div>
                  <textarea
                    placeholder="Ваше сообщение"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    rows={4}
                    className="w-full px-0 py-4 bg-transparent border-b border-border placeholder:text-muted-foreground focus:border-foreground outline-none transition-colors resize-none"
                    required
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-4 rounded-full bg-foreground text-background text-[11px] uppercase tracking-[0.2em] hover:bg-foreground/90 transition-colors"
                >
                  Отправить сообщение
                </button>
                <p className="text-xs text-muted-foreground text-center">
                  Нажимая кнопку, вы соглашаетесь с{" "}
                  <a href="/privacy" className="underline">политикой конфиденциальности</a>
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Company info */}
      <section className="py-16 border-t border-border">
        <div className="container-wide">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Юридическая информация
              </p>
              <p>ООО «Зе Айдиа»</p>
              <p className="text-muted-foreground">ИНН 7841056789</p>
              <p className="text-muted-foreground">ОГРН 1187847234567</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Юридический адрес
              </p>
              <p>197022, Санкт-Петербург,</p>
              <p className="text-muted-foreground">Большой проспект П.С., 32</p>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-3">
                Производство
              </p>
              <p>Санкт-Петербург,</p>
              <p className="text-muted-foreground">Промышленная ул., 19</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contacts;
