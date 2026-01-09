import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
      const { payload : item} = action;
      state.items.push({...item, quantity: 1});
    },
    removeItem: (state, action) => {
      const { payload: item } = action;
      state.items = state.items.filter(cartItem => cartItem.name !== item.name);
    },
    updateQuantity: (state, action) => {
      const {payload: {name, quantity}} = action;
      state.items.forEach(cartItem => {
        if (cartItem.name === name) {
          cartItem.quantity = quantity;
        }
      });
    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
