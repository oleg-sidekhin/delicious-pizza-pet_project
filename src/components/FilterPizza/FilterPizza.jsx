import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import {
  setCategory,
  selectFilterCategory,
  setSort,
  selectFilterSort,
} from '../../redux/slices/filterSlice';
import { categories, sortProperties } from '../../data/category&sort';
import { shortText } from '../../utils/shortText';

import classes from './FilterPizza.module.scss';

function FilterPizza() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const activeCategory = useSelector(selectFilterCategory);
  const { activeText } = useSelector(selectFilterSort);

  const handleChangeCategory = (event) => {
    dispatch(setCategory(event.target.value));
  };

  const handleChangeSort = (event, text, order) => {
    dispatch(
      setSort({
        activeText: text,
        activeSort: event.target.value,
        activeOrder: order,
      })
    );
    setOpen(false);
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
        <div className={classes.sort}>
          <div className={classes.sortNav}>
            <b>Сортировка по:</b>
            <p onClick={() => setOpen(!open)}>{shortText(activeText, 22)}</p>
          </div>
          <section className={open ? classes.sortModal : classes.hiddenModal}>
            {sortProperties.map((prop, i) => (
              <label
                key={i}
                className={
                  prop.text === activeText
                    ? classes.checkedSort
                    : classes.sortProperty
                }
              >
                <input
                  type="radio"
                  value={prop.value}
                  checked={prop.text === activeText}
                  onChange={(event) =>
                    handleChangeSort(event, prop.text, prop.order)
                  }
                />
                {prop.text}
              </label>
            ))}
          </section>
        </div>
      </div>
    </section>
  );
}

export default FilterPizza;
