import { useContext, useState } from "react";
import {
  StepContext,
  PeriodicContext,
  OnlineServiceContext,
  LargerStorageContext,
  CustomizableProfileContext,
} from "./App.js";
import "../css/Step3.css";

export default function Step3() {
  // Contexts:

  const planStep = useContext(StepContext);
  const planPeriod = useContext(PeriodicContext);
  const onlineService = useContext(OnlineServiceContext);
  const largerStorage = useContext(LargerStorageContext);
  const customizableProfile = useContext(CustomizableProfileContext);

  const handleInputChange = (event) => {
    const input = event.target;

    switch (input.name) {
      case "online-service":
        onlineService.setOnlineServiceState(input.checked);
        break;

      case "larger-storage":
        largerStorage.setLargeStorageState(input.checked);
        break;

      case "customizable-profile":
        customizableProfile.setCustomizableProfileState(input.checked);
        break;

      default:
        console.log(undefined);
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <>
      <h1 className="main-title">Pick add-ons</h1>
      <p className="step-description">
        Add-ons help enhance your gaming experience.
      </p>
      <form onSubmit={(e) => handleSubmit(e)} className="form-3">
        <div className="selection-div">
          <label
            className={`select-addons ${
              onlineService.onlineServiceState ? "selected" : "not-selected"
            }`}
            htmlFor="online-service"
          >
            <div className="addons-check-label">
              <input
                type="checkbox"
                name="online-service"
                id="online-service"
                onChange={(e) => handleInputChange(e)}
              />
              <div
                className={`pseudo-checkbox ${
                  onlineService.onlineServiceState ? "selected" : "not-selected"
                }`}
              ></div>
            </div>
            <div className="addons-information">
              <p className="addons-name">Online service</p>
              <p className="addons-descripttion">Access to multiplayer games</p>
            </div>
            <p className="additional-price-text">
              {planPeriod.periodicState === "Monthly" ? "+1$/mo" : "+12$/yr"}
            </p>
          </label>
          <label
            className={`select-addons ${
              largerStorage.largerStorageState ? "selected" : "not-selected"
            }`}
            htmlFor="larger-storage"
          >
            <div className="addons-check-label">
              <input
                type="checkbox"
                name="larger-storage"
                id="larger-storage"
                onChange={(e) => handleInputChange(e)}
              />
              <div
                className={`pseudo-checkbox ${
                  largerStorage.largerStorageState ? "selected" : "not-selected"
                }`}
              ></div>
            </div>
            <div className="addons-information">
              <p className="addons-name">Larger Storage</p>
              <p className="addons-descripttion">Extra 1TB of cloud save</p>
            </div>
            <p className="additional-price-text">
              {planPeriod.periodicState === "Monthly" ? "+2$/mo" : "+20$/yr"}
            </p>
          </label>
          <label
            className={`select-addons ${
              customizableProfile.customizableProfileState
                ? "selected"
                : "not-selected"
            }`}
            htmlFor="customizable-profile"
          >
            <div className="addons-check-label">
              <input
                type="checkbox"
                name="customizable-profile"
                id="customizable-profile"
                onChange={(e) => handleInputChange(e)}
              />
              <div
                className={`pseudo-checkbox ${
                  customizableProfile.customizableProfileState
                    ? "selected"
                    : "not-selected"
                }`}
              ></div>
            </div>
            <div className="addons-information">
              <p className="addons-name">Customizable profile</p>
              <p className="addons-descripttion">
                Custom theme on your profile
              </p>
            </div>
            <p className="additional-price-text">
              {planPeriod.periodicState === "Monthly" ? "+2$/mo" : "+20$/yr"}
            </p>
          </label>
        </div>
        <div className="buttons-div">
          <button
            className="go-back-button"
            type="button"
            onClick={() => planStep.setStep(2)}
          >
            Go Back
          </button>
          <button
            className="next-step-button"
            type="submit"
            onClick={() => planStep.setStep(4)}
          >
            Next Step
          </button>
        </div>
      </form>
    </>
  );
}
