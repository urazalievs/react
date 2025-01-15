import React from "react";
import Header from "./Header";

export const TheEnd = ({yourInfo,yourName, yourPhone, yourEmogi, yourJob,yourSkill,yourFrom})=>{
    return(
        <div className="wrapper">
        <Header headerText={yourInfo}/>
            <ul className="endUl">
                <li className="endLi">Ваше имя: <span>{yourName}</span></li>
                <li className="endLi">Ваш номер телефона: <span>{yourPhone}</span></li>
                <li className="endLi">Ваш выбранный курс: <span>{yourJob}</span></li>
                <li className="endLi">Ваш уровень знания: <span>{yourSkill}</span></li>
                <li className="endLi">Откуда вы узнали о нас: <span>{yourFrom}</span></li>
                <li className="endLi">Ваша стресоустойчивость: <span>{yourEmogi}</span></li>
            </ul>
        </div>
    )
}   