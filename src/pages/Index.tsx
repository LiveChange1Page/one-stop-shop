import { Header } from '@/components/Header';
import { HeroSection } from '@/components/HeroSection';
import { ProductsSection } from '@/components/ProductsSection';
import { CartSidebar } from '@/components/CartSidebar';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <ProductsSection />
      <Footer />
      <CartSidebar />
    </main>
  );
};

export default Index;
