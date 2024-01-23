import { useSelector } from 'react-redux';

import { selectCart } from '../../../redux/slices/cartSlice';

import FullCart from '../../FullCart/FullCart';
import EmptyCard from '../../EmptyCard/EmptyCard';
import classes from './CartSection.module.scss';

function CartSection() {
  const { cart } = useSelector(selectCart);

  return (
    <div className={classes.wrapper}>
      {cart.length > 0 ? <FullCart /> : <EmptyCard />}
    </div>
  );
}

export default CartSection;
