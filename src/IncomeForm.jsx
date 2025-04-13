import React from 'react';
import { useData } from './store';
import { handleInputChange } from './utils';

function IncomeForm() {
  const { setData } = useData();

  return (
    <form>
      <h2>Income Information</h2>
      <label>
        Personal Income:
        <input
          type="number"
          name="personalIncome"
          required
          onChange={(e) => handleInputChange(setData, 'incomeData', 'personalIncome', e.target.value)}
        />
      </label>
      <br />
      <label>
        S-Corp Income:
        <input
          type="number"
          name="sCorpIncome"
          required
          onChange={(e) => handleInputChange(setData, 'incomeData', 'sCorpIncome', e.target.value)}
        />
      </label>
      <br />
      <button type="submit">Next</button>
    </form>
  );
}

export default IncomeForm;