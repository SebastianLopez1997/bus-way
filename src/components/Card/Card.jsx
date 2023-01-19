import React from "react";
import "../Stylesheet/Style-Card.css";

const Card = (props) => {
  const { salida, llegada, duracion, butacas, precio } = props;
  return (
    <>
      <div className="card d-flex CenterText" style={{ width: "18rem" }}>
        <h2 >Bus way</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Salida: 22:20 Mar Del Plata</li>
          <li className="list-group-item">Llegada: 23:20 Tandil</li>
          <li className="list-group-item">Duracion: 1:00 hs</li>
          <li className="list-group-item">Butacas: 22</li>
          <li className="list-group-item">Precio: $ 500</li>
          <li className="list-group-item">
            <button className="Color-Boton">Comprar</button>
          </li>
        </ul>
      </div>
      <div className="card d-flex CenterText" style={{ width: "18rem" }}>
        <h2>Bus way</h2>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">Salida: 21:20 Mar Del Plata</li>
          <li className="list-group-item">Llegada: 23:20 Olavarria</li>
          <li className="list-group-item">Duracion: 2:00 hs</li>
          <li className="list-group-item">Butacas: 12</li>
          <li className="list-group-item">Precio: $ 2500</li>
          <li className="list-group-item">
            <button className="Color-Boton">Comprar</button>
          </li>
        </ul>
      </div>
    </>
  );
};

export default Card;
