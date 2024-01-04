import Step1 from "./Step1";
import Step2 from "./Step2/Step2.js";
import Step3 from "./Step3.js";
import Step4 from "./Step4/Step4.js";
import Confirmation from "./Confirmation.js";
import { useContext } from "react";
import { StepContext } from "./App.js";

export default function ConditionalStep() {
  const stepInfo = useContext(StepContext);

  switch (stepInfo.step) {
    case 1:
      return <Step1 />;

    case 2:
      return <Step2 />;

    case 3:
      return <Step3 />;

    case 4:
      return <Step4 />;

    case 5:
      return <Confirmation />;

    default:
      break;
  }
}
