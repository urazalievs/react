import React from "react";


export const AnswerItem = (({answVariant, answName, })=>{
    return(
        <li className="variant-wrapper">
            <input required type="radio" name='variant' id={answVariant} />
            <label htmlFor={answVariant}>{answName}</label>
        </li>
    )
})