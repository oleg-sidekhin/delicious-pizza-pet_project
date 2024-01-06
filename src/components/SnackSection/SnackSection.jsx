import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Outlet, Link } from 'react-router-dom';
import { useEffect } from 'react';

import {
  clearSnacks,
  fetchSnacks,
  selectSnacks,
} from '../../redux/slices/snackSlice';

import ItemCard from '../ItemCard/ItemCard';
import classes from './SnackSection.module.scss';

function SnackSection() {
  const { snacks, isLoading } = useSelector(selectSnacks);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(clearSnacks());
    dispatch(fetchSnacks());
  }, [dispatch]);

  return (
    <section className={classes.main}>
      {isLoading === 'pending'
        ? 'Загрузка'
        : snacks.map((snack) => (
            <Link
              to={`/snacks/snack/${snack.id}`}
              state={{ background: location }}
              key={snack.id}
            >
              <ItemCard {...snack} />
            </Link>
          ))}
      <Outlet />
    </section>
  );
}

export default SnackSection;
