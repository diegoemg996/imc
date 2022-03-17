import React from 'react'
import { useState, useEffect } from 'react'

export const ResultInfo = ({imc}) => {

 const [resultadoInfo, setResultadoInfo] = useState("");

 useEffect(() => {

    getInfo();

 }, [imc])
 

 const getInfo = ()=>{

    if(imc < 16){
        setResultadoInfo("Tienes delgadez severa, deberías comer un poco mas")
    }else if( imc >= 16 && imc < 17){
        setResultadoInfo("Tienes delgadez moderada, deberías comer un poco mas")
    }else if(imc >= 17 && imc < 18.5){
        setResultadoInfo("Tienes delgadez aceptable, deberías comer un poco mas")
    }else if(imc >= 18.5 && imc < 25){
        setResultadoInfo("Estas en tu peso Ideal")
    }else if(imc >= 25 && imc < 30){
        setResultadoInfo("Tienes sobrepeso")
    }else if(imc >= 30 && imc < 35){
        setResultadoInfo("Tienes Obesidad Leve (Tipo I)")
    }else if(imc >= 35 && imc < 40){
        setResultadoInfo("Tienes Obesidad Leve (Tipo II)")
    }else{
        setResultadoInfo("Tienes Obesidad Leve (Tipo III)")
    }
 }

 const setBgColor = ()=>{
    return (imc < 18.5 || imc > 30) ? "alert alert-danger" : "alert alert-primary"
 }

  return (
    <div>
        {imc > 0 && 
            <div className={`alert ${imc > 25 ? setBgColor() : setBgColor() }`} role="alert">
            {resultadoInfo}
            </div>
        }
        
    </div>
  )
}
