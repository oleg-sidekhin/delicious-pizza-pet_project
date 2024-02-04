import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';

import { setSort, selectFilterSort } from '../../redux/slices/filterSlice';
import { sortProperties } from '../../data/category&sort';
import { shortText } from '../../utils/shortText';

import classes from './Sort.module.scss';

function Sort() {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();
  const location = useLocation();
  const { activeText } = useSelector(selectFilterSort);

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
    <div className={classes.sort}>
      <div className={classes.sortNav}>
        <b>Сортировка по:</b>
        <p onClick={() => setOpen(!open)}>
          {location.pathname === '/' ? shortText(activeText, 21) : activeText}
        </p>
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
  );
}

export default Sort;
