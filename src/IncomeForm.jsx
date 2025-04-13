import React from 'react';

function IncomeForm() {
  return (
    <form>
      <h2>Income Information</h2>
      <label>
        Personal Income:
        <input type="number" name="personalIncome" required />
      </label>
      <br />
      <label>
        S-Corp Income:
        <input type="number" name="sCorpIncome" required />
      </label>
      <br />
      <button type="submit">Next</button>
    </form>
  );
}

export default IncomeForm;