import { useDispatch, useSelector } from 'react-redux';
import {
   selectSingleItemOption,
   setSize,
   setDough,
} from '../../../redux/slices/singleItem';
import classes from './PizzaOption.module.scss';

function PizzaOption() {
   const doughs = ['Тонкое', 'Традиционное'];
   const sizes = ['Маленькая', 'Средняя', 'Большая'];

   const dispatch = useDispatch();
   const { activeSize, activeDough } = useSelector(selectSingleItemOption);

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
