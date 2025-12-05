import { motion, AnimatePresence } from 'framer-motion';
import { X, CreditCard, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCart } from '@/contexts/CartContext';
import { useLanguage, productTranslations } from '@/contexts/LanguageContext';
import { useToast } from '@/hooks/use-toast';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const { items, totalPrice, clearCart } = useCart();
  const { t, language } = useLanguage();
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
  });

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
    }).format(price);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email) {
      toast({
        title: t('checkout.error'),
        description: t('checkout.fillRequired'),
        variant: 'destructive',
      });
      return;
    }

    setIsSubmitting(true);

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setIsSuccess(true);

    // Clear cart and reset after showing success
    setTimeout(() => {
      clearCart();
      setIsSuccess(false);
      setFormData({ name: '', email: '', phone: '', address: '' });
      onClose();
      toast({
        title: t('checkout.orderPlaced'),
        description: t('checkout.confirmationSent'),
      });
    }, 2000);
  };

  const getItemName = (item: typeof items[0]) => {
    const productKey = item.id as keyof typeof productTranslations;
    const translations = productTranslations[productKey];
    return translations?.name[language] || item.name;
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-foreground/50 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', duration: 0.5 }}
            className="relative w-full max-w-lg max-h-[90vh] bg-background rounded-2xl shadow-elevated overflow-hidden flex flex-col"
          >
            {isSuccess ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="p-12 text-center"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', delay: 0.2 }}
                  className="w-20 h-20 bg-accent/20 rounded-full flex items-center justify-center mx-auto mb-6"
                >
                  <CheckCircle className="h-10 w-10 text-accent" />
                </motion.div>
                <h2 className="font-serif text-2xl font-bold text-foreground mb-2">
                  {t('checkout.success')}
                </h2>
                <p className="text-muted-foreground">
                  {t('checkout.successMsg')}
                </p>
              </motion.div>
            ) : (
              <>
                <div className="flex items-center justify-between p-6 border-b border-border shrink-0">
                  <h2 className="font-serif text-2xl font-bold text-foreground">
                    {t('checkout.title')}
                  </h2>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-full hover:bg-secondary transition-colors"
                  >
                    <X className="h-5 w-5 text-foreground" />
                  </button>
                </div>

                <div className="flex-1 overflow-y-auto">
                  <form onSubmit={handleSubmit} className="p-6">
                    {/* Order Summary */}
                    <div className="bg-card rounded-xl p-4 mb-6">
                      <h3 className="font-medium text-foreground mb-3">{t('checkout.yourOrder')}</h3>
                      <div className="space-y-2">
                        {items.map((item) => (
                          <div
                            key={item.id}
                            className="flex justify-between text-sm"
                          >
                            <span className="text-muted-foreground">
                              {getItemName(item)} × {item.quantity}
                            </span>
                            <span className="text-foreground font-medium">
                              {formatPrice(item.price * item.quantity)}
                            </span>
                          </div>
                        ))}
                      </div>
                      <div className="border-t border-border mt-3 pt-3 flex justify-between">
                        <span className="font-medium text-foreground">{t('checkout.total')}</span>
                        <span className="text-xl font-bold text-foreground">
                          {formatPrice(totalPrice)}
                        </span>
                      </div>
                    </div>

                    {/* Form Fields */}
                    <div className="space-y-4">
                      <div>
                        <Label htmlFor="name" className="text-foreground">
                          {t('checkout.name')} *
                        </Label>
                        <Input
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          placeholder={t('checkout.namePlaceholder')}
                          className="mt-1.5"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-foreground">
                          {t('checkout.email')} *
                        </Label>
                        <Input
                          id="email"
                          name="email"
                          type="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          placeholder="your@email.com"
                          className="mt-1.5"
                          required
                        />
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-foreground">
                          {t('checkout.phone')}
                        </Label>
                        <Input
                          id="phone"
                          name="phone"
                          type="tel"
                          value={formData.phone}
                          onChange={handleInputChange}
                          placeholder="+1 (999) 123-4567"
                          className="mt-1.5"
                        />
                      </div>

                      <div>
                        <Label htmlFor="address" className="text-foreground">
                          {t('checkout.address')}
                        </Label>
                        <Input
                          id="address"
                          name="address"
                          value={formData.address}
                          onChange={handleInputChange}
                          placeholder={t('checkout.addressPlaceholder')}
                          className="mt-1.5"
                        />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      variant="hero"
                      size="lg"
                      className="w-full mt-6"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <motion.div
                          animate={{ rotate: 360 }}
                          transition={{ duration: 1, repeat: Infinity, ease: 'linear' }}
                          className="w-5 h-5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full"
                        />
                      ) : (
                        <>
                          <CreditCard className="h-5 w-5 mr-2" />
                          {t('checkout.pay')} {formatPrice(totalPrice)}
                        </>
                      )}
                    </Button>

                    <p className="text-xs text-muted-foreground text-center mt-4">
                      {t('checkout.terms')}
                    </p>
                  </form>
                </div>
              </>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
