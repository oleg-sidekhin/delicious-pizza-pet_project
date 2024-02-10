import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoClose } from 'react-icons/io5';
import { v4 as uuidv4 } from 'uuid';

import {
  fetchSingleItem,
  selectSingleItem,
} from '../../../redux/slices/singleItem';
import { addItem } from '../../../redux/slices/cartSlice';

import Button from '../../UI/Button/Button';
import classes from './Modal.module.scss';
import SingleItemLoader from '../../loaders/SingleItemLoader/SingleItemLoader';

function PizzaModal() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { isLoading, singleItem } = useSelector(selectSingleItem);
  const { image, title, description, price, totalPrice } = singleItem;
  const { id } = useParams();

  const findedItem = useSelector(
    (state) =>
      state.cart.cart.length > 0 &&
      state.cart.cart.find((item) => item.currentId === Number(id))
  );

  useEffect(() => {
    const comboPath = 'combos';
    const snackPath = 'snacks';
    const desertPath = 'deserts';
    const drinkPath = 'drinks';

    switch (location.state.background.pathname) {
      case '/combos':
        dispatch(fetchSingleItem({ pathname: comboPath, id }));
        break;
      case '/snacks':
        dispatch(fetchSingleItem({ pathname: snackPath, id }));
        break;
      case '/deserts':
        dispatch(fetchSingleItem({ pathname: desertPath, id }));
        break;
      case '/drinks':
        dispatch(fetchSingleItem({ pathname: drinkPath, id }));
        break;
    }
  }, [dispatch]);

  useEffect(() => {
    if (location.state.background) {
      document.body.style.overflow = 'hidden';
    }
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const handlePostItem = () => {
    const cartItem = {
      id: uuidv4(),
      currentId: Number(id),
      image,
      title,
      price,
      totalPrice,
      totalCountPrice: totalPrice,
    };
    dispatch(addItem(cartItem));
  };

  return (
    <div className={classes.modalDiv}>
      {isLoading === 'pending' ? (
        <SingleItemLoader />
      ) : (
        <div className={classes.modal}>
          <div className={classes.imageModal}>
            <img src={image} alt="item" />
          </div>
          <div className={classes.infoModal}>
            <h3>{title}</h3>
            <p>{description}</p>
            <Button className={classes.buyBtnModal} onClick={handlePostItem}>
              {!!findedItem
                ? `Добавить (${findedItem.count} шт.)`
                : `Купить за ${totalPrice} ₽`}
            </Button>
          </div>
          <button
            className={classes.closeBtnModal}
            onClick={() => navigate(-1)}
          >
            <IoClose className={classes.closeBtnModalInside} />
          </button>
        </div>
      )}
    </div>
  );
}

export default PizzaModal;
