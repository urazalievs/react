import React from "react";

export const AnswerStepThree = (({threeVar, threeImg, threeText,onChange})=>{
    return(
        <li className="variant-wrapper">
                <input required type="radio" name="variant" id={threeVar} onChange={onChange} />
                <label htmlFor={threeVar}>
                  <img src={threeImg} alt="laugh" />
                  <p>{threeText}</p>
                </label>
        </li>
    )
})