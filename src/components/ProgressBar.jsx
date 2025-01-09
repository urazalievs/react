import React from "react";

export const ProgressBar = ({idText, idNum, current})=>{
  const variable = [1,2,3,4]
    return(
        <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                {idText}
              </span>
              <span className="indicator__value">{idNum}</span>
            </div>
            <div className="indicator__progressbar">
              {variable.map((e,i)=>(
                <div key={i} className=
                {`indicator__unit indicator__unit-${e} ${current>i && "_active"}`}
                ></div>
              ))}
            </div>
          </div>
    )
}