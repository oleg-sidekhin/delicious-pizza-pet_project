import { useDispatch, useSelector } from 'react-redux';
import {
   selectCombos,
   fetchCombos,
   clearCombos,
} from '../../redux/slices/comboSlice';
import { useEffect } from 'react';
import ItemCard from '../ItemCard/ItemCard';
import classes from './ComboSection.module.scss';

function ComboSection() {
   const { combos, isLoading } = useSelector(selectCombos);
   const loading = isLoading === 'succeeded';
   const dispatch = useDispatch();

   useEffect(() => {
      dispatch(clearCombos());
      dispatch(fetchCombos());
   }, [dispatch]);

   return (
      <section className={classes.main}>
         {!loading
            ? 'Загрузка'
            : combos.map((combo) => <ItemCard {...combo} />)}
      </section>
   );
}

export default ComboSection;
