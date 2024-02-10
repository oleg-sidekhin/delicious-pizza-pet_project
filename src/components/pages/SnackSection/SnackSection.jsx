import { useDispatch, useSelector } from 'react-redux';
import { useLocation, Outlet, Link } from 'react-router-dom';
import { useEffect } from 'react';

import { fetchSnacks, selectSnacks } from '../../../redux/slices/snackSlice';
import { selectFilterSort } from '../../../redux/slices/filterSlice';

import ItemCard from '../../ItemCard/ItemCard';
import CSLoader from '../../loaders/Combo&SnacksLoader/CSLoader';
import classes from './SnackSection.module.scss';

function SnackSection() {
  const { snacks, isLoading } = useSelector(selectSnacks);
  const { activeSort, activeOrder } = useSelector(selectFilterSort);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchSnacks({ activeSort, activeOrder }));
  }, [dispatch, activeSort, activeOrder]);

  return (
    <section className={classes.wrapper}>
      <div className={classes.main}>
        {isLoading === 'pending'
          ? [...new Array(19)].map((_, i) => <CSLoader key={i} />)
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
      </div>
    </section>
  );
}

export default SnackSection;
