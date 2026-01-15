import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import ProductCard from '@/components/catalog/ProductCard';
import CatalogSort, { SortOption } from '@/components/catalog/CatalogSort';
import { ChevronDown, X, SlidersHorizontal } from 'lucide-react';

// Import product images
import productSofa from '@/assets/product-sofa.jpg';
import productChair from '@/assets/product-chair.jpg';
import productArmchair from '@/assets/product-armchair.jpg';
import productBed from '@/assets/product-bed.jpg';
import heroLiving from '@/assets/hero-living-room.jpg';
import heroBedroom from '@/assets/hero-bedroom.jpg';
import heroDining from '@/assets/hero-dining.jpg';

// Categories
const categories = [
  { id: 'all', name: 'Все' },
  { id: 'soft', name: 'Мягкая мебель' },
  { id: 'corpus', name: 'Корпус' },
  { id: 'tables', name: 'Столы' },
];

// Collections
const collections = ['Все', 'Case', 'Bergen', 'Saga', 'Code', 'Savi'];

// Mock product data
const mockProducts = [
  {
    id: '1',
    name: 'Диван CASE 3-местный',
    price: 145000,
    category: 'soft',
    collection: 'Case',
    images: [productSofa, heroLiving, heroDining],
    badge: 'new' as const,
  },
  {
    id: '2',
    name: 'Комод CASE Slim',
    price: 78000,
    category: 'corpus',
    collection: 'Case',
    images: [productArmchair, heroLiving, heroBedroom],
    badge: 'hit' as const,
  },
  {
    id: '3',
    name: 'Стол BERGEN обеденный',
    price: 92000,
    category: 'tables',
    collection: 'Bergen',
    images: [productChair, heroDining, heroLiving],
  },
  {
    id: '4',
    name: 'Кровать SAVI с мягким изголовьем',
    price: 120000,
    category: 'soft',
    collection: 'Savi',
    images: [productBed, heroBedroom, heroLiving],
  },
  {
    id: '5',
    name: 'Диван SAGA модульный',
    price: 210000,
    category: 'soft',
    collection: 'Saga',
    images: [productSofa, heroLiving, heroDining, heroBedroom],
  },
  {
    id: '6',
    name: 'Буфет CODE Geometric',
    price: 115000,
    category: 'corpus',
    collection: 'Code',
    images: [productArmchair, heroDining, heroLiving],
  },
];

const defaultPriceRange: [number, number] = [0, 350000];

const Catalog = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeCollection, setActiveCollection] = useState('Все');
  const [priceRange, setPriceRange] = useState<[number, number]>(defaultPriceRange);
  const [showFilters, setShowFilters] = useState(false);
  const [sortOption, setSortOption] = useState<SortOption>('default');

  const hasActiveFilters = 
    activeCategory !== 'all' || 
    activeCollection !== 'Все' || 
    priceRange[0] !== defaultPriceRange[0] || 
    priceRange[1] !== defaultPriceRange[1];

  const clearAllFilters = () => {
    setActiveCategory('all');
    setActiveCollection('Все');
    setPriceRange(defaultPriceRange);
    setShowFilters(false);
  };

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...mockProducts];

    // Apply filters
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (activeCollection !== 'Все') {
      result = result.filter((p) => p.collection === activeCollection);
    }
    result = result.filter(
      (p) => p.price >= priceRange[0] && p.price <= priceRange[1]
    );

    // Apply sorting
    switch (sortOption) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result.sort((a, b) => b.price - a.price);
        break;
      case 'name-asc':
        result.sort((a, b) => a.name.localeCompare(b.name, 'ru'));
        break;
      case 'name-desc':
        result.sort((a, b) => b.name.localeCompare(a.name, 'ru'));
        break;
      case 'new':
        result.sort((a, b) => {
          if (a.badge === 'new' && b.badge !== 'new') return -1;
          if (a.badge !== 'new' && b.badge === 'new') return 1;
          return 0;
        });
        break;
    }

    return result;
  }, [activeCategory, activeCollection, priceRange, sortOption]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Level 1: Main Categories */}
      <div className="pt-20 border-b border-border sticky top-[72px] bg-background z-40">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <nav className="flex items-center gap-10 -mb-px overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`py-5 text-[11px] uppercase tracking-[0.25em] border-b-2 transition-all duration-300 whitespace-nowrap font-light ${
                  activeCategory === cat.id
                    ? 'border-foreground text-foreground'
                    : 'border-transparent text-muted-foreground hover:text-foreground'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Level 2: Collections + Filters */}
      <div className="border-b border-border bg-background">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between py-4">
            {/* Collections */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              {collections.map((collection) => (
                <button
                  key={collection}
                  onClick={() => setActiveCollection(collection)}
                  className={`px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] border transition-all duration-300 whitespace-nowrap ${
                    activeCollection === collection
                      ? 'border-foreground bg-foreground text-background'
                      : 'border-border hover:border-foreground bg-transparent'
                  }`}
                >
                  {collection}
                </button>
              ))}
            </div>

            {/* Filters toggle */}
            <div className="flex items-center gap-3 ml-4 flex-shrink-0">
              {hasActiveFilters && (
                <button
                  onClick={clearAllFilters}
                  className="flex items-center gap-1.5 text-[11px] uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
                >
                  <X className="w-3.5 h-3.5" />
                  Сбросить
                </button>
              )}
              <button
                onClick={() => setShowFilters(!showFilters)}
                className={`flex items-center gap-2 px-5 py-2.5 text-[11px] uppercase tracking-[0.2em] border transition-all duration-300 ${
                  showFilters
                    ? 'border-foreground bg-foreground text-background'
                    : 'border-border hover:border-foreground'
                }`}
              >
                <SlidersHorizontal className="w-3.5 h-3.5" />
                Фильтры
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Advanced Filters Panel */}
      <AnimatePresence>
        {showFilters && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-b border-border bg-muted/30 overflow-hidden"
          >
            <div className="max-w-[1440px] mx-auto px-6 lg:px-12 py-6">
              <div className="flex items-center gap-8">
                <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Цена:
                </span>
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="w-32 px-4 py-2.5 text-sm border border-border bg-transparent focus:border-foreground outline-none transition-colors"
                    placeholder="От"
                  />
                  <span className="text-muted-foreground">—</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-32 px-4 py-2.5 text-sm border border-border bg-transparent focus:border-foreground outline-none transition-colors"
                    placeholder="До"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pb-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-12">
          {/* Sort and count */}
          <CatalogSort
            value={sortOption}
            onChange={setSortOption}
            totalProducts={filteredAndSortedProducts.length}
          />

          {/* Products grid - 3 columns */}
          {filteredAndSortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
              {filteredAndSortedProducts.map((product) => (
                <ProductCard key={product.id} {...product} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-32"
            >
              <p className="text-xl font-light text-muted-foreground mb-8">
                По вашему запросу ничего не найдено.
              </p>
              <button
                onClick={clearAllFilters}
                className="text-[11px] uppercase tracking-[0.2em] px-8 py-4 border border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
              >
                Сбросить фильтры
              </button>
            </motion.div>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Catalog;
