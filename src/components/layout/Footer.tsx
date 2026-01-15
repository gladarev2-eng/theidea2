import { Link } from 'react-router-dom';
import { Send, Instagram, Youtube } from 'lucide-react';

const footerLinks = {
  catalog: {
    title: 'Каталог',
    links: [
      { name: 'Диваны', href: '/catalog/sofas' },
      { name: 'Кресла', href: '/catalog/armchairs' },
      { name: 'Кровати', href: '/catalog/beds' },
      { name: 'Столы', href: '/catalog/tables' },
      { name: 'Стулья', href: '/catalog/chairs' },
      { name: 'Хранение', href: '/catalog/storage' },
    ],
  },
  collections: {
    title: 'Коллекции',
    links: [
      { name: 'Скандинавия', href: '/collections/scandinavia' },
      { name: 'Минимал', href: '/collections/minimal' },
      { name: 'Модерн', href: '/collections/modern' },
      { name: 'Классика', href: '/collections/classic' },
    ],
  },
  company: {
    title: 'Компания',
    links: [
      { name: 'О нас', href: '/about' },
      { name: 'Производство', href: '/about#manufacturing' },
      { name: 'Карьера', href: '/careers' },
      { name: 'Пресса', href: '/press' },
    ],
  },
  support: {
    title: 'Покупателям',
    links: [
      { name: 'Доставка и оплата', href: '/buyers#delivery' },
      { name: 'Возврат и обмен', href: '/buyers#returns' },
      { name: 'Гарантия', href: '/buyers#warranty' },
      { name: 'FAQ', href: '/buyers#faq' },
    ],
  },
};

const contacts = {
  phone: '8 800 123 45 67',
  email: 'info@theidea.ru',
  address: 'Санкт-Петербург, Лиговский пр. 50, к. 12',
};

export const Footer = () => {
  return (
    <footer className="footer-dark">
      <div className="container-wide section-padding">
        {/* Main Footer Content */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link 
              to="/" 
              className="font-display text-3xl font-light tracking-tight"
            >
              The Idea
            </Link>
            <p className="mt-6 font-body font-light text-sm leading-relaxed opacity-70">
              Собственное производство дизайнерской мебели в Санкт-Петербурге. 
              Создаём уникальные предметы интерьера с 2012 года.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8">
              <a 
                href="https://t.me/theidea" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 border border-current/20 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a 
                href="https://instagram.com/theidea" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 border border-current/20 rounded-full hover:bg-white/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" strokeWidth={1.5} />
              </a>
              <a 
                href="https://youtube.com/theidea" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 border border-current/20 rounded-full hover:bg-white/10 transition-colors"
                aria-label="YouTube"
              >
                <Youtube className="w-4 h-4" strokeWidth={1.5} />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="font-display text-sm tracking-wide uppercase mb-6 opacity-50">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="font-body font-light text-sm opacity-70 hover:opacity-100 transition-opacity"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Row */}
        <div className="mt-16 pt-10 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
            <div className="flex flex-col md:flex-row md:items-center gap-6 md:gap-10">
              <a 
                href={`tel:${contacts.phone.replace(/\s/g, '')}`}
                className="font-body font-light text-lg hover:opacity-70 transition-opacity"
              >
                {contacts.phone}
              </a>
              <a 
                href={`mailto:${contacts.email}`}
                className="font-body font-light opacity-70 hover:opacity-100 transition-opacity"
              >
                {contacts.email}
              </a>
              <span className="font-body font-light text-sm opacity-50">
                {contacts.address}
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-10 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="font-body font-light text-xs opacity-40">
              © {new Date().getFullYear()} The Idea. Все права защищены.
            </p>
            <div className="flex items-center gap-6">
              <Link 
                to="/privacy" 
                className="font-body font-light text-xs opacity-40 hover:opacity-70 transition-opacity"
              >
                Политика конфиденциальности
              </Link>
              <Link 
                to="/terms" 
                className="font-body font-light text-xs opacity-40 hover:opacity-70 transition-opacity"
              >
                Пользовательское соглашение
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
