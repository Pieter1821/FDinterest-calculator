import React, { useState } from 'react';

function InputField({ label, value, onChange }) {
  return (
    <div className="form-group">
      <label>{label}</label>
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
    setError(null); // Clear any previous errors
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
    <div>
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

      {error && <p className="error-message">{error}</p>}

      <button className="btn btn-primary" onClick={calculateInterest}>
        Calculate
      </button>
      <button className="btn btn-secondary" onClick={resetValues}>
        Reset
      </button>
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
  );
}

export default InterestCalculator;

