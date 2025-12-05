import { motion } from 'framer-motion';
import { ShoppingCart, Eye } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/product';
import { useCart } from '@/contexts/CartContext';
import { ProductModal } from './ProductModal';

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const { addToCart } = useCart();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
      minimumFractionDigits: 0,
    }).format(price);
  };

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group relative bg-card rounded-2xl overflow-hidden card-hover"
      >
        {/* Image container */}
        <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
          
          {/* Quick view button */}
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileHover={{ scale: 1.05 }}
            className="absolute top-4 right-4 p-3 rounded-full bg-background/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-soft"
            onClick={() => setIsModalOpen(true)}
          >
            <Eye className="h-4 w-4 text-foreground" />
          </motion.button>
        </div>

        {/* Content */}
        <div className="p-6">
          <div className="mb-4">
            <h3 className="font-serif text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
              {product.name}
            </h3>
            <p className="text-sm text-muted-foreground line-clamp-2">
              {product.description}
            </p>
          </div>

          <div className="flex items-center justify-between">
            <span className="text-2xl font-bold text-foreground">
              {formatPrice(product.price)}
            </span>
            <Button
              variant="default"
              size="sm"
              onClick={() => addToCart(product)}
              className="group/btn"
            >
              <ShoppingCart className="h-4 w-4 mr-2 transition-transform group-hover/btn:scale-110" />
              В корзину
            </Button>
          </div>
        </div>
      </motion.div>

      <ProductModal
        product={product}
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}
