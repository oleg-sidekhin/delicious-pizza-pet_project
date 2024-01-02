import { useDispatch, useSelector } from 'react-redux';
import {
   clearPizzas,
   fetchPizzas,
   selectPizzas,
} from '../../redux/slices/pizzaSlice';
import { useEffect } from 'react';
import ItemCard from '../ItemCard/ItemCard';
import classes from './PizzaSection.module.scss';

function PizzaSection() {
   const { pizzas, isLoading } = useSelector(selectPizzas);
   const loading = isLoading === 'succeeded';
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(clearPizzas());
      dispatch(fetchPizzas());
   }, [dispatch]);

   return (
      <section className={classes.main}>
         {!loading
            ? 'Загрузка'
            : pizzas.map((pizza) => <ItemCard {...pizza} key={pizza.id} />)}
      </section>
   );
}

export default PizzaSection;
