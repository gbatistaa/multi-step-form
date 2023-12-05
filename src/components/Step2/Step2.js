import { useState, useContext, createContext, useRef, useEffect } from 'react';
import "../../css/Step2.css";
import { StepContext } from "../App.js";
import Monthly from "./Monthly.js";

const PlanTypeContext = createContext();
const PeriodicContext = createContext();

export default function Step2() {

    const isFirstRender = useRef(true);
    const [toggleAnimation, setToggleAnimation] = useState("");

    const [planState, setPlanState] = useState("");
    const [periodicState, setPeriodicState] = useState("monthly");

    const currentStep = useContext(StepContext);

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    const handleToggleChange = () => {
        if (!isFirstRender.current) {
            setToggleAnimation(periodicState === "monthly" ? 'yearly 0.2s linear forwards' : 'monthly 0.2s linear forwards')
        } if (periodicState === "monthly") {
            setPeriodicState("yearly")
        } else if (periodicState === "yearly") {
            setPeriodicState("monthly");
        }
    }

    return (

        <PlanTypeContext.Provider value={{planState, setPlanState}}>
            <PeriodicContext.Provider value={{periodicState, setPeriodicState}}>
                <h1 className="main-title">Select your plan</h1>
                <p className="step-description">
                    You have the option of monthly or yearly billing
                </p>
                <form className="plan-period-select" onSubmit={(e) => handleSubmit(e)}>
                    <Monthly />
                    <div className='monthly-yearly-selection'>
                        <p className="periodic-name">Monthly</p>
                        <label htmlFor='periodic-toggle' onClick={() => isFirstRender.current = false}>
                            <input  
                                type="checkbox"
                                id='periodic-toggle'
                                onChange={handleToggleChange}
                            />
                            <div 
                                className="toggle-ball"
                                style={{animation: toggleAnimation}}
                            >
                            </div>
                        </label>
                        <p className="periodic-name">Yearly</p>
                    </div>
                    <div className="nav-buttons-div">
                        <button className="go-back-button" type='button'>Go Back</button>
                        <button className="next-step-button" type='submit' onClick={(e) => currentStep.setStep(2)}>Next Step</button>
                    </div>
                </form>
            </ PeriodicContext.Provider>
        </PlanTypeContext.Provider>
    )
}

export { PlanTypeContext, PeriodicContext }