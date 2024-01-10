import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoClose } from 'react-icons/io5';
import { v4 as uuidv4 } from 'uuid';

import {
  fetchSingleItem,
  selectSingleItem,
  selectSingleItemOption,
} from '../../../redux/slices/singleItem';
import { addItem, selectCart } from '../../../redux/slices/cartSlice';

import Button from '../../UI/Button/Button';
import PizzaOption from '../../UI/PizzaOptionBlock/PizzaOption';
import SingleItemLoader from '../../loaders/SingleItemLoader/SingleItemLoader';

import classes from './PizzaModal.module.scss';

function PizzaModal() {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { activeSize, activeDough } = useSelector(selectSingleItemOption);
  const { isLoading, singleItem } = useSelector(selectSingleItem);
  const { image, title, description, price, totalPrice } = singleItem;
  const findedItem = useSelector(
    (state) =>
      state.cart.cart &&
      state.cart.cart.find(
        (item) =>
          item.title === title &&
          item.size === activeSize &&
          item.dough === activeDough
      )
  );

  const { id } = useParams();

  useEffect(() => {
    const pizzaPath = 'pizzas';
    dispatch(fetchSingleItem({ pathname: pizzaPath, id }));
  }, [dispatch]);

  const handlePostItem = () => {
    const cartItem = {
      id: uuidv4(),
      currentId: Number(id),
      image,
      title,
      description,
      price,
      size: activeSize,
      dough: activeDough,
      totalPrice,
      totalCountPrice: totalPrice,
    };
    dispatch(addItem(cartItem));
  };

  return (
    <div className={classes.modalDiv}>
      <div className={classes.modal}>
        {isLoading === 'pending' ? (
          <SingleItemLoader />
        ) : (
          <>
            <div className={classes.imageModal}>
              <img src={image} alt="item" />
            </div>
            <div className={classes.infoModal}>
              <PizzaOption />
              <h3>{title}</h3>
              <p>{description}</p>
              <Button className={classes.buyBtnModal} onClick={handlePostItem}>
                {!!findedItem ? 'В корзине' : `Купить за ${totalPrice} ₽`}
              </Button>
            </div>
          </>
        )}
        <button className={classes.closeBtnModal} onClick={() => navigate(-1)}>
          <IoClose className={classes.closeBtnModalInside} />
        </button>
      </div>
    </div>
  );
}

export default PizzaModal;
