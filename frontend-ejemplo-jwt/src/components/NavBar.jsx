import axios from "axios";
import { Link, NavLink } from "react-router-dom";

axios.defaults.withCredentials = true;
const NavBar = () => {
  const cerrarSesion = () => {
    axios
      .post("http://localhost:5000/auth/cerrar-sesion")
      .then((response) => {
        console.log(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <nav className="navbar navbar-light bg-light navbar-expand-lg">
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          <img
            src="http://jwt.io/img/icon.svg"
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-bottom"
          />
          Ejemplo-JWT
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <NavLink className="nav-link" aria-current="page" to="/">
                Inicio
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink
                className="nav-link"
                aria-current="page"
                to="/iniciar-sesion"
              >
                Iniciar Sesión
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/registro">
                Registro
              </NavLink>
            </li>
          </ul>
        </div>

        <button onClick={cerrarSesion} className="btn btn-outline-primary">
          Cerrar Sesión
        </button>
      </div>
    </nav>
  );
};

export default NavBar;
