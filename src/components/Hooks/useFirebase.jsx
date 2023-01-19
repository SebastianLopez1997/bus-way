import { db } from "../Config";
import { collection, doc, getDocs } from "firebase/firestore";
import React, { useEffect, useState } from "react";

const useFirebase = () => {
  const [viajes, setVaijes] = useState([]);
  
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

  return {viajes, getViajes};
};

export default useFirebase;
