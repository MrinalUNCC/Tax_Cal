import React from 'react';
import { useData } from './store';
import { handleInputChange } from './utils';

function ExpensesForm() {
  const { setData } = useData();

  return (
    <form>
      <h2>S-Corp Expenses</h2>
      <label>
        General Expenses:
        <input
          type="number"
          name="generalExpenses"
          required
          onChange={(e) => handleInputChange(setData, 'expensesData', 'generalExpenses', e.target.value)}
        />
      </label>
      <br />
      <label>
        Owner's Withdrawals:
        <input
          type="number"
          name="ownersWithdrawals"
          required
          onChange={(e) => handleInputChange(setData, 'expensesData', 'ownersWithdrawals', e.target.value)}
        />
      </label>
      <br />
      <label>
        Extra Fund Distribution:
        <input
          type="number"
          name="extraFundDistribution"
          required
          onChange={(e) => handleInputChange(setData, 'expensesData', 'extraFundDistribution', e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Next</button>
    </form>
  );
}

export default ExpensesForm;