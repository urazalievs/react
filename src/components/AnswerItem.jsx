import React from "react";


export const AnswerItem = (({answVariant, answName,onChange })=>{
    return(
        <li className="variant-wrapper">
            <input required type="radio"  onChange={onChange}  name='variant'id={answVariant} />
            <label htmlFor={answVariant}>{answName}</label>
        </li>
    )
})