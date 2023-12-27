import Button from '../UI/Button/Button';
import classes from './Header.module.scss';
import { FiShoppingCart } from 'react-icons/fi';

function Header() {
   return (
      <header className={classes.header}>
         <div className={classes.headerTop}>
            <div className={classes.headerLogo}>
               <img
                  src="img/logo.png"
                  alt="logo"
                  className={classes.logoImage}
               />
               <span className={classes.logoText}>Delicious Pizza</span>
            </div>
            <Button>
               <FiShoppingCart className={classes.cartImg} /> Корзина
            </Button>
         </div>
         
      </header>
   );
}

export default Header;
