import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export type SortOption = 'default' | 'price-asc' | 'price-desc' | 'name-asc' | 'name-desc' | 'new';

interface CatalogSortProps {
  value: SortOption;
  onChange: (value: SortOption) => void;
  totalProducts: number;
}

const sortOptions: { value: SortOption; label: string }[] = [
  { value: 'default', label: 'По популярности' },
  { value: 'new', label: 'Сначала новинки' },
  { value: 'price-asc', label: 'Сначала дешевле' },
  { value: 'price-desc', label: 'Сначала дороже' },
  { value: 'name-asc', label: 'По названию А-Я' },
  { value: 'name-desc', label: 'По названию Я-А' },
];

const CatalogSort = ({ value, onChange, totalProducts }: CatalogSortProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const currentLabel = sortOptions.find((opt) => opt.value === value)?.label || 'По популярности';

  return (
    <div className="flex items-center justify-between py-6">
      <p className="text-sm text-muted-foreground">
        <span className="text-foreground font-medium">{totalProducts}</span> товаров
      </p>

      <div className="relative">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 text-sm hover:opacity-70 transition-opacity"
        >
          <span>{currentLabel}</span>
          <ChevronDown
            className={`w-4 h-4 transition-transform duration-300 ${
              isOpen ? 'rotate-180' : ''
            }`}
          />
        </button>

        <AnimatePresence>
          {isOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setIsOpen(false)}
              />
              
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.2 }}
                className="absolute top-full right-0 mt-2 min-w-[200px] bg-background border border-border z-50 shadow-lg"
              >
                <div className="py-2">
                  {sortOptions.map((option) => (
                    <button
                      key={option.value}
                      onClick={() => {
                        onChange(option.value);
                        setIsOpen(false);
                      }}
                      className={`w-full text-left px-4 py-2.5 text-sm hover:bg-muted transition-colors ${
                        value === option.value ? 'font-medium bg-muted/50' : 'font-light'
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </motion.div>
            </>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};

export default CatalogSort;
