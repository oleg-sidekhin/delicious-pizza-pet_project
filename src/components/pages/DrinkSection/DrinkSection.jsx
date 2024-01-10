import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import { selectDrinks, fetchDrinks } from '../../../redux/slices/drinkSlice';

import ItemCard from '../../ItemCard/ItemCard';
import DrinkLoader from '../../loaders/DrinkLoader/DrinkLoader';
import classes from './DrinkSection.module.scss';

function DrinkSection() {
  const { drinks, isLoading } = useSelector(selectDrinks);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchDrinks());
  }, [dispatch]);

  return (
    <section className={classes.wrapper}>
      <div className={classes.main}>
        {isLoading === 'pending'
          ? [...new Array(9)].map((_, i) => <DrinkLoader key={i} />)
          : drinks.map((drink) => (
              <Link
                to={`/drinks/drink/${drink.id}`}
                state={{ background: location }}
                key={drink.id}
              >
                <ItemCard {...drink} height={400} />
              </Link>
            ))}
        <Outlet />
      </div>
    </section>
  );
}

export default DrinkSection;
