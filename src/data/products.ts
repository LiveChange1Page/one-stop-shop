import { Product } from '@/types/product';
import productCourse from '@/assets/product-course.jpg';
import productEbooks from '@/assets/product-ebooks.jpg';
import productTemplates from '@/assets/product-templates.jpg';
import productConsultation from '@/assets/product-consultation.jpg';

export const products: Product[] = [
  {
    id: '1',
    name: 'Премиум Курс',
    description: 'Полный курс по современному дизайну интерфейсов',
    fullDescription: 'Погрузитесь в мир UI/UX дизайна с нашим флагманским курсом. 40+ часов контента, практические задания и личный наставник. Получите навыки, востребованные в топовых компаниях.',
    price: 4990,
    image: productCourse,
    category: 'digital',
  },
  {
    id: '2',
    name: 'E-Book Collection',
    description: 'Коллекция из 5 профессиональных книг',
    fullDescription: 'Эксклюзивная подборка электронных книг от ведущих экспертов индустрии. Охватывает темы от стратегии до практических техник. Мгновенный доступ после покупки.',
    price: 1490,
    image: productEbooks,
    category: 'digital',
  },
  {
    id: '3',
    name: 'Шаблоны Notion',
    description: 'Набор из 20+ готовых шаблонов для продуктивности',
    fullDescription: 'Оптимизируйте свой рабочий процесс с нашими профессиональными шаблонами. Включает системы GTD, трекеры привычек, базы знаний и многое другое.',
    price: 990,
    image: productTemplates,
    category: 'digital',
  },
  {
    id: '4',
    name: 'VIP Консультация',
    description: 'Персональная сессия с экспертом',
    fullDescription: '60-минутная приватная консультация с нашим ведущим специалистом. Разберём ваши задачи, составим план действий и ответим на все вопросы.',
    price: 9990,
    image: productConsultation,
    category: 'service',
  },
];
