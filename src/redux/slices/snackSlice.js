import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  snacks: [],
  isLoading: 'idle',
};

export const fetchSnacks = createAsyncThunk('snacks/fetchSnacks', async () => {
  try {
    const { data } = await axios.get(' http://localhost:3001/snacks');
    return data;
  } catch (error) {
    alert('Ошибка загрузки');
  }
});

const snacksSlice = createSlice({
  name: 'snacks',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchSnacks.pending, (state) => {
      state.isLoading = 'pending';
    });
    builder.addCase(fetchSnacks.fulfilled, (state, action) => {
      state.snacks = action.payload;
      state.isLoading = 'succeeded';
    });
  },
});

export const selectSnacks = (state) => state.snacks;

export default snacksSlice.reducer;
