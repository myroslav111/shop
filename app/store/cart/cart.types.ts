import { ICartItem } from '@/types/cart-item.interface';

export interface ICartInitialState {
  items: ICartItem[];
}

/**
 * Omit --> расширяем interface IAddToCartPayload --> ICartItem но без поля id
 */
export interface IAddToCartPayload extends Omit<ICartItem, 'id'> {}

/**
 * Pick берет одно поле 'id с расширяемого interface
 */
export interface IChangeQuantityPayload extends Pick<ICartItem, 'id'> {
  type: 'minus' | 'plus';
}

export type TypeSize = 'SHORT' | 'TALL' | 'GRANDE' | 'VENTI';

export interface IChangeSizePayload extends Pick<ICartItem, 'id'> {
  size: TypeSize;
}
