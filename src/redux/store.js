import { configureStore } from '@reduxjs/toolkit';
import pizzasReducer from './slices/pizzaSlice';
import combosReducer from './slices/comboSlice';
import snacksReducer from './slices/snackSlice';
import desertsReducer from './slices/desertSlice';
import drinksReducer from './slices/drinkSlice';
import singleItemReducer from './slices/singleItem';
import cartReducer from './slices/cartSlice';
import filterReducer from './slices/filterSlice';

const store = configureStore({
  reducer: {
    pizzas: pizzasReducer,
    combos: combosReducer,
    snacks: snacksReducer,
    deserts: desertsReducer,
    drinks: drinksReducer,
    singleItem: singleItemReducer,
    cart: cartReducer,
    filter: filterReducer,
  },
});

export default store;
