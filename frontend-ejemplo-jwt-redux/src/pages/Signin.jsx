import { useState } from "react";
import "./styles.css";
import { useDispatch } from "react-redux";
import { login } from "../redux/apiCalls/authApiCalls";
import { useSelector } from "react-redux";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { error, currentUser } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    login(dispatch, { email, password });

    // console.log("submit");
    // console.log(email);
    // console.log(password);
  };

  return (
    <main className="form-signin text-center">
      <form onSubmit={handleSubmit}>
        <img
          className="mb-4"
          src="http://jwt.io/img/logo-asset.svg"
          alt=""
          width="100"
        />
        <h1 className="h3 mb-3 fw-normal">Inicia sesión</h1>

        <div className="form-floating">
          <input
            type="email"
            className={error.email ? "form-control is-invalid" : "form-control"}
            id="floatingInput"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">Correo Electrónico</label>
          <p className="text-danger">
            <small>{error.email}</small>
          </p>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className={
              error.password ? "form-control is-invalid" : "form-control"
            }
            id="floatingPassword"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Contraseña</label>
          <p className="text-danger">
            <small>{error.password}</small>
          </p>
        </div>
        {error.password || error.email ? (
          <div className="checkbox mb-3 text-danger fw-bold">
            <small>Error al registrar</small>
          </div>
        ) : null}

        {currentUser ? (
          <div className="checkbox mb-3 text-success fw-bold ">
            <small>Sesión iniciada Id Usuario: {currentUser.id}</small>
          </div>
        ) : null}
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Iniciar Sesión
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; 2021</p>
      </form>
    </main>
  );
};

export default Signin;
