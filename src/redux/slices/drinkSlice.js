import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  drinks: [],
  isLoading: 'idle',
};

export const fetchDrinks = createAsyncThunk('drinks/fetchDrinks', async () => {
  try {
    const { data } = await axios.get(
      'https://json-server-pizza-seven.vercel.app/drinks'
    );
    return data;
  } catch (error) {
    alert('Ошибка загрузки');
  }
});

const drinksSlice = createSlice({
  name: 'drinks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchDrinks.pending, (state) => {
      state.isLoading = 'pending';
    });
    builder.addCase(fetchDrinks.fulfilled, (state, action) => {
      state.drinks = action.payload;
      state.isLoading = 'succeeded';
    });
  },
});

export const selectDrinks = (state) => state.drinks;

export default drinksSlice.reducer;
