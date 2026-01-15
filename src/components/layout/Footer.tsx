import { Link } from 'react-router-dom';

const footerLinks = {
  catalog: [
    { name: 'Диваны', href: '/catalog/sofas' },
    { name: 'Кресла', href: '/catalog/armchairs' },
    { name: 'Кровати', href: '/catalog/beds' },
    { name: 'Столы', href: '/catalog/tables' },
    { name: 'Стулья', href: '/catalog/chairs' },
  ],
  collections: [
    { name: 'Case', href: '/collections/case' },
    { name: 'Saga', href: '/collections/saga' },
    { name: 'Code', href: '/collections/code' },
  ],
  company: [
    { name: 'О нас', href: '/about' },
    { name: 'Производство', href: '/production' },
    { name: 'Дизайнерам', href: '/designers' },
    { name: 'Контакты', href: '/contacts' },
  ],
  support: [
    { name: 'Доставка', href: '/delivery' },
    { name: 'Оплата', href: '/payment' },
    { name: 'Гарантия', href: '/warranty' },
    { name: 'FAQ', href: '/faq' },
  ],
};

export const Footer = () => {
  return (
    <footer className="footer-section py-12 md:py-16">
      <div className="container-wide">
        {/* Main Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-4 lg:mb-0">
            <Link to="/" className="heading-h4 text-white block mb-4">
              THE IDEA
            </Link>
            <p className="text-body-sm text-white/60 max-w-xs">
              Премиальная мебель ручной работы из Санкт-Петербурга
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="heading-h6 text-white mb-4">Каталог</h4>
            <ul className="space-y-3">
              {footerLinks.catalog.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-body-sm text-white/60 hover:text-white transition-colors duration-150"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="heading-h6 text-white mb-4">Коллекции</h4>
            <ul className="space-y-3">
              {footerLinks.collections.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-body-sm text-white/60 hover:text-white transition-colors duration-150"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="heading-h6 text-white mb-4">Компания</h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-body-sm text-white/60 hover:text-white transition-colors duration-150"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="heading-h6 text-white mb-4">Поддержка</h4>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href}
                    className="text-body-sm text-white/60 hover:text-white transition-colors duration-150"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Contact Info */}
        <div className="border-t border-white/10 pt-8 mb-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="text-caption text-white/40 mb-2">Санкт-Петербург</p>
              <p className="text-body-sm text-white/80">
                ул. Большая Морская, 18
              </p>
            </div>
            <div>
              <p className="text-caption text-white/40 mb-2">Москва</p>
              <p className="text-body-sm text-white/80">
                Кутузовский пр-т, 32
              </p>
            </div>
            <div>
              <p className="text-caption text-white/40 mb-2">Телефон</p>
              <a 
                href="tel:+78001234567" 
                className="text-body-sm text-white/80 hover:text-white transition-colors duration-150"
              >
                8 800 123-45-67
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-caption text-white/40">
            © 2024 THE IDEA. Все права защищены.
          </p>
          <Link 
            to="/privacy" 
            className="text-caption text-white/40 hover:text-white/60 transition-colors duration-150"
          >
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
};
