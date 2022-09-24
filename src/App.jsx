import "./styles/globalStyle.css"
import { Button } from "./components/Button"
import { Container } from "./components/Container"
import { NavMenu } from "./components/NavMenu"
import { Home } from "./pages/Home"

function App() {
  let nome = "Diego"

  return (
    <>
      <Container>
        <Home/>
        <NavMenu/>
      </Container>
    </>
  )
}

export default App
