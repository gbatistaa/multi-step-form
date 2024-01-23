import "../../css/Step4.css";
import AddonsBill from "../Step4/AddonsBill";
import { useContext } from "react";
import {
  PeriodicContext,
  PlanTypeContext,
  StepContext,
  addonsContexts,
} from "../App.js";

export default function Step4() {
  const [OnlineService, LargerStorage, CustomizableProfile] = addonsContexts;

  // Addons Contexts:

  const onlineService = useContext(OnlineService);
  const largerStorage = useContext(LargerStorage);
  const customizableProfile = useContext(CustomizableProfile);

  // Global Contexts:

  const periodBill = useContext(PeriodicContext);
  const plantype = useContext(PlanTypeContext);
  const step = useContext(StepContext);

  // Auxiliar Functions:

  const calculateBruteBill = () => {
    switch (plantype.planState) {
      case "Arcade":
        if (periodBill.periodicState === "Monthly") return 9;
        else return 108;

      case "Advanced":
        if (periodBill.periodicState === "Monthly") return 12;
        else return 144;

      case "Pro":
        if (periodBill.periodicState === "Monthly") return 15;
        else return 180;

      default:
        break;
    }
  };

  const calculateTotalBill = () => {
    const bruteBill = calculateBruteBill();
    const periodcity = periodBill.periodicState;

    // Valor Inicial:

    let totalBill = bruteBill;

    if (onlineService.onlineServiceState)
      totalBill += periodcity === "Monthly" ? 1 : 12;
    if (largerStorage.largerStorageState)
      totalBill += periodcity === "Monthly" ? 2 : 20;
    if (customizableProfile.customizableProfileState)
      totalBill += periodcity === "Monthly" ? 2 : 20;

    return totalBill;
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
            <p className="change-plan-settings" onClick={() => step.setStep(2)}>
              Change
            </p>
          </div>
          <p className="no-addons-bill">
            ${calculateBruteBill()}/
            {periodBill.periodicState === "Monthly" ? "mo" : "yr"}
          </p>
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
        <p className="total-bill">
          ${calculateTotalBill()}/
          {periodBill.periodicState === "Monthly" ? "mo" : "yr"}
        </p>
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
          className="next-step-button button-4"
          onClick={() => step.setStep(5)}
        >
          Confirm
        </button>
      </div>
    </form>
  );
}
