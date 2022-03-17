import React from 'react'

export const Form = ({setPeso, setEstatura, estatura, peso, setImc}) => {


  const handleCalculateImc = ()=>{
    setImc((peso/Math.pow(estatura/100,2)).toFixed(1))
  }  


  return (
    <div>
        <label htmlFor='estatura' className="form-label">Estatura</label>
        <input 
            type="number" 
            className="form-control" 
            name='estatura'
            value={estatura}
            onChange={(e)=>{setEstatura(e.target.value)}}
        />

        <label htmlFor='peso' className="form-label">Peso</label>
        <input 
            type="number" 
            className="form-control" 
            name='estatura'
            value={peso}
            onChange={(e)=>{setPeso(e.target.value)}}
        />

        <button type="button" class="btn btn-primary my-2" onClick={handleCalculateImc}>Calcular</button>

    </div>
  )
}
