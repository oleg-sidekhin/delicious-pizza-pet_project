import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { Outlet, useLocation, Link } from 'react-router-dom';

import { selectCombos, fetchCombos } from '../../../redux/slices/comboSlice';
import { selectFilterSort } from '../../../redux/slices/filterSlice';

import ItemCard from '../../ItemCard/ItemCard';
import CSLoader from '../../loaders/Combo&SnacksLoader/CSLoader';
import classes from './ComboSection.module.scss';

function ComboSection() {
  const { combos, isLoading } = useSelector(selectCombos);
  const { activeSort, activeOrder } = useSelector(selectFilterSort);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchCombos({ activeSort, activeOrder }));
  }, [dispatch, activeSort, activeOrder]);

  return (
    <section className={classes.wrapper}>
      <div className={classes.main}>
        {isLoading === 'pending'
          ? [...new Array(9)].map((_, i) => <CSLoader key={i} />)
          : combos.map((combo) => (
              <Link
                to={`/combos/combo/${combo.id}`}
                state={{ background: location }}
                key={combo.id}
              >
                <ItemCard {...combo} />
              </Link>
            ))}
        <Outlet />
      </div>
    </section>
  );
}

export default ComboSection;
