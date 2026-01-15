import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search, ShoppingBag } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navLinks = [
  { name: 'Каталог', href: '/catalog' },
  { name: 'Коллекции', href: '/collections' },
  { name: 'О нас', href: '/about' },
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
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled 
            ? 'glass shadow-sm' 
            : 'bg-transparent'
        }`}
      >
        <div className="container-wide">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <Link 
              to="/" 
              className={`heading-h5 tracking-tight transition-colors duration-150 ${
                isScrolled ? 'text-foreground' : 'text-white'
              }`}
            >
              THE IDEA
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={`nav-link transition-colors duration-150 ${
                    isScrolled ? 'text-foreground' : 'text-white'
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center gap-2">
              <button 
                className={`p-2 rounded-md transition-colors duration-150 ${
                  isScrolled 
                    ? 'hover:bg-muted text-foreground' 
                    : 'hover:bg-white/10 text-white'
                }`}
              >
                <Search className="w-5 h-5" strokeWidth={1.5} />
              </button>
              <button 
                className={`p-2 rounded-md transition-colors duration-150 ${
                  isScrolled 
                    ? 'hover:bg-muted text-foreground' 
                    : 'hover:bg-white/10 text-white'
                }`}
              >
                <ShoppingBag className="w-5 h-5" strokeWidth={1.5} />
              </button>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`md:hidden p-2 rounded-md transition-colors duration-150 ${
                  isScrolled 
                    ? 'hover:bg-muted text-foreground' 
                    : 'hover:bg-white/10 text-white'
                }`}
              >
                {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-card pt-20"
          >
            <nav className="container-wide py-8">
              <div className="flex flex-col gap-6">
                {navLinks.map((link, index) => (
                  <motion.div
                    key={link.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.2 }}
                  >
                    <Link
                      to={link.href}
                      onClick={() => setIsOpen(false)}
                      className="heading-h3 hover:text-primary transition-colors duration-150"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </div>

              {/* Contact */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="mt-12 pt-8 border-t border-border"
              >
                <p className="text-caption mb-4">Связаться с нами</p>
                <a 
                  href="tel:+78001234567" 
                  className="heading-h4 hover:text-primary transition-colors duration-150"
                >
                  8 800 123-45-67
                </a>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
