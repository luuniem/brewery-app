import React, { useState } from "react";
import "./FormLocation.scss";

const FormLocation = props => {
  const [enteredZipCode, setEnteredZipCode] = useState("");

  const submitHandler = event => {
    event.preventDefault();
    const { onSubmitZipCode } = props;
    onSubmitZipCode({ zipcode: enteredZipcode });
  };

  return (
    <form onSubmit={submitHandler}>
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
  );
};

export default FormLocation;
