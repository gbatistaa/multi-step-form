import "../css/App.css";
import ConditionalStep from "./ConditionalStep";
import StepsBox from "./StepsBox";
import { useState, createContext } from "react";

const PlanTypeContext = createContext();
const PeriodicContext = createContext();
const StepContext = createContext();

// Add-ons contexts:

const OnlineServiceContext = createContext();
const LargerStorageContext = createContext();
const CustomizableProfileContext = createContext();

const addonsContexts = [
  OnlineServiceContext,
  LargerStorageContext,
  CustomizableProfileContext,
];

export default function App() {
  const [planState, setPlanState] = useState("");
  const [periodicState, setPeriodicState] = useState("Monthly");
  const [step, setStep] = useState(2);
  const [onlineServiceState, setOnlineServiceState] = useState(false);
  const [largerStorageState, setLargeStorageState] = useState(false);
  const [customizableProfileState, setCustomizableProfileState] =
    useState(false);

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
              <OnlineServiceContext.Provider
                value={{ onlineServiceState, setOnlineServiceState }}
              >
                <LargerStorageContext.Provider
                  value={{ largerStorageState, setLargeStorageState }}
                >
                  <CustomizableProfileContext.Provider
                    value={{
                      customizableProfileState,
                      setCustomizableProfileState,
                    }}
                  >
                    <ConditionalStep />
                  </CustomizableProfileContext.Provider>
                </LargerStorageContext.Provider>
              </OnlineServiceContext.Provider>
            </section>
          </main>
        </StepContext.Provider>
      </PlanTypeContext.Provider>
    </PeriodicContext.Provider>
  );
}

export {
  StepContext,
  PeriodicContext,
  PlanTypeContext,
  OnlineServiceContext,
  LargerStorageContext,
  CustomizableProfileContext,
  addonsContexts,
};
