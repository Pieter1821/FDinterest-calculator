import InterestCalculator from './components/InterestCalculater';
import HomePage from './pages/Homepage';
import Hero from './pages/Hero';
import './App.css';



function App() {
  return (
    <div className="container">
      <Hero/>
      <HomePage/>
      <br/>
      
      <InterestCalculator />
    </div>
  );
}

export default App;
