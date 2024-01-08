import { Route, Routes, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';

import store from './redux/store';
import Layout from './components/layouts/Layout';
import PizzaSection from './components/pages/PizzaSection/PizzaSection';
import ComboSection from './components/pages/ComboSection/ComboSection';
import SnackSection from './components/pages/SnackSection/SnackSection';
import DesertSection from './components/pages/DesertSection/DesertSection';
import DrinkSection from './components/pages/DrinkSection/DrinkSection';
import CartSection from './components/pages/CartSection/CartSection';
import PizzaModal from './components/modals/PizzaModal/PizzaModal';
import Modal from './components/modals/Modal/Modal';

import './App.scss';

function App() {
  const location = useLocation();
  const background = location.state && location.state.background;

  return (
    <Provider store={store}>
      <div className="App">
        <Routes location={background || location}>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<PizzaSection />}>
              <Route path="pizza/:id" element={<PizzaModal />} />
            </Route>
            <Route path="/combos" element={<ComboSection />}>
              <Route path="combo/:id" element={<Modal />} />
            </Route>
            <Route path="snacks" element={<SnackSection />}>
              <Route path="snack/:id" element={<Modal />} />
            </Route>
            <Route path="deserts" element={<DesertSection />}>
              <Route path="desert/:id" element={<Modal />} />
            </Route>
            <Route path="drinks" element={<DrinkSection />}>
              <Route path="drink/:id" element={<Modal />} />
            </Route>
            <Route path="cart" element={<CartSection />} />
          </Route>
        </Routes>
        {background && (
          <Routes>
            <Route path="/pizza/:id" element={<PizzaModal />} />
            <Route path="/combos/combo/:id" element={<Modal />} />
            <Route path="/snacks/snack/:id" element={<Modal />} />
            <Route path="/deserts/desert/:id" element={<Modal />} />
            <Route path="/drinks/drink/:id" element={<Modal />} />
          </Routes>
        )}
      </div>
    </Provider>
  );
}

export default App;
