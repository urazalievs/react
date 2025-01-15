import React, { useEffect, useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import { AnswerStepThree } from "../components/AnswerStepThree";
import { Link, useNavigate } from "react-router-dom";
import { AppButton } from "../components/AppButton";
import Header from "../components/Header";

const StepThree = () => {
  const backEndThree = [
    {
      img:"./img/laugh.png",
      text:"Очень просто",
      variant:"variant-1"
    },
    {
      img:"./img/hearts.png",
      text:"Люблю трудности",
      variant:"variant-2"
    },
    {
      img:"./img/smirk.png",
      text:"Готов к труднястям",
      variant:"variant-3"
    },
    {
      img:"./img/fright.png",
      text:"Очень страшно думать об этом",
      variant:"variant-4"
    },
  ]
  const navigator = useNavigate()
  const [checkedEmogi, setCheckedEmogi]= useState("")

  useEffect(()=>{
    const userinn = {...JSON.parse(localStorage.getItem("userInfo")),checkedEmogi};
    localStorage.setItem("userInfo", JSON.stringify(userinn))
  },[checkedEmogi])
  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar
            idNum="15%"
            idText="Скидка за прохождение опроса:"
            current={2}
          />
          <div className="question">
            <Header headerText="Ваша реакция на новое или сложное?"/>
            <ul className="emoji-variants">
              {backEndThree.map((e,i)=>{
                return <AnswerStepThree
                    key={i}
                    threeImg={e.img}
                    threeText={e.text}
                    threeVar={e.variant}
                    onChange={()=>setCheckedEmogi(e.text)}
                    checked={checkedEmogi=== e.text}
                />
              })}
            </ul>
            <AppButton
              btnClick={()=>navigator("/step-foure")}
              buttonText="Далее"
              buttonType="button"
              isDisabled={!checkedEmogi}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
