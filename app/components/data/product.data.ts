import { IProduct } from '@/types/product.intarface';

export const products: IProduct[] = [
  {
    id: 1,
    description:
      'Frappuccino® mit Milch, Matcha und Vanilla Sirup, geblendet mit Eiswürfeln und gekrönt mit Sahne',
    name: 'Caramel Cream Frappuccino',
    images: [
      '/images/products/Caramel_Cream_Frappuccino.webp',
      '/images/products/Espresso.webp',
      '/images/products/Matcha_Tea_Cream_Frappuccino.webp'
    ],
    price: 9,
    reviews: []
  },
  {
    id: 2,
    description:
      'Medium gerösteter Kaffee mit sanftem, ausgewogenem und reichhaltigem Geschmack',
    name: 'Espresso Vanilla Sirup Premium Hazelnut',
    images: ['/images/products/White_Hot_Chocolate.webp'],
    price: 5,
    reviews: []
  },
  {
    id: 3,
    description:
      'Frappuccino® mit Milch, Matcha und Vanilla Sirup, geblendet mit Eiswürfeln und gekrönt mit Sahne',
    name: 'Matcha Tea Cream Frappuccino',
    images: ['/images/products/Matcha_Tea_Cream_Frappuccino.webp'],
    price: 10,
    reviews: []
  },
  {
    id: 4,
    description:
      'Frappuccino® mit Milch, Matcha und Vanilla Sirup, geblendet mit Eiswürfeln und gekrönt mit Sahne',
    name: 'Premium Caramel Hot Chocolate',
    images: ['/images/products/Premium_Caramel_Hot_Chocolate.webp'],
    price: 3,
    reviews: []
  },
  {
    id: 5,
    description:
      'Frappuccino® mit Milch, Matcha und Vanilla Sirup, geblendet mit Eiswürfeln und gekrönt mit Sahne',
    name: 'Premium Hazelnut Hot Chocolate',
    images: ['/images/products/Premium_Hazelnut_Hot_Chocolate.webp'],
    price: 15,
    reviews: []
  },
  {
    id: 6,
    description:
      'Frappuccino® mit Milch, Matcha und Vanilla Sirup, geblendet mit Eiswürfeln und gekrönt mit Sahne',
    name: 'Premium Hot Chocolate Tea Cream',
    images: ['/images/products/Premium_Hot_Chocolate.webp'],
    price: 12,
    reviews: []
  }
];
