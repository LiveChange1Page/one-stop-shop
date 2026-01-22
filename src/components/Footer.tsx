import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Instagram, Send, MessageCircle } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function Footer() {
  const { t } = useLanguage();

  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-10 sm:py-16">
        <div className="grid grid-cols-2 gap-6 sm:gap-10 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-serif text-2xl font-bold text-foreground mb-4">
              Boutique
            </h3>
            <p className="text-muted-foreground leading-relaxed">
              {t('footer.description')}
            </p>
          </motion.div>

          {/* Navigation */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-semibold text-foreground mb-4">{t('footer.navigation')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#products" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.products')}
                </a>
              </li>
              <li>
                <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('nav.about')}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.delivery')}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.faq')}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Legal */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-semibold text-foreground mb-4">{t('footer.documents')}</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.privacy')}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.terms')}
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-primary transition-colors">
                  {t('footer.refund')}
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Contacts */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-semibold text-foreground mb-4">{t('footer.contacts')}</h4>
            <ul className="space-y-3">
              <li className="flex items-center gap-3 text-muted-foreground">
                <Mail className="h-4 w-4 text-primary" />
                <a href="mailto:hello@boutique.com" className="hover:text-primary transition-colors">
                  hello@boutique.com
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <Phone className="h-4 w-4 text-primary" />
                <a href="tel:+14151234567" className="hover:text-primary transition-colors">
                  +1 (415) 123-4567
                </a>
              </li>
              <li className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="h-4 w-4 text-primary" />
                <span>San Francisco, CA</span>
              </li>
            </ul>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              <a
                href="#"
                className="p-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Instagram className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <Send className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="p-2.5 rounded-full bg-secondary hover:bg-primary hover:text-primary-foreground transition-all"
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            </div>
          </motion.div>
        </div>

        {/* Bottom */}
        <div className="border-t border-border mt-8 sm:mt-12 pt-6 sm:pt-8 text-center">
          <p className="text-xs sm:text-sm text-muted-foreground">
            © {new Date().getFullYear()} Boutique. {t('footer.rights')}
          </p>
        </div>
      </div>
    </footer>
  );
}
