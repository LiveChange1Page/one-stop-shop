import { motion } from 'framer-motion';
import { ProductCard } from './ProductCard';
import { products } from '@/data/products';
import { useLanguage } from '@/contexts/LanguageContext';

export function ProductsSection() {
  const { t } = useLanguage();

  return (
    <section id="products" className="py-16 sm:py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 sm:mb-16"
        >
          <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-bold text-foreground mt-3 mb-3 sm:mb-4">
            {t('products.title')}
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto px-2">
            {t('products.subtitle')}
          </p>
        </motion.div>

        <div className="flex flex-col gap-6 max-w-lg mx-auto lg:max-w-none lg:grid lg:grid-cols-2 xl:grid-cols-4 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
