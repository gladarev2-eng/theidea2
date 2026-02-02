import { Link } from "react-router-dom";
import { Home, ArrowLeft } from 'lucide-react';

const NotFound = () => {
  // 404 page - no sensitive logging needed

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-6">
      <div className="text-center max-w-xl">
        <span className="font-display text-[200px] md:text-[280px] font-light leading-none text-muted/50">
          404
        </span>
        
        <h1 className="font-display text-3xl md:text-4xl font-light text-foreground -mt-8 md:-mt-16">
          Страница не найдена
        </h1>
        
        <p className="font-body font-light text-muted-foreground mt-6">
          Возможно, страница была перемещена или удалена. 
          Вернитесь на главную или воспользуйтесь каталогом.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-10">
          <Link
            to="/"
            className="btn-premium border-primary"
          >
            <span className="flex items-center gap-2">
              <Home className="w-4 h-4" />
              На главную
            </span>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 font-body font-light text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Назад
          </button>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
