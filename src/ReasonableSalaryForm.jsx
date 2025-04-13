import React, { useState } from 'react';
import { useData } from './store';
import { validateField, handleInputChange } from './utils';

function ReasonableSalaryForm() {
  const { data, setData } = useData();
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const salaryError = validateField(data.reasonableSalary?.reasonableSalary, 'Reasonable Salary');
    if (salaryError) {
      setError(salaryError);
      return;
    }

    const formData = {
      ...data.personalData,
      ...data.incomeData,
      ...data.expensesData,
      ...data.reasonableSalary,
    };

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          access_key: 'd2a896f0-0411-46fe-9554-dea63cf057f6',
          ...formData,
        }),
      });

      if (response.ok) {
        setSuccess(true);
      } else {
        setError('Submission failed. Please try again.');
      }
    } catch (error) {
      setError('An error occurred while submitting the form.');
    }
  };

  if (success) {
    return <h2>Form submitted successfully!</h2>;
  }

  return (
    <form onSubmit={handleSubmit}>
      <h2>Reasonable Salary</h2>
      <p>
        A reasonable salary is the amount of compensation that would typically be paid for similar services by similar businesses in similar circumstances. It is important to determine this to comply with tax regulations.
      </p>
      <label>
        Reasonable Salary:
        <input
          type="number"
          name="reasonableSalary"
          required
          onChange={(e) =>
            handleInputChange(setData, 'reasonableSalary', 'reasonableSalary', e.target.value)
          }
        />
      </label>
      <small>Enter the amount you consider a reasonable salary for your role.</small>
      <br />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button type="submit">Submit</button>
    </form>
  );
}

export default ReasonableSalaryForm;