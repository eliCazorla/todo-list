import './App.css';
import { Link, Route, Switch }from 'react-router-dom';
import Contenido from './components/Contenido';
import Login from './components/Login';
import PageNotFound from './components/PageNotFound';
import { Container, Navbar, Nav } from 'react-bootstrap'; 

function App() {
  return (
    <div className="App">
      <Navbar collapseOnSelect expand="md"  variant="dark" className="App-header">
        <Navbar.Brand href="#home">ToDo List</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav>
            <Link className="nav-link" to="/tareas">Ver Tareas</Link>
            <Link className="nav-link" to="/login">Log In</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <div>
        <Switch>
          <Route path="/tareas" component={Contenido} />
          <Route path="/login" component={Login} />
          <Route path="/" component={PageNotFound} />
        </Switch>
      </div>
    </div>
  );
}

export default App;
