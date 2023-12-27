import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import MainSection from './components/MainSection/MainSection';
import Navigation from './components/Navigation/Navigation';

function App() {
   return (
      <div className="App">
         <Header />
         <Navigation />
         <MainSection />
         <Footer />
      </div>
   );
}

export default App;
