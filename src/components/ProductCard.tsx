import { motion } from 'framer-motion';
import { ShoppingCart, Eye } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Product } from '@/types/product';
import { useCart } from '@/contexts/CartContext';
import { useLanguage, productTranslations } from '@/contexts/LanguageContext';
import { ProductModal } from './ProductModal';

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const { addToCart } = useCart();
  const { language, t } = useLanguage();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  // Get translated product name and description
  const productKey = product.id as keyof typeof productTranslations;
  const translations = productTranslations[productKey];
  const productName = translations?.name[language] || product.name;
  const productDescription = translations?.description[language] || product.description;

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: index * 0.1 }}
        className="group relative bg-card rounded-2xl overflow-hidden card-hover"
      >
        {/* Mobile: horizontal layout, Desktop: vertical layout */}
        <div className="flex flex-row sm:flex-col">
          {/* Image container */}
          <div className="relative w-1/3 sm:w-full aspect-square sm:aspect-[4/3] overflow-hidden bg-secondary flex-shrink-0">
            <img
              src={product.image}
              alt={productName}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/10 transition-colors duration-500" />
            
            {/* Quick view button - hidden on mobile */}
            <motion.button
              initial={{ opacity: 0, y: 20 }}
              whileHover={{ scale: 1.05 }}
              className="absolute top-4 right-4 p-3 rounded-full bg-background/90 backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all duration-300 shadow-soft hidden sm:flex"
              onClick={() => setIsModalOpen(true)}
            >
              <Eye className="h-4 w-4 text-foreground" />
            </motion.button>
          </div>

          {/* Content */}
          <div className="flex-1 p-4 sm:p-6 flex flex-col justify-between">
            <div className="mb-3 sm:mb-4">
              <h3 className="font-serif text-lg sm:text-xl font-semibold text-foreground mb-1 sm:mb-2 group-hover:text-primary transition-colors line-clamp-1">
                {productName}
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground line-clamp-2">
                {productDescription}
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-2">
              <span className="text-xl sm:text-2xl font-bold text-foreground">
                {formatPrice(product.price)}
              </span>
              <div className="flex gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={() => setIsModalOpen(true)}
                  className="flex-1 sm:flex-initial text-xs sm:text-sm"
                >
                  {t('products.moreDetails')}
                </Button>
                <Button
                  variant="default"
                  size="sm"
                  onClick={() => addToCart(product)}
                  className="group/btn"
                >
                  <ShoppingCart className="h-4 w-4 transition-transform group-hover/btn:scale-110" />
                </Button>
              </div>
            </div>
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
