import React from "react";
import { ProgressBar } from "../components/ProgressBar"
import { QuestionDiv } from "../components/QuestionDiv";
import { AppLabel } from "../components/AppLable";
import { AppButton } from "../components/AppButton";

const StepOne = () => {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="single-input-quiz">
          <ProgressBar
            idNum="15%"
            idText="Скидка за прохождение опроса:"
            current={0}
          />
          <div className="question">
            <h2>1. Занимательный вопрос</h2>
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
        </div>
      </div>
    </div>
  );
};
export default StepOne;
