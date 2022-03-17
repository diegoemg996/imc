import React from 'react'
import { ResultInfo } from './ResultInfo'

export const Resultado = ({imc}) => {
  return (
    <div className='my-2'>

        
        {
            imc > 0 && <h4>Tu IMC es: <span>{imc}</span> </h4>
        }

        <ResultInfo imc={imc}/>
    </div>
  )
}
