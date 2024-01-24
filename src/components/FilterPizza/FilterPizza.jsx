import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';

import {
  setCategory,
  selectFilterCategory,
  setSort,
  selectFilterSort,
} from '../../redux/slices/filterSlice';

import classes from './FilterPizza.module.scss';

function FilterPizza() {
  const categories = ['Все', 'Мясные', 'Вегетарианские', 'Гриль', 'Острые'];
  const sortProperties = [
    {
      text: 'По популярности (по возрастанию)',
      value: 'rating',
      order: 'asc',
    },
    {
      text: 'По популярности (по убыванию)',
      value: 'rating',
      order: 'desc',
    },
    {
      text: 'По цене (по возрастанию)',
      value: 'price',
      order: 'asc',
    },
    {
      text: 'По цене (по убыванию)',
      value: 'price',
      order: 'desc',
    },
  ];

  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const activeCategory = useSelector(selectFilterCategory);
  const { activeText } = useSelector(selectFilterSort);

  const handleChangeCategory = (event) => {
    dispatch(setCategory(event.target.value));
  };

  const handleChangeSort = (event, text) => {
    dispatch(
      setSort({
        activeText: text,
        activeSort: event.target.value,
        activeOrder: event.target.name,
      })
    );
    setOpen(false);
  };

  const shortText = (activeText) => {
    if (activeText.length > 21) {
      return activeText.slice(0, 21) + '…';
    } else {
      return activeText;
    }
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
            <p onClick={() => setOpen(!open)}>{shortText(activeText)}</p>
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
                  name={prop.order}
                  checked={prop.text === activeText}
                  onChange={(event) => handleChangeSort(event, prop.text)}
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
