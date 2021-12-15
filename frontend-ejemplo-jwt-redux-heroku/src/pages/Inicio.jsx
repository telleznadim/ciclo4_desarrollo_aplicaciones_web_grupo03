import axios from "axios";
import { useEffect, useState } from "react";
import "./styles.css";
import { checkUser } from "../redux/apiCalls/authApiCalls";
import { useDispatch } from "react-redux";

axios.defaults.withCredentials = true;

const Inicio = () => {
  const [respuesta, setRespuesta] = useState("");
  const [error, setError] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    checkUser(dispatch);
  }, [dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .get("https://evening-oasis-35343.herokuapp.com/api/test-route")
      .then((response) => {
        console.log(response);
        setError("");
        setRespuesta(response.data);
      })
      .catch((error) => {
        // console.log(error);
        setError(error.response.data);
        setRespuesta("");
      });
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
        <h1 className="h3 mb-3 fw-normal">Inicio Protegido</h1>
        <div className="form-floating my-3">
          <textarea
            className="form-control textarea"
            placeholder="Respuesta de API"
            id="floatingTextarea"
            disabled
            value={respuesta}
          ></textarea>
          <label htmlFor="floatingTextarea">Respuesta de API</label>
        </div>
        {error ? (
          <p className="text-danger fw-bold">
            <small>{error}</small>
          </p>
        ) : null}

        <button className="w-100 btn btn-lg btn-primary" type="submit">
          Solicitar API
        </button>

        <p className="mt-5 mb-3 text-muted">&copy; 2021</p>
      </form>
    </main>
  );
};

export default Inicio;
