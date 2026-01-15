import { Link } from 'react-router-dom';
import { Send, Instagram } from 'lucide-react';

const footerLinks = {
  catalog: {
    title: 'Каталог',
    links: [
      { name: 'Диваны', href: '/catalog/sofas' },
      { name: 'Кресла', href: '/catalog/armchairs' },
      { name: 'Кровати', href: '/catalog/beds' },
      { name: 'Столы', href: '/catalog/tables' },
      { name: 'Системы хранения', href: '/catalog/storage' },
    ],
  },
  collections: {
    title: 'Коллекции',
    links: [
      { name: 'Case', href: '/collections/case' },
      { name: 'Saga', href: '/collections/saga' },
      { name: 'Code', href: '/collections/code' },
      { name: 'Bergen', href: '/collections/bergen' },
    ],
  },
  company: {
    title: 'Компания',
    links: [
      { name: 'О нас', href: '/about' },
      { name: 'Дизайнерам', href: '/designers' },
      { name: 'Контакты', href: '/contacts' },
    ],
  },
  support: {
    title: 'Покупателям',
    links: [
      { name: 'Доставка', href: '/buyers#delivery' },
      { name: 'Оплата', href: '/buyers#payment' },
      { name: 'Гарантия', href: '/buyers#warranty' },
    ],
  },
};

export const Footer = () => {
  return (
    <footer className="footer-dark">
      <div className="max-w-7xl mx-auto px-6 md:px-20 py-20 md:py-32">
        {/* Main Content */}
        <div className="grid grid-cols-2 md:grid-cols-6 gap-10 md:gap-8">
          {/* Brand Column */}
          <div className="col-span-2">
            <Link 
              to="/" 
              className="text-xl tracking-[0.3em] font-light uppercase"
            >
              THE IDEA
            </Link>
            <p className="mt-8 text-sm font-light leading-relaxed opacity-60 max-w-xs">
              Мебельное ателье в Санкт-Петербурге. 
              Собственное производство дизайнерской мебели с 2014 года.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4 mt-8">
              <a 
                href="https://t.me/theidea" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 border border-white/20 hover:bg-white/10 transition-colors"
                aria-label="Telegram"
              >
                <Send className="w-4 h-4" strokeWidth={1} />
              </a>
              <a 
                href="https://instagram.com/theidea" 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-3 border border-white/20 hover:bg-white/10 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-4 h-4" strokeWidth={1} />
              </a>
            </div>
          </div>

          {/* Link Columns */}
          {Object.values(footerLinks).map((section) => (
            <div key={section.title}>
              <h4 className="text-[10px] tracking-[0.2em] uppercase mb-6 opacity-40">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.href}
                      className="text-sm font-light opacity-60 hover:opacity-100 transition-opacity"
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
        <div className="mt-20 pt-10 border-t border-white/10">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <p className="text-[9px] uppercase tracking-widest opacity-40 mb-2">Санкт-Петербург</p>
              <p className="text-sm font-light">Б. Монетная, 16 к.30</p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-widest opacity-40 mb-2">Москва</p>
              <p className="text-sm font-light">ТЦ Family Room</p>
            </div>
            <div>
              <p className="text-[9px] uppercase tracking-widest opacity-40 mb-2">Телефон</p>
              <a 
                href="tel:+78002225043"
                className="text-sm font-light hover:opacity-60 transition-opacity"
              >
                8 (800) 222-50-43
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Row */}
        <div className="mt-10 pt-6 border-t border-white/10">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <p className="text-xs font-light opacity-40">
              © {new Date().getFullYear()} THE IDEA. Все права защищены.
            </p>
            <div className="flex items-center gap-6">
              <Link 
                to="/privacy" 
                className="text-xs font-light opacity-40 hover:opacity-70 transition-opacity"
              >
                Политика конфиденциальности
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
