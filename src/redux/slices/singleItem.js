import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const initialState = {
   singleItem: {},
   isLoading: 'idle',
   options: {
      activeSize: 'Маленькая',
      activeDough: 'Тонкое',
   },
};

export const fetchSingleItem = createAsyncThunk(
   'singleItem/fetchSingleItem',
   async (params) => {
      const { pathname, id } = params;
      try {
         const { data } = await axios.get(
            `http://localhost:3001/${pathname}/${id}`
         );
         return data;
      } catch (error) {
         alert('Ошибка загрузки');
      }
   }
);

const singleItemSlice = createSlice({
   name: 'singleItem',
   initialState,
   reducers: {
      clearSingleItem: (state) => {
         state.singleItem = initialState;
      },
      setSize: (state, action) => {
         state.options.activeSize = action.payload;
      },
      setDough: (state, action) => {
         state.options.activeDough = action.payload;
      },
   },
   extraReducers: (builder) => {
      builder
         .addCase(fetchSingleItem.pending, (state) => {
            state.isLoading = 'pending';
         })
         .addCase(fetchSingleItem.fulfilled, (state, action) => {
            state.singleItem = action.payload;
            state.isLoading = 'succeeded';
         });
   },
});

export const { clearSingleItem, setSize, setDough } = singleItemSlice.actions;

export const selectSingleItem = (state) => state.singleItem;
export const selectSingleItemOption = (state) => state.singleItem.options;

export default singleItemSlice.reducer;
