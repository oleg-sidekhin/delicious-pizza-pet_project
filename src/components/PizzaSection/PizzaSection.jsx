import classes from './PizzaSection.module.scss';
import { pizzas } from '../../data/pizzas';
import ItemCard from '../ItemCard/ItemCard';

function PizzaSection() {
   return (
      <section className={classes.main}>
         {pizzas.map((pizza) => (
            <ItemCard {...pizza} />
         ))}
      </section>
   );
}

export default PizzaSection;
