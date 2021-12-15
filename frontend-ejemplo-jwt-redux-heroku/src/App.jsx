import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import NavBar from "./components/NavBar";
import IniciarSesion from "./pages/IniciarSesion";
import Registro from "./pages/Registro";
import Inicio from "./pages/Inicio";
import { useSelector } from "react-redux";

function App() {
  const { currentUser } = useSelector((state) => state.auth);
  return (
    <BrowserRouter>
      <NavBar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Inicio />} />
          <Route
            path="/iniciar-sesion"
            element={currentUser ? <Navigate to="/" /> : <IniciarSesion />}
          />
          <Route
            path="/registro"
            element={currentUser ? <Navigate to="/" /> : <Registro />}
          />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
