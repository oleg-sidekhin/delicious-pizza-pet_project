import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoClose } from 'react-icons/io5';

import {
  clearSingleItem,
  fetchSingleItem,
  selectSingleItem,
} from '../../redux/slices/singleItem';

import Button from '../UI/Button/Button';
import PizzaOption from '../UI/PizzaOptionBlock/PizzaOption';
import SingleItemLoader from '../Loaders/SingleItemLoader/SingleItemLoader';

import classes from './PizzaModal.module.scss';

function PizzaModal() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { isLoading, singleItem } = useSelector(selectSingleItem);
  const { image, title, description, price } = singleItem;
  const { id } = useParams();

  useEffect(() => {
    const pizzaPath = 'pizzas';
    dispatch(clearSingleItem());
    dispatch(fetchSingleItem({ pathname: pizzaPath, id }));
  }, [dispatch]);

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
              <Button className={classes.buyBtnModal}>
                Купить за {price} ₽
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
