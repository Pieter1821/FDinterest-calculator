import React, { Suspense } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar';
import NotFound from './pages/NotFound';
import Footer from './components/Footer';
import './App.scss';

const Home = React.lazy(() => import('./pages/Home'));
const About = React.lazy(() => import('./pages/About'));
const CalculatorPage = React.lazy(() => import('./pages/CalculatorPage'));
const Spinner = React.lazy(() => import('./components/Spinner'));

function App() {
  return (
    <div className="app-container">
      <Router>
        <Navbar />
        
        <Suspense
          fallback={
            <div className="Loading">
              <h1>Loading...</h1>
              <h2>Please wait...</h2>

              <Spinner />
            </div>
          }
        >
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/calculator" element={<CalculatorPage />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>

        <Footer />
      </Router>
    </div>
  );
}

export default App;


