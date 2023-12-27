import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import PizzaSection from './components/PizzaSection/PizzaSection';
import ComboSection from './components/ComboSection/ComboSection';
import './App.css';

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/" element={<Layout />}>
               <Route path="pizzas" element={<PizzaSection />} />
               <Route path="combos" element={<ComboSection />} />
            </Route>
         </Routes>
      </div>
   );
}

export default App;
