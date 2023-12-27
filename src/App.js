import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import './App.css';
import PizzaSection from './components/PizzaSection/PizzaSection';

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/pizzas" element={<Layout />}>
               <Route index element={<PizzaSection />} />
            </Route>
         </Routes>
      </div>
   );
}

export default App;
