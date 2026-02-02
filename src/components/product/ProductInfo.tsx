import { motion } from "framer-motion";
import { Heart, Clock, Ruler, Download, ShoppingBag, Check, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCart } from "@/contexts/CartContext";
import { toast } from "sonner";
import MaterialsSheet from "./MaterialsSheet";
import DimensionsSheet from "./DimensionsSheet";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

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
  const [questionOpen, setQuestionOpen] = useState(false);
  const [formName, setFormName] = useState("");
  const [formPhone, setFormPhone] = useState("");
  const [formMessage, setFormMessage] = useState("");

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

  const handleQuestionSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form data ready for backend submission
    // Backend integration would go here
    toast.success("Ваш вопрос отправлен!");
    setFormName("");
    setFormPhone("");
    setFormMessage("");
    setQuestionOpen(false);
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
      className="space-y-5 md:space-y-6"
    >
      {/* Collection & Name */}
      <div>
        <p className="text-[10px] md:text-[11px] uppercase tracking-[0.3em] text-muted-foreground mb-2">
          {collection}
        </p>
        <h1 className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight mb-2">
          {name}
        </h1>
        <p className="text-xl md:text-2xl font-medium">{price}</p>
      </div>

      {/* Description - Compact */}
      <p className="text-sm text-muted-foreground leading-relaxed">
        {description}
      </p>

      {/* Quick Info - Inline compact */}
      <div className="flex flex-wrap gap-4 py-3 border-y border-border text-xs">
        <div className="flex items-center gap-1.5">
          <Clock className="w-3.5 h-3.5 text-muted-foreground" />
          <span className="text-muted-foreground">Срок:</span>
          <span className="font-medium">{productionTime}</span>
        </div>
        <div className="flex items-center gap-1.5">
          <Ruler className="w-3.5 h-3.5 text-muted-foreground" />
          <span className="text-muted-foreground">Размер:</span>
          <span className="font-medium">{dimensions}</span>
        </div>
      </div>

      {/* Color Selection - Compact */}
      <div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
          Цвет: <span className="text-foreground">{selectedColor.name}</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color.id}
              onClick={() => onColorChange(color)}
              className={`w-8 h-8 rounded-full border-2 transition-all ${
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

      {/* Size Selection - Compact */}
      <div>
        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-2">
          Размер
        </p>
        <div className="flex flex-wrap gap-2">
          {sizes.map((size) => (
            <button
              key={size.id}
              onClick={() => onSizeChange(size)}
              className={`px-4 py-2 rounded-full border transition-all text-sm ${
                selectedSize.id === size.id
                  ? "border-foreground bg-foreground text-background"
                  : "border-border hover:border-foreground"
              }`}
            >
              <span className="font-medium">{size.name}</span>
            </button>
          ))}
        </div>
        <p className="text-xs text-muted-foreground mt-1.5">
          {selectedSize.dimensions}
        </p>
      </div>

      {/* Technical Info - Materials & Dimensions */}
      <div className="space-y-0">
        <MaterialsSheet />
        <DimensionsSheet dimensions={parsedDimensions} productName={name} />
      </div>

      {/* Action Buttons - Compact & Hierarchical */}
      <div className="space-y-3 pt-2">
        {/* Primary CTA - Add to Cart (Full width, prominent) */}
        <Button 
          className="w-full h-12 rounded-full text-sm font-medium"
          onClick={handleAddToCart}
        >
          {itemInCart ? (
            <>
              <Check className="w-4 h-4 mr-2" />
              В корзине
            </>
          ) : (
            <>
              <ShoppingBag className="w-4 h-4 mr-2" />
              Добавить в корзину
            </>
          )}
        </Button>

        {/* Secondary Actions - Row with Ask Question as prominent secondary */}
        <div className="flex gap-2">
          <Dialog open={questionOpen} onOpenChange={setQuestionOpen}>
            <DialogTrigger asChild>
              <Button variant="outline" className="flex-1 h-10 rounded-full text-xs">
                <MessageCircle className="w-4 h-4 mr-1.5" />
                Задать вопрос
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-md">
              <DialogHeader>
                <DialogTitle className="text-lg font-light">Задать вопрос</DialogTitle>
                <DialogDescription>о товаре {name}</DialogDescription>
              </DialogHeader>
              <form onSubmit={handleQuestionSubmit} className="space-y-3 mt-3">
                <Input
                  placeholder="Имя"
                  value={formName}
                  onChange={(e) => setFormName(e.target.value)}
                  required
                  className="h-10 rounded-full px-4"
                />
                <Input
                  type="tel"
                  placeholder="Телефон"
                  value={formPhone}
                  onChange={(e) => setFormPhone(e.target.value)}
                  required
                  className="h-10 rounded-full px-4"
                />
                <Textarea
                  placeholder="Ваш вопрос"
                  value={formMessage}
                  onChange={(e) => setFormMessage(e.target.value)}
                  className="min-h-[80px] rounded-xl px-4 py-3 resize-none"
                />
                <Button type="submit" className="w-full h-10 rounded-full">
                  Отправить
                </Button>
              </form>
            </DialogContent>
          </Dialog>

          <Button
            variant="outline"
            className="h-10 rounded-full px-4"
            onClick={onFavoriteToggle}
            title={isFavorite ? "В избранном" : "В избранное"}
          >
            <Heart
              className={`w-4 h-4 transition-colors ${
                isFavorite ? "fill-current text-red-500" : ""
              }`}
            />
          </Button>
          
          <Button 
            variant="outline" 
            className="h-10 rounded-full px-4"
            title="Скачать 3D модель"
          >
            <Download className="w-4 h-4" />
          </Button>
        </div>
      </div>
    </motion.div>
  );
};

export default ProductInfo;
