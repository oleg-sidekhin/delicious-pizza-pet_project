import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Navigation from '../Navigation/Navigation';
import Footer from '../Footer/Footer';

function Layout() {
  return (
    <div>
      <Header />
      <Navigation />
      <Outlet />
      <Footer />
    </div>
  );
}

export default Layout;
