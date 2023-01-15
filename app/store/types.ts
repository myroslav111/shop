import { ICartItem } from '@/types/cart-item.interface';

export interface IInitialState {
  items: ICartItem[];
}

/**
 * Omit --> расширяем interface IAddToCartPayload --> ICartItem но без поля id
 */
export interface IAddToCartPayload extends Omit<ICartItem, 'id'> {}
