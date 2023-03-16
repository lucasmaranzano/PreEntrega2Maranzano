import React from "react";
import NavBar from "./components/Navbar/NavBar";
import ItemListContainer from "./components/ItemListContainer";

function App() {
  return (
    <div>
      <NavBar />
      <ItemListContainer greeting="Hola, bienvenido/a a nuestra tienda online!" />
    </div>
  );
}

export default App;
