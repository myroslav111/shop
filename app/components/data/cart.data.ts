import { products } from './product.data';
import { ICartItem } from '@/types/cart-item.interface';

export const cart: ICartItem[] = [
  {
    id: 1,
    quantity: 1,
    product: products[0]
  },
  {
    id: 2,
    quantity: 1,
    product: products[1]
  }
];
