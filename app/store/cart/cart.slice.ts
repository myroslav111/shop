import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { cart } from '@/components/data/cart.data';

import {
  IAddToCartPayload,
  ICartInitialState,
  IChangeQuantityPayload,
  IChangeSizePayload
} from './cart.types';

const initialState: ICartInitialState = {
  items: cart
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart: (state, action: PayloadAction<IAddToCartPayload>) => {
      const isExistSize = state.items.some(
        item => item.size === action.payload.size
      );
      if (!isExistSize)
        state.items.push({ ...action.payload, id: state.items.length });
    },
    removeFromCart: (state, action: PayloadAction<{ id: number }>) => {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    changeQuantity: (state, action: PayloadAction<IChangeQuantityPayload>) => {
      const { id, type } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) type === 'plus' ? item.quantity++ : item.quantity--;
    }
    // changeSize: (state, action: PayloadAction<IChangeSizePayload>) => {
    //   const { id, size } = action.payload;
    //   const item = state.items.find(item => item.id === id);
    //   if (item) item.size = size;
    // }
  }
});
