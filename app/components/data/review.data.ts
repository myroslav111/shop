import { IReview } from '@/types/reviews.interface';

import { products } from './product.data';

export const reviews: IReview[] = [
  {
    id: 1,
    product: products[0],
    rating: 4,
    text: 'Finde ganz einfach heraus, ob eine Lieferung in deiner Nähe verfügbar ist.'
  },
  {
    id: 2,
    product: products[0],
    rating: 5,
    text: 'Finde ganz einfach heraus, ob eine Lieferung in deiner Nähe verfügbar ist.'
  },
  {
    id: 3,
    product: products[0],
    rating: 1,
    text: 'Finde ganz einfach heraus, ob eine Lieferung in deiner Nähe verfügbar ist.'
  }
];
