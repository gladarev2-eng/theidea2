import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { FavoritesProvider } from "./contexts/FavoritesContext";
import { CartProvider } from "./contexts/CartContext";
import Index from "./pages/Index";
import Catalog from "./pages/Catalog";
import Product from "./pages/Product";
import Collections from "./pages/Collections";
import UniversalCollectionPage from "./pages/UniversalCollectionPage";
import About from "./pages/About";
import Designers from "./pages/Designers";
import Buyers from "./pages/Buyers";
import Contacts from "./pages/Contacts";
import Favorites from "./pages/Favorites";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <FavoritesProvider>
      <CartProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/catalog" element={<Catalog />} />
              <Route path="/product/:id" element={<Product />} />
              <Route path="/collections" element={<Collections />} />
              <Route path="/collections/:id" element={<UniversalCollectionPage />} />
              <Route path="/about" element={<About />} />
              <Route path="/designers" element={<Designers />} />
              <Route path="/buyers" element={<Buyers />} />
              <Route path="/contacts" element={<Contacts />} />
              <Route path="/favorites" element={<Favorites />} />
              <Route path="/cart" element={<Cart />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </CartProvider>
    </FavoritesProvider>
  </QueryClientProvider>
);

export default App;
