import React from 'react';
import { useData } from './store';

function SummaryPage() {
  const { data } = useData();

  return (
    <div>
      <h2>Summary</h2>
      <h3>Personal Information</h3>
      <p>Name: {data.personalData?.name}</p>
      <p>Email: {data.personalData?.email}</p>
      <p>Phone: {data.personalData?.phone}</p>

      <h3>Income Information</h3>
      <p>Personal Income: {data.incomeData?.personalIncome}</p>
      <p>S-Corp Income: {data.incomeData?.sCorpIncome}</p>

      <h3>S-Corp Expenses</h3>
      <p>General Expenses: {data.expensesData?.generalExpenses}</p>
      <p>Owner's Withdrawals: {data.expensesData?.ownersWithdrawals}</p>
      <p>Extra Fund Distribution: {data.expensesData?.extraFundDistribution}</p>

      <h3>Reasonable Salary</h3>
      <p>Reasonable Salary: {data.reasonableSalary?.reasonableSalary}</p>

      <button onClick={() => alert('Form submitted successfully!')}>Submit</button>
    </div>
  );
}

export default SummaryPage;