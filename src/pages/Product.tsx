import { useParams, useSearchParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductStory from "@/components/product/ProductStory";
import ProductSpecs from "@/components/product/ProductSpecs";
import ProductCTA from "@/components/product/ProductCTA";
import RelatedProducts from "@/components/product/RelatedProducts";
import { useFavorites } from "@/contexts/FavoritesContext";

import heroLiving from "@/assets/hero-living-room.jpg";
import heroBedroom from "@/assets/hero-bedroom.jpg";
import heroDining from "@/assets/hero-dining.jpg";
import manufacturing from "@/assets/manufacturing.jpg";
import productSofa from "@/assets/product-sofa.jpg";
import productArmchair from "@/assets/product-armchair.jpg";
import productChair from "@/assets/product-chair.jpg";
import productBed from "@/assets/product-bed.jpg";

// Product type definition
interface ProductColor {
  id: string;
  name: string;
  hex: string;
  productId?: string;
}

interface ProductSize {
  id: string;
  name: string;
  dimensions: string;
  productId?: string;
}

interface RelatedProduct {
  id: string;
  name: string;
  price: number;
  image: string;
  collection: string;
}

interface ProductData {
  id: string;
  name: string;
  collection: string;
  collectionSlug: string;
  price: number;
  description: string;
  images: string[];
  colors: ProductColor[];
  sizes: ProductSize[];
  selectedColor: string;
  selectedSize: string;
  productionTime: string;
  dimensions: string;
  materials: string;
  specs: { label: string; value: string }[];
  story: { title: string; text: string; image: string };
  relatedProducts: RelatedProduct[];
}

// Product variations (different sizes/colors lead to different URLs)
const productVariations: Record<string, ProductData> = {
  "flux-m-beige": {
    id: "flux-m-beige",
    name: "Диван Flux",
    collection: "Коллекция Flux",
    collectionSlug: "case",
    price: 285000,
    description: "Диван Flux — воплощение современного минимализма и безупречного комфорта. Чистые линии и мягкие формы создают ощущение лёгкости, а качественные материалы обеспечивают долговечность.",
    images: [productSofa, heroLiving, heroDining, manufacturing],
    colors: [
      { id: "beige", name: "Бежевый", hex: "#E8DFD1", productId: "flux-m-beige" },
      { id: "gray", name: "Серый", hex: "#9CA3AF", productId: "flux-m-gray" },
      { id: "green", name: "Оливковый", hex: "#6B7B5C", productId: "flux-m-green" },
    ],
    sizes: [
      { id: "s", name: "S", dimensions: "180×90×75 см", productId: "flux-s-beige" },
      { id: "m", name: "M", dimensions: "220×95×75 см", productId: "flux-m-beige" },
      { id: "l", name: "L", dimensions: "260×100×75 см", productId: "flux-l-beige" },
    ],
    selectedColor: "beige",
    selectedSize: "m",
    productionTime: "4-6 недель",
    dimensions: "220×95×75 см",
    materials: "Массив дуба, итальянская ткань категории А",
    specs: [
      { label: "Материал каркаса", value: "Массив дуба" },
      { label: "Обивка", value: "Итальянская ткань категории А" },
      { label: "Наполнитель", value: "Пенополиуретан высокой плотности" },
      { label: "Ножки", value: "Металл, порошковая окраска" },
      { label: "Вес", value: "65 кг" },
      { label: "Максимальная нагрузка", value: "300 кг" },
    ],
    story: {
      title: "Философия Flux",
      text: "Коллекция Flux родилась из стремления создать мебель, которая не просто заполняет пространство, а формирует его характер. Каждый предмет — результат многомесячной работы дизайнеров и мастеров, где традиционные техники соединяются с современными технологиями.",
      image: manufacturing,
    },
    relatedProducts: [
      { id: "2", name: "Кресло Flux", price: 95000, image: productArmchair, collection: "Flux" },
      { id: "3", name: "Журнальный стол Flux", price: 68000, image: productChair, collection: "Flux" },
      { id: "4", name: "Тумба Flux", price: 45000, image: productBed, collection: "Flux" },
    ],
  },
};

// Default product data
const productData = productVariations["flux-m-beige"];

// Design details section content
const designDetails = {
  craftsmanship: {
    title: "Мастерство исполнения",
    description: "Каждый диван Flux создаётся вручную на нашем производстве в Санкт-Петербурге. Мы используем традиционные техники обивки, дополненные современными технологиями для достижения идеальной геометрии.",
    image: manufacturing,
  },
  materials: {
    title: "Материалы высшего качества",
    description: "Каркас из массива дуба обеспечивает долговечность конструкции. Итальянские ткани категории А отличаются износостойкостью и приятной тактильностью. Наполнитель из пенополиуретана высокой плотности сохраняет форму годами.",
    image: heroBedroom,
  },
  comfort: {
    title: "Эргономика комфорта",
    description: "Глубина посадки, высота спинки, угол наклона — каждый параметр выверен для идеального комфорта. Flux создан для долгих вечеров с книгой и уютных посиделок с друзьями.",
    image: heroLiving,
  },
};

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  
  // Get product data based on ID or default
  const currentProduct = productVariations[id || ""] || productData;
  
  const [selectedColor, setSelectedColor] = useState(
    currentProduct.colors.find(c => c.id === currentProduct.selectedColor) || currentProduct.colors[0]
  );
  const [selectedSize, setSelectedSize] = useState(
    currentProduct.sizes.find(s => s.id === currentProduct.selectedSize) || currentProduct.sizes[1]
  );
  
  const { toggleFavorite, isFavorite } = useFavorites();
  const isProductFavorite = isFavorite(currentProduct.id);

  // Handle color/size change with URL update
  const handleColorChange = (color: typeof selectedColor) => {
    setSelectedColor(color);
    if (color.productId) {
      navigate(`/product/${color.productId}`, { replace: true });
    }
  };

  const handleSizeChange = (size: typeof selectedSize) => {
    setSelectedSize(size);
    if (size.productId) {
      navigate(`/product/${size.productId}`, { replace: true });
    }
  };

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU").format(price) + " ₽";
  };

  const handleFavoriteToggle = () => {
    toggleFavorite({
      id: currentProduct.id,
      name: currentProduct.name,
      price: currentProduct.price,
      collection: currentProduct.collection,
      image: currentProduct.images[0],
    });
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumbs */}
      <div className="pt-20 md:pt-24 pb-4 md:pb-6">
        <div className="container-wide">
          <div className="flex flex-wrap items-center gap-1.5 md:gap-2 text-xs md:text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Главная</Link>
            <span>/</span>
            <Link to="/catalog" className="hover:text-foreground transition-colors">Каталог</Link>
            <span>/</span>
            <Link to={`/collection/${currentProduct.collectionSlug}`} className="hover:text-foreground transition-colors truncate max-w-[100px] md:max-w-none">
              {currentProduct.collection}
            </Link>
            <span>/</span>
            <span className="text-foreground truncate max-w-[120px] md:max-w-none">{currentProduct.name}</span>
          </div>
        </div>
      </div>

      {/* Main Product Section - Split Layout */}
      <section className="pb-12 md:pb-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 lg:gap-12">
            {/* Left - Scrolling Gallery with 1:1 images */}
            <ProductGallery images={currentProduct.images} name={currentProduct.name} showAskQuestion={true} />

            {/* Right - Sticky Product Info */}
            <div className="lg:sticky lg:top-28 lg:h-fit">
              <ProductInfo
                id={currentProduct.id}
                name={currentProduct.name}
                collection={currentProduct.collection}
                price={formatPrice(currentProduct.price)}
                priceNumber={currentProduct.price}
                description={currentProduct.description}
                colors={currentProduct.colors}
                sizes={currentProduct.sizes}
                selectedColor={selectedColor}
                selectedSize={selectedSize}
                onColorChange={handleColorChange}
                onSizeChange={handleSizeChange}
                productionTime={currentProduct.productionTime}
                dimensions={selectedSize.dimensions}
                isFavorite={isProductFavorite}
                onFavoriteToggle={handleFavoriteToggle}
                image={currentProduct.images[0]}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Extended Design Presentation */}
      <section className="py-16 md:py-24 lg:py-32 bg-muted/30">
        <div className="container-wide">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-20"
          >
            <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-3 md:mb-4">
              Детали
            </p>
            <h2 className="text-2xl md:text-3xl lg:text-5xl font-extralight tracking-tight">
              Искусство в деталях
            </h2>
          </motion.div>

          <div className="space-y-16 md:space-y-24 lg:space-y-32">
            {Object.entries(designDetails).map(([key, detail], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-12 lg:gap-24 items-center ${
                  index % 2 === 1 ? '' : ''
                }`}
              >
                <div className={index % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className="aspect-[4/3] md:aspect-[4/3] overflow-hidden">
                    <img
                      src={detail.image}
                      alt={detail.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <div className={`${index % 2 === 1 ? 'lg:order-1' : ''} py-4 md:py-0`}>
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-light tracking-tight mb-4 md:mb-6">
                    {detail.title}
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg text-muted-foreground leading-relaxed">
                    {detail.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Product Story / Collection Presentation */}
      <ProductStory
        title={currentProduct.story.title}
        text={currentProduct.story.text}
        image={currentProduct.story.image}
        collectionName={currentProduct.collection}
      />

      {/* Technical Specifications */}
      <ProductSpecs specs={currentProduct.specs} productName={currentProduct.name} />

      {/* CTA - "Понравился предмет?" */}
      <ProductCTA productName={currentProduct.name} />

      {/* Related Products from Collection */}
      <RelatedProducts
        products={currentProduct.relatedProducts}
        collectionName="Flux"
      />

      <Footer />
    </div>
  );
};

export default Product;