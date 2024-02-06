import { Outlet, useLocation } from 'react-router-dom';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';
import classes from './Layout.module.scss';
import FilterPizza from '../FilterPizza/FilterPizza';

function Layout() {
  const location = useLocation();

  return (
    <div className={classes.layout}>
      <Header />
      {location.pathname !== '/cart' && <Navigation />}
      {location.pathname !== '/cart' && <FilterPizza />}
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
