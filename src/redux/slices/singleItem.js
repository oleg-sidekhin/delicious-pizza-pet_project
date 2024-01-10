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
    setSize: (state, action) => {
      state.options.activeSize = action.payload;

      if (
        action.payload === 'Маленькая' &&
        state.options.activeDough === 'Тонкое'
      ) {
        state.singleItem.totalPrice = state.singleItem.price;
      }
      if (
        action.payload === 'Средняя' &&
        state.options.activeDough === 'Тонкое'
      ) {
        state.singleItem.totalPrice = state.singleItem.price + 80;
      }
      if (
        action.payload === 'Большая' &&
        state.options.activeDough === 'Тонкое'
      ) {
        state.singleItem.totalPrice = state.singleItem.price + 160;
      }
      if (
        action.payload === 'Маленькая' &&
        state.options.activeDough === 'Традиционное'
      ) {
        state.singleItem.totalPrice = state.singleItem.price + 80;
      }
      if (
        action.payload === 'Средняя' &&
        state.options.activeDough === 'Традиционное'
      ) {
        state.singleItem.totalPrice = state.singleItem.price + 160;
      }
      if (
        action.payload === 'Большая' &&
        state.options.activeDough === 'Традиционное'
      ) {
        state.singleItem.totalPrice = state.singleItem.price + 240;
      }
    },
    setDough: (state, action) => {
      state.options.activeDough = action.payload;

      if (
        action.payload == 'Тонкое' &&
        state.options.activeSize === 'Маленькая'
      ) {
        state.singleItem.totalPrice = state.singleItem.price;
      }
      if (
        action.payload == 'Тонкое' &&
        state.options.activeSize === 'Средняя'
      ) {
        state.singleItem.totalPrice = state.singleItem.price + 80;
      }
      if (
        action.payload == 'Тонкое' &&
        state.options.activeSize === 'Большая'
      ) {
        state.singleItem.totalPrice = state.singleItem.price + 160;
      }
      if (
        action.payload == 'Традиционное' &&
        state.options.activeSize === 'Маленькая'
      ) {
        state.singleItem.totalPrice = state.singleItem.price + 80;
      }
      if (
        action.payload == 'Традиционное' &&
        state.options.activeSize === 'Средняя'
      ) {
        state.singleItem.totalPrice = state.singleItem.price + 160;
      }
      if (
        action.payload == 'Традиционное' &&
        state.options.activeSize === 'Большая'
      ) {
        state.singleItem.totalPrice = state.singleItem.price + 240;
      }
    },
    setDefaultOptions: (state) => {
      state.options = {
        activeSize: 'Маленькая',
        activeDough: 'Тонкое',
      };
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchSingleItem.pending, (state) => {
        state.isLoading = 'pending';
      })
      .addCase(fetchSingleItem.fulfilled, (state, action) => {
        state.singleItem = {
          ...action.payload,
          totalPrice: action.payload.price,
        };
        state.isLoading = 'succeeded';
      });
  },
});

export const { setSize, setDough, setDefaultOptions } = singleItemSlice.actions;

export const selectSingleItem = (state) => state.singleItem;
export const selectSingleItemOption = (state) => state.singleItem.options;

export default singleItemSlice.reducer;
