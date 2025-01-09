import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { AppLabel } from "../components/AppLable";
import { AppButton } from "../components/AppButton";
import { logDOM } from "@testing-library/react";
import { useNavigate } from "react-router-dom";

const Welcome = () => {
 // Регулярные выражения 
 const RegTell = /^\+?[1-9]\d{1,14}$/
 const RegName = /^[A-Za-zА-Яа-я]+$/

  //Записывает значение инпутов
  const [name,setName]= useState("");
  const [phone, setPhone]= useState("");

  //Передает состояние в hasError
  const [nameError, setNameError] = useState(false)
  const [phoneError, setPhoneError] = useState(false)

  const [btnError, setBtnError]= useState(true)
  const navigate = useNavigate()

  //Переключение между страницами
  const handleClick = ()=>{
    if(!RegName.test(name)){
      setNameError(true)
      navigate("/")
    }else {
      setNameError(false)
      navigate("/step-one")
    }
    if(!RegTell.test(phone)){
      setPhoneError(true)
      navigate("/")
    }else{
      setPhoneError(false )
      navigate("/step-one")
    }
  }

  useEffect(()=>{
    if(!name || !phone){
      setBtnError(true)
    }else{
      setBtnError(false)
    } 
    
  }, [name, phone])




  return (
    <div className="container">
      <div className="wrapper">
        <div className="welcome">
        <Header
          headerText={"Добро пожаловать в квиз от лучшего учебного центра"}
          textHeader="h1" 
        />  
          <form className="welcome__form">
            <AppLabel 
              labText={"Ваше имя"}
              labName={"username"}
              labErr={"Введите номер в правильном формате например"} 
              labPlace={"Ваш ответ"} 
              labType={"text"}
              inpValue={name}
              inpChange={setName}
              hasError={nameError}
            />
            <AppLabel
              labErr={"Введите номер в правильном формате"}
              labName={"phone"}
              labPlace={"+998 9- --- -- -- "}
              labText={"Ваш номер"}
              labType={"tel"}
              inpValue={phone}
              inpChange={setPhone}
              hasError={phoneError}
              
            />
            <AppButton 
              buttonText="Далее"
              buttonType="button"
              isDisabled={btnError}
              btnClick={handleClick}
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
