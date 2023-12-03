import '../css/Steps.css'
import ReactDOM from 'react-dom/client';
import { useState, useEffect, useContext } from 'react';

function Step({number, name}) {
    return(
        <>
            <div className='step-number'><span>{number}</span></div>
            <div className='step-name'>
                <p>Step {number}</p>
                <p>{name}</p>
            </div>
        </>
    )
}

export default function StepsBox({number, name}) {
    const [step, setStep] = useState(0);

    return (
        <div className="step-info-box">
        <Step number={number} name={name} />
        </div>
    )
}