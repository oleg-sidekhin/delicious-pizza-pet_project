import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  combos: [],
  isLoading: 'idle',
};

export const fetchCombos = createAsyncThunk('combos/fetchCombos', async () => {
  try {
    const { data } = await axios.get(
      'https://json-server-pizza-seven.vercel.app/combos'
    );
    return data;
  } catch (error) {
    alert('Ошибка загрузки');
  }
});

const combosSlice = createSlice({
  name: 'combos',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchCombos.pending, (state) => {
      state.isLoading = 'pending';
    });
    builder.addCase(fetchCombos.fulfilled, (state, action) => {
      state.combos = action.payload;
      state.isLoading = 'succeeded';
    });
  },
});

export const selectCombos = (state) => state.combos;

export default combosSlice.reducer;
