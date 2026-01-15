import { Link } from 'react-router-dom';

const catalogLinks = [
  { name: 'Диваны', href: '/catalog?category=sofas' },
  { name: 'Кресла', href: '/catalog?category=chairs' },
  { name: 'Столы', href: '/catalog?category=tables' },
  { name: 'Кровати', href: '/catalog?category=beds' },
  { name: 'Шкафы', href: '/catalog?category=wardrobes' },
  { name: 'Комоды', href: '/catalog?category=dressers' },
];

const collectionsLinks = [
  { name: 'Case', href: '/collections/case' },
  { name: 'Saga', href: '/collections/saga' },
  { name: 'Bergen', href: '/collections/bergen' },
  { name: 'Frame', href: '/collections/frame' },
  { name: 'Loft', href: '/collections/loft' },
];

const companyLinks = [
  { name: 'О компании', href: '/about' },
  { name: 'Дизайнерам', href: '/designers' },
  { name: 'Покупателям', href: '/buyers' },
  { name: 'Где купить', href: '/contacts' },
  { name: 'Контакты', href: '/contacts' },
];

const legalLinks = [
  { name: 'Доставка и оплата', href: '/buyers#delivery' },
  { name: 'Возврат и обмен', href: '/buyers#returns' },
  { name: 'Политика конфиденциальности', href: '/privacy' },
  { name: 'Публичная оферта', href: '/terms' },
];

export const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] text-white">
      {/* Main Footer */}
      <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12 py-10 sm:py-16 lg:py-20">
        <div className="grid grid-cols-2 lg:grid-cols-6 gap-6 sm:gap-8 lg:gap-6">
          {/* Brand */}
          <div className="col-span-2">
            <Link to="/" className="text-base sm:text-lg tracking-[0.25em] sm:tracking-[0.3em] font-light block mb-4 sm:mb-6">
              THE IDEA
            </Link>
            <p className="text-xs sm:text-sm font-light text-white/50 mb-4 sm:mb-6 max-w-xs leading-relaxed">
              Фабрика дизайнерской мебели из Санкт-Петербурга. 
              12 лет создаём предметы, которые становятся основой интерьера.
            </p>
            <div className="space-y-1.5 sm:space-y-2">
              <a href="tel:88002225043" className="block text-xs sm:text-sm font-light text-white/70 hover:text-white transition-colors">
                8 (800) 222-50-43
              </a>
              <a href="mailto:info@theidea.ru" className="block text-xs sm:text-sm font-light text-white/70 hover:text-white transition-colors">
                info@theidea.ru
              </a>
            </div>
          </div>

          {/* Catalog */}
          <div className="col-span-1">
            <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/40 mb-3 sm:mb-5">Каталог</p>
            <ul className="space-y-2 sm:space-y-3">
              {catalogLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-xs sm:text-sm font-light text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Collections */}
          <div className="col-span-1">
            <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/40 mb-3 sm:mb-5">Коллекции</p>
            <ul className="space-y-2 sm:space-y-3">
              {collectionsLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-xs sm:text-sm font-light text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-1">
            <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/40 mb-3 sm:mb-5">Компания</p>
            <ul className="space-y-2 sm:space-y-3">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-xs sm:text-sm font-light text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div className="col-span-2 sm:col-span-1">
            <p className="text-[9px] sm:text-[10px] uppercase tracking-[0.15em] sm:tracking-[0.2em] text-white/40 mb-3 sm:mb-5">Информация</p>
            <ul className="space-y-2 sm:space-y-3">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link 
                    to={link.href} 
                    className="text-xs sm:text-sm font-light text-white/60 hover:text-white transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Social Links */}
        <div className="mt-8 sm:mt-12 lg:mt-16 pt-6 sm:pt-8 border-t border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 sm:gap-6">
          <div className="flex items-center gap-4 sm:gap-5">
            <a
              href="https://t.me/theidea_furniture"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
            >
              <svg className="w-4 sm:w-5 h-4 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
              </svg>
            </a>
            <a
              href="https://instagram.com/theidea_furniture"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
            >
              <svg className="w-4 sm:w-5 h-4 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
              </svg>
            </a>
            <a
              href="https://vk.com/theidea_furniture"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
            >
              <svg className="w-4 sm:w-5 h-4 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M15.684 0H8.316C1.592 0 0 1.592 0 8.316v7.368C0 22.408 1.592 24 8.316 24h7.368C22.408 24 24 22.408 24 15.684V8.316C24 1.592 22.408 0 15.684 0zm3.692 17.123h-1.744c-.66 0-.864-.525-2.05-1.727-1.033-1-1.49-1.135-1.744-1.135-.356 0-.458.102-.458.593v1.575c0 .424-.135.678-1.253.678-1.846 0-3.896-1.118-5.335-3.202C4.624 10.857 4 8.69 4 8.249c0-.254.102-.491.593-.491h1.744c.44 0 .61.203.78.677.863 2.49 2.303 4.675 2.896 4.675.22 0 .322-.102.322-.66V9.721c-.068-1.186-.695-1.287-.695-1.71 0-.203.17-.407.44-.407h2.744c.372 0 .508.203.508.643v3.473c0 .372.17.508.271.508.22 0 .407-.136.813-.542 1.254-1.406 2.151-3.574 2.151-3.574.119-.254.322-.491.763-.491h1.744c.525 0 .644.27.525.643-.22 1.017-2.354 4.031-2.354 4.031-.186.305-.254.44 0 .78.186.254.796.779 1.203 1.253.745.847 1.32 1.558 1.473 2.05.17.49-.085.744-.576.744z"/>
              </svg>
            </a>
            <a
              href="https://youtube.com/@theidea_furniture"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white/50 hover:text-white transition-colors"
            >
              <svg className="w-4 sm:w-5 h-4 sm:h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
              </svg>
            </a>
          </div>

          <p className="text-xs sm:text-sm font-light text-white/40">
            © {new Date().getFullYear()} THE IDEA. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};
