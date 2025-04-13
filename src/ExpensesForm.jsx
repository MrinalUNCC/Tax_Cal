import React from 'react';

function ExpensesForm() {
  return (
    <form>
      <h2>S-Corp Expenses</h2>
      <label>
        General Expenses:
        <input type="number" name="generalExpenses" required />
      </label>
      <br />
      <label>
        Owner's Withdrawals:
        <input type="number" name="ownersWithdrawals" required />
      </label>
      <br />
      <label>
        Extra Fund Distribution:
        <input type="number" name="extraFundDistribution" required />
      </label>
      <br />
      <button type="submit">Next</button>
    </form>
  );
}

export default ExpensesForm;