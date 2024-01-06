import { drinks } from '../../data/drinks';
import ItemCard from '../ItemCard/ItemCard';
import classes from './DrinkSection.module.scss';

function DrinkSection() {
  return (
    <section className={classes.main}>
      {drinks.map((drink) => (
        <ItemCard {...drink} height={400} />
      ))}
    </section>
  );
}

export default DrinkSection;
