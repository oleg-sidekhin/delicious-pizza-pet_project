import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import {
  fetchDeserts,
  selectDeserts,
  clearDeserts,
} from '../../redux/slices/desertSlice';

import ItemCard from '../ItemCard/ItemCard';
import classes from './DesertSection.module.scss';

function DesertSection() {
  const { deserts, isLoading } = useSelector(selectDeserts);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(clearDeserts());
    dispatch(fetchDeserts());
  }, [dispatch]);

  return (
    <section className={classes.main}>
      {isLoading === 'pending'
        ? 'Загрузка'
        : deserts.map((desert) => (
            <Link
              to={`/deserts/desert/${desert.id}`}
              state={{ background: location }}
              key={desert.id}
            >
              <ItemCard {...desert} />
            </Link>
          ))}
      <Outlet />
    </section>
  );
}

export default DesertSection;
