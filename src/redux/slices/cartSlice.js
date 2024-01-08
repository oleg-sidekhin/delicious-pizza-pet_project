import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  cart: [],
  isLoading: 'idle',
};

export const fetchCart = createAsyncThunk('cart/fetchCart', async () => {
  try {
    const { data } = await axios.get(' http://localhost:3001/cart');
    return data;
  } catch (error) {
    alert('Ошибка загрузки');
  }
});

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cart = initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCart.pending, (state) => {
      state.isLoading = 'pending';
    });
    builder.addCase(fetchCart.fulfilled, (state, action) => {
      state.cart = action.payload;
      state.isLoading = 'succeeded';
    });
  },
});

export const { clearCart } = cartSlice.actions;

export const selectCart = (state) => state.cart;

export default cartSlice.reducer;
