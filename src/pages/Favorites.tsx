import { motion } from 'framer-motion';
import { Heart, Trash2 } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useFavorites } from '@/contexts/FavoritesContext';
import { Button } from '@/components/ui/button';

const Favorites = () => {
  const { favorites, removeFavorite, favoritesCount } = useFavorites();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-[1600px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight mb-4">
              Избранное
            </h1>
            <p className="text-muted-foreground">
              {favoritesCount > 0
                ? `${favoritesCount} ${favoritesCount === 1 ? 'товар' : favoritesCount < 5 ? 'товара' : 'товаров'} в избранном`
                : 'Пока ничего не добавлено'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Favorites List */}
      <section className="pb-24 px-4">
        <div className="max-w-[1600px] mx-auto">
          {favoritesCount === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center py-24"
            >
              <Heart className="w-16 h-16 mx-auto mb-6 text-muted-foreground/30" strokeWidth={1} />
              <h2 className="text-2xl font-light mb-4">В избранном пока пусто</h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Добавляйте понравившиеся товары в избранное, нажимая на сердечко в карточке товара
              </p>
              <Button asChild className="rounded-full px-8 h-12">
                <Link to="/catalog">Перейти в каталог</Link>
              </Button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-8">
              {favorites.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  className="group"
                >
                  <Link to={`/product/${item.id}`} className="block">
                    <div className="relative aspect-[4/5] overflow-hidden bg-[#f5f5f3] mb-6">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      
                      {/* Remove button */}
                      <button
                        onClick={(e) => {
                          e.preventDefault();
                          e.stopPropagation();
                          removeFavorite(item.id);
                        }}
                        className="absolute top-5 right-5 w-10 h-10 bg-white/90 backdrop-blur-sm flex items-center justify-center transition-all duration-300 opacity-0 group-hover:opacity-100 hover:bg-red-50"
                      >
                        <Trash2 className="w-4 h-4 text-red-500" strokeWidth={1.5} />
                      </button>

                      {/* Favorite indicator */}
                      <div className="absolute top-5 left-5 w-10 h-10 bg-white/90 backdrop-blur-sm flex items-center justify-center">
                        <Heart className="w-4 h-4 fill-foreground stroke-foreground" strokeWidth={1.5} />
                      </div>
                    </div>

                    {/* Product info */}
                    <div className="space-y-2">
                      <p className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground font-light">
                        {item.collection}
                      </p>
                      <h3 className="text-lg font-normal leading-snug tracking-tight">
                        {item.name}
                      </h3>
                      <p className="text-xl font-medium tracking-tight pt-1">
                        {formatPrice(item.price)}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Favorites;
