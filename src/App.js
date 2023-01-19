import { useEffect } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Compra from "./components/Compra/Compra";
import useFirebase from "./components/Hooks/useFirebase";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const { viajes, getViajes } = useFirebase();

  useEffect(() => {
    getViajes();
    
    return () => {};
  }, []);

  return (
    <div className="App, Fondo-app">
      <Navbar />
      <div>
        <h1>Viaje seguro, viaje con BUSWAY, tu transporte de confianza</h1>
      </div>
      <Card />
      <Compra/>
    </div>
  );
}

export default App;
