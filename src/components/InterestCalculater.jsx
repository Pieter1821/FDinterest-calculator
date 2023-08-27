import React, { useState } from 'react';

import "../styles/interestcalculator.css"

function InputField({ label, value, onChange }) {
  return (
    <div className="form-group">
      <label className="input-label">{label}</label>
      <input
        type="number"
        className="form-control"
        value={value}
        onChange={onChange}
      />
    </div>
  );
}

function InterestCalculator() {
  const [initialAmount, setInitialAmount] = useState(0);
  const [interestRate, setInterestRate] = useState(0);
  const [monthlyInterest, setMonthlyInterest] = useState(0);
  const [annualInterest, setAnnualInterest] = useState(0);
  const [error, setError] = useState(null);

  const onInputChange = (field, value) => {
    setError(null);
    switch (field) {
      case 'initialAmount':
        setInitialAmount(value);
        break;
      case 'interestRate':
        setInterestRate(value);
        break;
      default:
        break;
    }
  };

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
          label="Initial Amount"
          value={initialAmount}
          onChange={(e) => onInputChange('initialAmount', e.target.value)}
        />
        <InputField
          label="Interest Rate"
          value={interestRate}
          onChange={(e) => onInputChange('interestRate', e.target.value)}
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
