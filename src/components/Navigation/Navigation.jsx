import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

import classes from './Navigation.module.scss';

const activeLink = ({ isActive }) =>
  isActive ? classes.active : classes.navLink;

function Navigation() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={classes.nav}>
      <ul
        className={
          isOpen ? `${classes.openedNav} ${classes.navList}` : classes.navList
        }
      >
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
      {isOpen ? (
        <AiOutlineClose
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className={classes.burgerIcon}
        />
      ) : (
        <GiHamburgerMenu
          onClick={() => {
            setIsOpen(!isOpen);
          }}
          className={classes.burgerIcon}
        />
      )}
    </nav>
  );
}

export default Navigation;
