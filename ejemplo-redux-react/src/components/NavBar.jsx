import { useSelector } from "react-redux";

const NavBar = () => {
  const { valor } = useSelector((state) => state.contador);
  const { nombre, correo, avatar } = useSelector((state) => state.usuario);
  return (
    <nav className="navbar navbar-light bg-light">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            src="https://d33wubrfki0l68.cloudfront.net/0834d0215db51e91525a25acf97433051f280f2f/c30f5/img/redux.svg"
            alt=""
            width="30"
            height="24"
            className="d-inline-block align-text-top"
          />
          Redux-React
        </a>
        <div className="d-flex">
          <div className="dropstart">
            <button
              className="btn btn-outline-danger dropdown-toggle mx-1"
              type="button"
              id="dropdownMenu2"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <img
                src={avatar}
                alt="mdo"
                width="32"
                height="32"
                className="rounded-circle"
              />
            </button>

            <ul className="dropdown-menu" aria-labelledby="dropdownMenu2">
              <li>
                <button className="dropdown-item" type="button">
                  {nombre}
                </button>
              </li>
              <li>
                <button className="dropdown-item" type="button">
                  {correo}
                </button>
              </li>
            </ul>
          </div>
          <button type="button" className="btn btn-info">
            <i className="bi bi-cart4 text-white"></i>{" "}
            <span className="badge bg-secondary">{valor}</span>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
