import { Product } from '@/types/product';
import productCourse from '@/assets/product-course.jpg';
import productEbooks from '@/assets/product-ebooks.jpg';
import productTemplates from '@/assets/product-templates.jpg';
import productConsultation from '@/assets/product-consultation.jpg';

export const products: Product[] = [
  {
    id: 'course',
    name: 'Table 1',
    description: 'Complete course with video lessons and practical exercises',
    fullDescription: 'Comprehensive online course featuring 50+ video lessons, practical exercises, downloadable resources, and lifetime access. Perfect for beginners and intermediate learners looking to master new skills.',
    price: 3.99,
    image: productCourse,
    category: 'digital',
  },
  {
    id: 'ebooks',
    name: 'Table 2',
    description: 'Collection of exclusive e-books in PDF format',
    fullDescription: 'A curated collection of 10 premium e-books covering essential topics. Each book is professionally designed, easy to read, and packed with actionable insights you can implement immediately.',
    price: 4.99,
    image: productEbooks,
    category: 'digital',
  },
  {
    id: 'templates',
    name: 'Table 3',
    description: 'Ready-to-use templates for various projects',
    fullDescription: '50+ professionally designed templates including presentations, documents, spreadsheets, and more. Save hours of work with these customizable, high-quality templates for any business need.',
    price: 5.99,
    image: productTemplates,
    category: 'digital',
  },
  {
    id: 'consultation',
    name: 'Personal Table',
    description: 'One-on-one session with an expert',
    fullDescription: '60-minute personalized consultation session with our expert. Get tailored advice, answers to your questions, and a custom action plan to help you achieve your specific goals.',
    price: 19.99,
    image: productConsultation,
    category: 'service',
  },
];
