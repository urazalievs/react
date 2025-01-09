import React from "react";
import { ProgressBar } from "../components/ProgressBar";
import { AnswerItem } from "../components/AnswerItem";
import { Link } from "react-router-dom";

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
  return (
    <div className="container">
      <div className="wrapper">
        <div className="variants-quiz">
          {/* <div className="indicator">
            <div className="indicator__text">
              <span className="indicator__description">
                Скидка за прохождение опроса:
              </span>
              <span className="indicator__value">15%</span>
            </div>
            <div className="indicator__progressbar">
              <div className="indicator__unit indicator__unit-1 _active"></div>
              <div className="indicator__unit indicator__unit-2"></div>
              <div className="indicator__unit indicator__unit-3"></div>
              <div className="indicator__unit indicator__unit-4"></div>
            </div>
          </div> */}
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
                />
              })}
              {/* <li className="variant-wrapper">
                <input required type="radio" name="variant-1" id="variant-1" />
                <label htmlFor="variant-1">Ваш ответ</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant-2" id="variant-2" />
                <label htmlFor="variant-2">Ваш ответ</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant-3" id="variant-3" />
                <label htmlFor="variant-3">Ваш ответ</label>
              </li>
              <li className="variant-wrapper">
                <input required type="radio" name="variant-4" id="variant-4" />
                <label htmlFor="variant-4">Ваш ответ</label>
              </li> */}
            </ul>
            <Link to={'/step-three'}>
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

export default StepTwo;
