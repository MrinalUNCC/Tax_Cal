import React, { useState } from 'react';
import { useData } from './store';

function ReasonableSalaryForm() {
  const { data, setData } = useData();
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

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
        console.error('Submission failed');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
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
            setData((prev) => ({
              ...prev,
              reasonableSalary: { reasonableSalary: e.target.value },
            }))
          }
        />
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default ReasonableSalaryForm;