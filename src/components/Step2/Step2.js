import { useState, useContext, useRef, createContext } from "react";
import "../../css/Step2.css";
import { StepContext, PlanTypeContext } from "../App.js";
import Monthly from "../Step2/Monthly.js";
import { PeriodicContext } from "../App.js";

const validationErrorContext = createContext();

export default function Step2() {
  const isFirstRender = useRef(true);
  const [toggleAnimation, setToggleAnimation] = useState("");
  const [validationError, setValidationError] = useState(false);

  const currentStep = useContext(StepContext);
  const periodic = useContext(PeriodicContext);
  const planType = useContext(PlanTypeContext);

  const handleSubmitError = (event) => {
    event.preventDefault();

    if (planType.planState === "") {
      setValidationError(true);
      setTimeout(() => {
        setValidationError(false);
      }, 1001);
    } else {
      setValidationError(false);
      currentStep.setStep(3);
    }
  };

  const handleToggleChange = () => {
    if (!isFirstRender.current) {
      setToggleAnimation(
        periodic.periodicState === "Monthly"
          ? "yearly 0.2s linear forwards"
          : "monthly 0.2s linear forwards"
      );
    }
    if (periodic.periodicState === "Monthly") {
      periodic.setPeriodicState("Yearly");
    } else if (periodic.periodicState === "Yearly") {
      periodic.setPeriodicState("Monthly");
    }
  };

  return (
    <>
      <h1 className="main-title">Select your plan</h1>
      <p className="step-description">
        You have the option of monthly or yearly billing.
      </p>
      <form
        className="plan-period-select"
        onSubmit={(e) => handleSubmitError(e)}
      >
        <validationErrorContext.Provider
          value={{ validationError, setValidationError }}
        >
          <Monthly />
        </validationErrorContext.Provider>
        <div className="monthly-yearly-selection">
          <p
            className="periodic-name"
            style={{
              color:
                periodic.periodicState === "Monthly" ? "#032a59" : "#9699ab",
            }}
          >
            Monthly
          </p>
          <label
            htmlFor="periodic-toggle"
            onClick={() => (isFirstRender.current = false)}
          >
            <input
              type="checkbox"
              id="periodic-toggle"
              onChange={handleToggleChange}
            />
            <div
              className="toggle-ball"
              style={{ animation: toggleAnimation }}
            ></div>
          </label>
          <p
            className="periodic-name"
            style={{
              color:
                periodic.periodicState === "Yearly" ? "#032a59" : "#9699ab",
            }}
          >
            Yearly
          </p>
        </div>
        <div className="nav-buttons-div">
          <button
            className="go-back-button"
            type="button"
            onClick={() => currentStep.setStep(1)}
          >
            Go Back
          </button>
          <button className="next-step-button" type="submit">
            Next Step
          </button>
        </div>
      </form>
    </>
  );
}

export { validationErrorContext };
