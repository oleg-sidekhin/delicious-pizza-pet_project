import { useState } from 'react';
import classes from './PizzaOption.module.scss';

function PizzaOption() {
   const sizes = ['Маленькая', 'Средняя', 'Большая'];
   const thickness = ['Тонкое', 'Традиционное'];

   
   const [ThiknessValue, setThicknessValue] = useState('traditional');
   const [SizeValue, setSizeValue] = useState('small');

   const changeValue = (event) => {
      setThicknessValue(event.target.value);
   };

   const changeValueSize = (event) => {
      setSizeValue(event.target.value);
   };

   return (
      <div className={classes.optionBlock}>
         <div className={classes.optionThickness}>
            <label
               className={
                  ThiknessValue === 'traditional' ? classes.checked : ''
               }
            >
               <input
                  type="radio"
                  name="thickness"
                  value="traditional"
                  checked={ThiknessValue === 'traditional'}
                  onChange={changeValue}
               />
               Традиционное
            </label>
            <label className={ThiknessValue === 'thin' ? classes.checked : ''}>
               <input
                  type="radio"
                  name="thickness"
                  value="thin"
                  checked={ThiknessValue === 'thin'}
                  onChange={changeValue}
               />
               Тонкое
            </label>
         </div>
         <div className={classes.optionSize}>
            <label className={SizeValue === 'small' ? classes.checked : ''}>
               <input
                  type="radio"
                  name="size"
                  value="small"
                  checked={SizeValue === 'small'}
                  onChange={changeValueSize}
               />
               Маленькая
            </label>
            <label className={SizeValue === 'medium' ? classes.checked : ''}>
               <input
                  type="radio"
                  name="size"
                  value="medium"
                  checked={SizeValue === 'medium' ? true : false}
                  onChange={changeValueSize}
               />
               Средняя
            </label>
            <label className={SizeValue === 'big' ? classes.checked : ''}>
               <input
                  type="radio"
                  name="size"
                  value="big"
                  checked={SizeValue === 'big' ? true : false}
                  onChange={changeValueSize}
               />
               Большая
            </label>
         </div>
      </div>
   );
}

export default PizzaOption;
