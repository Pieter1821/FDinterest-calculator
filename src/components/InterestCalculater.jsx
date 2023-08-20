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
  const [timePeriod, setTimePeriod] = useState(0);
  const [mode, setMode] = useState('months');
  const [monthlyInterest, setMonthlyInterest] = useState(0);
  const [annualInterest, setAnnualInterest] = useState(0);

  const onInputChange = (field, value) => {
    switch (field) {
      case 'initialAmount':
        setInitialAmount(value);
        break;
      case 'interestRate':
        setInterestRate(value);
        break;
      case 'timePeriod':
        setTimePeriod(value);
        break;
      default:
        break;
    }
  };

  const calculateInterest = () => {
    const rate = parseFloat(interestRate) / 100;
    const initialAmountValue = parseFloat(initialAmount);

    if (mode === 'months') {
      const monthly = (initialAmountValue * rate) / 12;
      setMonthlyInterest(monthly.toFixed(2));
      setAnnualInterest((monthly * 12).toFixed(2));
    } else {
      const annual = initialAmountValue * rate;
      setAnnualInterest(annual.toFixed(2));
      setMonthlyInterest((annual / 12).toFixed(2));
    }
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
      <InputField
        label="Time Period"
        value={timePeriod}
        onChange={(e) => onInputChange('timePeriod', e.target.value)}
      />

      <div className="form-group">
        <label>Mode</label>
        <select
          className="form-control"
          value={mode}
          onChange={(e) => setMode(e.target.value)}
        >
          <option value="months">Monthly</option>
          <option value="years">Yearly</option>
        </select>
      </div>
      <button className="btn btn-primary" onClick={calculateInterest}>
        Calculate
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
