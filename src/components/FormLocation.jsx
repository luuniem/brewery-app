import React, { useState, useEffect } from "react";
import "./FormLocation.scss";

const FormLocation = props => {
  const [enteredZipCode, setEnteredZipCode] = useState("");

  return (
    <div>
      <form>
        <input
          placeholder="Enter Zip Code"
          className=" waves-yellow"
          type="text"
          value={enteredZipCode}
          onChange={event => {
            setEnteredZipCode(event.target.value);
          }}
        />
        <button
          type="submit"
          className="btn amber waves-effect waves-light black-text"
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default FormLocation;
