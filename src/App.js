import { useEffect } from "react";
import "./App.css";
import Card from "./components/Card/Card";
import Compra from "./components/Compra/Compra";
import useFirebase from "./components/Hooks/useFirebase";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ItemListContainer from "./components/ItemListContainer";
import ItemDatail from "./components/ItemDatail";


function App() {
  
  

  return (
  <>
    
    <div className="App, Fondo-app">
      <Navbar />
      <div>
        <h1>Viaje seguro, viaje con BUSWAY, tu transporte de confianza</h1>
      </div>
      <Router>
      <Routes>
        <Route path='/' element={<ItemListContainer/>} />
        <Route path='/itemDatail/:id' element={<ItemDatail/>} />
      </Routes>
    </Router>
      <Compra/>
    </div>
    </>
  );
}

export default App;
