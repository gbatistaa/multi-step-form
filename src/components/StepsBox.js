import '../css/StepsBox.css'
//import ReactDOM from 'react-dom/client';
import { useContext } from 'react';
import { StepContext } from "./App.js";

export default function StepsBox({number, name}) {

    return (
        <div className="step-info-box">
            <Step number={number} name={name} />
        </div>
    )
}

function Step({number, name}) {
    const currentStep = useContext(StepContext);

    return(
        <>
            <div className='step-number'style={{
                border: currentStep === number ? 'none' : '1px solid #fafbff',
                backgroundColor: currentStep.step === number ? '#bfe2fd' : 'transparent'
            }}>
                <p style={{color: currentStep.step === number ? '#032a59' : '#fafbff'}}>{number}</p>
            </div>
            <div className='step-name'>
                <p>STEP {number}</p>
                <p>{name}</p>
            </div>
        </>
    )
}
