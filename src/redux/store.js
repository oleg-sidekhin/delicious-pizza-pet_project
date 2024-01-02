import { configureStore } from '@reduxjs/toolkit';
import pizzasReducer from './slices/pizzaSlice';
import combosReducer from './slices/comboSlice';

const store = configureStore({
   reducer: {
      pizzas: pizzasReducer,
      combos: combosReducer,
   },
});

export default store;
