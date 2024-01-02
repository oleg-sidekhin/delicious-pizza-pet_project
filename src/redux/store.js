import { configureStore } from '@reduxjs/toolkit';
import pizzasReducer from './slices/pizzaSlice';

const store = configureStore({
   reducer: {
      pizzas: pizzasReducer,
   },
});

export default store;
