import { useDispatch, useSelector } from 'react-redux';
import { Link, Outlet, useLocation } from 'react-router-dom';
import { useEffect } from 'react';

import { fetchDeserts, selectDeserts } from '../../../redux/slices/desertSlice';
import { selectFilterSort } from '../../../redux/slices/filterSlice';

import ItemCard from '../../ItemCard/ItemCard';
import CSLoader from '../../loaders/Combo&SnacksLoader/CSLoader';
import classes from './DesertSection.module.scss';

function DesertSection() {
  const { deserts, isLoading } = useSelector(selectDeserts);
  const { activeSort, activeOrder } = useSelector(selectFilterSort);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchDeserts({ activeSort, activeOrder }));
  }, [dispatch, activeSort, activeOrder]);

  return (
    <section className={classes.wrapper}>
      <div className={classes.main}>
        {isLoading === 'pending'
          ? [...new Array(13)].map((_, i) => <CSLoader key={i} />)
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
      </div>
    </section>
  );
}

export default DesertSection;
