import { useSelector, useDispatch } from 'react-redux';

import { clearCart, selectCart } from '../../redux/slices/cartSlice';

import { useTotalCount } from '../../hooks/useTotalCount';
import CartItem from '../CartItem/CartItem';
import Button from '../UI/Button/Button';
import classes from './FullCart.module.scss';

function FullCart() {
  const { cart } = useSelector(selectCart);
  const { totalAmount, totalCount } = useTotalCount();
  const dispatch = useDispatch();

  const handlerclearCart = () => {
    dispatch(clearCart());
  };

  const handlerMakeOrder = () => {
    dispatch(clearCart());
    alert(
      `Заказ оформлен. Итого:  \n - Кол-во: ${totalAmount} \n - Сумма: ${totalCount} руб.`
    );
  };

  return (
    <div className={classes.fullCart}>
      <div className={classes.cartContent}>
        <div className={classes.cartOptions}>
          <h2>Корзина</h2>
          <Button className={classes.cartButtons} onClick={handlerclearCart}>
            Очистить корзину
          </Button>
        </div>
        <div className={classes.cartList}>
          {cart.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
      </div>
      <div className={classes.cartInfo}>
        <div className={classes.cartInfoTotal}>
          <h2>Итого:</h2>
          <div className={classes.totalAmountandCount}>
            <span>
              Кол-во: <strong>{totalAmount}</strong> шт.
            </span>
            <span>
              Цена: <strong>{totalCount}</strong> руб.
            </span>
          </div>
        </div>
        <Button className={classes.cartButtons} onClick={handlerMakeOrder}>
          Оформить заказ
        </Button>
      </div>
    </div>
  );
}

export default FullCart;
