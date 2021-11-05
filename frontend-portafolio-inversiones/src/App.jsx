import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Inicio from "./pages/Inicio/Inicio";
import CrearInversion from "./pages/CrearInversion/CrearInversion";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/">
              <Inicio />
            </Route>
            <Route path="/crear-inversion">
              <CrearInversion />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
