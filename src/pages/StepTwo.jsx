import React, { useEffect, useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { AnswerItem } from "../components/AnswerItem";
import { Link, useNavigate } from "react-router-dom";
import { AppButton } from "../components/AppButton";

const StepTwo = () => {
  const variantsLi = [
    {
      id:"variants-1",
      labelText:"Frontend"
    },
    {
      id:"variants-2",
      labelText:"Python"
    },
    {
      id:"variants-3",
      labelText:"UX/UI"
    },
    {
      id:"variants-4",
      labelText:"FulStack"
    },
  ]

  // Инпут
  const [checkedAnswer, setCheckedAnswer]= useState('')
  //Навигация
  const navig = useNavigate()

  useEffect(()=>{
    const userIn = {...JSON.parse(localStorage.getItem("userInfo")),checkedName:checkedAnswer, };
    localStorage.setItem("userInfo", JSON.stringify(userIn))
  },[checkedAnswer])
  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          <ProgressBar 
            idNum="15%"
            idText="Скидка за прохождение опроса:"
            current={1}
          />
          <div className="question">
            <h2>1. Занимательный вопрос</h2>
            <ul className="variants">
              {variantsLi.map((elem)=>{
                return <AnswerItem
                  key={elem.id}
                  answName={elem.labelText}
                  answVariant={elem.id}
                  onChange={()=>{setCheckedAnswer(elem.labelText)}}
                  checked= {checkedAnswer === elem.labelText}
                />
              })}
            </ul>
            <AppButton
                buttonText="Далее"
                buttonType="button"
                isDisabled={!checkedAnswer}
                btnClick={()=>navig("/step-three")}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepTwo;
