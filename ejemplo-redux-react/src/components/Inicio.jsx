import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  incrementar,
  decrementar,
  incrementarEn,
} from "../redux/slices/contador";
import { cambiarUsuario } from "../redux/slices/usuario";

const Inicio = () => {
  const [incusuario, setincusuario] = useState(0);
  const { valor } = useSelector((state) => state.contador);
  const dispatch = useDispatch();
  return (
    <div className="container">
      <div className="d-flex justify-content-center my-3">
        <button
          onClick={() => dispatch(decrementar())}
          className="btn btn-outline-light btn-lg"
        >
          <i className="bi bi-cloud-minus-fill text-info"></i>
        </button>

        <p className="display-1 fw-bold mx-3">{valor}</p>

        <button
          onClick={() => dispatch(incrementar())}
          className="btn btn-outline-light btn-lg"
        >
          <i className="bi bi-cloud-plus-fill text-info"></i>
        </button>
      </div>
      <div className="d-flex justify-content-center my-3">
        <input
          type="number"
          className="fw-bold"
          value={incusuario}
          onChange={(e) => setincusuario(e.target.value)}
        />
        <button
          onClick={() => dispatch(incrementarEn(incusuario))}
          className="btn btn-outline-light btn-lg"
        >
          <i className="bi bi-cloud-plus-fill text-info"></i>
        </button>
      </div>
      <div className="d-flex justify-content-center my-3">
        <button
          onClick={() => dispatch(cambiarUsuario())}
          className="btn btn-outline-danger btn-lg"
        >
          <i className="bi bi bi-person-circle"></i>
        </button>
      </div>
    </div>
  );
};

export default Inicio;
