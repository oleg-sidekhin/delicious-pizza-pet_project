import { useDispatch, useSelector } from 'react-redux';
import {
  selectCombos,
  fetchCombos,
  clearCombos,
} from '../../redux/slices/comboSlice';
import { useEffect } from 'react';
import ItemCard from '../ItemCard/ItemCard';
import classes from './ComboSection.module.scss';
import { Outlet, useLocation, Link } from 'react-router-dom';

function ComboSection() {
  const { combos, isLoading } = useSelector(selectCombos);
  const dispatch = useDispatch();
  const location = useLocation();

  useEffect(() => {
    dispatch(clearCombos());
    dispatch(fetchCombos());
  }, [dispatch]);

  return (
    <section className={classes.main}>
      {isLoading === 'pending'
        ? 'Загрузка'
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
    </section>
  );
}

export default ComboSection;
