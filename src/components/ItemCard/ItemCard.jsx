import classes from './ItemCard.module.scss';
import Button from '../UI/Button/Button';
import { useLocation } from 'react-router-dom';

function ItemCard({ title, image, description, price }) {
  const { pathname } = useLocation();

  return (
    <div className={pathname === '/drinks' ? classes.cardDrinks : classes.card}>
      <img className={classes.cardImg} src={image} alt="item" />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={classes.price}>
        <span>
          {pathname === '/' && 'от'} {price} ₽
        </span>
        <Button>Выбрать</Button>
      </div>
    </div>
  );
}

export default ItemCard;
