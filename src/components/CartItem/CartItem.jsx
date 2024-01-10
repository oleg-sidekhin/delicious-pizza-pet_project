import { useDispatch } from 'react-redux';

import {
  deleteItem,
  plusAmount,
  minusAmount,
} from '../../redux/slices/cartSlice';

import classes from './CartItem.module.scss';

function CartItem(props) {
  const { image, title, size, dough, count, id, totalCountPrice } = props;

  const dispatch = useDispatch();

  const handleClearCart = ({ id, size, dough }) => {
    dispatch(deleteItem({ id, size, dough }));
  };

  const handlePlus = ({ id, size, dough }) => {
    dispatch(plusAmount({ id, size, dough }));
  };

  const handleMinus = ({ id, size, dough }) => {
    dispatch(minusAmount({ id, size, dough }));
  };

  return (
    <div className={classes.cartItem}>
      <div className={classes.info}>
        <img src={image} alt="" width={50} height={50} />
        <h2>{title}</h2>
      </div>

      <div className={classes.btns}>
        <div className={classes.options}>
          <span>{size}</span>
          <span>{dough}</span>
        </div>
        <button onClick={() => handleMinus({ id, size, dough })}>-</button>
        {count}
        <button onClick={() => handlePlus({ id, size, dough })}>+</button>
        <strong>{totalCountPrice}</strong>
        <button onClick={() => handleClearCart({ id, size, dough })}>
          Удалить
        </button>
      </div>
    </div>
  );
}

export default CartItem;
