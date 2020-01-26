import React, { useState } from "react";
import ReactDOM from "react-dom";
import { render } from "@testing-library/react";
import "bootstrap/dist/css/bootstrap.css";

function BreweryList() {
  const [breweryList] = useState([
    {
      name: "Dechutes",
      city: "Portland"
    },
    {
      name: "Boneyard",
      city: "Bend"
    }
  ]);

  return (
    <table className="table">
      <thead className="thead-dark">
        <tr>
          <th scope="col">Name</th>
          <th scope="col">City</th>
        </tr>
      </thead>
      <tbody>
        {breweryList.map(brewery => (
          <tr>
            <td>{brewery.name}</td>
            <td>{brewery.city}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default BreweryList;
