import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger, SheetDescription } from "@/components/ui/sheet";
import { ChevronRight } from "lucide-react";

interface Dimension {
  label: string;
  value: string;
}

interface DimensionsSheetProps {
  dimensions: Dimension[];
  productName: string;
}

const DimensionsSheet = ({ dimensions, productName }: DimensionsSheetProps) => {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className="w-full flex items-center justify-between py-4 border-b border-border text-left hover:text-muted-foreground transition-colors group">
          <span className="text-sm font-medium">Схема</span>
          <ChevronRight className="w-4 h-4 text-muted-foreground group-hover:translate-x-1 transition-transform" />
        </button>
      </SheetTrigger>
      <SheetContent side="right" className="w-full sm:max-w-md lg:max-w-lg overflow-y-auto">
        <SheetHeader className="mb-8">
          <SheetTitle className="text-2xl font-light">Схема</SheetTitle>
          <SheetDescription className="text-sm text-muted-foreground">
            Габаритные размеры {productName}
          </SheetDescription>
        </SheetHeader>

        <div className="space-y-8">
          {/* Technical Drawing Placeholder */}
          <div className="bg-muted/30 aspect-[4/3] rounded-sm flex items-center justify-center relative border border-border">
            {/* SVG Technical Drawing */}
            <svg
              viewBox="0 0 400 300"
              className="w-full h-full p-8"
              fill="none"
              stroke="currentColor"
              strokeWidth="0.5"
            >
              {/* Front view - Cabinet */}
              <rect x="80" y="60" width="120" height="160" strokeDasharray="4 2" />
              <rect x="85" y="65" width="110" height="70" />
              <rect x="85" y="140" width="110" height="70" />
              
              {/* Legs */}
              <line x1="90" y1="220" x2="90" y2="240" />
              <line x1="190" y1="220" x2="190" y2="240" />
              <line x1="95" y1="240" x2="85" y2="240" />
              <line x1="195" y1="240" x2="185" y2="240" />
              
              {/* Side view */}
              <rect x="230" y="60" width="60" height="160" strokeDasharray="4 2" />
              <line x1="230" y1="220" x2="230" y2="240" />
              <line x1="290" y1="220" x2="290" y2="240" />
              
              {/* Dimension lines - Width */}
              <line x1="80" y1="30" x2="200" y2="30" strokeWidth="0.3" />
              <line x1="80" y1="25" x2="80" y2="35" strokeWidth="0.3" />
              <line x1="200" y1="25" x2="200" y2="35" strokeWidth="0.3" />
              <text x="140" y="25" fontSize="10" fill="currentColor" textAnchor="middle">490</text>
              
              {/* Dimension lines - Depth */}
              <line x1="230" y1="30" x2="290" y2="30" strokeWidth="0.3" />
              <line x1="230" y1="25" x2="230" y2="35" strokeWidth="0.3" />
              <line x1="290" y1="25" x2="290" y2="35" strokeWidth="0.3" />
              <text x="260" y="25" fontSize="10" fill="currentColor" textAnchor="middle">400</text>
              
              {/* Dimension lines - Height */}
              <line x1="320" y1="60" x2="320" y2="240" strokeWidth="0.3" />
              <line x1="315" y1="60" x2="325" y2="60" strokeWidth="0.3" />
              <line x1="315" y1="240" x2="325" y2="240" strokeWidth="0.3" />
              <text x="340" y="150" fontSize="10" fill="currentColor" textAnchor="middle" transform="rotate(90, 340, 150)">560</text>
              
              {/* Inner dimensions */}
              <line x1="55" y1="65" x2="55" y2="135" strokeWidth="0.3" />
              <line x1="50" y1="65" x2="60" y2="65" strokeWidth="0.3" />
              <line x1="50" y1="135" x2="60" y2="135" strokeWidth="0.3" />
              <text x="40" y="100" fontSize="8" fill="currentColor" textAnchor="middle" transform="rotate(-90, 40, 100)">140</text>
              
              <line x1="55" y1="140" x2="55" y2="210" strokeWidth="0.3" />
              <line x1="50" y1="140" x2="60" y2="140" strokeWidth="0.3" />
              <line x1="50" y1="210" x2="60" y2="210" strokeWidth="0.3" />
              <text x="40" y="175" fontSize="8" fill="currentColor" textAnchor="middle" transform="rotate(-90, 40, 175)">140</text>
              
              {/* Drawer depth dimension */}
              <line x1="235" y1="270" x2="285" y2="270" strokeWidth="0.3" />
              <line x1="235" y1="265" x2="235" y2="275" strokeWidth="0.3" />
              <line x1="285" y1="265" x2="285" y2="275" strokeWidth="0.3" />
              <text x="260" y="285" fontSize="8" fill="currentColor" textAnchor="middle">318</text>
            </svg>
          </div>

          {/* Dimensions Table */}
          <div className="space-y-3">
            <h3 className="text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
              Размеры
            </h3>
            <div className="space-y-2">
              {dimensions.map((dim, index) => (
                <div 
                  key={index}
                  className="flex justify-between py-2 border-b border-border last:border-0"
                >
                  <span className="text-sm text-muted-foreground">{dim.label}</span>
                  <span className="text-sm font-medium">{dim.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Note */}
          <div className="pt-4 border-t border-border">
            <p className="text-xs text-muted-foreground leading-relaxed">
              Все размеры указаны в миллиметрах. Допустимое отклонение ±3 мм.
              Для получения точных размеров под ваш проект свяжитесь с нашими специалистами.
            </p>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  );
};

export default DimensionsSheet;
