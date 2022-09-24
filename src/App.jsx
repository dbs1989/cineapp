import { Button } from "./components/Button"

function App() {
  let nome = "Diego"

  return (
    <div className="App">
      <h1>{nome}</h1>
      <Button text="Confirma"  tipo="sucess" />
      <Button text="OK" tipo="sucess"/>
      <Button text="Remover" tipo="danger" />
      <Button text="Cancelar" />
    </div>
  )
}

export default App
