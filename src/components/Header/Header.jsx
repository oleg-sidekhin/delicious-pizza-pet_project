import { FiShoppingCart } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import Button from '../UI/Button/Button';
import classes from './Header.module.scss';

function Header() {
   return (
      <header className={classes.header}>
         <div className={classes.headerTop}>
            <Link to="/" className={classes.headerLogo}>
               <img
                  src="img/logo.png"
                  alt="logo"
                  className={classes.logoImage}
               />
               <span className={classes.logoText}>Delicious Pizza</span>
            </Link>
            <Button position={'fixed'} className={classes.btn}>
               <FiShoppingCart className={classes.cartImg} /> Корзина
            </Button>
         </div>
      </header>
   );
}

export default Header;
