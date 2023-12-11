import { useRef, useState, useContext, useEffect } from "react";
import { StepContext } from "./App";
import "../css/Step1.css";

export default function Step1() {
  const currentStep = useContext(StepContext);

  // The refs of all inputs:

  const usernameRef = useRef(null);
  const emailRef = useRef(null);
  const phoneRef = useRef(null);

  // The validation state of all inputs:

  const [nameValidationError, setNameValidationError] = useState(false);
  const [emailValidationError, setEmailValidationError] = useState(false);
  const [phoneValidationError, setPhoneValidationError] = useState(false);

  const [renderCount, setRenderCount] = useState(1);

  // Input validation functions:

  const validateUsername = (name) => {
    // This validation requires the entered name to have both a first name and a last name:

    const nameComponents = name.split(" ");
    if (!(nameComponents.length >= 2)) {
      setNameValidationError(true);
    } else {
      setNameValidationError(false);
    }
  };

  const validateUserEmail = (email) => {
    // This validation requires that the email must have its classical shape:

    if (!(email.includes("@") && email.includes(".com"))) {
      setEmailValidationError(true);
    } else {
      setEmailValidationError(false);
    }
  };

  const validateUserPhone = (phone) => {
    if (!(phone.includes("(") && phone.includes(")") && phone.length >= 13)) {
      setPhoneValidationError(true);
    } else {
      setPhoneValidationError(false);
    }
  };
  // Function to let react handle the form submit:

  const handleSubmit = (event) => {
    event.preventDefault();

    const userInfo = {
      username: usernameRef.current.value,
      email: emailRef.current.value,
      phone: phoneRef.current.value,
    };

    console.log(
      nameValidationError,
      emailValidationError,
      phoneValidationError
    );

    validateUserPhone(userInfo.phone);
    validateUsername(userInfo.username);
    validateUserEmail(userInfo.email);

    setRenderCount(2);
  };

  useEffect(() => {
    if (
      renderCount > 1 &&
      !nameValidationError &&
      !emailValidationError &&
      !phoneValidationError
    ) {
      currentStep.setStep(2);
    }
  }, [
    renderCount,
    currentStep,
    nameValidationError,
    emailValidationError,
    phoneValidationError,
  ]);

  return (
    <>
      <h1 className="main-title">Personal info</h1>
      <p className="step-description">
        Please provide your name, email address and phone number.
      </p>
      <form id="personal-info-form" onSubmit={(e) => handleSubmit(e)}>
        <div className="input-block">
          <label
            className={`input-name name${
              nameValidationError ? " not-validated" : ""
            }`}
          >
            Name
          </label>
          <input
            type="text"
            name="username"
            placeholder="Your name here"
            autoComplete="off"
            ref={usernameRef}
            className={nameValidationError ? "not-validated" : ""}
          />
        </div>
        <div className="input-block">
          <label
            className={`input-name email${
              emailValidationError ? " not-validated" : ""
            }`}
          >
            Email
          </label>
          <input
            type="text"
            name="email"
            placeholder="Here is your email"
            autoComplete="off"
            ref={emailRef}
            className={emailValidationError ? "not-validated" : ""}
          />
        </div>
        <div className="input-block">
          <label
            className={`input-name phone${
              phoneValidationError ? " not-validated" : ""
            }`}
          >
            Phone Number
          </label>
          <input
            type="text"
            name="phone"
            placeholder="And finally your phone"
            autoComplete="off"
            ref={phoneRef}
            className={phoneValidationError ? "not-validated" : ""}
          />
        </div>
        <button className="next-step-button" type="submit">
          Next Step
        </button>
      </form>
    </>
  );
}
