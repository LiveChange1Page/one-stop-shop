import { motion, AnimatePresence } from 'framer-motion';
import { X, Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/contexts/CartContext';
import { useState } from 'react';
import { CheckoutModal } from './CheckoutModal';

export function CartSidebar() {
  const { items, isCartOpen, setIsCartOpen, updateQuantity, removeFromCart, totalPrice, totalItems } = useCart();
  const [isCheckoutOpen, setIsCheckoutOpen] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleCheckout = () => {
    setIsCartOpen(false);
    setIsCheckoutOpen(true);
  };

  return (
    <>
      <AnimatePresence>
        {isCartOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsCartOpen(false)}
              className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50"
            />

            {/* Sidebar */}
            <motion.div
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
              className="fixed top-0 right-0 h-full w-full max-w-md bg-background shadow-elevated z-50 flex flex-col"
            >
              {/* Header */}
              <div className="flex items-center justify-between p-6 border-b border-border">
                <div className="flex items-center gap-3">
                  <ShoppingBag className="h-6 w-6 text-primary" />
                  <h2 className="font-serif text-2xl font-bold text-foreground">
                    Корзина
                  </h2>
                  {totalItems > 0 && (
                    <span className="px-2.5 py-0.5 bg-primary text-primary-foreground text-sm font-semibold rounded-full">
                      {totalItems}
                    </span>
                  )}
                </div>
                <button
                  onClick={() => setIsCartOpen(false)}
                  className="p-2 rounded-full hover:bg-secondary transition-colors"
                >
                  <X className="h-5 w-5 text-foreground" />
                </button>
              </div>

              {/* Items */}
              <div className="flex-1 overflow-y-auto p-6">
                {items.length === 0 ? (
                  <div className="flex flex-col items-center justify-center h-full text-center">
                    <ShoppingBag className="h-16 w-16 text-muted-foreground/30 mb-4" />
                    <p className="text-lg font-medium text-foreground mb-2">
                      Корзина пуста
                    </p>
                    <p className="text-muted-foreground">
                      Добавьте товары для оформления заказа
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4">
                    {items.map((item) => (
                      <motion.div
                        key={item.id}
                        layout
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        className="flex gap-4 p-4 bg-card rounded-xl"
                      >
                        <div className="w-20 h-20 rounded-lg overflow-hidden bg-secondary flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-medium text-foreground truncate">
                            {item.name}
                          </h4>
                          <p className="text-lg font-bold text-foreground mt-1">
                            {formatPrice(item.price)}
                          </p>
                          <div className="flex items-center gap-3 mt-2">
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity - 1)}
                              className="p-1 rounded-md bg-secondary hover:bg-secondary/80 transition-colors"
                            >
                              <Minus className="h-4 w-4" />
                            </button>
                            <span className="font-medium text-foreground min-w-[24px] text-center">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="p-1 rounded-md bg-secondary hover:bg-secondary/80 transition-colors"
                            >
                              <Plus className="h-4 w-4" />
                            </button>
                            <button
                              onClick={() => removeFromCart(item.id)}
                              className="p-1 rounded-md text-destructive hover:bg-destructive/10 transition-colors ml-auto"
                            >
                              <Trash2 className="h-4 w-4" />
                            </button>
                          </div>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                )}
              </div>

              {/* Footer */}
              {items.length > 0 && (
                <div className="p-6 border-t border-border bg-card">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-muted-foreground">Итого:</span>
                    <span className="text-2xl font-bold text-foreground">
                      {formatPrice(totalPrice)}
                    </span>
                  </div>
                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full"
                    onClick={handleCheckout}
                  >
                    Оформить заказ
                  </Button>
                </div>
              )}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <CheckoutModal
        isOpen={isCheckoutOpen}
        onClose={() => setIsCheckoutOpen(false)}
      />
    </>
  );
}
