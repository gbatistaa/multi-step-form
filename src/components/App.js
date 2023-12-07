import "../css/App.css";
import Step1 from "./Step1";
import Step2 from "./Step2/Step2";
import Step3 from "./Step3";
import StepsBox from "./StepsBox";
import { useState, createContext } from "react";

const PlanTypeContext = createContext();
const PeriodicContext = createContext();
const StepContext = createContext();

export default function App() {
  const [planState, setPlanState] = useState("");
  const [periodicState, setPeriodicState] = useState("monthly");
  const [step, setStep] = useState(1);

  const stepNames = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

  return (
    <PeriodicContext.Provider value={{ periodicState, setPeriodicState }}>
      <PlanTypeContext.Provider value={{ planState, setPlanState }}>
        <StepContext.Provider value={{ step, setStep }}>
          <main className="main-sec">
            <section id="step-guide-container">
              {stepNames.map((stepName, index) => (
                <StepsBox number={index + 1} name={stepName} key={index + 1} />
              ))}
            </section>
            <section id="plan-custom">
              <Step3 />
            </section>
          </main>
        </StepContext.Provider>
      </PlanTypeContext.Provider>
    </PeriodicContext.Provider>
  );
}

export { StepContext, PeriodicContext, PlanTypeContext };
