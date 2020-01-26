import React, { useState, useEffect } from "react";
import FormLocation from "./FormLocation";

const Brewery = props => {
  const [breweryData, setBreweryData] = useState([]);
  //fetch API data from BreweryDB. API Key is stored in the .env file
  useEffect(() => {
    const [API_KEY, URL] = [
      process.env.REACT_APP_BREWERY_API_KEY,
      "https://sandbox-api.brewerydb.com/v2/"
    ];
    fetch(`${URL}locations/?key=${API_KEY}`)
      .then(response => response.json())
      .then(data => {
        setBreweryData(data);
        console.log(data);
      });
  }, []);

  return (
    <div className="container">
      <FormLocation />
    </div>
  );
};

export default Brewery;
