import { useState, useRef, useContext } from "react";
import thankYou from "../images/icon-thank-you.svg";
import "../css/Step5.css";
export default function Confirmation(params) {
  return (
    <div className="step5">
      <img src={thankYou} alt="" className="thank-you-check" />
      <h1 className="main-title">Thank You!</h1>
      <p className="final-description">
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, feel free to email us at
        loremgaming@gmail.com.
      </p>
    </div>
  );
}
