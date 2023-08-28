import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import About from "./pages/about";
import CalculatorPage from "./pages/CalculatorPage";
import Home from "./pages/Home";
import Navbar from "./components/navbar";
import NotFound from "./pages/NotFound";
import './App.scss';

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/calculator" element={<CalculatorPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
