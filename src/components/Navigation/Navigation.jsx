import classes from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';

function Navigation() {
   return (
      <nav className={classes.nav}>
         <ul className={classes.navList}>
            <NavLink className={classes.navLink} to="/pizzas">
               Пиццы
            </NavLink>
            <NavLink className={classes.navLink} to="/combos">
               Комбо
            </NavLink>
            <NavLink className={classes.navLink}>Закуски</NavLink>
            <NavLink className={classes.navLink}>Десерты</NavLink>
            <NavLink className={classes.navLink}>Закуски</NavLink>
         </ul>
      </nav>
   );
}

export default Navigation;
