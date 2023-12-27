import classes from './MainSection.module.scss';
import { pizzas } from '../../data/pizzas';
import ItemCard from '../ItemCard/ItemCard';

function MainSection() {
   return (
      <main className={classes.main}>
         {pizzas.map((pizza) => (
            <ItemCard {...pizza} />
         ))}
      </main>
   );
}

export default MainSection;
