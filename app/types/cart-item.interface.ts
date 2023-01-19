import { TypeSize } from '@/store/cart/cart.types';

import { IProduct } from '@/types/product.intarface';

export interface ICartItem {
  product: IProduct;
  quantity: number;
  id: number;
  size: TypeSize;
}
