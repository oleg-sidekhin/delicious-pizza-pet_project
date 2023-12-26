import classes from './MainSection.module.scss';
import { pizzas } from '../../data/pizzas';
import PizzaCard from '../PizzaCard/PizzaCard';

function MainSection() {
   return (
      <main className={classes.main}>
         {pizzas.map((pizza) => (
            <PizzaCard {...pizza} />
         ))}
      </main>
   );
}

export default MainSection;
