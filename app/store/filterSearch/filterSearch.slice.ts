import { PayloadAction, createSlice } from '@reduxjs/toolkit';

import { IFilterInitialState } from '../filterSearch/filterSearch.types';

const initialState: IFilterInitialState = {
  value: ''
};

export const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    filterItems(state, action: PayloadAction<string>) {
      state.value = action.payload;
    }
  }
});
