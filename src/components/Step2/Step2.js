import { useState, useContext, useRef } from "react";
import "../../css/Step2.css";
import { StepContext } from "../App.js";
import Monthly from "./Monthly.js";
import { PlanTypeContext, PeriodicContext } from "../App.js";

export default function Step2() {
  const isFirstRender = useRef(true);
  const [toggleAnimation, setToggleAnimation] = useState("");

  const currentStep = useContext(StepContext);
  const periodic = useState(PeriodicContext);

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  const handleToggleChange = () => {
    if (!isFirstRender.current) {
      setToggleAnimation(
        periodic.periodicState === "monthly"
          ? "yearly 0.2s linear forwards"
          : "monthly 0.2s linear forwards"
      );
    }
    if (periodic.periodicState === "monthly") {
      periodic.setPeriodicState("yearly");
    } else if (periodic.periodicState === "yearly") {
      periodic.setPeriodicState("monthly");
    }
  };

  return (
    <>
      <h1 className="main-title">Select your plan</h1>
      <p className="step-description">
        You have the option of monthly or yearly billing
      </p>
      <form className="plan-period-select" onSubmit={(e) => handleSubmit(e)}>
        <Monthly />
        <div className="monthly-yearly-selection">
          <p
            className="periodic-name"
            style={{
              color:
                periodic.periodicState === "monthly" ? "#032a59" : "#9699ab",
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
                periodic.periodicState === "yearly" ? "#032a59" : "#9699ab",
            }}
          >
            Yearly
          </p>
        </div>
        <div className="nav-buttons-div">
          <button
            className="go-back-button"
            type="button"
            onClick={(e) => currentStep.setStep(1)}
          >
            Go Back
          </button>
          <button
            className="next-step-button"
            type="submit"
            onClick={(e) => currentStep.setStep(3)}
          >
            Next Step
          </button>
        </div>
      </form>
    </>
  );
}
