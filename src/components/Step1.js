import { useRef, useState, useContext } from "react";
import { StepContext } from "./App";
import "../css/Step1.css";

export default function Step1() {
  const currentStep = useContext(StepContext);

  // The refs of all inputs:

  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  // The focus state of all inputs:

  const [nameFocus, setNameFocus] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);
  const [phoneFocus, setPhoneFocus] = useState(false);

  // Function to let react handle the form submit:

  const handleSubmit = (event) => {
    event.preventDefault();

    const userInfo = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };

    return userInfo;
  };

  return (
    <>
      <h1 className="main-title">Personal info</h1>
      <p className="step-description">
        Please provide your name, email address and phone number.
      </p>
      <form id="personal-info-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="input-block">
          <label className="input-name">Name</label>
          <input
            type="text"
            name="username"
            placeholder="Your name here"
            autoComplete="off"
            ref={usernameRef}
            style={{
              border: nameFocus ? "2px solid #463dff" : "1.5px solid #d6d9e6",
            }}
            onFocus={() => setNameFocus(true)}
            onBlur={() => setNameFocus(false)}
          />
        </div>
        <div className="input-block">
          <label className="input-name">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Here is your email"
            autoComplete="off"
            ref={emailRef}
            style={{
              border: emailFocus ? "2px solid #463dff" : "1.5px solid #d6d9e6",
            }}
            onFocus={() => setEmailFocus(true)}
            onBlur={() => setEmailFocus(false)}
          />
        </div>
        <div className="input-block">
          <label className="input-name">Phone Number</label>
          <input
            type="text"
            name="phone"
            placeholder="And finally your phone"
            autoComplete="off"
            ref={phoneRef}
            style={{
              border: phoneFocus ? "2px solid #463dff" : "1.5px solid #d6d9e6",
            }}
            onFocus={() => setPhoneFocus(true)}
            onBlur={() => setPhoneFocus(false)}
          />
        </div>
        <button
          className="next-step-button"
          type="submit"
          onClick={() => currentStep.setStep(2)}
        >
          Next Step
        </button>
      </form>
    </>
  );
}
