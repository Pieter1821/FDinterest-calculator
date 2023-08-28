import { useState } from 'react';
import InputField from './InputField'; 
import "../styles/interestcalculator.css";

function InterestCalculator() {
  const [initialAmount, setInitialAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [monthlyInterest, setMonthlyInterest] = useState(0);
  const [annualInterest, setAnnualInterest] = useState(0);
  const [error, setError] = useState(null);

  const calculateInterest = () => {
    const rate = parseFloat(interestRate) / 100;
    const initialAmountValue = parseFloat(initialAmount);

    if (isNaN(initialAmountValue) || isNaN(interestRate)) {
      setError("Please enter valid numbers for all fields");
      setMonthlyInterest(0);
      setAnnualInterest(0);
      return;
    }

    const annual = initialAmountValue * rate;
    setAnnualInterest(annual.toFixed(2));

    const monthly = (initialAmountValue * rate) / 12;
    setMonthlyInterest(monthly.toFixed(2));
  };

  const resetValues = () => {
    setInitialAmount(0);
    setInterestRate(0);
    setMonthlyInterest(0);
    setAnnualInterest(0);
    setError(null);
  };

  return (
    <div className="calculator-container">
      <h2 className="calculator-title">Interest Calculator</h2>
      <div className="input-fields">
        <InputField
          label="Deposit Amount"
          value={initialAmount}
          onChange={(e) => setInitialAmount(e.target.value)}
        />
        <InputField
          label="Interest Rate"
          value={interestRate}
          onChange={(e) => setInterestRate(e.target.value)}
        />
      </div>

      {error && <p className="error-message">{error}</p>}

      <div className="button-group">
        <button className="btn btn-primary" onClick={calculateInterest}>
          Calculate
        </button>
        <button className="btn btn-secondary" onClick={resetValues}>
          Reset
        </button>
      </div>

      <div className="result-fields">
        <InputField
          label="Monthly Interest"
          value={monthlyInterest}
          onChange={() => {}}
        />
        <InputField
          label="Annual Interest"
          value={annualInterest}
          onChange={() => {}}
        />
      </div>
    </div>
  );
}

export default InterestCalculator;
