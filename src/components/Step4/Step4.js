import "../../css/Step4.css";
import AddonsBill from "../Step4/AddonsBill";
import { useContext } from "react";
import { PeriodicContext, PlanTypeContext, StepContext } from "../App.js";

export default function Step4() {
  const periodBill = useContext(PeriodicContext);
  const plantype = useContext(PlanTypeContext);
  const step = useContext(StepContext);

  const conditionalBill = () => {
    switch (plantype.planState) {
      case "Arcade":
        if (periodBill.periodicState === "Monthly") return "$9/mo";
        else return "$108/yr";

      case "Advanced":
        if (periodBill.periodicState === "Monthly") return "$12/mo";
        else return "$144/yr";

      case "Pro":
        if (periodBill.periodicState === "Monthly") return "$15/mo";
        else return "$180/yr";

      default:
        break;
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={(e) => handleSubmit(e)} className="final-form">
      <h1 className="main-title">Finishing up</h1>
      <p className="step-description">
        Doble-check everything looks OK before confirming.
      </p>
      <div className="bill-components-div">
        <div className="periodic-bill-div">
          <div className="bill-names">
            <p className="plantype-period-name">{`${plantype.planState} (${periodBill.periodicState})`}</p>
            <p className="change-plan-settings">Change</p>
          </div>
          <p className="no-addons-bill">{conditionalBill()}</p>
        </div>
        <div className="addons-bill-div">
          <AddonsBill />
        </div>
      </div>
      <div className="total-bill-div">
        <p className="bill-name">
          Total
          {` (${
            periodBill.periodicState === "Monthly" ? "per month" : "per year"
          })`}
        </p>
        <p className="total-bill">$12/mo</p>
      </div>
      <div className="buttons-div-four">
        <button
          type="button"
          className="go-back-button"
          onClick={() => step.setStep(3)}
        >
          Go Back
        </button>
        <button
          type="submit"
          className="next-step-button"
          onClick={() => step.setStep(5)}
        >
          Confirm
        </button>
      </div>
    </form>
  );
}
