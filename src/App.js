import { Route, Routes } from 'react-router-dom';
import Layout from './components/Layout/Layout';
import './App.css';
import MainSection from './components/MainSection/MainSection';

function App() {
   return (
      <div className="App">
         <Routes>
            <Route path="/pizzas" element={<Layout />}>
               <Route index element={<MainSection />} />
            </Route>
         </Routes>
      </div>
   );
}

export default App;
