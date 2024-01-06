import { deserts } from '../../data/deserts';
import ItemCard from '../ItemCard/ItemCard';
import classes from './DesertSection.module.scss';

function DesertSection() {
  return (
    <section className={classes.main}>
      {deserts.map((desert) => (
        <ItemCard {...desert} />
      ))}
    </section>
  );
}

export default DesertSection;
