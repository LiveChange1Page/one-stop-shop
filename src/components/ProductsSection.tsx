import { motion } from 'framer-motion';
import { ProductCard } from './ProductCard';
import { products } from '@/data/products';

export function ProductsSection() {
  return (
    <section id="products" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">
            Наш каталог
          </span>
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mt-3 mb-4">
            Избранные продукты
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Каждый продукт в нашей коллекции прошёл тщательный отбор, 
            чтобы гарантировать вам исключительное качество
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((product, index) => (
            <ProductCard key={product.id} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
