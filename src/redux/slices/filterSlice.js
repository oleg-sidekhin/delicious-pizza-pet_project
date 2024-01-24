import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: {
    activeCategory: 'Все',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.filter.activeCategory = action.payload;
    },
  },
});

export const { setCategory } = filterSlice.actions;

export const selectFilterCategory = (state) =>
  state.filter.filter.activeCategory;

export default filterSlice.reducer;
