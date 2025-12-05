import { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'de' | 'fr';

interface Translations {
  [key: string]: {
    en: string;
    de: string;
    fr: string;
  };
}

export const translations: Translations = {
  // Header
  'nav.products': { en: 'Products', de: 'Produkte', fr: 'Produits' },
  'nav.about': { en: 'About Us', de: 'Über uns', fr: 'À propos' },
  'nav.contact': { en: 'Contact', de: 'Kontakt', fr: 'Contact' },
  
  // Hero
  'hero.badge': { en: 'Exclusive Collection', de: 'Exklusive Kollektion', fr: 'Collection Exclusive' },
  'hero.title1': { en: 'Our Best', de: 'Unsere besten', fr: 'Nos meilleurs' },
  'hero.title2': { en: 'Products', de: 'Produkte', fr: 'Produits' },
  'hero.title3': { en: 'in One Place', de: 'an einem Ort', fr: 'au même endroit' },
  'hero.subtitle': { en: 'Discover a carefully curated collection of premium products, crafted for those who value quality and uniqueness', de: 'Entdecken Sie eine sorgfältig kuratierte Kollektion von Premium-Produkten, geschaffen für diejenigen, die Qualität und Einzigartigkeit schätzen', fr: 'Découvrez une collection soigneusement sélectionnée de produits premium, conçue pour ceux qui apprécient la qualité et l\'unicité' },
  'hero.viewProducts': { en: 'View Products', de: 'Produkte ansehen', fr: 'Voir les produits' },
  'hero.learnMore': { en: 'Learn More', de: 'Mehr erfahren', fr: 'En savoir plus' },
  
  // Products
  'products.title': { en: 'Our Products', de: 'Unsere Produkte', fr: 'Nos Produits' },
  'products.subtitle': { en: 'Carefully selected products that will help you achieve your goals', de: 'Sorgfältig ausgewählte Produkte, die Ihnen helfen, Ihre Ziele zu erreichen', fr: 'Des produits soigneusement sélectionnés qui vous aideront à atteindre vos objectifs' },
  'products.addToCart': { en: 'Add to Cart', de: 'In den Warenkorb', fr: 'Ajouter au panier' },
  'products.moreDetails': { en: 'More Details', de: 'Mehr Details', fr: 'Plus de détails' },
  'products.digital': { en: 'Digital Product', de: 'Digitales Produkt', fr: 'Produit numérique' },
  'products.service': { en: 'Service', de: 'Dienstleistung', fr: 'Service' },
  
  // About
  'about.title': { en: 'About Us', de: 'Über uns', fr: 'À propos de nous' },
  'about.subtitle': { en: 'We are a team of experts dedicated to providing you with the best digital products and services', de: 'Wir sind ein Team von Experten, das sich der Bereitstellung der besten digitalen Produkte und Dienstleistungen widmet', fr: 'Nous sommes une équipe d\'experts dédiée à vous fournir les meilleurs produits et services numériques' },
  'about.mission.title': { en: 'Our Mission', de: 'Unsere Mission', fr: 'Notre Mission' },
  'about.mission.text': { en: 'To empower individuals and businesses with high-quality digital tools and knowledge that drive growth and success.', de: 'Menschen und Unternehmen mit hochwertigen digitalen Tools und Wissen zu befähigen, die Wachstum und Erfolg fördern.', fr: 'Donner aux individus et aux entreprises les moyens d\'agir grâce à des outils numériques de haute qualité et des connaissances qui favorisent la croissance et le succès.' },
  'about.quality.title': { en: 'Quality First', de: 'Qualität zuerst', fr: 'La qualité d\'abord' },
  'about.quality.text': { en: 'Every product in our collection is thoroughly tested and refined to ensure it meets the highest standards of excellence.', de: 'Jedes Produkt in unserer Kollektion wird gründlich getestet und verfeinert, um höchste Exzellenzstandards zu erfüllen.', fr: 'Chaque produit de notre collection est soigneusement testé et affiné pour garantir qu\'il répond aux normes d\'excellence les plus élevées.' },
  'about.support.title': { en: '24/7 Support', de: '24/7 Support', fr: 'Support 24/7' },
  'about.support.text': { en: 'Our dedicated support team is always here to help you get the most out of your purchase.', de: 'Unser engagiertes Support-Team ist immer hier, um Ihnen zu helfen, das Beste aus Ihrem Kauf herauszuholen.', fr: 'Notre équipe de support dédiée est toujours là pour vous aider à tirer le meilleur parti de votre achat.' },
  
  // Cart
  'cart.title': { en: 'Your Cart', de: 'Ihr Warenkorb', fr: 'Votre panier' },
  'cart.empty': { en: 'Your cart is empty', de: 'Ihr Warenkorb ist leer', fr: 'Votre panier est vide' },
  'cart.emptySubtitle': { en: 'Add some products to get started', de: 'Fügen Sie Produkte hinzu, um zu beginnen', fr: 'Ajoutez des produits pour commencer' },
  'cart.viewProducts': { en: 'View Products', de: 'Produkte ansehen', fr: 'Voir les produits' },
  'cart.total': { en: 'Total', de: 'Gesamt', fr: 'Total' },
  'cart.checkout': { en: 'Checkout', de: 'Zur Kasse', fr: 'Commander' },
  
  // Checkout
  'checkout.title': { en: 'Checkout', de: 'Kasse', fr: 'Paiement' },
  'checkout.yourOrder': { en: 'Your Order', de: 'Ihre Bestellung', fr: 'Votre commande' },
  'checkout.total': { en: 'Total', de: 'Gesamt', fr: 'Total' },
  'checkout.name': { en: 'Name', de: 'Name', fr: 'Nom' },
  'checkout.namePlaceholder': { en: 'Your name', de: 'Ihr Name', fr: 'Votre nom' },
  'checkout.email': { en: 'Email', de: 'E-Mail', fr: 'E-mail' },
  'checkout.phone': { en: 'Phone', de: 'Telefon', fr: 'Téléphone' },
  'checkout.address': { en: 'Shipping Address', de: 'Lieferadresse', fr: 'Adresse de livraison' },
  'checkout.addressPlaceholder': { en: 'City, street, building', de: 'Stadt, Straße, Gebäude', fr: 'Ville, rue, bâtiment' },
  'checkout.pay': { en: 'Pay', de: 'Bezahlen', fr: 'Payer' },
  'checkout.terms': { en: 'By clicking the button, you agree to the terms of offer', de: 'Mit dem Klicken auf die Schaltfläche stimmen Sie den Angebotsbedingungen zu', fr: 'En cliquant sur le bouton, vous acceptez les conditions de l\'offre' },
  'checkout.success': { en: 'Order placed successfully!', de: 'Bestellung erfolgreich aufgegeben!', fr: 'Commande passée avec succès!' },
  'checkout.successMsg': { en: 'Confirmation will be sent to your email', de: 'Bestätigung wird an Ihre E-Mail gesendet', fr: 'La confirmation sera envoyée à votre e-mail' },
  'checkout.error': { en: 'Error', de: 'Fehler', fr: 'Erreur' },
  'checkout.fillRequired': { en: 'Please fill in the required fields', de: 'Bitte füllen Sie die erforderlichen Felder aus', fr: 'Veuillez remplir les champs obligatoires' },
  'checkout.orderPlaced': { en: 'Order placed!', de: 'Bestellung aufgegeben!', fr: 'Commande passée!' },
  'checkout.confirmationSent': { en: 'Confirmation sent to your email', de: 'Bestätigung an Ihre E-Mail gesendet', fr: 'Confirmation envoyée à votre e-mail' },
  
  // Footer
  'footer.description': { en: 'Premium digital products for those who value quality and uniqueness.', de: 'Premium digitale Produkte für diejenigen, die Qualität und Einzigartigkeit schätzen.', fr: 'Produits numériques premium pour ceux qui apprécient la qualité et l\'unicité.' },
  'footer.navigation': { en: 'Navigation', de: 'Navigation', fr: 'Navigation' },
  'footer.delivery': { en: 'Delivery', de: 'Lieferung', fr: 'Livraison' },
  'footer.faq': { en: 'FAQ', de: 'FAQ', fr: 'FAQ' },
  'footer.documents': { en: 'Documents', de: 'Dokumente', fr: 'Documents' },
  'footer.privacy': { en: 'Privacy Policy', de: 'Datenschutzrichtlinie', fr: 'Politique de confidentialité' },
  'footer.terms': { en: 'Terms of Service', de: 'Nutzungsbedingungen', fr: 'Conditions d\'utilisation' },
  'footer.refund': { en: 'Refund Policy', de: 'Rückerstattungsrichtlinie', fr: 'Politique de remboursement' },
  'footer.contacts': { en: 'Contacts', de: 'Kontakte', fr: 'Contacts' },
  'footer.rights': { en: 'All rights reserved.', de: 'Alle Rechte vorbehalten.', fr: 'Tous droits réservés.' },
};

// Product translations
export const productTranslations = {
  course: {
    name: { en: 'Online Course', de: 'Online-Kurs', fr: 'Cours en ligne' },
    description: { en: 'Complete course with video lessons and practical exercises', de: 'Kompletter Kurs mit Videolektionen und praktischen Übungen', fr: 'Cours complet avec des leçons vidéo et des exercices pratiques' },
    fullDescription: { en: 'Comprehensive online course featuring 50+ video lessons, practical exercises, downloadable resources, and lifetime access. Perfect for beginners and intermediate learners looking to master new skills.', de: 'Umfassender Online-Kurs mit über 50 Videolektionen, praktischen Übungen, herunterladbaren Ressourcen und lebenslangem Zugang. Perfekt für Anfänger und Fortgeschrittene, die neue Fähigkeiten erlernen möchten.', fr: 'Cours en ligne complet comprenant plus de 50 leçons vidéo, des exercices pratiques, des ressources téléchargeables et un accès à vie. Parfait pour les débutants et les apprenants intermédiaires souhaitant maîtriser de nouvelles compétences.' },
  },
  ebooks: {
    name: { en: 'E-Book Collection', de: 'E-Book-Sammlung', fr: 'Collection d\'E-Books' },
    description: { en: 'Collection of exclusive e-books in PDF format', de: 'Sammlung exklusiver E-Books im PDF-Format', fr: 'Collection d\'e-books exclusifs au format PDF' },
    fullDescription: { en: 'A curated collection of 10 premium e-books covering essential topics. Each book is professionally designed, easy to read, and packed with actionable insights you can implement immediately.', de: 'Eine kuratierte Sammlung von 10 Premium-E-Books zu wesentlichen Themen. Jedes Buch ist professionell gestaltet, leicht zu lesen und voller umsetzbarer Erkenntnisse, die Sie sofort anwenden können.', fr: 'Une collection soigneusement sélectionnée de 10 e-books premium couvrant des sujets essentiels. Chaque livre est conçu professionnellement, facile à lire et rempli d\'idées exploitables que vous pouvez mettre en œuvre immédiatement.' },
  },
  templates: {
    name: { en: 'Template Pack', de: 'Vorlagenpaket', fr: 'Pack de Modèles' },
    description: { en: 'Ready-to-use templates for various projects', de: 'Gebrauchsfertige Vorlagen für verschiedene Projekte', fr: 'Modèles prêts à l\'emploi pour divers projets' },
    fullDescription: { en: '50+ professionally designed templates including presentations, documents, spreadsheets, and more. Save hours of work with these customizable, high-quality templates for any business need.', de: 'Über 50 professionell gestaltete Vorlagen einschließlich Präsentationen, Dokumente, Tabellenkalkulationen und mehr. Sparen Sie Stunden an Arbeit mit diesen anpassbaren, hochwertigen Vorlagen für jeden Geschäftsbedarf.', fr: 'Plus de 50 modèles conçus professionnellement, y compris des présentations, des documents, des feuilles de calcul et plus encore. Économisez des heures de travail avec ces modèles personnalisables et de haute qualité pour tout besoin commercial.' },
  },
  consultation: {
    name: { en: 'Personal Consultation', de: 'Persönliche Beratung', fr: 'Consultation Personnelle' },
    description: { en: 'One-on-one session with an expert', de: 'Einzelsitzung mit einem Experten', fr: 'Session individuelle avec un expert' },
    fullDescription: { en: '60-minute personalized consultation session with our expert. Get tailored advice, answers to your questions, and a custom action plan to help you achieve your specific goals.', de: '60-minütige personalisierte Beratungssitzung mit unserem Experten. Erhalten Sie maßgeschneiderte Ratschläge, Antworten auf Ihre Fragen und einen individuellen Aktionsplan, um Ihre spezifischen Ziele zu erreichen.', fr: 'Session de consultation personnalisée de 60 minutes avec notre expert. Obtenez des conseils sur mesure, des réponses à vos questions et un plan d\'action personnalisé pour vous aider à atteindre vos objectifs spécifiques.' },
  },
};

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    const translation = translations[key];
    if (!translation) return key;
    return translation[language] || translation.en;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
