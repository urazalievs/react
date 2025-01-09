import React from "react";
import { AppButton } from "./AppButton";
import { AppLabel } from "./AppLable";

export const QuestionDiv = ({questText})=>{
    return(
        <div className="question">
            <h2>{questText}</h2>
            <AppLabel
                 labText
                 labName="answer"
                 labErr={"Введите номер в правильном формате например"} 
                 labPlace={"Ваш ответ"} 
                 labType={"text"}
             />
            <AppButton
              buttonText="Далее"
              buttonType="button"
              isDisabled={true}
            />
        </div>
    )
}