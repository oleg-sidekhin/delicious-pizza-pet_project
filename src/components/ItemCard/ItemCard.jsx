import classes from './ItemCard.module.scss';
import Button from '../UI/Button/Button';

function ItemCard({ title, image, description, price, height }) {
  return (
    <div className={classes.card} style={{ height: height }}>
      <img className={classes.cardImg} src={image} alt="pizza" />
      <h3>{title}</h3>
      <p>{description}</p>
      <div className={classes.price}>
        <span>от {price} ₽</span>
        <Button>Выбрать</Button>
      </div>
    </div>
  );
}

export default ItemCard;
