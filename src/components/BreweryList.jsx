import React from "react";
import "bootstrap/dist/css/bootstrap.css";

const BreweryList = props => {
  const { breweryData } = props;

  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th class="text-left" scope="col">
            Name
          </th>
          <th class="text-left" scope="col">
            City
          </th>
        </tr>
      </thead>
      <tbody>
        {breweryData.map(brewery => (
          <tr>
            <td>{brewery.name}</td>
            <td>{brewery.locality}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default BreweryList;
