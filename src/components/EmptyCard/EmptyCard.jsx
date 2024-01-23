import classes from './EmptyCard.module.scss';

function EmptyCard() {
  return (
    <div className={classes.emptyCart}>
      <img src="/img/emptyCart.png" alt="emptyCart" />
      <h2>Корзина пуста</h2>
    </div>
  );
}

export default EmptyCard;
