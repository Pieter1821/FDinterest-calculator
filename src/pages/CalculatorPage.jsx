import InterestCalculator from '../components/InterestCalculater';
import { Element } from 'react-scroll';

const CalculatorPage = () => {
  return (
    <Element name='calculator' className="calculator-container">
      <InterestCalculator />
    </Element>
  );
};

export default CalculatorPage;
