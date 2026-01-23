import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from "@/components/ui/sheet";
import { ChevronRight } from "lucide-react";

// Oak tinting palette
const oakTints = [
  { id: "01", name: "Беленый дуб", color: "#E8E4DC" },
  { id: "02", name: "Натуральный дуб", color: "#D4C4A8" },
  { id: "03", name: "Светлый орех", color: "#C4A882" },
  { id: "04", name: "Золотистый дуб", color: "#B89860" },
  { id: "05", name: "Тобакко", color: "#8B7355" },
  { id: "06", name: "Мокко", color: "#6B5344" },
  { id: "07", name: "Эспрессо", color: "#5C4033" },
  { id: "08", name: "Венге", color: "#3D2B1F" },
  { id: "09", name: "Шоколад", color: "#4A3728" },
];

// Enamel colors palette
const enamelColors = [
  { id: "101", name: "Белый", color: "#FFFFFF" },
  { id: "102", name: "Слоновая кость", color: "#FFFFF0" },
  { id: "103", name: "Кремовый", color: "#F5F5DC" },
  { id: "104", name: "Песочный", color: "#E8DCC4" },
  { id: "105", name: "Бежевый", color: "#D4C4A8" },
  { id: "106", name: "Серый RAL 7035", color: "#CBD0CC" },
  { id: "107", name: "Серый RAL 7044", color: "#B4B4AA" },
  { id: "108", name: "Антрацит", color: "#4A4A4A" },
  { id: "109", name: "Черный", color: "#1A1A1A" },
  { id: "110", name: "Оливковый", color: "#6B7B5C" },
  { id: "111", name: "Серо-зеленый", color: "#8B9C8B" },
  { id: "112", name: "Пыльная роза", color: "#C4A4A4" },
  { id: "113", name: "Терракота", color: "#B87356" },
  { id: "114", name: "Горчичный", color: "#C4A820" },
  { id: "115", name: "Индиго", color: "#3F4F7F" },
  { id: "116", name: "Изумруд RAL 6004", color: "#0E4243" },
  { id: "117", name: "Петроль", color: "#0E4243" },
  { id: "118", name: "Сапфир", color: "#0F3B5F" },
  { id: "119", name: "Бордо", color: "#722F37" },
  { id: "120", name: "Марсала", color: "#6B4C4C" },
  { id: "121", name: "Темно-синий", color: "#1A2A3A" },
  { id: "122", name: "Баклажан", color: "#4A3060" },
  { id: "123", name: "Мятный", color: "#A4D4C8" },
  { id: "124", name: "Пудровый", color: "#E4D0CC" },
  { id: "125", name: "Лаванда", color: "#B4A8C4" },
  { id: "126", name: "Морская волна", color: "#4A8888" },
  { id: "127", name: "Лайм", color: "#A4C434" },
  { id: "128", name: "Коралл", color: "#E06050" },
  { id: "129", name: "Вишня", color: "#8B2040" },
  { id: "130", name: "Апельсин", color: "#E07030" },
];

// Facade patterns
const facadePatterns = [
  { id: "01", name: "Ромбы", pattern: "◇" },
  { id: "02", name: "Волна", pattern: "∿" },
  { id: "03", name: "Соты", pattern: "⬡" },
  { id: "04", name: "Полосы горизонтальные", pattern: "≡" },
  { id: "05", name: "Полосы вертикальные", pattern: "|||" },
  { id: "06", name: "Квадраты", pattern: "▢" },
  { id: "07", name: "Шеврон", pattern: "⌃" },
  { id: "08", name: "Круги", pattern: "◯" },
  { id: "09", name: "Решетка", pattern: "▦" },
  { id: "10", name: "Гладкий", pattern: "—" },
];

const MaterialsSheet = () => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="w-full flex items-center justify-between py-4 border-b border-border text-left hover:text-muted-foreground transition-colors group">
          <span className="text-sm font-medium">Материалы</span>
          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-md lg:max-w-lg overflow-y-auto">
        <SheetHeader className="mb-8">
          <SheetTitle className="text-2xl font-light">Материалы</SheetTitle>
          <SheetDescription className="text-sm text-muted-foreground">
            Выбор отделки и цветовых решений
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-10">
          {/* Oak Tinting */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Палитра тонировок дуба
            </h3>
            <div className="grid grid-cols-5 gap-2">
              {oakTints.map((tint) => (
                <div key={tint.id} className="group cursor-pointer">
                  <div
                    className="aspect-square rounded-sm border border-border hover:border-foreground transition-colors relative overflow-hidden"
                    style={{ backgroundColor: tint.color }}
                  >
                    <span className="absolute bottom-1 right-1 text-[9px] font-medium text-white/80 mix-blend-difference">
                      {tint.id}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Enamel Colors */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Палитра эмалей
            </h3>
            <div className="grid grid-cols-5 gap-2">
              {enamelColors.map((enamel) => (
                <div key={enamel.id} className="group cursor-pointer">
                  <div
                    className="aspect-square rounded-sm border border-border hover:border-foreground transition-colors relative overflow-hidden"
                    style={{ backgroundColor: enamel.color }}
                  >
                    <span className="absolute bottom-1 right-1 text-[9px] font-medium text-white/80 mix-blend-difference">
                      {enamel.id}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Facade Patterns */}
          <div>
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground mb-4">
              Гравировка фасадов
            </h3>
            <div className="grid grid-cols-5 gap-2">
              {facadePatterns.map((pattern) => (
                <div key={pattern.id} className="group cursor-pointer">
                  <div className="aspect-square rounded-sm border border-border hover:border-foreground transition-colors flex items-center justify-center bg-muted/50 relative">
                    <span className="text-xl text-muted-foreground">{pattern.pattern}</span>
                    <span className="absolute bottom-1 right-1 text-[9px] font-medium text-muted-foreground">
                      {pattern.id}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Note */}
          <div className="pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground leading-relaxed">
              Цветопередача на экране может отличаться от реального цвета. 
              Для точного подбора рекомендуем заказать образцы материалов 
              или посетить наш шоурум.
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default MaterialsSheet;
