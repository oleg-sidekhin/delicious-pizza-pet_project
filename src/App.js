import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import PizzaSection from './components/PizzaSection/PizzaSection';
import ComboSection from './components/ComboSection/ComboSection';
import SnackSection from './components/SnackSection/SnackSection';
import DesertSection from './components/DesertSection/DesertSection';
import DrinkSection from './components/DrinkSection/DrinkSection';
import './App.css';

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route index element={<PizzaSection />} />
               <Route path="combos" element={<ComboSection />} />
               <Route path="snacks" element={<SnackSection />} />
               <Route path="deserts" element={<DesertSection />} />
               <Route path="drinks" element={<DrinkSection />} />
            </Route>
         </Routes>
      </div>
   );
}

export default App;
