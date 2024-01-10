import { useSelector } from 'react-redux';

import { selectCart } from '../../../redux/slices/cartSlice';

import CartItem from '../../CartItem/CartItem';
import classes from './CartSection.module.scss';

function CartSection() {
  const { cart } = useSelector(selectCart);

  return (
    <div className={classes.wrapper}>
      {cart.length > 0 ? (
        cart.map((item) => <CartItem key={item.id} {...item} />)
      ) : (
        <div className={classes.emptyCart}>
          <img src="/img/emptyCart.png" alt="emptyCart" />
          <h2>Корзина пуста</h2>
        </div>
      )}
    </div>
  );
}

export default CartSection;
