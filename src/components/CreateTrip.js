import React, { useState } from "react";
import axios from "axios";

function CreateTrip({ closeModal }) {
  const [formState, setFormState] = useState({
    location: "",
    start_date: "",
    end_date: "",
    entry: [],
  });

  // Event handlers to capture data from form
  const handleChange = (ev) => {
    setFormState({ ...formState, [ev.target.name]: ev.target.value });
    console.log(formState);
  };

  const handleSubmit = (ev) => {
    console.log(formState);
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/trips/`,
      data: formState,
    });
  };

  return (
    <div>
      <form className="createTripForm">
        <h3 className="modalTitle">Create New Trip</h3>
        <ul className="formWrapper">
          <li className="formRow">
            <label>
              Location
              <input
                type="text"
                name="location"
                placeholder="Location"
                onChange={handleChange}
              ></input>
            </label>
          </li>
          <li className="formRow">
            <label>
              Start Date
              <input
                type="date"
                name="start_date"
                onChange={handleChange}
                id = "dateField"
              ></input>
            </label>
          </li>
          <li className="formRow">
            <label>
              End Date
              <input
                type="date"
                name="end_date"
                onChange={handleChange}
                id = "dateField"
              ></input>
            </label>
          </li>
          <li className="formRow">
            <button onClick={handleSubmit} id = "submit">Submit</button>
          </li>
          <li className="formRow">
            <button onClick={closeModal} id = "cancel">Cancel</button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default CreateTrip;
