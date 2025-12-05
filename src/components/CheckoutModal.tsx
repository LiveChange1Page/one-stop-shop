import { motion, AnimatePresence } from 'framer-motion';
import { X, CreditCard, CheckCircle } from 'lucide-react';
import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useCart } from '@/contexts/CartContext';
import { useToast } from '@/hooks/use-toast';

interface CheckoutModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CheckoutModal({ isOpen, onClose }: CheckoutModalProps) {
  const { items, totalPrice, clearCart } = useCart();
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
    return new Intl.NumberFormat('ru-RU', {
      style: 'currency',
      currency: 'RUB',
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
        title: 'Ошибка',
        description: 'Пожалуйста, заполните обязательные поля',
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
        title: 'Заказ оформлен!',
        description: 'Подтверждение отправлено на вашу почту',
      });
    }, 2000);
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
            className="fixed inset-4 md:inset-auto md:left-1/2 md:top-1/2 md:-translate-x-1/2 md:-translate-y-1/2 md:max-w-lg md:w-full bg-background rounded-2xl shadow-elevated z-50 overflow-hidden max-h-[90vh] overflow-y-auto"
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
                  Заказ успешно оформлен!
                </h2>
                <p className="text-muted-foreground">
                  Подтверждение будет отправлено на вашу почту
                </p>
              </motion.div>
            ) : (
              <>
                <div className="flex items-center justify-between p-6 border-b border-border">
                  <h2 className="font-serif text-2xl font-bold text-foreground">
                    Оформление заказа
                  </h2>
                  <button
                    onClick={onClose}
                    className="p-2 rounded-full hover:bg-secondary transition-colors"
                  >
                    <X className="h-5 w-5 text-foreground" />
                  </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6">
                  {/* Order Summary */}
                  <div className="bg-card rounded-xl p-4 mb-6">
                    <h3 className="font-medium text-foreground mb-3">Ваш заказ</h3>
                    <div className="space-y-2">
                      {items.map((item) => (
                        <div
                          key={item.id}
                          className="flex justify-between text-sm"
                        >
                          <span className="text-muted-foreground">
                            {item.name} × {item.quantity}
                          </span>
                          <span className="text-foreground font-medium">
                            {formatPrice(item.price * item.quantity)}
                          </span>
                        </div>
                      ))}
                    </div>
                    <div className="border-t border-border mt-3 pt-3 flex justify-between">
                      <span className="font-medium text-foreground">Итого</span>
                      <span className="text-xl font-bold text-foreground">
                        {formatPrice(totalPrice)}
                      </span>
                    </div>
                  </div>

                  {/* Form Fields */}
                  <div className="space-y-4">
                    <div>
                      <Label htmlFor="name" className="text-foreground">
                        Имя *
                      </Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleInputChange}
                        placeholder="Ваше имя"
                        className="mt-1.5"
                        required
                      />
                    </div>

                    <div>
                      <Label htmlFor="email" className="text-foreground">
                        Email *
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
                        Телефон
                      </Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleInputChange}
                        placeholder="+7 (999) 123-45-67"
                        className="mt-1.5"
                      />
                    </div>

                    <div>
                      <Label htmlFor="address" className="text-foreground">
                        Адрес доставки
                      </Label>
                      <Input
                        id="address"
                        name="address"
                        value={formData.address}
                        onChange={handleInputChange}
                        placeholder="Город, улица, дом"
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
                        Оплатить {formatPrice(totalPrice)}
                      </>
                    )}
                  </Button>

                  <p className="text-xs text-muted-foreground text-center mt-4">
                    Нажимая кнопку, вы соглашаетесь с условиями оферты
                  </p>
                </form>
              </>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
