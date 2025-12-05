import { motion, AnimatePresence } from 'framer-motion';
import { X, ShoppingCart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/product';
import { useCart } from '@/contexts/CartContext';

interface ProductModalProps {
  product: Product;
  isOpen: boolean;
  onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
  const { addToCart } = useCart();

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleAddToCart = () => {
    addToCart(product);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-foreground/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-2xl md:w-full bg-background rounded-2xl shadow-elevated z-50 overflow-hidden"
          >
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-secondary hover:bg-secondary/80 transition-colors z-10"
            >
              <X className="h-5 w-5 text-foreground" />
            </button>

            <div className="grid md:grid-cols-2 h-full md:h-auto">
              {/* Image */}
              <div className="relative aspect-square md:aspect-auto md:h-96 bg-secondary">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <span className="text-sm font-medium text-primary uppercase tracking-wider">
                    {product.category === 'digital' ? 'Цифровой продукт' : 'Услуга'}
                  </span>
                  <h2 className="font-serif text-2xl md:text-3xl font-bold text-foreground mt-2 mb-4">
                    {product.name}
                  </h2>
                  <p className="text-muted-foreground leading-relaxed">
                    {product.fullDescription || product.description}
                  </p>
                </div>

                <div className="mt-6 pt-6 border-t border-border">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-3xl font-bold text-foreground">
                      {formatPrice(product.price)}
                    </span>
                  </div>
                  <Button
                    variant="hero"
                    size="lg"
                    className="w-full"
                    onClick={handleAddToCart}
                  >
                    <ShoppingCart className="h-5 w-5 mr-2" />
                    Добавить в корзину
                  </Button>
                </div>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
