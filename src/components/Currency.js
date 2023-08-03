import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Currency = () => {
  const { currency, dispatch } = useContext(AppContext);
  const [isOpen, setIsOpen] = useState(false);

  const handleCurrencyChange = (e) => {
    dispatch({ type: 'CHG_CURRENCY', payload: e.target.dataset.value });
    setIsOpen(false);
  };

  const getCurrencyName = (currencySymbol) => {
    switch (currencySymbol) {
      case '$':
        return 'Dollar';
      case '£':
        return 'Pound';
      case '€':
        return 'Euro';
      case '₹':
        return 'Rupee';
      default:
        return '';
    }
  };

  return (
    <div className={`currency ${isOpen ? 'open' : ''}`} onBlur={() => setIsOpen(false)}>
      <div className="selected" onClick={() => setIsOpen((prev) => !prev)}>
        {`Currency: (${currency} ${getCurrencyName(currency)})▼`}
      </div>
      {isOpen && (
        <div className="options">
          <div data-value="$" onClick={handleCurrencyChange}>
            $ Dollar
          </div>
          <div data-value="£" onClick={handleCurrencyChange}>
            £ Pound
          </div>
          <div data-value="€" onClick={handleCurrencyChange}>
            € Euro
          </div>
          <div data-value="₹" onClick={handleCurrencyChange}>
            ₹ Rupee
          </div>
        </div>
      )}
    </div>
  );
};

export default Currency;
