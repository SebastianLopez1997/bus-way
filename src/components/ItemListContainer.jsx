import React, { useEffect } from 'react'
import useFirebase from './Hooks/useFirebase'
import { Link } from 'react-router-dom'


const ItemListContainer = () => {

    const {viajes} = useFirebase()
    
    useEffect (() => {
        console.log(viajes)
    },[viajes])

  return (
    <div>
        <h1>ItemListContainer</h1>
    
    {viajes.map(({id, Precio, ciudadOrigen, ciudadLlegada}) => (
        <Link key={id} to={`/itemDatail/${id}`}>
            <h1> Origen: {ciudadOrigen} ----- Destino: {ciudadLlegada} </h1>
        </Link>
    ))}
    <h2>Termina ItemListContainer</h2>
    </div>
  )
}

export default ItemListContainer