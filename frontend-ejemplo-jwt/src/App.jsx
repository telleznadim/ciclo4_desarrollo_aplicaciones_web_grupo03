import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import NavBar from "./components/NavBar";
import IniciarSesion from "./pages/IniciarSesion";
import Registro from "./pages/Registro";
import Inicio from "./pages/Inicio";

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route path="/iniciar-sesion" element={<IniciarSesion />} />
          <Route path="/registro" element={<Registro />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
