import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

import classes from './Navigation.module.scss';

const activeLink = ({ isActive }) =>
  isActive ? classes.active : classes.navLink;

function Navigation() {
  const navLinks = [
    { title: 'Пиццы', path: '/' },
    { title: 'Комбо', path: '/combos' },
    { title: 'Закуски', path: '/snacks' },
    { title: 'Десерты', path: '/deserts' },
    { title: 'Напитки', path: '/drinks' },
  ];

  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={classes.nav}>
      <ul
        className={
          isOpen ? `${classes.openedNav} ${classes.navList}` : classes.navList
        }
      >
        {navLinks.map((link) => (
          <NavLink
            className={activeLink}
            onClick={() => setIsOpen(false)}
            to={link.path}
          >
            {link.title}
          </NavLink>
        ))}
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
