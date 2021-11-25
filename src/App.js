// Imports
import react, { useState, useEffect } from "react"
import './App.css';
import Button from "./components/Button";
import MostrarTempo from "./components/MostrarTempo";
import MostrarVoltas from "./components/MostrarVoltas";

// Component Main ( Componente Principal)
function App() {

  // Estados de numVoltas, running (Liga e desliga a passagem do tempo) e tempo.
  const [numVoltas, setNumVoltas] = useState(0)
  const [running, setRunning] = useState(false)
  const [tempo, setTempo] = useState(0)

  // Funcao que calsa determinado Efeito quando ativado.
  useEffect(() => {

    // timer nulo.
    let timer = null

    // Se running for True (Executa) se for false (Nao Executa).
    if (running) {
      timer = setInterval(() => {
        setTempo(old => old + 1)
      }, 1000)

    }

    // Retorna uma funcao que se timer nao for nulo executa.
    return () => {
      if (timer) {
        clearInterval(timer)
      }
    }
  }, [running])

  // Funcao que altera running de (FALSE -> TRUE) e de (TRUE -> FALSE). Setando e parando a passagem do tempo.
  const toggleRunnung = () => {
    setRunning(!running)
  }

  // Funcao que adiciona mais 1 ao numero de voltas.
  const increment = () => {
    setNumVoltas(numVoltas + 1)
  }

  // Funcao que tira mais 1 ao numero de voltas.
  const decrement = () => {
    setNumVoltas(numVoltas - 1)
  }

  // Funcao que Reseta os Contadores.
  const reset = () => {
    setNumVoltas(0)
    setTempo(0)
  }

  // Retorna o HTML Principal.
  return (
    <div className="App">
      <MostrarVoltas voltas={numVoltas} className="mostrarVoltas" />
      <Button text="+" onClick={increment} className="buttons" role="button" />
      <Button text="-" onClick={decrement} className="buttons" role="button" /> <br />
      {
        numVoltas > 0 &&
        <MostrarTempo tempo={Math.round(tempo / numVoltas)} className="mostrarTempo" />
      }
      <Button onClick={toggleRunnung} text="Iniciar" className="buttons" role="button" />
      <Button onClick={reset} text="Reiniciar" className="buttons" role="button" />

    </div>
  );
}

export default App;
