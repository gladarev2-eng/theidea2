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

// Mock product data
const mockProducts = [
  {
    id: '1',
    name: 'Диван Oslo трёхместный с подлокотниками',
    price: 245000,
    category: 'Диваны',
    collection: 'Oslo',
    images: [productSofa, heroLiving, heroDining],
  },
  {
    id: '2',
    name: 'Кресло Copenhagen с высокой спинкой',
    price: 89000,
    category: 'Кресла',
    collection: 'Copenhagen',
    images: [productArmchair, heroLiving],
  },
  {
    id: '3',
    name: 'Стул Bergen обеденный',
    price: 34500,
    category: 'Стулья',
    collection: 'Bergen',
    images: [productChair, heroDining],
  },
  {
    id: '4',
    name: 'Кровать Stockholm с мягким изголовьем',
    price: 178000,
    category: 'Кровати',
    collection: 'Stockholm',
    images: [productBed, heroBedroom],
  },
  {
    id: '5',
    name: 'Диван Oslo двухместный',
    price: 195000,
    category: 'Диваны',
    collection: 'Oslo',
    images: [productSofa, heroLiving],
  },
  {
    id: '6',
    name: 'Кресло Bergen с деревянными ножками',
    price: 67000,
    category: 'Кресла',
    collection: 'Bergen',
    images: [productArmchair, heroDining],
  },
  {
    id: '7',
    name: 'Стул Copenhagen мягкий',
    price: 42000,
    category: 'Стулья',
    collection: 'Copenhagen',
    images: [productChair, heroLiving],
  },
  {
    id: '8',
    name: 'Кровать Oslo с ящиками',
    price: 215000,
    category: 'Кровати',
    collection: 'Oslo',
    images: [productBed, heroBedroom, heroLiving],
  },
  {
    id: '9',
    name: 'Диван Copenhagen угловой',
    price: 320000,
    category: 'Диваны',
    collection: 'Copenhagen',
    images: [productSofa, heroLiving, heroDining],
  },
  {
    id: '10',
    name: 'Кресло Stockholm для отдыха',
    price: 95000,
    category: 'Кресла',
    collection: 'Stockholm',
    images: [productArmchair, heroBedroom],
  },
  {
    id: '11',
    name: 'Стул Oslo барный',
    price: 28000,
    category: 'Стулья',
    collection: 'Oslo',
    images: [productChair, heroDining],
  },
  {
    id: '12',
    name: 'Кровать Bergen двуспальная',
    price: 156000,
    category: 'Кровати',
    collection: 'Bergen',
    images: [productBed, heroBedroom],
  },
];

const categories = ['Диваны', 'Кресла', 'Стулья', 'Кровати'];
const collections = ['Oslo', 'Copenhagen', 'Bergen', 'Stockholm'];
const defaultPriceRange: [number, number] = [0, 350000];

const Catalog = () => {
  const [filters, setFilters] = useState({
    category: null as string | null,
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
    }

    return result;
  }, [filters, sortOption]);

  return (
    <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-32 pb-24">
        <div className="container-wide">
          {/* Page header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-light tracking-tight mb-4">
              Мебель
            </h1>
            <p className="text-muted-foreground font-light max-w-xl">
              Коллекция премиальной мебели ручной работы для современного интерьера
            </p>
          </motion.div>

          {/* Filters */}
          <CatalogFilters
            filters={filters}
            onFiltersChange={setFilters}
            categories={categories}
            collections={collections}
            priceRange={defaultPriceRange}
          />

          {/* Sort and count */}
          <CatalogSort
            value={sortOption}
            onChange={setSortOption}
            totalProducts={filteredAndSortedProducts.length}
          />

          {/* Products grid */}
          {filteredAndSortedProducts.length > 0 ? (
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">
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
              <p className="text-lg font-light text-muted-foreground mb-4">
                По выбранным фильтрам товары не найдены
              </p>
              <button
                onClick={() =>
                  setFilters({
                    category: null,
                    collection: null,
                    priceRange: defaultPriceRange,
                  })
                }
                className="text-sm uppercase tracking-[0.15em] border-b border-foreground pb-1 hover:opacity-70 transition-opacity"
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
