import React, { useState } from "react";
import axios from "axios";
import { Redirect, Link } from "react-router-dom";

function EditTrip({ entry, data, closeTripModal }) {
  const [formState, setFormState] = useState({
    location: "",
    start_date: "",
    end_date: "",
    entry: [],
  });

  const handleChange = (ev) => {
    setFormState({ ...formState, [ev.target.name]: ev.target.value });
    console.log(formState);
  };

  const handleSubmit = (ev) => {
    console.log(formState);
    axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}/trips/${data.id}`,
      data: formState,
    });
  };

  function onDelete() {
    axios.delete(`${process.env.REACT_APP_API_URL}/trips/${data.id}`);
  }

  console.log(data.id);

  return (
    <div>
      <div>
        <form className="editTripForm">
          <ul className="formWrapper">
            <h3>Edit Trip</h3>
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
                ></input>
              </label>
            </li>
            <li className="formRow">
            <button onClick={handleSubmit} id = "submit">Submit</button>
            </li>
            <li className="formRow">
            <Link to ='/' onClick={onDelete}><button id = "cancel">Delete</button></Link>
            </li>
            <li className="formRow">
            <button onClick={closeTripModal} id = "cancel">Cancel</button>
            </li>
          </ul>
        </form>
      </div>
    </div>
  );
}

export default EditTrip;
