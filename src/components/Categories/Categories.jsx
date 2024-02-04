import { useDispatch, useSelector } from 'react-redux';

import { categories } from '../../data/category&sort';
import {
  setCategory,
  selectFilterCategory,
} from '../../redux/slices/filterSlice';

import classes from './Categories.module.scss';

function Categories() {
  const dispatch = useDispatch();
  const activeCategory = useSelector(selectFilterCategory);

  const handleChangeCategory = (event) => {
    dispatch(setCategory(event.target.value));
  };

  return (
    <div className={classes.categories}>
      {categories.map((category) => (
        <label
          key={category}
          className={
            category === activeCategory ? classes.checked : classes.filterBtn
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
  );
}

export default Categories;
