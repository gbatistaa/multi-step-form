import '../css/App.css';
import Step1 from './Step1';
import StepsBox from './StepsBox';
import { useState, useContext, createContext } from 'react';

const StepContext = createContext();

export default function App() {
  const [step, setStep] = useState(1);

  const stepNames = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

  return (
    <StepContext.Provider value={{step, setStep}}>
      <main className="main-sec">
        <section id='step-guide-container'>
          {stepNames.map((stepName, index) => <StepsBox number={index + 1} name={stepName} key={index + 1}/>)}
        </section>
        <section id='plan-custom'>
          <Step1/>
        </section>
      </main>
    </StepContext.Provider>
  );
};

export { StepContext }
