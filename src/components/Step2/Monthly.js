import { useContext, memo } from "react";
import "../../css/Step2.css";
import { PlanTypeContext, PeriodicContext } from "../App.js";
import iconArcade from "../../images/icon-arcade.svg";
import iconAdvanced from "../../images/icon-advanced.svg";
import iconPro from "../../images/icon-pro.svg";

function Monthly() {
  const PlanType = useContext(PlanTypeContext);
  const PeriodicBill = useContext(PeriodicContext);

  const handleLabelClick = (event, newState) => {
    event.preventDefault();
    PlanType.setPlanState(newState);
  };

  return (
    <section className="monthly-section">
      <label
        className={
          PlanType.planState === "Arcade"
            ? "user-plan"
            : "user-plan not-selected"
        }
        id="arcade-plan"
        htmlFor="check-arcade"
        onClick={(e) => handleLabelClick(e, "Arcade")}
        style={{
          borderColor: PlanType.planState === "Arcade" ? "#473dff" : "#d6d9e6",
          backgroundColor:
            PlanType.planState === "Arcade" ? "#f0f6ff" : "transparent",
        }}
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
        className={
          PlanType.planState === "Advanced"
            ? "user-plan"
            : "user-plan not-selected"
        }
        id="advanced-plan"
        htmlFor="check-advanced"
        onClick={(e) => handleLabelClick(e, "Advanced")}
        style={{
          borderColor:
            PlanType.planState === "Advanced" ? "#473dff" : "#d6d9e6",
          backgroundColor:
            PlanType.planState === "Advanced" ? "#f0f6ff" : "transparent",
        }}
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
        className={
          PlanType.planState === "Pro" ? "user-plan" : "user-plan not-selected"
        }
        id="pro-plan"
        htmlFor="check-pro"
        onClick={(e) => handleLabelClick(e, "Pro")}
        style={{
          borderColor: PlanType.planState === "Pro" ? "#473dff" : "#d6d9e6",
          backgroundColor:
            PlanType.planState === "Pro" ? "#f0f6ff" : "transparent",
        }}
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

export default memo(Monthly);
