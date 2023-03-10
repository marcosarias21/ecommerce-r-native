/* eslint-disable import/no-named-as-default */
import { configureStore } from '@reduxjs/toolkit';
import categorySlice from './categorySlice';
import productSlice from './productSlice';

export const store = configureStore({
  reducer: {
    category: categorySlice,
    products: productSlice,
  },
  devTools: true,
});

console.log(store);
export default store;
