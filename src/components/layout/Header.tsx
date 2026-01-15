import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Каталог', href: '/catalog' },
  { name: 'Коллекции', href: '/collections' },
  { name: 'О компании', href: '/about' },
  { name: 'Дизайнерам', href: '/designers' },
  { name: 'Покупателям', href: '/buyers' },
  { name: 'Контакты', href: '/contacts' },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location]);

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'glass py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              className="text-xl tracking-[0.3em] font-light uppercase"
            >
              THE IDEA
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-8">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="nav-link"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-6">
              {/* Phone - Desktop only */}
              <a 
                href="tel:+78002225043" 
                className="hidden md:block text-[11px] font-light tracking-wide hover:opacity-60 transition-opacity"
              >
                8 (800) 222-50-43
              </a>

              {/* Favorite */}
              <button 
                className="p-2 hover:opacity-60 transition-opacity"
                aria-label="Избранное"
              >
                <Heart className="w-5 h-5" strokeWidth={1} />
              </button>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2"
                aria-label="Меню"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" strokeWidth={1} />
                ) : (
                  <Menu className="w-6 h-6" strokeWidth={1} />
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background flex flex-col p-8 pt-32 lg:hidden"
          >
            <div className="flex flex-col gap-8">
              {navigation.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                >
                  <Link
                    to={item.href}
                    className="mobile-nav-link block"
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="mt-auto pt-12 border-t border-black/5 space-y-4"
            >
              <p className="text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
                Связаться с нами
              </p>
              <a 
                href="tel:+78002225043" 
                className="block text-xl font-light"
              >
                8 (800) 222-50-43
              </a>
              <button className="w-full border border-black py-4 text-[10px] uppercase tracking-widest mt-4 hover:bg-black hover:text-white transition-colors">
                Заказать звонок
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
