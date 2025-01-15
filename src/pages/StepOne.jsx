import React, { useEffect, useState } from "react";
import { ProgressBar } from "../components/ProgressBar"
import { QuestionDiv } from "../components/QuestionDiv";
import { AppLabel } from "../components/AppLable";
import { AppButton } from "../components/AppButton";
import { useNavigate } from "react-router-dom";
import Header  from "../components/Header"

const StepOne = () => {
  //Ловит значение инпута
  const [name, setName]= useState('')
  //Показывает активна ли кнопка
  const [btnErr, setBtnErr]= useState(true)
  //Показывает наличие ошибки
  const [nameErr, setNameErr]= useState(false)
  const navigation = useNavigate()

  //Открывает и добавляет в LocalStoreg
  
  const handClick = ()=>{
    if(!name){
      setBtnErr(true)
      setNameErr(true)
      navigation("/")
    }else{
      setBtnErr(false)
      setNameErr(false)
      navigation("/step-two")
      const course = {...JSON.parse(localStorage.getItem("userInfo")),from:name}
      localStorage.setItem("userInfo", JSON.stringify(course))
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
            <Header headerText="Откуда вы узнали о нас?" textHeader="h2"/>  
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
