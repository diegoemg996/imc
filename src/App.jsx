import { useState } from "react"
import { Form } from "./components/Form"
import { Resultado } from "./components/Resultado";


function App() {

  const [peso, setPeso] = useState(0)
  const [estatura, setEstatura] = useState(0)
  const [imc, setImc] = useState(0);

  return (
    <div className="container my-5">
      <h2>Calcula tu IMC</h2>
      <Form
        setPeso={setPeso}
        setEstatura={setEstatura}
        peso={peso}
        estatura={estatura}
        setImc={setImc}
      />
      <Resultado
        imc={imc}
      />
    </div>
  )
}

export default App
