import "../../css/Step4.css";
import { useContext } from "react";
import {
  OnlineServiceContext,
  LargerStorageContext,
  CustomizableProfileContext,
} from "../App.js";

function OnlineServiceBill() {
  const onlineService = useContext(OnlineServiceContext);

  if (onlineService.onlineServiceState) {
    return (
      <div className="addons-bill-info">
        <p className="bill-name">Online Service</p>
        <p className="addons-price">+10/yr</p>
      </div>
    );
  }
}

function LarerStorageBill() {
  const largerStorage = useContext(LargerStorageContext);

  if (largerStorage.largerStorageState) {
    return (
      <div className="addons-bill-info">
        <p className="bill-name">Larger Storage</p>
        <p className="addons-price">+20/yr</p>
      </div>
    );
  }
}

function CustomizableProfileBill() {
  const customizableProfile = useContext(CustomizableProfileContext);

  if (customizableProfile.customizableProfileState) {
    return (
      <div className="addons-bill-info">
        <p className="bill-name">Customizable Profile</p>
        <p className="addons-price">+20/yr</p>
      </div>
    );
  }
}

export default function AddonsBill() {
  return (
    <>
      <OnlineServiceBill />
      <LarerStorageBill />
      <CustomizableProfileBill />
    </>
  );
}
