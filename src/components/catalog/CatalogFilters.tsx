import { useState } from 'react';
import { ChevronDown, SlidersHorizontal, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FiltersState {
  category: string | null;
  subcategory: string | null;
  collection: string | null;
  priceRange: [number, number];
}

interface CatalogFiltersProps {
  filters: FiltersState;
  onFiltersChange: (filters: FiltersState) => void;
  categories: { name: string; subcategories: string[] }[];
  collections: string[];
  priceRange: [number, number];
}

const CatalogFilters = ({
  filters,
  onFiltersChange,
  categories,
  collections,
  priceRange,
}: CatalogFiltersProps) => {
  const [showAdvanced, setShowAdvanced] = useState(false);

  const handleCategorySelect = (category: string | null) => {
    onFiltersChange({ 
      ...filters, 
      category, 
      subcategory: null // Reset subcategory when category changes
    });
  };

  const handleSubcategorySelect = (subcategory: string | null) => {
    onFiltersChange({ ...filters, subcategory });
  };

  const handleCollectionSelect = (collection: string | null) => {
    onFiltersChange({ ...filters, collection });
  };

  const handlePriceChange = (min: number, max: number) => {
    onFiltersChange({ ...filters, priceRange: [min, max] });
  };

  const clearAllFilters = () => {
    onFiltersChange({
      category: null,
      subcategory: null,
      collection: null,
      priceRange: priceRange,
    });
    setShowAdvanced(false);
  };

  const hasActiveFilters =
    filters.category ||
    filters.subcategory ||
    filters.collection ||
    filters.priceRange[0] !== priceRange[0] ||
    filters.priceRange[1] !== priceRange[1];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
  };

  // Get subcategories for selected category
  const currentSubcategories = filters.category 
    ? categories.find(c => c.name === filters.category)?.subcategories || []
    : [];

  return (
    <div className="pt-28 pb-6">
      {/* Level 1: Categories (main tabs) */}
      <div className="border-b border-border">
        <div className="container-wide">
          <nav className="flex items-center gap-8 -mb-px">
            <button
              onClick={() => handleCategorySelect(null)}
              className={`py-4 text-xs uppercase tracking-[0.2em] border-b-2 transition-all duration-300 ${
                !filters.category
                  ? 'border-foreground text-foreground'
                  : 'border-transparent text-muted-foreground hover:text-foreground'
              }`}
            >
              Все
            </button>
            {categories.map((cat) => (
              <button
                key={cat.name}
                onClick={() => handleCategorySelect(cat.name)}
                className={`py-4 text-xs uppercase tracking-[0.2em] border-b-2 transition-all duration-300 whitespace-nowrap ${
                  filters.category === cat.name
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

      {/* Level 2: Subcategories (if category selected) */}
      <AnimatePresence>
        {filters.category && currentSubcategories.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="border-b border-border bg-muted/30"
          >
            <div className="container-wide">
              <nav className="flex items-center gap-6 py-3">
                <button
                  onClick={() => handleSubcategorySelect(null)}
                  className={`px-4 py-2 text-xs uppercase tracking-[0.15em] transition-all duration-300 ${
                    !filters.subcategory
                      ? 'bg-foreground text-background'
                      : 'bg-transparent text-muted-foreground hover:text-foreground'
                  }`}
                >
                  Все
                </button>
                {currentSubcategories.map((sub) => (
                  <button
                    key={sub}
                    onClick={() => handleSubcategorySelect(sub)}
                    className={`px-4 py-2 text-xs uppercase tracking-[0.15em] transition-all duration-300 ${
                      filters.subcategory === sub
                        ? 'bg-foreground text-background'
                        : 'bg-transparent text-muted-foreground hover:text-foreground'
                    }`}
                  >
                    {sub}
                  </button>
                ))}
              </nav>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Level 3: Collections + Advanced filters */}
      <div className="container-wide">
        <div className="flex items-center justify-between py-4 border-b border-border">
          {/* Collections */}
          <div className="flex items-center gap-3">
            <button
              onClick={() => handleCollectionSelect(null)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.15em] border transition-all duration-300 ${
                !filters.collection
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-border hover:border-foreground'
              }`}
            >
              Все
            </button>
            {collections.map((collection) => (
              <button
                key={collection}
                onClick={() => handleCollectionSelect(collection)}
                className={`px-4 py-2 text-xs uppercase tracking-[0.15em] border transition-all duration-300 ${
                  filters.collection === collection
                    ? 'border-foreground bg-foreground text-background'
                    : 'border-border hover:border-foreground'
                }`}
              >
                {collection}
              </button>
            ))}
          </div>

          {/* Advanced filters toggle */}
          <div className="flex items-center gap-4">
            {hasActiveFilters && (
              <button
                onClick={clearAllFilters}
                className="flex items-center gap-1.5 text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
              >
                <X className="w-3.5 h-3.5" />
                Сбросить
              </button>
            )}
            <button
              onClick={() => setShowAdvanced(!showAdvanced)}
              className={`flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-[0.15em] border transition-all duration-300 ${
                showAdvanced
                  ? 'border-foreground bg-foreground text-background'
                  : 'border-border hover:border-foreground'
              }`}
            >
              <SlidersHorizontal className="w-3.5 h-3.5" />
              Фильтры
            </button>
          </div>
        </div>

        {/* Advanced filters panel */}
        <AnimatePresence>
          {showAdvanced && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="py-6 border-b border-border">
                <div className="flex items-end gap-8">
                  {/* Price range */}
                  <div className="flex items-center gap-4">
                    <span className="text-xs uppercase tracking-[0.15em] text-muted-foreground">
                      Цена:
                    </span>
                    <div className="flex items-center gap-3">
                      <div className="relative">
                        <input
                          type="number"
                          value={filters.priceRange[0]}
                          onChange={(e) =>
                            handlePriceChange(Number(e.target.value), filters.priceRange[1])
                          }
                          min={priceRange[0]}
                          max={filters.priceRange[1]}
                          className="w-32 px-3 py-2 text-sm border border-border bg-transparent focus:border-foreground outline-none transition-colors"
                          placeholder="От"
                        />
                      </div>
                      <span className="text-muted-foreground">—</span>
                      <div className="relative">
                        <input
                          type="number"
                          value={filters.priceRange[1]}
                          onChange={(e) =>
                            handlePriceChange(filters.priceRange[0], Number(e.target.value))
                          }
                          min={filters.priceRange[0]}
                          max={priceRange[1]}
                          className="w-32 px-3 py-2 text-sm border border-border bg-transparent focus:border-foreground outline-none transition-colors"
                          placeholder="До"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CatalogFilters;
