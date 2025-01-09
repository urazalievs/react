import React from "react";

export const AppButton = ({
    buttonType, 
    buttonText, 
    isDisabled,
    btnClick
    })=>{
    return(
        <button 
        disabled={isDisabled} 
        type={buttonType} 
        id="next-btn"
        onClick={btnClick}
        >
            {buttonText}
        </button>
    )
}