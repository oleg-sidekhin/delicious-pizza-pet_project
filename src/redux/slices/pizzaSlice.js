import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  pizzas: [],
  isLoading: 'idle',
};

export const fetchPizzas = createAsyncThunk('pizzas/fetchPizzas', async () => {
  try {
    const { data } = await axios.get(' http://localhost:3001/pizzas');
    return data;
  } catch (error) {
    alert('Ошибка загрузки');
  }
});

const pizzasSlice = createSlice({
  name: 'pizzas',
  initialState,
  reducers: {
    clearPizzas: (state) => {
      state.pizzas = initialState;
    },
  },
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

export const { clearPizzas } = pizzasSlice.actions;

export const selectPizzas = (state) => state.pizzas;

export default pizzasSlice.reducer;
