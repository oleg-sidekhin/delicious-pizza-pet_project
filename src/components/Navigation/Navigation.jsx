import classes from './Navigation.module.scss';
import { NavLink } from 'react-router-dom';

const activeLink = ({ isActive }) =>
   isActive ? classes.active : classes.navLink;

function Navigation() {
   return (
      <nav className={classes.nav}>
         <ul className={classes.navList}>
            <NavLink className={activeLink} to="/">
               Пиццы
            </NavLink>
            <NavLink className={activeLink} to="/combos">
               Комбо
            </NavLink>
            <NavLink className={activeLink} to="/snacks">
               Закуски
            </NavLink>
            <NavLink className={activeLink}>Десерты</NavLink>
            <NavLink className={activeLink}>Закуски</NavLink>
         </ul>
      </nav>
   );
}

export default Navigation;
