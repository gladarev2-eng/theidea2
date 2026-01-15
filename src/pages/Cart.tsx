import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ShoppingBag, Trash2, Plus, Minus, ArrowRight, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Footer } from '@/components/layout/Footer';
import { useCart } from '@/contexts/CartContext';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const Cart = () => {
  const { items, removeItem, updateQuantity, clearCart, totalItems, totalPrice } = useCart();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    city: '',
    comment: '',
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU').format(price) + ' ₽';
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone) {
      toast.error('Пожалуйста, заполните обязательные поля');
      return;
    }

    setIsSubmitting(true);

    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));

    // In production, this would send data to backend/email
    console.log('Order submitted:', {
      customer: formData,
      items,
      totalPrice,
    });

    setIsSubmitting(false);
    setIsSubmitted(true);
    clearCart();
    
    toast.success('Заявка успешно отправлена!');
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <section className="pt-32 pb-24 px-4">
          <div className="max-w-[600px] mx-auto text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="w-20 h-20 bg-foreground rounded-full flex items-center justify-center mx-auto mb-8"
            >
              <Check className="w-10 h-10 text-background" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h1 className="text-3xl md:text-4xl font-extralight tracking-tight mb-4">
                Заявка отправлена
              </h1>
              <p className="text-muted-foreground mb-8">
                Наш менеджер свяжется с вами в ближайшее время для уточнения деталей заказа
              </p>
              <Button asChild className="rounded-full px-8 h-12">
                <Link to="/catalog">Продолжить покупки</Link>
              </Button>
            </motion.div>
          </div>
        </section>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />

      {/* Hero Section */}
      <section className="pt-32 pb-8 px-4">
        <div className="max-w-[1200px] mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl font-extralight tracking-tight mb-4">
              Корзина
            </h1>
            <p className="text-muted-foreground">
              {totalItems > 0
                ? `${totalItems} ${totalItems === 1 ? 'товар' : totalItems < 5 ? 'товара' : 'товаров'} на сумму ${formatPrice(totalPrice)}`
                : 'Корзина пуста'}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Cart Content */}
      <section className="pb-24 px-4">
        <div className="max-w-[1200px] mx-auto">
          {totalItems === 0 ? (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-center py-24"
            >
              <ShoppingBag className="w-16 h-16 mx-auto mb-6 text-muted-foreground/30" strokeWidth={1} />
              <h2 className="text-2xl font-light mb-4">Корзина пуста</h2>
              <p className="text-muted-foreground mb-8 max-w-md mx-auto">
                Добавьте товары из каталога для оформления заказа
              </p>
              <Button asChild className="rounded-full px-8 h-12">
                <Link to="/catalog">Перейти в каталог</Link>
              </Button>
            </motion.div>
          ) : (
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Items List */}
              <div className="lg:col-span-2 space-y-6">
                <AnimatePresence mode="popLayout">
                  {items.map((item, index) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, x: -100 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex gap-6 pb-6 border-b border-border"
                    >
                      {/* Image */}
                      <Link to={`/product/${item.id}`} className="flex-shrink-0">
                        <div className="w-28 h-28 md:w-36 md:h-36 bg-muted overflow-hidden">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      </Link>

                      {/* Info */}
                      <div className="flex-1 min-w-0">
                        <p className="text-[10px] uppercase tracking-[0.2em] text-muted-foreground mb-1">
                          {item.collection}
                        </p>
                        <Link to={`/product/${item.id}`}>
                          <h3 className="text-base md:text-lg font-normal mb-2 hover:underline">
                            {item.name}
                          </h3>
                        </Link>
                        {(item.color || item.size) && (
                          <p className="text-sm text-muted-foreground mb-3">
                            {item.color && `Цвет: ${item.color}`}
                            {item.color && item.size && ' · '}
                            {item.size && `Размер: ${item.size}`}
                          </p>
                        )}
                        
                        {/* Quantity Controls */}
                        <div className="flex items-center gap-3">
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                            className="w-8 h-8 border border-border flex items-center justify-center hover:bg-muted transition-colors"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center">{item.quantity}</span>
                          <button
                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                            className="w-8 h-8 border border-border flex items-center justify-center hover:bg-muted transition-colors"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>
                      </div>

                      {/* Price & Remove */}
                      <div className="flex flex-col items-end justify-between">
                        <button
                          onClick={() => removeItem(item.id)}
                          className="p-2 text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Trash2 className="w-4 h-4" strokeWidth={1.5} />
                        </button>
                        <p className="text-lg font-medium">
                          {formatPrice(item.price * item.quantity)}
                        </p>
                      </div>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Order Form */}
              <div className="lg:col-span-1">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-muted/30 p-6 md:p-8 sticky top-28"
                >
                  <h2 className="text-xl font-light mb-6">Оформить заявку</h2>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                      <Input
                        name="name"
                        placeholder="Ваше имя *"
                        value={formData.name}
                        onChange={handleInputChange}
                        className="rounded-none border-border bg-background h-12"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        name="phone"
                        type="tel"
                        placeholder="Телефон *"
                        value={formData.phone}
                        onChange={handleInputChange}
                        className="rounded-none border-border bg-background h-12"
                        required
                      />
                    </div>
                    <div>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Email"
                        value={formData.email}
                        onChange={handleInputChange}
                        className="rounded-none border-border bg-background h-12"
                      />
                    </div>
                    <div>
                      <Input
                        name="city"
                        placeholder="Город"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="rounded-none border-border bg-background h-12"
                      />
                    </div>
                    <div>
                      <Textarea
                        name="comment"
                        placeholder="Комментарий к заказу"
                        value={formData.comment}
                        onChange={handleInputChange}
                        className="rounded-none border-border bg-background min-h-[100px] resize-none"
                      />
                    </div>

                    {/* Summary */}
                    <div className="border-t border-border pt-4 mt-6">
                      <div className="flex justify-between items-center mb-4">
                        <span className="text-muted-foreground">Итого</span>
                        <span className="text-2xl font-medium">{formatPrice(totalPrice)}</span>
                      </div>
                      <p className="text-xs text-muted-foreground mb-6">
                        Менеджер свяжется с вами для уточнения стоимости доставки и способа оплаты
                      </p>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full h-14 rounded-full text-base"
                    >
                      {isSubmitting ? (
                        'Отправка...'
                      ) : (
                        <>
                          Отправить заявку
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </form>
                </motion.div>
              </div>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Cart;
