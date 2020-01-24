import React from "react";
import "./BreweryList.scss";

const BreweryList = props => {
  const { breweries } = props;
  return (
    <section className="brewery-list">
      <h3>List of Breweries</h3>
      <ul>
        {breweries.map(brewery => {
          return <li key={brewery.id}>{brewery.name}</li>;
        })}
      </ul>
    </section>
  );
};

export default BreweryList;
