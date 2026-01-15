import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import ProductCard from '@/components/catalog/ProductCard';
import CatalogSort, { SortOption } from '@/components/catalog/CatalogSort';
import { X, SlidersHorizontal, ChevronRight } from 'lucide-react';
import { categories, collections, mockProducts } from '@/data/catalogData';

const defaultPriceRange: [number, number] = [0, 350000];

const Catalog = () => {
  // 3-level filters
  const [activeCategory, setActiveCategory] = useState('all');
  const [activeSubcategory, setActiveSubcategory] = useState<string | null>(null);
  const [activeSubSubcategory, setActiveSubSubcategory] = useState<string | null>(null);
  const [activeCollection, setActiveCollection] = useState<string | null>(null);
  
  const [priceRange, setPriceRange] = useState<[number, number]>(defaultPriceRange);
  const [showFilters, setShowFilters] = useState(false);
  const [sortOption, setSortOption] = useState<SortOption>('default');

  // Get current category's subcategories
  const currentCategory = categories.find(c => c.id === activeCategory);
  const currentSubcategories = currentCategory?.subcategories || [];
  
  // Get current subcategory's sub-subcategories
  const currentSubcategory = currentSubcategories.find(s => s.id === activeSubcategory);
  const currentSubSubcategories = currentSubcategory?.subcategories || [];

  // Get collections filtered by current category
  const filteredCollections = useMemo(() => {
    if (activeCategory === 'all') {
      return collections;
    }
    return collections.filter(c => c.type === activeCategory);
  }, [activeCategory]);

  const hasActiveFilters = 
    activeCategory !== 'all' || 
    activeSubcategory !== null ||
    activeSubSubcategory !== null ||
    activeCollection !== null || 
    priceRange[0] !== defaultPriceRange[0] || 
    priceRange[1] !== defaultPriceRange[1];

  const clearAllFilters = () => {
    setActiveCategory('all');
    setActiveSubcategory(null);
    setActiveSubSubcategory(null);
    setActiveCollection(null);
    setPriceRange(defaultPriceRange);
    setShowFilters(false);
  };

  const handleCategoryChange = (categoryId: string) => {
    setActiveCategory(categoryId);
    setActiveSubcategory(null);
    setActiveSubSubcategory(null);
    setActiveCollection(null);
  };

  const handleSubcategoryChange = (subcategoryId: string | null) => {
    setActiveSubcategory(subcategoryId);
    setActiveSubSubcategory(null);
  };

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...mockProducts];

    // Apply filters
    if (activeCategory !== 'all') {
      result = result.filter((p) => p.category === activeCategory);
    }
    if (activeSubcategory) {
      result = result.filter((p) => p.subcategory === activeSubcategory);
    }
    if (activeSubSubcategory) {
      result = result.filter((p) => p.subsubcategory === activeSubSubcategory);
    }
    if (activeCollection) {
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
  }, [activeCategory, activeSubcategory, activeSubSubcategory, activeCollection, priceRange, sortOption]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Level 1: Main Categories */}
      <div className="pt-20 border-b border-border sticky top-[72px] bg-background z-40">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <nav className="flex items-center gap-10 -mb-px overflow-x-auto no-scrollbar">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.id)}
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

      {/* Level 2: Subcategories */}
      <AnimatePresence>
        {activeCategory !== 'all' && currentSubcategories.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-b border-border bg-muted/30"
          >
            <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
              <nav className="flex items-center gap-3 py-4 overflow-x-auto no-scrollbar">
                <button
                  onClick={() => handleSubcategoryChange(null)}
                  className={`px-5 py-2.5 text-[11px] uppercase tracking-[0.15em] rounded-full transition-all duration-300 whitespace-nowrap ${
                    !activeSubcategory
                      ? 'bg-foreground text-background'
                      : 'bg-transparent text-muted-foreground hover:text-foreground border border-border'
                  }`}
                >
                  Все
                </button>
                {currentSubcategories.map((sub) => (
                  <button
                    key={sub.id}
                    onClick={() => handleSubcategoryChange(sub.id)}
                    className={`flex items-center gap-1.5 px-5 py-2.5 text-[11px] uppercase tracking-[0.15em] rounded-full transition-all duration-300 whitespace-nowrap ${
                      activeSubcategory === sub.id
                        ? 'bg-foreground text-background'
                        : 'bg-transparent text-muted-foreground hover:text-foreground border border-border'
                    }`}
                  >
                    {sub.name}
                    {sub.subcategories.length > 0 && (
                      <ChevronRight className="w-3 h-3" />
                    )}
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Level 3: Sub-Subcategories */}
      <AnimatePresence>
        {activeSubcategory && currentSubSubcategories.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-b border-border bg-muted/50"
          >
            <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
              <nav className="flex items-center gap-3 py-3 overflow-x-auto no-scrollbar">
                <button
                  onClick={() => setActiveSubSubcategory(null)}
                  className={`px-4 py-2 text-[10px] uppercase tracking-[0.15em] rounded-full transition-all duration-300 whitespace-nowrap ${
                    !activeSubSubcategory
                      ? 'bg-foreground text-background'
                      : 'bg-transparent text-muted-foreground hover:text-foreground border border-border/50'
                  }`}
                >
                  Все
                </button>
                {currentSubSubcategories.map((subsub) => (
                  <button
                    key={subsub.id}
                    onClick={() => setActiveSubSubcategory(subsub.id)}
                    className={`px-4 py-2 text-[10px] uppercase tracking-[0.15em] rounded-full transition-all duration-300 whitespace-nowrap ${
                      activeSubSubcategory === subsub.id
                        ? 'bg-foreground text-background'
                        : 'bg-transparent text-muted-foreground hover:text-foreground border border-border/50'
                    }`}
                  >
                    {subsub.name}
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Collections + Filters */}
      <div className="border-b border-border bg-background">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          <div className="flex items-center justify-between py-4">
            {/* Collections */}
            <div className="flex items-center gap-2 overflow-x-auto no-scrollbar">
              <button
                onClick={() => setActiveCollection(null)}
                className={`px-5 py-2.5 text-[11px] uppercase tracking-[0.15em] rounded-full transition-all duration-300 whitespace-nowrap ${
                  !activeCollection
                    ? 'bg-foreground text-background'
                    : 'border border-border hover:border-foreground bg-transparent'
                }`}
              >
                Все коллекции
              </button>
              {filteredCollections.map((collection) => (
                <button
                  key={collection.id}
                  onClick={() => setActiveCollection(activeCollection === collection.id ? null : collection.id)}
                  className={`px-5 py-2.5 text-[11px] uppercase tracking-[0.15em] rounded-full transition-all duration-300 whitespace-nowrap ${
                    activeCollection === collection.id
                      ? 'bg-foreground text-background'
                      : 'border border-border hover:border-foreground bg-transparent'
                  }`}
                >
                  {collection.name}
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
                className={`flex items-center gap-2 px-5 py-2.5 text-[11px] uppercase tracking-[0.15em] rounded-full transition-all duration-300 ${
                  showFilters
                    ? 'bg-foreground text-background'
                    : 'border border-border hover:border-foreground'
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
            <div className="max-w-[1600px] mx-auto px-6 lg:px-16 py-6">
              <div className="flex items-center gap-8">
                <span className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                  Цена:
                </span>
                <div className="flex items-center gap-4">
                  <input
                    type="number"
                    value={priceRange[0]}
                    onChange={(e) => setPriceRange([Number(e.target.value), priceRange[1]])}
                    className="w-32 px-4 py-2.5 text-sm rounded-full border border-border bg-transparent focus:border-foreground outline-none transition-colors"
                    placeholder="От"
                  />
                  <span className="text-muted-foreground">—</span>
                  <input
                    type="number"
                    value={priceRange[1]}
                    onChange={(e) => setPriceRange([priceRange[0], Number(e.target.value)])}
                    className="w-32 px-4 py-2.5 text-sm rounded-full border border-border bg-transparent focus:border-foreground outline-none transition-colors"
                    placeholder="До"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <main className="pb-24">
        <div className="max-w-[1600px] mx-auto px-6 lg:px-16">
          {/* Sort and count */}
          <CatalogSort
            value={sortOption}
            onChange={setSortOption}
            totalProducts={filteredAndSortedProducts.length}
          />

          {/* Products grid - 3 columns with larger images */}
          {filteredAndSortedProducts.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-20">
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
                className="text-[11px] uppercase tracking-[0.2em] px-8 py-4 rounded-full border border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
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
