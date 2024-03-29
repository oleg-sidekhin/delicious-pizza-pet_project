import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {
  selectSingleItemOption,
  setSize,
  setDough,
  setDefaultOptions,
} from '../../../redux/slices/singleItem';
import { doughs, sizes } from '../../../data/doughs&sizes';

import classes from './PizzaOption.module.scss';

function PizzaOption() {
  const dispatch = useDispatch();
  const { activeSize, activeDough } = useSelector(selectSingleItemOption);

  useEffect(() => {
    dispatch(setDefaultOptions());
  }, []);

  const optionSizeHandler = (event) => {
    dispatch(setSize(event.target.value));
  };

  const optionDoughHandler = (event) => {
    dispatch(setDough(event.target.value));
  };

  return (
    <div className={classes.optionBlock}>
      <div className={classes.optionThickness}>
        {doughs.map((dough) => (
          <label
            key={dough}
            className={dough === activeDough ? classes.checked : ''}
          >
            <input
              type="radio"
              value={dough}
              checked={dough === activeDough}
              onChange={optionDoughHandler}
            />
            {dough}
          </label>
        ))}
      </div>
      <div className={classes.optionSize}>
        {sizes.map((size) => (
          <label
            key={size}
            className={size === activeSize ? classes.checked : ''}
          >
            <input
              type="radio"
              value={size}
              checked={size === activeSize}
              onChange={optionSizeHandler}
            />
            {size}
          </label>
        ))}
      </div>
    </div>
  );
}

export default PizzaOption;
