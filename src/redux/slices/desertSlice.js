import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
  deserts: [],
  isLoading: 'idle',
};

export const fetchDeserts = createAsyncThunk(
  'deserts/fetchDeserts',
  async ({ activeSort, activeOrder }) => {
    try {
      const { data } = await axios.get(
        'https://json-server-pizza-seven.vercel.app/deserts?',
        {
          params: {
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

const desertsSlice = createSlice({
  name: 'deserts',
  initialState,
  reducers: {},
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

export const selectDeserts = (state) => state.deserts;

export default desertsSlice.reducer;
