import { Link, NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <header className="p-3 bg-dark text-white">
      <div className="container">
        <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-lg-start">
          <Link className="navbar-brand text-white" to="/">
            Inversiones
          </Link>

          <ul className="nav col-12 col-lg-auto me-lg-auto mb-2 justify-content-center mb-md-0">
            <li>
              <NavLink
                className="text-secondary nav-link px-2"
                activeClassName="text-white"
                exact
                to="/"
              >
                Inicio
              </NavLink>
            </li>
            <li>
              <NavLink
                className="text-secondary nav-link px-2"
                activeClassName="text-white"
                to="/crear-inversion"
              >
                Crear
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
};

export default NavBar;
