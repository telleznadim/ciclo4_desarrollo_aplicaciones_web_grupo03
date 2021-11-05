import { useState } from "react";
import axios from "axios";

const CrearInversion = () => {
  const [coin_name, setCoinName] = useState("");
  const [inversion, setInversion] = useState("");
  const [coins, setCoins] = useState("");
  const [month, setMonth] = useState(() => new Date().getUTCMonth() + 1);
  const [day, setDay] = useState(() => new Date().getUTCDate());
  const [year, setYear] = useState(() => new Date().getUTCFullYear());

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submit");
    console.log(coin_name);
    console.log(inversion);
    console.log(coins);
    console.log(month);
    console.log(day);
    console.log(year);

    axios
      .post("http://localhost:5000/api/crear-inversion", {
        coin_name,
        inversion,
        coins,
        date: { day, month, year },
      })
      .then((respuesta) => {
        console.log(respuesta);
        setCoinName("");
        setInversion("");
        setCoins("");
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div>
      <div className="p-3 pb-md-4 mx-auto text-center">
        <h1 className="display-4 fw-normal">Crear Inversión</h1>
      </div>
      <div className="form-crear-inversion text-center">
        <form onSubmit={handleSubmit}>
          <img
            className="mb-4"
            src="https://icons.iconarchive.com/icons/cjdowner/cryptocurrency-flat/1024/Bitcoin-BTC-icon.png"
            alt="BITCOIN"
            width="72"
            height="72"
          />

          <div className="form-floating">
            <input
              type="text"
              className="form-control"
              id="floatingInput"
              placeholder="Nombre de Coin"
              value={coin_name}
              onChange={(e) => setCoinName(e.target.value)}
              required
            />
            <label htmlFor="floatingInput">Nombre de Coin</label>
          </div>

          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              id="floatingInversion"
              placeholder="Monto Invertido"
              value={inversion}
              onChange={(e) => setInversion(e.target.value)}
              required
            />
            <label htmlFor="floatingInput">Inversión USD</label>
          </div>

          <div className="form-floating">
            <input
              type="number"
              className="form-control"
              id="floatingInversion"
              placeholder="Coins compradas"
              value={coins}
              onChange={(e) => setCoins(e.target.value)}
              required
            />
            <label htmlFor="floatingInput">Coins Compradas</label>
          </div>

          <div className="row">
            <div className="col-4">
              <div className="form-floating">
                <select
                  className="form-select"
                  id="floatingMonth"
                  aria-label="Floating Month"
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                >
                  {[...Array(12)].map((value, i) => {
                    return (
                      <option key={"month_" + i} value={i + 1}>
                        {i + 1}
                      </option>
                    );
                  })}
                </select>

                <label htmlFor="floatingSelect">Mes</label>
              </div>
            </div>

            <div className="col-4">
              <div className="form-floating">
                <select
                  className="form-select"
                  id="floatingDay"
                  aria-label="Floating Day"
                  value={day}
                  onChange={(e) => setDay(e.target.value)}
                >
                  {[...Array(31)].map((e, i) => {
                    return (
                      <option key={"day_" + i} value={i + 1}>
                        {i + 1}
                      </option>
                    );
                  })}
                </select>
                <label htmlFor="floatingSelect">Día</label>
              </div>
            </div>
            <div className="col-4">
              <div className="form-floating">
                <select
                  className="form-select"
                  id="floatingYear"
                  aria-label="Floating Year"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                >
                  {[...Array(15)].map((e, i) => {
                    return (
                      <option key={"year_" + i + 2021} value={i + 2021}>
                        {i + 2021}
                      </option>
                    );
                  })}
                </select>
                <label htmlFor="floatingSelect">Año</label>
              </div>
            </div>
          </div>

          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Crear
          </button>
        </form>
      </div>
      {/* <p>{coin}</p>
      <p>{inversion}</p>
      <p>{month}</p>
      <p>{day}</p>
      <p>{year}</p>
      <p>{new Date(year, month, day).toLocaleString()}</p> */}
    </div>
  );
};

export default CrearInversion;
