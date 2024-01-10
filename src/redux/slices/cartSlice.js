import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  cart: [],
  isLoading: 'idle',
};

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const currentItem = state.cart.find(
        (item) =>
          item.currentId === action.payload.currentId &&
          item.size === action.payload.size &&
          item.dough === action.payload.dough
      );

      if (currentItem) {
        ++currentItem.count;
        currentItem.totalCountPrice =
          currentItem.totalPrice * currentItem.count;
      } else {
        state.cart.push({ ...action.payload, count: 1 });
      }
    },
    plusAmount: (state, action) => {
      const currentItem = state.cart.find(
        (item) =>
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.dough === action.payload.dough
      );
      ++currentItem.count;
      currentItem.totalCountPrice = currentItem.totalPrice * currentItem.count;
    },
    minusAmount: (state, action) => {
      const currentItem = state.cart.find(
        (item) =>
          item.id === action.payload.id &&
          item.size === action.payload.size &&
          item.dough === action.payload.dough
      );
      if (currentItem.count === 1) {
        currentItem.count = 1;
      } else {
        --currentItem.count;
      }
      currentItem.totalCountPrice = currentItem.totalPrice * currentItem.count;
    },
    deleteItem: (state, action) => {
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== action.payload.id),
      };
    },
    clearCart: (state) => {
      state.cart = initialState;
    },
  },
});

export const { clearCart, deleteItem, addItem, plusAmount, minusAmount } =
  cartSlice.actions;

export const selectCart = (state) => state.cart;

export default cartSlice.reducer;
