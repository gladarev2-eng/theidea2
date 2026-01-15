import { useState, useEffect, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, X, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Input } from '@/components/ui/input';

// Product data for search
const allProducts = [
  { id: 'sofa-case-3', name: 'Диван Case 3-местный', collection: 'Case', category: 'Диваны', price: 189000, image: '/src/assets/product-sofa.jpg' },
  { id: 'armchair-saga', name: 'Кресло Saga Lounge', collection: 'Saga', category: 'Кресла', price: 78000, image: '/src/assets/product-armchair.jpg' },
  { id: 'bed-bergen', name: 'Кровать Bergen King', collection: 'Bergen', category: 'Кровати', price: 156000, image: '/src/assets/product-bed.jpg' },
  { id: 'chair-copenhagen', name: 'Стул Копенгаген', collection: 'Copenhagen', category: 'Стулья', price: 34000, image: '/src/assets/product-chair.jpg' },
  { id: 'sofa-case-2', name: 'Диван Case 2-местный', collection: 'Case', category: 'Диваны', price: 145000, image: '/src/assets/product-sofa.jpg' },
  { id: 'armchair-case', name: 'Кресло Case', collection: 'Case', category: 'Кресла', price: 68000, image: '/src/assets/product-armchair.jpg' },
  { id: 'bed-saga', name: 'Кровать Saga Queen', collection: 'Saga', category: 'Кровати', price: 134000, image: '/src/assets/product-bed.jpg' },
  { id: 'table-bergen', name: 'Стол Bergen', collection: 'Bergen', category: 'Столы', price: 89000, image: '/src/assets/product-chair.jpg' },
];

// Collection data for search
const allCollections = [
  { id: 'case', name: 'Case', description: 'Современная классика с мягкими формами', year: '2024', image: '/src/assets/hero-living-room.jpg' },
  { id: 'saga', name: 'Saga', description: 'Скандинавский минимализм', year: '2023', image: '/src/assets/hero-bedroom.jpg' },
  { id: 'bergen', name: 'Bergen', description: 'Натуральные материалы и органичные линии', year: '2023', image: '/src/assets/hero-dining.jpg' },
];

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const [query, setQuery] = useState('');

  // Reset query when dialog closes
  useEffect(() => {
    if (!open) {
      setQuery('');
    }
  }, [open]);

  // Filter products and collections based on query
  const { filteredProducts, filteredCollections } = useMemo(() => {
    if (!query.trim()) {
      return { filteredProducts: [], filteredCollections: [] };
    }

    const searchTerm = query.toLowerCase().trim();

    const products = allProducts.filter(
      (p) =>
        p.name.toLowerCase().includes(searchTerm) ||
        p.collection.toLowerCase().includes(searchTerm) ||
        p.category.toLowerCase().includes(searchTerm)
    ).slice(0, 6);

    const collections = allCollections.filter(
      (c) =>
        c.name.toLowerCase().includes(searchTerm) ||
        c.description.toLowerCase().includes(searchTerm)
    );

    return { filteredProducts: products, filteredCollections: collections };
  }, [query]);

  const hasResults = filteredProducts.length > 0 || filteredCollections.length > 0;
  const showNoResults = query.trim().length > 0 && !hasResults;

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
  };

  const handleLinkClick = () => {
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl p-0 gap-0 bg-background border-none overflow-hidden">
        {/* Search Input */}
        <div className="flex items-center gap-4 p-6 border-b border-border">
          <Search className="w-5 h-5 text-muted-foreground flex-shrink-0" strokeWidth={1.5} />
          <Input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Поиск товаров и коллекций..."
            className="flex-1 border-none shadow-none text-lg focus-visible:ring-0 px-0 h-auto"
            autoFocus
          />
          {query && (
            <button
              onClick={() => setQuery('')}
              className="p-1 hover:bg-muted rounded-full transition-colors"
            >
              <X className="w-4 h-4" strokeWidth={1.5} />
            </button>
          )}
        </div>

        {/* Results */}
        <div className="max-h-[60vh] overflow-y-auto">
          <AnimatePresence mode="wait">
            {!query.trim() ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-6 text-center text-muted-foreground"
              >
                <p className="text-sm">Начните вводить для поиска</p>
                <div className="mt-4 flex flex-wrap justify-center gap-2">
                  {['Диван', 'Кресло', 'Case', 'Bergen'].map((term) => (
                    <button
                      key={term}
                      onClick={() => setQuery(term)}
                      className="px-3 py-1.5 text-xs uppercase tracking-wider bg-muted hover:bg-muted/80 rounded-full transition-colors"
                    >
                      {term}
                    </button>
                  ))}
                </div>
              </motion.div>
            ) : showNoResults ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="p-8 text-center"
              >
                <p className="text-muted-foreground mb-2">Ничего не найдено по запросу</p>
                <p className="font-medium">«{query}»</p>
                <Link
                  to="/catalog"
                  onClick={handleLinkClick}
                  className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  Перейти в каталог
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            ) : (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                {/* Collections */}
                {filteredCollections.length > 0 && (
                  <div className="p-6 border-b border-border">
                    <h3 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
                      Коллекции
                    </h3>
                    <div className="space-y-3">
                      {filteredCollections.map((collection) => (
                        <Link
                          key={collection.id}
                          to={`/collections/${collection.id}`}
                          onClick={handleLinkClick}
                          className="flex items-center gap-4 p-3 -mx-3 rounded-lg hover:bg-muted transition-colors group"
                        >
                          <div className="w-16 h-16 bg-muted overflow-hidden rounded flex-shrink-0">
                            <img
                              src={collection.image}
                              alt={collection.name}
                              className="w-full h-full object-cover"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <h4 className="font-medium">{collection.name}</h4>
                            <p className="text-sm text-muted-foreground truncate">
                              {collection.description}
                            </p>
                          </div>
                          <ArrowRight className="w-4 h-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
                        </Link>
                      ))}
                    </div>
                  </div>
                )}

                {/* Products */}
                {filteredProducts.length > 0 && (
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
                        Товары
                      </h3>
                      <Link
                        to={`/catalog?search=${encodeURIComponent(query)}`}
                        onClick={handleLinkClick}
                        className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
                      >
                        Все результаты →
                      </Link>
                    </div>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                      {filteredProducts.map((product) => (
                        <Link
                          key={product.id}
                          to={`/product/${product.id}`}
                          onClick={handleLinkClick}
                          className="group"
                        >
                          <div className="aspect-square bg-muted overflow-hidden rounded mb-3">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                            />
                          </div>
                          <p className="text-[10px] uppercase tracking-[0.15em] text-muted-foreground mb-1">
                            {product.collection}
                          </p>
                          <h4 className="text-sm font-normal leading-tight mb-1 line-clamp-2">
                            {product.name}
                          </h4>
                          <p className="text-sm font-medium">
                            {formatPrice(product.price)}
                          </p>
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default SearchDialog;
