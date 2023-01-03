import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'products',
  initialState: {
    items: [],
    // If I do not create a state inside the initialstate, the filter to remove items from
    // the cart does not work
  },
  reducers: {
    addProduct: (state, action) => {
      state.items.push(action.payload);
    },
    deleteProduct: (state, action) => {
      const newCart = state.items.filter((item, index) => index !== action.payload);
      state.items = newCart;
    },
  },
});

export const { addProduct } = productSlice.actions;
export const { deleteProduct } = productSlice.actions;
export default productSlice.reducer;
