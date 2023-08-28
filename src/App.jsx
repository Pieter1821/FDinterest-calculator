
import {BrowserRouter as Router,Routes, Route} from 'react-router-dom';
import About from './pages/About';
import CalculatorPage from './pages/CalculatorPage';
import Home from './pages/Home';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (

    <div className="container">
      <Router>
      <Navbar />
      
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/calculator' element={<CalculatorPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
