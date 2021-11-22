import { useState } from "react";
import "./styles.css";
import axios from "axios";

axios.defaults.withCredentials = true;
const Registro = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorPassword, setErrorPassword] = useState("");
  const [errorEmail, setErrorEmail] = useState("");
  const [successful, setSuccessfull] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorPassword("");
    setErrorEmail("");
    setSuccessfull("");
    console.log(email);
    console.log(password);
    axios
      .post("http://localhost:5000/auth/registro", { email, password })
      .then((response) => {
        console.log(response);
        setSuccessfull(response.data.id);
        setEmail("");
        setPassword("");
      })
      .catch((error) => {
        const { email, password } = error.response.data;
        setErrorPassword(password);
        setErrorEmail(email);
      });
  };
  return (
    <main className="form-signin text-center">
      <form onSubmit={handleSubmit} noValidate>
        <img
          className="mb-4"
          src="http://jwt.io/img/logo-asset.svg"
          alt=""
          width="100"
        />
        <h1 className="h3 mb-3 fw-normal">Porfavor regístrate</h1>

        <div className="form-floating">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="name@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="floatingInput">Correo Electrónico</label>
          <p className="text-danger">
            <small>{errorEmail}</small>
          </p>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className={
              errorPassword ? "form-control is-invalid" : "form-control"
            }
            id="floatingPassword"
            placeholder="Contraseña"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <label htmlFor="floatingPassword">Contraseña</label>
          <p className="text-danger">
            <small>{errorPassword}</small>
          </p>
        </div>
        {errorPassword || errorEmail ? (
          <div className="checkbox mb-3 text-danger fw-bold">
            <small>Error al registrar</small>
          </div>
        ) : null}

        {successful ? (
          <div className="checkbox mb-3 text-success fw-bold">
            <small>Usuario Registrado Id: {successful}</small>
          </div>
        ) : null}
        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Registrar
        </button>
        <p className="mt-5 mb-3 text-muted">&copy; 2021</p>
      </form>
    </main>
  );
};

export default Registro;
