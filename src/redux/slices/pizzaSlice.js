import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  pizzas: [],
  isLoading: 'idle',
};

export const fetchPizzas = createAsyncThunk(
  'pizzas/fetchPizzas',
  async ({ activeCategory, activeSort, activeOrder }) => {
    try {
      const { data } = await axios.get(
        'https://json-server-pizza-seven.vercel.app/pizzas?',
        {
          params: {
            category_like: activeCategory,
            _sort: activeSort,
            _order: activeOrder,
          },
        }
      );
      return data;
    } catch (error) {
      alert('Ошибка загрузки');
    }
  }
);

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchPizzas.pending, (state) => {
      state.isLoading = 'pending';
    });
    builder.addCase(fetchPizzas.fulfilled, (state, action) => {
      state.pizzas = action.payload;
      state.isLoading = 'succeeded';
    });
  },
});

export const selectPizzas = (state) => state.pizzas;

export default pizzasSlice.reducer;
