import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import Card from "./Card/Card";
import useFirebase from "./Hooks/useFirebase";

const ItemDatail = () => {
  const { id } = useParams();
  const { viaje, getViaje } = useFirebase();

    console.log(viaje)
    console.log(id)

  useEffect(() => {
    getViaje(id)

    if (viaje) {
      console.log(viaje)
    }

    return () => {};
  }, []);

    console.log(viaje)
  return (
    <div>
      {viaje ? (
        <>
          <h1>Precio {viaje.Precio} dd{id} {viaje.ciudadLlegada}</h1>
        </>
      ) : (
        <h1>Cargando...</h1>
      )}
    </div>
  );
};

export default ItemDatail;
