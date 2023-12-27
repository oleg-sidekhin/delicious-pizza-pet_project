import classes from './Navigation.module.scss';

function Navigation() {
   return (
      <nav className={classes.nav}>
         <ul className={classes.navList}>
            <li>Пиццы</li>
            <li>Комбо</li>
            <li>Закуски</li>
            <li>Десерты</li>
            <li>Закуски</li>
         </ul>
      </nav>
   );
}

export default Navigation;
