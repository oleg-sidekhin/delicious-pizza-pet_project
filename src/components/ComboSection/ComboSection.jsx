import { combos } from '../../data/combos';
import ItemCard from '../ItemCard/ItemCard';
import classes from './ComboSection.module.scss';

function ComboSection() {
   return (
      <section className={classes.main}>
         {combos.map((combo) => (
            <ItemCard {...combo} />
         ))}
      </section>
   );
}

export default ComboSection;
