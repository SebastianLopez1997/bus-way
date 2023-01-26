import { db } from "../Config";
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const useFirebase = () => {
  const [viajes, setVaijes] = useState([]);
  const [viaje,setViaje] = useState(null)
  
  useEffect(() => {
    getViajes();
    
    return () => {};
  }, []);
  
  
  useEffect(() => {
    
  }, [viajes])
  
  

  const getViajes = async () => {
    try {
      const viajesCol = collection(db, "Viajes");
      await getDocs(viajesCol).then((snapshot) => {
        if (snapshot.size === 0) {
          console.log("base de datos vacia");
        }
        setVaijes(
          snapshot.docs.map((doc) => {
            return {
              id: doc.id,
              ...doc.data(),
            };
          })
        );
      });
    } catch (error) {}
  };
  
  const getViaje = async (id) => {
    try {
      const document = doc (db,"viajes",id)
      const response = await getDoc(document)
      let result = response.data ()
      setViaje ({id:response.id,...result})
    } catch (error) {
      console.log(error)
    }
  
  }

  return {viajes,
          getViajes,
          getViaje,
          viaje};
};

export default useFirebase;
