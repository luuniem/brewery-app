import React from "react";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "../node_modules/materialize-css/dist/js/materialize.min.js";
import "./App.scss";

// import BreweryList from "./components/BreweryList";
import Brewery from "./components/Brewery";

import BreweryList from "./components/BreweryList";

function App() {
  return (
    <div className="App">
      <h1>Brew Me</h1>
      <Brewery />
    </div>
  );
}

export default App;
