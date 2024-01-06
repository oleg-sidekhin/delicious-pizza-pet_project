import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  deserts: [],
  isLoading: 'idle',
};

export const fetchDeserts = createAsyncThunk(
  'deserts/fetchDeserts',
  async () => {
    try {
      const { data } = await axios.get(' http://localhost:3001/deserts');
      return data;
    } catch (error) {
      alert('Ошибка загрузки');
    }
  }
);

const desertsSlice = createSlice({
  name: 'deserts',
  initialState,
  reducers: {
    clearDeserts: (state) => {
      state.deserts = initialState;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchDeserts.pending, (state) => {
      state.isLoading = 'pending';
    });
    builder.addCase(fetchDeserts.fulfilled, (state, action) => {
      state.deserts = action.payload;
      state.isLoading = 'succeeded';
    });
  },
});

export const { clearDeserts } = desertsSlice.actions;

export const selectDeserts = (state) => state.deserts;

export default desertsSlice.reducer;
