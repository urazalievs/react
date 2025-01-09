import React, { useEffect, useState } from "react";
import { ProgressBar } from "../components/ProgressBar"
import { QuestionDiv } from "../components/QuestionDiv";
import { AppLabel } from "../components/AppLable";
import { AppButton } from "../components/AppButton";
import { useNavigate } from "react-router-dom";

const StepOne = () => {
  //Ловит значение инпута
  const [name, setName]= useState('')
  //Показывает активна ли кнопка
  const [btnErr, setBtnErr]= useState(true)
  //Показывает наличие ошибки
  const [nameErr, setNameErr]= useState(false)
  const navigation = useNavigate()
  const handClick = ()=>{
    if(!name){
      setBtnErr(true)
      setNameErr(true)
      navigation("/")
    }else{
      setBtnErr(false)
      setNameErr(false)
      navigation("/step-two")
    }
  }
  useEffect(()=>{
    if(!name){
      setBtnErr(true)
    }else{
      setBtnErr(false)
    }
  },[name])
  
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
              labText=''
              labName="answer"
              labErr={"Введите номер в правильном формате например"}
              labPlace={"Ваш ответ"}
              labType={"text"}
              inpValue={name}
              inpChange={setName}
              hasError={nameErr}
            />
            <AppButton
              buttonText="Далее"
              buttonType="button"
              isDisabled={btnErr}
              btnClick={handClick}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
export default StepOne;
