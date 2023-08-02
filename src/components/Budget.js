import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
  const { budget, dispatch } = useContext(AppContext);
  const { expenses } = useContext(AppContext);
  const totalExpenses = expenses.reduce((total, item) => {
    return (total = total + item.cost);
}, 0);
  console.log(totalExpenses);
  const [editable, setEditable] = useState(false);
  const [tempBudget, setTempBudget] = useState(budget);
  const [errorMessage, setErrorMessage] = useState('');

  const handleSave = () => {
    // Check if tempBudget exceeds the upper limit (20000)
    if (tempBudget > 20000) {
        alert("The value cannot exceed the budget of 20000");
      return;
    }
    if(tempBudget < totalExpenses) {
        alert("You cannot reduce the budget value lower than spending £"+totalExpenses);
        return;
    }
    dispatch({
      type: 'SET_BUDGET',
      payload: tempBudget,
    });
    setErrorMessage('');
    setEditable(false);
  };

  const handleCancel = () => {
    setErrorMessage('');
    setEditable(false);
    setTempBudget(budget); // Reset the temporary budget to the original budget
  };

  return (
    <div className='alert alert-secondary'>
      {editable ? (
        <div>
          <input
            type="number"
            value={tempBudget}
            step={10}
            onChange={(e) => setTempBudget(parseInt(e.target.value))}
          />
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
          {errorMessage && <p style={{ color: 'red' }}>{errorMessage}</p>}
        </div>
      ) : (
        <div>
          <span>Budget: £{budget}</span>
          <button onClick={() => setEditable(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Budget;