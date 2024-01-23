import { FiShoppingCart } from 'react-icons/fi';
import { Link, useLocation, useNavigate } from 'react-router-dom';

import Button from '../UI/Button/Button';
import classes from './Header.module.scss';

function Header() {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <header className={classes.header}>
      <div className={classes.container}>
        <div className={classes.headerTop}>
          <Link to="/" className={classes.headerLogo}>
            <img src="/img/logo.png" alt="logo" className={classes.logoImage} />
            <span className={classes.logoText}>Delicious Pizza</span>
          </Link>
          {location.pathname === '/cart' ? (
            <Button onClick={() => navigate(-1)} className={classes.backbtn}>
              Вернуться Назад
            </Button>
          ) : (
            <Link to="cart">
              <Button className={classes.btn}>
                <FiShoppingCart className={classes.cartImg} /> Корзина
              </Button>
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}

export default Header;
