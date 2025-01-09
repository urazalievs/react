import React from "react";
import { ProgressBar } from "../components/ProgressBar";
import { AnswerStepThree } from "../components/AnswerStepThree";
import { Link } from "react-router-dom";

const StepThree = () => {
  const backEndThree = [
    {
      img:"./img/laugh.png",
      text:"Ваш ответ 1",
      variant:"variant-1"
    },
    {
      img:"./img/hearts.png",
      text:"Ваш ответ 2",
      variant:"variant-2"
    },
    {
      img:"./img/smirk.png",
      text:"Ваш ответ 3",
      variant:"variant-3"
    },
    {
      img:"./img/fright.png",
      text:"Ваш ответ 4",
      variant:"variant-4"
    },
  ]
  return (
    <div className="container">
      <div className="wrapper">
        <div className="emoji-quiz">
          {/* <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1 _active"></div>
              <div className="indicator__unit indicator__unit-2 _active"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div> */}
          <ProgressBar
            idNum="15%"
            idText="Скидка за прохождение опроса:"
            current={2}
          />
          <div className="question">
            <h2>3. Занимательный вопрос</h2>
            <ul className="emoji-variants">
              {backEndThree.map((e,i)=>{
                return <AnswerStepThree
                    key={i}
                    threeImg={e.img}
                    threeText={e.text}
                    threeVar={e.variant}
                />
              })}
            </ul>
            <Link to="/step-foure">
            <button type="button"  id="next-btn">
              Далее
            </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StepThree;
