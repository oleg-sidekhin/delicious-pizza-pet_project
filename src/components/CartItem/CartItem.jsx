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
      <div className={classes.infoBlock}>
        <div className={classes.info}>
          <div className={classes.infoImg}>
            <img src={image} alt="image" />
          </div>
          <h2>{title}</h2>
        </div>
        <div className={classes.options}>
          <span>{size}</span>
          <span>{dough}</span>
        </div>
      </div>
      <div className={classes.btns}>
        <button
          className={classes.btn}
          onClick={() => handleMinus({ id, size, dough })}
        >
          -
        </button>
        {count} шт.
        <button
          className={classes.btn}
          onClick={() => handlePlus({ id, size, dough })}
        >
          +
        </button>
        <b>{totalCountPrice} ₽</b>
        <button onClick={() => handleClearCart({ id, size, dough })}>
          Удалить
        </button>
      </div>
    </div>
  );
}

export default CartItem;
