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

  return (
    <div className={classes.fullCart}>
      <div className={classes.cartContent}>
        <div className={classes.cartButtons}>
          <h2>Корзина</h2>
          <Button onClick={handlerclearCart}>Очистить корзину</Button>
        </div>
        <div className={classes.cartList}>
          {cart.map((item) => (
            <CartItem key={item.id} {...item} />
          ))}
        </div>
        <div className={classes.cartInfo}>
          <div className={classes.cartInfoTotal}>
            <h2>Итого:</h2>
            <p>
              Кол-во: <strong>{totalAmount}</strong> шт.
            </p>
            <p>
              Цена: <strong>{totalCount}</strong> руб.
            </p>
          </div>
          <Button>Оформить заказ</Button>
        </div>
      </div>
    </div>
  );
}

export default FullCart;
