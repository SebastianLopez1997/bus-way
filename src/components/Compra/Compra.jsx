import React from "react";
import useContador from "../Hooks/useContador";

const Compra = () => {
  const { contador, sumar, restar } = useContador();
  
  const submitHandler = (e) => {
    e.preventDefault()
  }
  
  return (
    <div>
      <h1>Pantalla de compra</h1>

      <form className="row g-3" onSubmit={submitHandler}>
        <div className="col-md-6">
          <label for="inputEmail4" className="form-label">
            Email
          </label>
          <input type="email" className="form-control" id="inputEmail4" />
        </div>
        <div className="col-12">
          <label for="inputAddress" className="form-label">
            Direccion
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress"
            placeholder="San martin 1221"
          />
        </div>
        <div className="col-12">
          <label for="inputAddress2" className="form-label">
            Direccion 2
          </label>
          <input
            type="text"
            className="form-control"
            id="inputAddress2"
            placeholder="departamento, casa, trabajo"
          />
        </div>
        <div className="col-md-6">
          <label for="inputCity" className="form-label">
            Ciudad
          </label>
          <input type="text" className="form-control" id="inputCity" />
        </div>
        <div className="col-md-4">
          <label for="inputState" className="form-label">
            Provincia
          </label>
          <select id="inputState" className="form-select">
            <option selected>Choose...</option>
            <option>...</option>
          </select>
        </div>
        <div className="col-md-2">
          <label for="inputZip" className="form-label">
            Codigo postal
          </label>
          <input type="text" className="form-control" id="inputZip" />
        </div>
        <div className="col-12">
          <h4>Cantidad de pasajes</h4>
          <h5>Pasajes: {contador} </h5>
          <button onClick={sumar}>Suma</button>
          <button onClick={restar}>Restar</button>
        </div>
        <div className="col-12">
          <button type="submit" className="btn btn-primary">
            Comprar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Compra;
