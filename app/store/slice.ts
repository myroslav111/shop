import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { cart } from '@/components/data/cart.data';

import { IAddToCartPayload, IInitialState } from './types';

const initialState: IInitialState = {
  items: cart
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IAddToCartPayload>) => {
      const id = state.items.length;
      state.items.push({ ...action.payload, id });
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      state.items = state.items.filter(
        item => item.product.id !== action.payload.id
      );
    }
  }
});
