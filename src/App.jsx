import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./index.css";
import "leaflet/dist/leaflet.css";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

function App() {
  const position = [6.310860717217439, -75.55726263275527];
  const positions = [
    [6.310860717217439, -75.55726263275527],
    [6.256344574643068, -75.58122638333936],
  ];
  return (
    <div className="row">
      <div className="col text-center">
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* <Marker position={position}>
            <Popup>
              Popup En Medellín
              <br /> 6.310860717217439, -75.55726263275527
            </Popup>
          </Marker>

          <Marker position={[6.256344574643068, -75.58122638333936]}>
            <Popup>
              Popup En Medellín 2
              <br /> 6.256344574643068, -75.58122638333936
            </Popup>
          </Marker> */}

          {positions.map((position) => {
            return (
              <Marker position={position}>
                <Popup>
                  Popup En Medellín 2
                  <br /> {position}
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      </div>
    </div>
  );
}

export default App;
