import React from "react";
import "../node_modules/materialize-css/dist/css/materialize.min.css";
import "../node_modules/materialize-css/dist/js/materialize.min.js";
import "./App.scss";
import BreweryList from "./components/BreweryList";

function App() {
  return (
    <div className="App">
      <BreweryList />
    </div>
  );
}

export default App;
