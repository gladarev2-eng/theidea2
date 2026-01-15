import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Heart, Send, Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [
  { name: 'Каталог', href: '/catalog' },
  { name: 'Коллекции', href: '/collections' },
  { name: 'О нас', href: '/about' },
  { name: 'Покупателям', href: '/buyers' },
  { name: 'Дизайнерам', href: '/designers' },
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

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          isScrolled ? 'glass py-4' : 'bg-transparent py-6'
        }`}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link 
              to="/" 
              className="font-display text-2xl md:text-3xl font-light tracking-tight text-foreground"
            >
              The Idea
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center gap-10">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className="link-underline font-body font-light text-sm tracking-wide text-foreground/80 hover:text-foreground transition-colors"
                >
                  {item.name}
                </Link>
              ))}
            </nav>

            {/* Right Actions */}
            <div className="flex items-center gap-6">
              {/* Phone - Desktop only */}
              <a 
                href="tel:+78001234567" 
                className="hidden md:block font-body font-light text-sm tracking-wide text-foreground/80 hover:text-foreground transition-colors"
              >
                8 800 123 45 67
              </a>

              {/* Icons */}
              <div className="flex items-center gap-4">
                <button 
                  className="p-2 text-foreground/80 hover:text-foreground transition-colors"
                  aria-label="Избранное"
                >
                  <Heart className="w-5 h-5" strokeWidth={1.5} />
                </button>
                <a 
                  href="https://t.me/theidea" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="p-2 text-foreground/80 hover:text-foreground transition-colors"
                  aria-label="Telegram"
                >
                  <Send className="w-5 h-5" strokeWidth={1.5} />
                </a>
              </div>

              {/* Mobile Menu Button */}
              <button
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                className="lg:hidden p-2 text-foreground"
                aria-label="Меню"
              >
                {isMobileMenuOpen ? (
                  <X className="w-6 h-6" strokeWidth={1.5} />
                ) : (
                  <Menu className="w-6 h-6" strokeWidth={1.5} />
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
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-background pt-24 lg:hidden"
          >
            <nav className="container-wide">
              <div className="flex flex-col gap-6">
                {navigation.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      to={item.href}
                      className="font-display text-3xl font-light text-foreground hover:text-accent transition-colors"
                    >
                      {item.name}
                    </Link>
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="pt-6 border-t border-border"
                >
                  <a 
                    href="tel:+78001234567" 
                    className="font-body text-lg text-muted-foreground"
                  >
                    8 800 123 45 67
                  </a>
                </motion.div>
              </div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
