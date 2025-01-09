import React from "react";



export const AppLabel = ({
   labText,
   labType,
   labName, 
   labPlace, 
   labErr, 
   inpValue,
   inpChange,
   hasError
  }) => {
  return (
    <label className={`input-wrapper ${hasError && "_error"}`} htmlFor={labName}>
      {labText}
      <input
        required
        type={labType}
        name={labName}
        id={labName}
        placeholder={labPlace}
        value={inpValue}
        onChange={(e)=>inpChange(e.target.value)}
      />
      {hasError && <span id="error-message">{labErr}</span>}
      
    </label>
  )
}