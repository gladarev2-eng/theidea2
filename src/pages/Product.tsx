import { useParams, Link } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";
import { Heart, ChevronLeft, Package, Clock, Ruler, Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import ProductGallery from "@/components/product/ProductGallery";
import ProductInfo from "@/components/product/ProductInfo";
import ProductStory from "@/components/product/ProductStory";
import ProductSpecs from "@/components/product/ProductSpecs";
import ProductCTA from "@/components/product/ProductCTA";
import RelatedProducts from "@/components/product/RelatedProducts";

// Mock product data
const productData = {
  id: "1",
  name: "Диван Flux",
  collection: "Коллекция Flux",
  price: 285000,
  description: "Диван Flux — воплощение современного минимализма и безупречного комфорта. Чистые линии и мягкие формы создают ощущение лёгкости, а качественные материалы обеспечивают долговечность.",
  images: [
    "/src/assets/product-sofa.jpg",
    "/src/assets/hero-living-room.jpg",
    "/src/assets/hero-dining.jpg",
    "/src/assets/manufacturing.jpg",
  ],
  colors: [
    { id: "beige", name: "Бежевый", hex: "#E8DFD1" },
    { id: "gray", name: "Серый", hex: "#9CA3AF" },
    { id: "green", name: "Оливковый", hex: "#6B7B5C" },
  ],
  sizes: [
    { id: "s", name: "S", dimensions: "180×90×75 см" },
    { id: "m", name: "M", dimensions: "220×95×75 см" },
    { id: "l", name: "L", dimensions: "260×100×75 см" },
  ],
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
    image: "/src/assets/manufacturing.jpg",
  },
  relatedProducts: [
    { id: "2", name: "Кресло Flux", price: 95000, image: "/src/assets/product-armchair.jpg", collection: "Flux" },
    { id: "3", name: "Журнальный стол Flux", price: 68000, image: "/src/assets/product-chair.jpg", collection: "Flux" },
    { id: "4", name: "Тумба Flux", price: 45000, image: "/src/assets/product-bed.jpg", collection: "Flux" },
  ],
};

const Product = () => {
  const { id } = useParams();
  const [selectedColor, setSelectedColor] = useState(productData.colors[0]);
  const [selectedSize, setSelectedSize] = useState(productData.sizes[1]);
  const [isFavorite, setIsFavorite] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("ru-RU").format(price) + " ₽";
  };

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Breadcrumbs */}
      <div className="pt-24 pb-6">
        <div className="container-wide">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Link to="/" className="hover:text-foreground transition-colors">Главная</Link>
            <span>/</span>
            <Link to="/catalog" className="hover:text-foreground transition-colors">Каталог</Link>
            <span>/</span>
            <span className="text-foreground">{productData.name}</span>
          </div>
        </div>
      </div>

      {/* Main Product Section - Split Layout */}
      <section className="pb-24">
        <div className="container-wide">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
            {/* Left - Scrolling Gallery */}
            <ProductGallery images={productData.images} name={productData.name} />

            {/* Right - Sticky Product Info */}
            <div className="lg:sticky lg:top-28 lg:h-fit">
              <ProductInfo
                name={productData.name}
                collection={productData.collection}
                price={formatPrice(productData.price)}
                description={productData.description}
                colors={productData.colors}
                sizes={productData.sizes}
                selectedColor={selectedColor}
                selectedSize={selectedSize}
                onColorChange={setSelectedColor}
                onSizeChange={setSelectedSize}
                productionTime={productData.productionTime}
                dimensions={selectedSize.dimensions}
                isFavorite={isFavorite}
                onFavoriteToggle={() => setIsFavorite(!isFavorite)}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Product Story / Collection Presentation */}
      <ProductStory
        title={productData.story.title}
        text={productData.story.text}
        image={productData.story.image}
        collectionName={productData.collection}
      />

      {/* Technical Specifications */}
      <ProductSpecs specs={productData.specs} />

      {/* CTA - "Понравился предмет?" */}
      <ProductCTA productName={productData.name} />

      {/* Related Products from Collection */}
      <RelatedProducts
        products={productData.relatedProducts}
        collectionName="Flux"
      />

      <Footer />
    </div>
  );
};

export default Product;
