import "../../css/Step4.css";
import { useContext } from "react";
import {
  OnlineServiceContext,
  LargerStorageContext,
  CustomizableProfileContext,
  PeriodicContext,
} from "../App.js";

function OnlineServiceBill({ periodicity }) {
  const onlineService = useContext(OnlineServiceContext);

  if (onlineService.onlineServiceState) {
    return (
      <div className="addons-bill-info">
        <p className="bill-name">Online Service</p>
        <p className="addons-price">
          {periodicity === "Monthly" ? "+$1/mo" : "+$10/yr"}
        </p>
      </div>
    );
  }
}

function LarerStorageBill({ periodicity }) {
  const largerStorage = useContext(LargerStorageContext);

  if (largerStorage.largerStorageState) {
    return (
      <div className="addons-bill-info">
        <p className="bill-name">Larger Storage</p>
        <p className="addons-price">
          {periodicity === "Monthly" ? "+$2/mo" : "+$20/yr"}
        </p>
      </div>
    );
  }
}

function CustomizableProfileBill({ periodicity }) {
  const customizableProfile = useContext(CustomizableProfileContext);

  if (customizableProfile.customizableProfileState) {
    return (
      <div className="addons-bill-info">
        <p className="bill-name">Customizable Profile</p>
        <p className="addons-price">
          {periodicity === "Monthly" ? "+$2/mo" : "+$20/yr"}
        </p>
      </div>
    );
  }
}

export default function AddonsBill() {
  const periodic = useContext(PeriodicContext);

  return (
    <>
      <OnlineServiceBill periodicity={periodic.periodicState} />
      <LarerStorageBill periodicity={periodic.periodicState} />
      <CustomizableProfileBill periodicity={periodic.periodicState} />
    </>
  );
}
