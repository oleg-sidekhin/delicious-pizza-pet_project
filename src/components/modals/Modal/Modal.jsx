import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { IoClose } from 'react-icons/io5';

import {
  fetchSingleItem,
  selectSingleItem,
} from '../../../redux/slices/singleItem';

import Button from '../../UI/Button/Button';
import classes from './Modal.module.scss';
import SingleItemLoader from '../../loaders/SingleItemLoader/SingleItemLoader';

function PizzaModal() {
  const navigate = useNavigate();
  const location = useLocation();
  const dispatch = useDispatch();
  const { isLoading, singleItem } = useSelector(selectSingleItem);
  const { image, title, description, price } = singleItem;
  const { id } = useParams();

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
