import { useDispatch, useSelector } from 'react-redux';

import {
  setCategory,
  selectFilterCategory,
} from '../../redux/slices/filterSlice';

import classes from './FilterPizza.module.scss';

function FilterPizza() {
  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые'];
  const dispatch = useDispatch();
  const activeCategory = useSelector(selectFilterCategory);

  const handleChangeCategory = (event) => {
    dispatch(setCategory(event.target.value));
  };

  return (
    <section className={classes.filterWrapper}>
      <div className={classes.container}>
        <div className={classes.categories}>
          {categories.map((category) => (
            <label
              key={category}
              className={
                category === activeCategory
                  ? classes.checked
                  : classes.filterBtn
              }
            >
              <input
                type="radio"
                value={category}
                checked={category === activeCategory}
                onChange={handleChangeCategory}
              />
              {category}
            </label>
          ))}
        </div>
      </div>
    </section>
  );
}

export default FilterPizza;
