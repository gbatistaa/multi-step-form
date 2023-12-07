import { useContext, useState } from "react";
import { StepContext, PeriodicContext } from "./App.js";
import "../css/Step3.css";

export default function Step3() {
  const planStep = useContext(StepContext);
  const planPeriod = useContext(PeriodicContext);

  const [onlineServiceState, setOnlineServiceState] = useState(true);
  const [largerStorageState, setLargeStorageState] = useState(false);
  const [customizableProfileState, setCustomizableProfileState] =
    useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
  };
  return (
    <>
      <h1 className="main-title">Pick add-ons</h1>
      <p className="step-description">
        Add-ons help enhance your gaming experience
      </p>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="selection-div">
          <label
            className={`select-addons ${
              onlineServiceState ? "selected" : "not-selected"
            }`}
            htmlFor="online-service"
          >
            <div className="addons-check-label">
              <input
                type="checkbox"
                name="online-service"
                id="online-service"
              />
              <div
                className={`pseudo-checkbox ${
                  onlineServiceState ? "selected" : "not-selected"
                }`}
              ></div>
            </div>
            <div className="addons-information">
              <p className="addons-name">Online service</p>
              <p className="addons-descripttion">Access to multiplayer games</p>
            </div>
            <p className="additional-price-text">+1$/mo</p>
          </label>
        </div>
        <div className="buttons-div">
          <button className="go-back-button" type="button">
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
