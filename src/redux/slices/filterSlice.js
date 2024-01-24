import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  filter: {
    activeCategory: 'Все',
  },
  sort: {
    activeText: 'По популярности (по возрастанию)',
    activeSort: 'rating',
    activeOrder: 'asc',
  },
};

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory: (state, action) => {
      state.filter.activeCategory = action.payload;
    },
    setSort: (state, action) => {
      state.sort = action.payload;
    },
  },
});

export const { setCategory, setSort } = filterSlice.actions;

export const selectFilterCategory = (state) =>
  state.filter.filter.activeCategory;
export const selectFilterSort = (state) => state.filter.sort;

export default filterSlice.reducer;
