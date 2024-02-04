import { useLocation } from 'react-router-dom';
import Categories from '../Categories/Categories';
import Sort from '../Sort/Sort';

import classes from './FilterPizza.module.scss';

function FilterPizza() {
  const location = useLocation();

  return (
    <section className={classes.filterWrapper}>
      {location.pathname === '/' && <Categories />}
      <Sort />
    </section>
  );
}

export default FilterPizza;
