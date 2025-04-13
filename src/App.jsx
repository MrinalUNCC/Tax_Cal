import React, { useState } from 'react';
import './App.css';
import PersonalDataForm from './PersonalDataForm';
import IncomeForm from './IncomeForm';
import ExpensesForm from './ExpensesForm';
import ReasonableSalaryForm from './ReasonableSalaryForm';
import SummaryPage from './SummaryPage';
import { useData } from './store';

function App() {
  const [step, setStep] = useState(1);
  const { data } = useData();

  const isStepValid = () => {
    switch (step) {
      case 1:
        return data.personalData?.name && data.personalData?.email && data.personalData?.phone;
      case 2:
        return data.incomeData?.personalIncome && data.incomeData?.sCorpIncome;
      case 3:
        return (
          data.expensesData?.generalExpenses &&
          data.expensesData?.ownersWithdrawals &&
          data.expensesData?.extraFundDistribution
        );
      case 4:
        return data.reasonableSalary?.reasonableSalary;
      case 5:
        return true; // Assuming the summary page doesn't require validation
      default:
        return false;
    }
  };

  const nextStep = () => {
    if (isStepValid()) {
      setStep((prev) => Math.min(prev + 1, 5));
    } else {
      alert('Please complete the current step before proceeding.');
    }
  };

  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="App">
      <h1>Tax Application Wizard</h1>
      <div className="progress-bar">
        <button
          onClick={() => setStep(1)}
          className={step === 1 ? 'active' : ''}
        >
          Step 1
        </button>
        <button
          onClick={() => setStep(2)}
          className={step === 2 ? 'active' : ''}
        >
          Step 2
        </button>
        <button
          onClick={() => setStep(3)}
          className={step === 3 ? 'active' : ''}
        >
          Step 3
        </button>
        <button
          onClick={() => setStep(4)}
          className={step === 4 ? 'active' : ''}
        >
          Step 4
        </button>
        <button
          onClick={() => setStep(5)}
          className={step === 5 ? 'active' : ''}
        >
          Summary
        </button>
      </div>
      <div className="form-container">
        {step === 1 && <PersonalDataForm />}
        {step === 2 && <IncomeForm />}
        {step === 3 && <ExpensesForm />}
        {step === 4 && <ReasonableSalaryForm />}
        {step === 5 && <SummaryPage />}
      </div>
      <div className="navigation-buttons">
        {step > 1 && <button onClick={prevStep}>Back</button>}
        {step < 5 && <button onClick={nextStep}>Next</button>}
      </div>
    </div>
  );
}

export default App;
