import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  combos: [],
  isLoading: 'idle',
};

export const fetchCombos = createAsyncThunk('combos/fetchCombos', async () => {
  try {
    const { data } = await axios.get(' http://localhost:3001/combos');
    return data;
  } catch (error) {
    alert('Ошибка загрузки');
  }
});

const combosSlice = createSlice({
  name: 'combos',
  initialState,
  reducers: {
    clearCombos: (state) => {
      state.combos = initialState;
    },
  },
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

export const { clearCombos } = combosSlice.actions;

export const selectCombos = (state) => state.combos;

export default combosSlice.reducer;
