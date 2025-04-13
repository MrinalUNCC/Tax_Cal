import React, { useState } from 'react';
import './App.css';
import PersonalDataForm from './PersonalDataForm';
import IncomeForm from './IncomeForm';
import ExpensesForm from './ExpensesForm';
import ReasonableSalaryForm from './ReasonableSalaryForm';

function App() {
  const [step, setStep] = useState(1);

  const nextStep = () => setStep((prev) => Math.min(prev + 1, 4));
  const prevStep = () => setStep((prev) => Math.max(prev - 1, 1));

  return (
    <div className="App">
      <h1>Tax Application Wizard</h1>
      <div className="progress-bar">
        <button onClick={() => setStep(1)} disabled={step === 1}>Step 1</button>
        <button onClick={() => setStep(2)} disabled={step === 2}>Step 2</button>
        <button onClick={() => setStep(3)} disabled={step === 3}>Step 3</button>
        <button onClick={() => setStep(4)} disabled={step === 4}>Step 4</button>
      </div>
      <div className="form-container">
        {step === 1 && <PersonalDataForm />}
        {step === 2 && <IncomeForm />}
        {step === 3 && <ExpensesForm />}
        {step === 4 && <ReasonableSalaryForm />}
      </div>
      <div className="navigation-buttons">
        {step > 1 && <button onClick={prevStep}>Back</button>}
        {step < 4 && <button onClick={nextStep}>Next</button>}
      </div>
    </div>
  );
}

export default App;
