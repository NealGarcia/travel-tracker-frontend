import React, { useState } from "react";
import axios from "axios";

function CreateTrip({ closeModal }) {
  const [formState, setFormState] = useState({
    location: "",
    start_date: "",
    end_date: "",
  })

  // const [location, setLocation] = useState("");
  // const [startDate, setStartDate] = useState("");
  // const [endDate, setEndDate] = useState("");

  const handleChange = (ev) => {
    setFormState({...formState, [ev.target.name]: ev.target.value})
    console.log(formState)
  }

  const handleSubmit = (ev) => {
    ev.preventDefault();
    console.log(formState);
    axios({
      method: 'post',
      url: `http://localhost:8000/trips/`,
      data: formState
    })
  }


  return (
    <div>
      <form className="createTripForm">
        <h3>Create a New Trip</h3>
        <label>
          Location
          <input
            type="text"
            name="location"
            placeholder="Location"
            // onChange={(ev) => setLocation(ev.target.value)}
            onChange = {handleChange}
          ></input>
        </label>
        <label>
          Start Date
          <input
            type="date"
            name="start_date"
            placeholder="Start Date"
            // onChange={(ev) => setStartDate(ev.target.value)}
            onChange = {handleChange}
          ></input>
        </label>
        <label>
          End Date
          <input
            type="date"
            name="end_date"
            placeholder="End Date"
            // onChange={(ev) => setEndDate(ev.target.value)}
            onChange = {handleChange}
          ></input>
        </label>
        <button onClick = {handleSubmit}>Submit</button>
        <button onClick={closeModal}>Cancel</button>
      </form>
    </div>
  );
}

export default CreateTrip;
