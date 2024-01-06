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
import PizzaLoader from '../Loaders/PizzaLoader/PizzaLoader';

function PizzaSection() {
  const { pizzas, isLoading } = useSelector(selectPizzas);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(clearPizzas());
    dispatch(fetchPizzas());
  }, [dispatch]);

  return (
    <section className={classes.wrapper}>
      <div className={classes.main}>
        {isLoading === 'pending'
          ? [...new Array(28)].map((_, i) => <PizzaLoader key={i} />)
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
      </div>
    </section>
  );
}

export default PizzaSection;
