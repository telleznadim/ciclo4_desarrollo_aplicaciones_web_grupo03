import Inversion from "./components/Inversion";
import swal from "sweetalert";
import { useEffect, useState } from "react";
import axios from "axios";

const Inicio = () => {
  const [inversiones, setInveriones] = useState([]);

  const obtenerInversiones = () => {
    console.log("Obtener inversiones");
    axios
      .get("http://localhost:5000/api/inversiones")
      .then((respuesta) => {
        setInveriones(respuesta.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  useEffect(() => {
    obtenerInversiones();
  }, []);

  const handleDelete = (inversion) => {
    swal({
      title: "¿Estás Seguro(a)?",
      text: "Si borras la inversión, no se podrá recuperar...",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        axios
          .delete("http://localhost:5000/api/inversion/" + inversion._id)
          .then((respuesta) => {
            swal("La inversión " + inversion._id + " fue borrada", {
              icon: "success",
            });
            console.log(respuesta);
            obtenerInversiones();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  return (
    <div className="p-3 pb-md-4 mx-auto text-center">
      <h1 className="display-4 fw-normal">Portafolio de Inversiones</h1>
      <div className="row row-cols-1 row-cols-md-3 mb-3 text-center">
        {inversiones.map((inversion) => (
          <Inversion
            key={inversion._id}
            inversion={inversion}
            handleDelete={handleDelete}
          />
        ))}
      </div>
    </div>
  );
};

export default Inicio;
