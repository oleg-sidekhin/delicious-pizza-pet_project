import { configureStore } from '@reduxjs/toolkit';
import pizzasReducer from './slices/pizzaSlice';
import combosReducer from './slices/comboSlice';
import singleItemReducer from './slices/singleItem';

const store = configureStore({
  reducer: {
    pizzas: pizzasReducer,
    combos: combosReducer,
    singleItem: singleItemReducer,
  },
});

export default store;
