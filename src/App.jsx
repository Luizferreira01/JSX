import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [imc, setIMC] = useState(null);

  const calcularIMC = () => {
    const alturaMetros = altura / 100;
    const imcResultado = peso / (alturaMetros * alturaMetros);
    setIMC(imcResultado);
  };

  return (
    <div>
       <h1>Calculadora de IMC</h1>
       <label>
         Altura (cm):
         <input type="number" value={altura} onChange={(e) => setAltura(e.target.value)} />
       </label>
       <br />
       <label>
         Pse (kg):
         <input type="number" value={peso} onChange={(e) => setPeso(e.target.value)} />
        </label>
        <br />
       <button onClick={calcularIMC}>Calcular IMC</button>

       {imc && (
          <div>
            <h2>Seu imc é: {imc.toFixed(2)}</h2>
           <p>classificaçao: {imc < 18.5 ? 'Abaixo do peso'
             : imc < 24.9 ? 'peso normal'
             : imc < 29.9 ? 'Sobrepeso'
             : 'Obesidade'}</p>
         </div>
      )}
      </div>
    );
}


export default App;
