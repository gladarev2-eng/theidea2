import { useState, useMemo } from 'react';
import { motion } from 'framer-motion';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import ProductCard from '@/components/catalog/ProductCard';
import CatalogFilters from '@/components/catalog/CatalogFilters';
import CatalogSort, { SortOption } from '@/components/catalog/CatalogSort';

// Import product images
import productSofa from '@/assets/product-sofa.jpg';
import productChair from '@/assets/product-chair.jpg';
import productArmchair from '@/assets/product-armchair.jpg';
import productBed from '@/assets/product-bed.jpg';
import heroLiving from '@/assets/hero-living-room.jpg';
import heroBedroom from '@/assets/hero-bedroom.jpg';
import heroDining from '@/assets/hero-dining.jpg';

// Categories with subcategories
const categoriesData = [
  { 
    name: 'Мягкая мебель', 
    subcategories: ['Диваны', 'Кресла', 'Пуфы', 'Банкетки'] 
  },
  { 
    name: 'Корпус', 
    subcategories: ['Шкафы', 'Комоды', 'Тумбы', 'Стеллажи'] 
  },
  { 
    name: 'Столы', 
    subcategories: ['Обеденные', 'Журнальные', 'Консоли', 'Письменные'] 
  },
  { 
    name: 'Кровати', 
    subcategories: ['Двуспальные', 'Односпальные', 'Детские'] 
  },
];

const collections = ['Case', 'Bergen', 'Saga', 'Code', 'Savi'];

// Mock product data
const mockProducts = [
  {
    id: '1',
    name: 'Диван CASE 3-местный',
    price: 245000,
    category: 'Мягкая мебель',
    subcategory: 'Диваны',
    collection: 'Case',
    images: [productSofa, heroLiving, heroDining],
    badge: 'new' as const,
  },
  {
    id: '2',
    name: 'Кресло BERGEN с высокой спинкой',
    price: 89000,
    category: 'Мягкая мебель',
    subcategory: 'Кресла',
    collection: 'Bergen',
    images: [productArmchair, heroLiving],
    badge: 'hit' as const,
  },
  {
    id: '3',
    name: 'Стол BERGEN обеденный',
    price: 92000,
    category: 'Столы',
    subcategory: 'Обеденные',
    collection: 'Bergen',
    images: [productChair, heroDining, heroLiving],
  },
  {
    id: '4',
    name: 'Кровать SAVI с мягким изголовьем',
    price: 178000,
    category: 'Кровати',
    subcategory: 'Двуспальные',
    collection: 'Savi',
    images: [productBed, heroBedroom],
  },
  {
    id: '5',
    name: 'Диван SAGA модульный',
    price: 210000,
    category: 'Мягкая мебель',
    subcategory: 'Диваны',
    collection: 'Saga',
    images: [productSofa, heroLiving, heroDining],
  },
  {
    id: '6',
    name: 'Буфет CODE Geometric',
    price: 115000,
    category: 'Корпус',
    subcategory: 'Шкафы',
    collection: 'Code',
    images: [productArmchair, heroDining],
  },
  {
    id: '7',
    name: 'Комод CASE Slim',
    price: 78000,
    category: 'Корпус',
    subcategory: 'Комоды',
    collection: 'Case',
    images: [productChair, heroLiving],
    badge: 'hit' as const,
  },
  {
    id: '8',
    name: 'Кровать BERGEN двуспальная',
    price: 156000,
    category: 'Кровати',
    subcategory: 'Двуспальные',
    collection: 'Bergen',
    images: [productBed, heroBedroom, heroLiving],
  },
  {
    id: '9',
    name: 'Стол CODE журнальный',
    price: 45000,
    category: 'Столы',
    subcategory: 'Журнальные',
    collection: 'Code',
    images: [productChair, heroLiving],
    badge: 'new' as const,
  },
  {
    id: '10',
    name: 'Кресло SAGA для отдыха',
    price: 95000,
    category: 'Мягкая мебель',
    subcategory: 'Кресла',
    collection: 'Saga',
    images: [productArmchair, heroBedroom],
  },
  {
    id: '11',
    name: 'Консоль SAVI минималистичная',
    price: 68000,
    category: 'Столы',
    subcategory: 'Консоли',
    collection: 'Savi',
    images: [productChair, heroDining],
  },
  {
    id: '12',
    name: 'Тумба CASE прикроватная',
    price: 34000,
    category: 'Корпус',
    subcategory: 'Тумбы',
    collection: 'Case',
    images: [productBed, heroBedroom],
  },
];

const defaultPriceRange: [number, number] = [0, 350000];

const Catalog = () => {
  const [filters, setFilters] = useState({
    category: null as string | null,
    subcategory: null as string | null,
    collection: null as string | null,
    priceRange: defaultPriceRange,
  });
  const [sortOption, setSortOption] = useState<SortOption>('default');

  const filteredAndSortedProducts = useMemo(() => {
    let result = [...mockProducts];

    // Apply filters
    if (filters.category) {
      result = result.filter((p) => p.category === filters.category);
    }
    if (filters.subcategory) {
      result = result.filter((p) => p.subcategory === filters.subcategory);
    }
    if (filters.collection) {
      result = result.filter((p) => p.collection === filters.collection);
    }
    result = result.filter(
      (p) => p.price >= filters.priceRange[0] && p.price <= filters.priceRange[1]
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
  }, [filters, sortOption]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Filters as second-level navigation */}
      <CatalogFilters
        filters={filters}
        onFiltersChange={setFilters}
        categories={categoriesData}
        collections={collections}
        priceRange={defaultPriceRange}
      />

      <main className="pb-24">
        <div className="container-wide">
          {/* Sort and count */}
          <CatalogSort
            value={sortOption}
            onChange={setSortOption}
            totalProducts={filteredAndSortedProducts.length}
          />

          {/* Products grid */}
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
              className="text-center py-24"
            >
              <p className="text-xl font-light text-muted-foreground mb-6">
                По вашему запросу ничего не найдено
              </p>
              <button
                onClick={() =>
                  setFilters({
                    category: null,
                    subcategory: null,
                    collection: null,
                    priceRange: defaultPriceRange,
                  })
                }
                className="text-sm uppercase tracking-[0.15em] px-6 py-3 border border-foreground hover:bg-foreground hover:text-background transition-all duration-300"
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
