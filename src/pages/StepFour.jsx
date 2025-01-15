import React, { useEffect, useState } from "react";
import { ProgressBar } from "../components/ProgressBar";
import Header from "../components/Header";
import { AppButton } from "../components/AppButton";
import { AnswerItem } from "../components/AnswerItem";
import { useNavigate } from "react-router-dom";

const StepFour = () => {
  const variants = [1,2,3,4,5]
  const course = {...JSON.parse(localStorage.getItem("userInfo"))}
  
  const [checkedAnswer,setCheckedAnswer]= useState("")
  const navigation = useNavigate()

 
  useEffect(()=>{
    const userIn = {...JSON.parse(localStorage.getItem("userInfo")),skill:checkedAnswer}
    localStorage.setItem("userInfo", JSON.stringify(userIn))
  }, [checkedAnswer])
  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          <ProgressBar
            idNum="15%"
            idText="Скидка за прохождение опроса:"
            current={3}
          />
          <div className="question">
            <Header headerText={`Как хорошо вы знаете ${course.checkedName}?`} textHeader="h2"/>
            <ul className="level-variants">
              {
              variants.map((e,i)=>(
                <AnswerItem
                  key={i}
                  answName={e}
                  answVariant={i}
                  onChange={()=>setCheckedAnswer(e)}
                  checked={checkedAnswer === e}
                />))
              }
            </ul>
             <AppButton
                buttonText="Далее"
                buttonType="button"
                isDisabled={!checkedAnswer}
                btnClick={()=>navigation("/thanks")}
              />
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepFour;
