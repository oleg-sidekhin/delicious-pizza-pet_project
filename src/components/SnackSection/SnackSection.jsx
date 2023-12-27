import { snacks } from '../../data/snacks';
import ItemCard from '../ItemCard/ItemCard';
import classes from './SnackSection.module.scss';

function SnackSection() {
   return (
      <section className={classes.main}>
         {snacks.map((snack) => (
            <ItemCard {...snack} />
         ))}
      </section>
   );
}

export default SnackSection;
