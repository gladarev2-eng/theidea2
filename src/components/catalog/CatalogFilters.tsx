import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface FiltersState {
  category: string | null;
  collection: string | null;
  priceRange: [number, number];
}

interface CatalogFiltersProps {
  filters: FiltersState;
  onFiltersChange: (filters: FiltersState) => void;
  categories: string[];
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
  const [openFilter, setOpenFilter] = useState<string | null>(null);

  const toggleFilter = (filter: string) => {
    setOpenFilter(openFilter === filter ? null : filter);
  };

  const handleCategorySelect = (category: string | null) => {
    onFiltersChange({ ...filters, category });
    setOpenFilter(null);
  };

  const handleCollectionSelect = (collection: string | null) => {
    onFiltersChange({ ...filters, collection });
    setOpenFilter(null);
  };

  const handlePriceChange = (min: number, max: number) => {
    onFiltersChange({ ...filters, priceRange: [min, max] });
  };

  const clearAllFilters = () => {
    onFiltersChange({
      category: null,
      collection: null,
      priceRange: priceRange,
    });
  };

  const hasActiveFilters =
    filters.category ||
    filters.collection ||
    filters.priceRange[0] !== priceRange[0] ||
    filters.priceRange[1] !== priceRange[1];

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
  };

  const FilterDropdown = ({
    label,
    value,
    filterId,
    children,
  }: {
    label: string;
    value: string | null;
    filterId: string;
    children: React.ReactNode;
  }) => (
    <div className="relative">
      <button
        onClick={() => toggleFilter(filterId)}
        className={`flex items-center gap-2 px-4 py-2.5 text-xs uppercase tracking-[0.15em] border transition-all duration-300 ${
          openFilter === filterId || value
            ? 'border-foreground bg-foreground text-background'
            : 'border-border hover:border-foreground'
        }`}
      >
        <span>{value || label}</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-300 ${
            openFilter === filterId ? 'rotate-180' : ''
          }`}
        />
      </button>

      <AnimatePresence>
        {openFilter === filterId && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="absolute top-full left-0 mt-2 min-w-[200px] bg-background border border-border z-50"
          >
            {children}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );

  return (
    <div className="border-b border-border pb-6 mb-8">
      <div className="flex flex-wrap items-center gap-3">
        {/* Category filter */}
        <FilterDropdown
          label="Категория"
          value={filters.category}
          filterId="category"
        >
          <div className="py-2">
            <button
              onClick={() => handleCategorySelect(null)}
              className={`w-full text-left px-4 py-2.5 text-sm hover:bg-muted transition-colors ${
                !filters.category ? 'font-medium' : 'font-light'
              }`}
            >
              Все категории
            </button>
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => handleCategorySelect(category)}
                className={`w-full text-left px-4 py-2.5 text-sm hover:bg-muted transition-colors ${
                  filters.category === category ? 'font-medium' : 'font-light'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </FilterDropdown>

        {/* Collection filter */}
        <FilterDropdown
          label="Коллекция"
          value={filters.collection}
          filterId="collection"
        >
          <div className="py-2">
            <button
              onClick={() => handleCollectionSelect(null)}
              className={`w-full text-left px-4 py-2.5 text-sm hover:bg-muted transition-colors ${
                !filters.collection ? 'font-medium' : 'font-light'
              }`}
            >
              Все коллекции
            </button>
            {collections.map((collection) => (
              <button
                key={collection}
                onClick={() => handleCollectionSelect(collection)}
                className={`w-full text-left px-4 py-2.5 text-sm hover:bg-muted transition-colors ${
                  filters.collection === collection ? 'font-medium' : 'font-light'
                }`}
              >
                {collection}
              </button>
            ))}
          </div>
        </FilterDropdown>

        {/* Price filter */}
        <FilterDropdown
          label="Цена"
          value={
            filters.priceRange[0] !== priceRange[0] ||
            filters.priceRange[1] !== priceRange[1]
              ? `${formatPrice(filters.priceRange[0])} — ${formatPrice(filters.priceRange[1])}`
              : null
          }
          filterId="price"
        >
          <div className="p-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="flex-1">
                <label className="text-xs uppercase tracking-[0.1em] text-muted-foreground mb-1.5 block">
                  От
                </label>
                <input
                  type="number"
                  value={filters.priceRange[0]}
                  onChange={(e) =>
                    handlePriceChange(Number(e.target.value), filters.priceRange[1])
                  }
                  min={priceRange[0]}
                  max={filters.priceRange[1]}
                  className="w-full px-3 py-2 text-sm border border-border bg-transparent focus:border-foreground outline-none transition-colors"
                />
              </div>
              <div className="flex-1">
                <label className="text-xs uppercase tracking-[0.1em] text-muted-foreground mb-1.5 block">
                  До
                </label>
                <input
                  type="number"
                  value={filters.priceRange[1]}
                  onChange={(e) =>
                    handlePriceChange(filters.priceRange[0], Number(e.target.value))
                  }
                  min={filters.priceRange[0]}
                  max={priceRange[1]}
                  className="w-full px-3 py-2 text-sm border border-border bg-transparent focus:border-foreground outline-none transition-colors"
                />
              </div>
            </div>
            <button
              onClick={() => setOpenFilter(null)}
              className="w-full py-2.5 text-xs uppercase tracking-[0.15em] border border-foreground bg-foreground text-background hover:bg-transparent hover:text-foreground transition-all duration-300"
            >
              Применить
            </button>
          </div>
        </FilterDropdown>

        {/* Clear filters */}
        {hasActiveFilters && (
          <button
            onClick={clearAllFilters}
            className="flex items-center gap-1.5 px-4 py-2.5 text-xs uppercase tracking-[0.15em] text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="w-3.5 h-3.5" />
            <span>Сбросить</span>
          </button>
        )}
      </div>
    </div>
  );
};

export default CatalogFilters;
