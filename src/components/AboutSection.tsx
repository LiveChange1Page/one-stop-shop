import { motion } from 'framer-motion';
import { Target, Award, Headphones } from 'lucide-react';
import { useLanguage } from '@/contexts/LanguageContext';

export function AboutSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: Target,
      titleKey: 'about.mission.title',
      textKey: 'about.mission.text',
    },
    {
      icon: Award,
      titleKey: 'about.quality.title',
      textKey: 'about.quality.text',
    },
    {
      icon: Headphones,
      titleKey: 'about.support.title',
      textKey: 'about.support.text',
    },
  ];

  return (
    <section id="about" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
            {t('about.title')}
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.titleKey}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-background rounded-2xl p-8 shadow-soft hover:shadow-elevated transition-shadow duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <feature.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-semibold text-foreground mb-3">
                {t(feature.titleKey)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(feature.textKey)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
