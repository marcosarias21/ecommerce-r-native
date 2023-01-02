import { configureStore } from '@reduxjs/toolkit';
// eslint-disable-next-line import/no-named-as-default
import categorySlice from './categorySlice';

export const store = configureStore({
  reducer: { category: categorySlice },
});

export default store;
