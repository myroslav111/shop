import { TypeSize } from '@/store/types';

import { IProduct } from '@/types/product.intarface';

export interface ICartItem {
  product: IProduct;
  quantity: number;
  id: number;
  size: TypeSize;
}
