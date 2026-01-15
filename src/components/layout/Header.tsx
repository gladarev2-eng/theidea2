import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, Heart, Phone } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Каталог', href: '/catalog' },
  { name: 'Коллекции', href: '/collections' },
  { name: 'О бренде', href: '/about' },
  { name: 'Дизайнерам', href: '/designers' },
];

const rightLinks = [
  { name: 'Покупателям', href: '/buyers' },
  { name: 'Контакты', href: '/contacts' },
];

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled 
            ? 'bg-white/80 backdrop-blur-xl shadow-sm py-3' 
            : 'bg-black/20 backdrop-blur-md py-5'
        }`}
        style={{
          WebkitBackdropFilter: isScrolled ? 'blur(20px)' : 'blur(12px)',
          backdropFilter: isScrolled ? 'blur(20px)' : 'blur(12px)',
        }}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              className={`text-lg tracking-[0.3em] font-light transition-colors duration-300 ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              THE IDEA
            </Link>

            {/* Desktop Navigation - Center */}
            <nav className="hidden lg:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-[11px] font-normal tracking-[0.1em] uppercase transition-all duration-300 relative group ${
                    isScrolled ? 'text-foreground' : 'text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                    isScrolled ? 'bg-foreground' : 'bg-white'
                  }`} />
                </Link>
              ))}
            </nav>

            {/* Desktop Right Section */}
            <div className="hidden lg:flex items-center gap-5">
              {/* Phone */}
              <a
                href="tel:88002225043"
                className={`flex items-center gap-2 text-[11px] font-normal tracking-wide transition-colors duration-300 ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                <Phone className="w-3.5 h-3.5" strokeWidth={1.5} />
                <span>8 800 222-50-43</span>
              </a>

              <div className={`w-px h-4 ${isScrolled ? 'bg-foreground/20' : 'bg-white/30'}`} />

              {/* Right Nav Links */}
              {rightLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`text-[11px] font-normal tracking-[0.1em] uppercase transition-all duration-300 relative group ${
                    isScrolled ? 'text-foreground' : 'text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 w-0 h-px transition-all duration-300 group-hover:w-full ${
                    isScrolled ? 'bg-foreground' : 'bg-white'
                  }`} />
                </Link>
              ))}

              <div className={`w-px h-4 ${isScrolled ? 'bg-foreground/20' : 'bg-white/30'}`} />

              {/* Icons */}
              <div className="flex items-center gap-3">
                <Link
                  to="/favorites"
                  className={`p-1.5 transition-colors duration-300 ${
                    isScrolled ? 'text-foreground hover:text-foreground/70' : 'text-white hover:text-white/70'
                  }`}
                >
                  <Heart className="w-[18px] h-[18px]" strokeWidth={1.5} />
                </Link>
                <a
                  href="https://t.me/theidea_furniture"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-1.5 transition-colors duration-300 ${
                    isScrolled ? 'text-foreground hover:text-foreground/70' : 'text-white hover:text-white/70'
                  }`}
                >
                  <svg className="w-[18px] h-[18px]" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
                <button 
                  className={`p-1.5 transition-colors duration-300 ${
                    isScrolled ? 'text-foreground hover:text-foreground/70' : 'text-white hover:text-white/70'
                  }`}
                >
                  <Search className="w-[18px] h-[18px]" strokeWidth={1.5} />
                </button>
              </div>
            </div>

            {/* Mobile Right Section */}
            <div className="flex lg:hidden items-center gap-2">
              <Link
                to="/favorites"
                className={`p-2 transition-colors duration-300 ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                <Heart className="w-5 h-5" strokeWidth={1.5} />
              </Link>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`p-2 transition-colors duration-300 ${
                  isScrolled ? 'text-foreground' : 'text-white'
                }`}
              >
                {isOpen ? <X className="w-5 h-5" strokeWidth={1.5} /> : <Menu className="w-5 h-5" strokeWidth={1.5} />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 z-[60] bg-background flex flex-col p-8 lg:hidden"
          >
            <div className="flex justify-between items-center mb-16">
              <span className="text-lg tracking-[0.3em] font-light">THE IDEA</span>
              <button onClick={() => setIsOpen(false)} className="p-2">
                <X className="w-6 h-6" strokeWidth={1.5} />
              </button>
            </div>

            <nav className="flex flex-col gap-6">
              {[...navLinks, ...rightLinks].map((link, index) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                >
                  <Link
                    to={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-3xl font-light tracking-tight"
                  >
                    {link.name}
                  </Link>
                </motion.div>
              ))}
            </nav>

            <div className="mt-auto pt-8 border-t border-border space-y-4">
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">Связаться с нами</p>
              <a href="tel:88002225043" className="text-xl font-light block">
                8 (800) 222-50-43
              </a>
              <div className="flex items-center gap-4 pt-4">
                <a
                  href="https://t.me/theidea_furniture"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 border border-border"
                >
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z"/>
                  </svg>
                </a>
                <Link to="/favorites" className="p-3 border border-border">
                  <Heart className="w-5 h-5" strokeWidth={1.5} />
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
