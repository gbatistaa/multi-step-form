import { useState, useContext, useRef } from 'react';
import "../../css/Step2.css";
import { PlanTypeContext, PeriodicContext } from "./Step2";
import iconArcade from "../../images/icon-arcade.svg";
import iconAdvanced from "../../images/icon-advanced.svg";
import iconPro from "../../images/icon-pro.svg";

export default function Monthly() {
    
    const PlanType = useContext(PlanTypeContext);
    const PeriodicBill = useContext(PeriodicContext);

    const arcadeRef = useRef();
    const advancedRef = useRef();
    const proRef = useRef();

    const handleLabelClick = (event, newState) => {
        event.preventDefault();
        PlanType.setPlanState(newState);
    }

    return (
        <section className="monthly-section">
            <label 
                className="user-plan"
                id='arcade-plan'
                htmlFor='check-arcade'
                onClick={(e) => handleLabelClick(e, "arcade")}
            >
                <input  
                    type="checkbox"
                    style={{height: '0px', width: '0px'}}
                    id='check-arcade'
                    ref={arcadeRef}
                />
                <img src={iconArcade} alt="arcade" className="plan-icon"/>
                <div className="plan-info-section">
                    <h4 className="type-plan-title">Arcade</h4>
                    <p className="plan-descriprion">9$/mo</p>
                </div>
            </label>
            <label 
                    className="user-plan"
                    id='advanced-plan'
                    htmlFor='check-advanced'
                    onClick={(e) => handleLabelClick(e, "advanced")}
            >
                <input 
                    type="checkbox"
                    style={{height: '0px', width: '0px'}}
                    id='check-advanced'
                    ref={advancedRef}
                />
                <img src={iconAdvanced} alt="" />
                <div className="plan-info-section">
                    <h4 className="type-plan-title">Advanced</h4>
                    <p className="plan-descriprion">12$/mo</p>
                </div>
            </label>
            <label 
                    className="user-plan"
                    id='pro-plan'
                    htmlFor='check-pro'
                    onClick={(e) => handleLabelClick(e, "pro")}
            >
                <input 
                    type="checkbox"
                    style={{height: '0px', width: '0px'}}
                    id='check-pro'
                    ref={proRef}
                />
                <img src={iconPro} alt="" />
                <div className="plan-info-section">
                    <h4 className="type-plan-title">Pro</h4>
                    <p className="plan-descriprion">15$/mo</p>
                </div>
            </label>
        </section>
    )
}