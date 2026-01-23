import { motion } from "framer-motion";
import { Heart, Clock, Ruler, Download, ShoppingBag, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import MaterialsSheet from "./MaterialsSheet";
import DimensionsSheet from "./DimensionsSheet";

interface Color {
  id: string;
  name: string;
  hex: string;
  productId?: string;
}

interface Size {
  id: string;
  name: string;
  dimensions: string;
  productId?: string;
}

interface ProductInfoProps {
  id: string;
  name: string;
  collection: string;
  price: string;
  priceNumber: number;
  description: string;
  colors: Color[];
  sizes: Size[];
  selectedColor: Color;
  selectedSize: Size;
  onColorChange: (color: Color) => void;
  onSizeChange: (size: Size) => void;
  productionTime: string;
  dimensions: string;
  isFavorite: boolean;
  onFavoriteToggle: () => void;
  image: string;
}

const ProductInfo = ({
  id,
  name,
  collection,
  price,
  priceNumber,
  description,
  colors,
  sizes,
  selectedColor,
  selectedSize,
  onColorChange,
  onSizeChange,
  productionTime,
  dimensions,
  isFavorite,
  onFavoriteToggle,
  image,
}: ProductInfoProps) => {
  const { addItem, getItemQuantity } = useCart();
  const itemInCart = getItemQuantity(id) > 0;

  const handleAddToCart = () => {
    addItem({
      id,
      name,
      price: priceNumber,
      collection,
      image,
      color: selectedColor.name,
      size: selectedSize.name,
    });
    toast.success('Товар добавлен в корзину', {
      action: {
        label: 'Перейти',
        onClick: () => window.location.href = '/cart',
      },
    });
  };

  // Parse dimensions for the sheet
  const parsedDimensions = dimensions.split('×').length === 3
    ? [
        { label: "Ширина", value: dimensions.split('×')[0].trim() + " мм" },
        { label: "Глубина", value: dimensions.split('×')[1].trim() + " мм" },
        { label: "Высота", value: dimensions.split('×')[2].trim() },
      ]
    : [{ label: "Размеры", value: dimensions }];

  return (
    <motion.div
      initial={{ opacity: 0, x: 20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-6 md:space-y-8"
    >
      {/* Collection & Name */}
      <div>
        <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-2 md:mb-3">
          {collection}
        </p>
        <h1 className="text-2xl md:text-4xl lg:text-5xl font-light tracking-tight mb-3 md:mb-4">
          {name}
        </h1>
        <p className="text-2xl md:text-3xl font-light">{price}</p>
      </div>

      {/* Description */}
      <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
        {description}
      </p>

      {/* Quick Info */}
      <div className="flex flex-wrap gap-4 md:gap-6 py-4 md:py-6 border-y border-border">
        <div className="flex items-center gap-2 text-xs md:text-sm">
          <Clock className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground">Срок:</span>
          <span className="font-medium">{productionTime}</span>
        </div>
        <div className="flex items-center gap-2 text-xs md:text-sm">
          <Ruler className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground">Размер:</span>
          <span className="font-medium">{dimensions}</span>
        </div>
      </div>

      {/* Color Selection */}
      <div>
        <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3 md:mb-4">
          Цвет: <span className="text-foreground">{selectedColor.name}</span>
        </p>
        <div className="flex flex-wrap gap-2 md:gap-3">
          {colors.map((color) => (
            <button
              key={color.id}
              onClick={() => onColorChange(color)}
              className={`w-9 h-9 md:w-10 md:h-10 rounded-full border-2 transition-all ${
                selectedColor.id === color.id
                  ? "border-foreground scale-110"
                  : "border-transparent hover:scale-105"
              }`}
              style={{ backgroundColor: color.hex }}
              title={color.name}
            />
          ))}
        </div>
      </div>

      {/* Size Selection */}
      <div>
        <p className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-3 md:mb-4">
          Размер
        </p>
        <div className="flex flex-wrap gap-2 md:gap-3">
          {sizes.map((size) => (
            <button
              key={size.id}
              onClick={() => onSizeChange(size)}
              className={`px-4 md:px-6 py-2.5 md:py-3 rounded-full border transition-all text-sm ${
                selectedSize.id === size.id
                  ? "border-foreground bg-foreground text-background"
                  : "border-border hover:border-foreground"
              }`}
            >
              <span className="font-medium">{size.name}</span>
            </button>
          ))}
        </div>
        <p className="text-xs md:text-sm text-muted-foreground mt-2 md:mt-3">
          {selectedSize.dimensions}
        </p>
      </div>

      {/* Technical Info - Materials & Dimensions Sheets */}
      <div className="space-y-0">
        <MaterialsSheet />
        <DimensionsSheet dimensions={parsedDimensions} productName={name} />
      </div>

      {/* Action Buttons */}
      <div className="space-y-3 md:space-y-4 pt-2 md:pt-4">
        <Button 
          className="w-full h-12 md:h-14 rounded-full text-sm md:text-base"
          onClick={handleAddToCart}
        >
          {itemInCart ? (
            <>
              <Check className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              В корзине
            </>
          ) : (
            <>
              <ShoppingBag className="w-4 h-4 md:w-5 md:h-5 mr-2" />
              Добавить в корзину
            </>
          )}
        </Button>
        
        <div className="flex gap-2 md:gap-3">
          <Button
            variant="outline"
            className="flex-1 h-11 md:h-12 rounded-full text-xs md:text-sm"
            onClick={onFavoriteToggle}
          >
            <Heart
              className={`w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2 transition-colors ${
                isFavorite ? "fill-current text-red-500" : ""
              }`}
            />
            <span className="hidden sm:inline">{isFavorite ? "В избранном" : "В избранное"}</span>
            <span className="sm:hidden">{isFavorite ? "❤️" : "♡"}</span>
          </Button>
          
          <Button variant="outline" className="h-11 md:h-12 rounded-full px-4 md:px-6 text-xs md:text-sm">
            <Download className="w-4 h-4 md:w-5 md:h-5 mr-1.5 md:mr-2" />
            <span className="hidden sm:inline">3D модель</span>
            <span className="sm:hidden">3D</span>
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductInfo;
