//import { useState, useContext, useRef } from 'react';
import "../../css/Step2.css";

function Monthly(params) {
    return (
        <section className="monthly-section">
            <div className="user-plan"id='nine-dolar-plan'>
                
            </div>
            <div className="user-plan" id='twelve-dolar-plan'>
                <img src="" alt="" />
            </div>
            <div className="user-plan"id='fifteen-dolar-plan'>
                <img src="" alt="" />
            </div>
        </section>
    )
}

export default function Step2() {

    return (
        <>
            <h1 className="main-title">Select your plan</h1>
            <p className="step-description">
                You have the option of monthly or yearly billing
            </p>
            <form className="plan-period-select">
                <Monthly/>
            </form>
        </>
    )
}