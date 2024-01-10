import { NavLink } from 'react-router-dom';
import classes from './Navigation.module.scss';

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
        <NavLink className={activeLink} to="/deserts">
          Десерты
        </NavLink>
        <NavLink className={activeLink} to="/drinks">
          Напитки
        </NavLink>
      </ul>
    </nav>
  );
}

export default Navigation;
