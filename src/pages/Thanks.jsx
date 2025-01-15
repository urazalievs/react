import React from "react";
import { TheEnd } from "../components/TheEnd";
import { AppButton } from "../components/AppButton";

const Thanks = () => {

  const userInfo = {...JSON.parse(localStorage.getItem("userInfo"))}
  const givLink  = ()=>{
    return(
      <div className="linkWrapper">
        <a href="https://react.dev/">https://react.dev/</a>
      </div>
    )
  }
  return (
    <div className="container">
      <div className="wrapper">
        <div className="thanks">
          <img src="./img/bell.png" alt="bell" />
          <h1>Спасибо за прохождение опроса
            {`${userInfo.name}`}!</h1>
          <TheEnd 
            yourInfo="Ваши данные" 
            yourName={userInfo.name}
            yourJob={userInfo.checkedName}
            yourEmogi={userInfo.checkedEmogi}
            yourFrom={userInfo.from}
            yourPhone={userInfo.phone}
            yourSkill={userInfo.skill}
            key={userInfo.index}
          />
          <p>Получи свою скидку по ссылке ниже или другое блаблабла</p>
          <AppButton
            btnClick={()=>givLink()}
            buttonText="Получить ссылку"
            buttonType="button"          
          />
        </div>
      </div>
    </div>
  );
};

export default Thanks;
