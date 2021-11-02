import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './components/pages/Home'
import Cadastro from './components/pages/Cadastro'
import Reserva from './components/pages/Reserva'

import Container from './components/layout/Container'
import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'


function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Container custoClass="min-height">
          <Route exact path="/">
            <Home />
          </Route>

          <Route exact path="/reserva">
            <Reserva />

          </Route>

          <Route exact path="/cadastro">
            <Cadastro />
          </Route>
        </Container>
      </Switch>
     
      <Footer/>
    </Router>
     
  );
}

export default App
