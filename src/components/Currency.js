import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { currency, dispatch } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleCurrencyChange = (e) => {
    dispatch({ type: 'SET_CURRENCY', payload: e.target.value });
  };

  return (
    <div className={`currency ${isOpen ? 'open' : ''}`}>
      <span>Currency:</span>
      <select
        value={currency}
        onChange={handleCurrencyChange}
        onFocus={() => setIsOpen(true)}
        onBlur={() => setIsOpen(false)}
      >
        <option value="$">Dollar ($)</option>
        <option value="£">Pound (£)</option>
        <option value="€">Euro (€)</option>
        <option value="₹">Rupee (₹)</option>
      </select>
    </div>
  );
};

export default Currency;
