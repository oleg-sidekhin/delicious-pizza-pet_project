import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Link, Outlet } from 'react-router-dom';
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
   const dispatch = useDispatch();
   const location = useLocation();

   useEffect(() => {
      dispatch(clearPizzas());
      dispatch(fetchPizzas());
   }, [dispatch]);

   return (
      <section className={classes.main}>
         {isLoading === 'pending'
            ? 'Загрузка'
            : pizzas.map((pizza) => (
                 <Link
                    to={`/pizza/${pizza.id}`}
                    state={{ background: location }}
                    key={pizza.id}
                 >
                    <ItemCard {...pizza} />
                 </Link>
              ))}
         <Outlet />
      </section>
   );
}

export default PizzaSection;
