import { useContext } from "react";
import "../../css/Step2.css";
import { PlanTypeContext, PeriodicContext } from "../App.js";
import { validationErrorContext } from "./Step2.js";
import iconArcade from "../../images/icon-arcade.svg";
import iconAdvanced from "../../images/icon-advanced.svg";
import iconPro from "../../images/icon-pro.svg";

export default function Monthly() {
  const validError = useContext(validationErrorContext);
  const PlanType = useContext(PlanTypeContext);
  const PeriodicBill = useContext(PeriodicContext);

  //Validation Error: transforme em contexto e state:

  const handleLabelClick = (event, newState) => {
    event.preventDefault();
    PlanType.setPlanState(newState);
    validError.setValidationError(false);
  };

  return (
    <section
      className={`monthly-section${
        validError.validationError ? " not-validated" : ""
      }`}
    >
      <label
        className={`user-plan${
          validError.validationError
            ? " not-validated"
            : `${
                PlanType.planState === "Arcade" ? " selected" : " not-selected"
              }`
        }
        `}
        id="arcade-plan"
        htmlFor="check-arcade"
        onClick={(e) => handleLabelClick(e, "Arcade")}
      >
        <input
          type="checkbox"
          style={{ height: "0px", width: "0px" }}
          id="check-arcade"
        />
        <img src={iconArcade} alt="" className="plan-icon" />
        <div className="plan-info-section">
          <h4 className="type-plan-title">Arcade</h4>
          <p className="plan-descriprion">
            {PeriodicBill.periodicState === "Monthly" ? "9$/mo" : "108$/yr"}
          </p>
        </div>
      </label>
      <label
        className={`user-plan${
          validError.validationError
            ? " not-validated"
            : `${
                PlanType.planState === "Advanced"
                  ? " selected"
                  : " not-selected"
              }`
        }
        `}
        id="advanced-plan"
        htmlFor="check-advanced"
        onClick={(e) => handleLabelClick(e, "Advanced")}
      >
        <input
          type="checkbox"
          style={{ height: "0px", width: "0px" }}
          id="check-advanced"
        />
        <img src={iconAdvanced} alt="" />
        <div className="plan-info-section">
          <h4 className="type-plan-title">Advanced</h4>
          <p className="plan-descriprion">
            {PeriodicBill.periodicState === "Monthly" ? "12$/mo" : "144$/yr"}
          </p>
        </div>
      </label>
      <label
        className={`user-plan${
          validError.validationError
            ? " not-validated"
            : `${PlanType.planState === "Pro" ? " selected" : " not-selected"}`
        }
        `}
        id="pro-plan"
        htmlFor="check-pro"
        onClick={(e) => handleLabelClick(e, "Pro")}
      >
        <input
          type="checkbox"
          style={{ height: "0px", width: "0px" }}
          id="check-pro"
        />
        <img src={iconPro} alt="" />
        <div className="plan-info-section">
          <h4 className="type-plan-title">Pro</h4>
          <p className="plan-descriprion">
            {PeriodicBill.periodicState === "Monthly" ? "15$/mo" : "180$/yr"}
          </p>
        </div>
      </label>
    </section>
  );
}
