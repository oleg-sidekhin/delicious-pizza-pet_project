import { Route, Routes, useLocation } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import Layout from './components/Layout/Layout';
import PizzaSection from './components/PizzaSection/PizzaSection';
import ComboSection from './components/ComboSection/ComboSection';
import SnackSection from './components/SnackSection/SnackSection';
import DesertSection from './components/DesertSection/DesertSection';
import DrinkSection from './components/DrinkSection/DrinkSection';
import Modal from './components/Modal/Modal';
import './App.css';

function App() {
   const location = useLocation();
   const background = location.state && location.state.background;

   return (
      <Provider store={store}>
         <div className="App">
            <Routes location={background || location}>
               <Route path="/" element={<Layout />}>
                  <Route path="/" element={<PizzaSection />}>
                     <Route path="pizza/:id" element={<Modal />} />
                  </Route>
                  <Route path="/combos" element={<ComboSection />}>
                     <Route path="combo/:id" element={<Modal />} />
                  </Route>
                  <Route path="snacks" element={<SnackSection />} />
                  <Route path="deserts" element={<DesertSection />} />
                  <Route path="drinks" element={<DrinkSection />} />
               </Route>
            </Routes>
            {background && (
               <Routes>
                  <Route path="/pizza/:id" element={<Modal />} />
                  <Route path="/combos/combo/:id" element={<Modal />} />
               </Routes>
            )}
         </div>
      </Provider>
   );
}

export default App;
