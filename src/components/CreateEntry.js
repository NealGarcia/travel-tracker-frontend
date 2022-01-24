import React, { useState } from "react";
import axios from "axios";

function CreateEntry({ closeModal, entry, data }) {
  const [formState, setFormState] = useState({
    photo_url: "",
    body: "",
    date: "",
    trip_id: data.id,
  });

  console.log(data);

  // Event handlers to capture data from form
  const handleChange = (ev) => {
    setFormState({ ...formState, [ev.target.name]: ev.target.value });
    console.log(formState);
  };

  const handleSubmit = (ev) => {
    console.log(formState);
    axios({
      method: "post",
      url: `${process.env.REACT_APP_API_URL}/entries/`,
      data: formState,
    });
  };

  return (
    <div>
      <form className="createEntryForm">
        <h3>New Entry</h3>
        <ul className="formWrapper">
        <li className="formRow">
          <label>
            Image
            <input
              type="text"
              name="photo_url"
              placeholder="Image URL"
              onChange={handleChange}
            ></input>
          </label>
          </li>
          <li className="formRow">
          <label>
            Date
            <input type="date" name="date" onChange={handleChange}></input>
          </label>
          </li>
          <li className="formRow">
          <label>
            Description
            <textarea
              type="text"
              name="body"
              placeholder="Description"
              onChange={handleChange}
              id = "description"
            ></textarea>
          </label>
          </li>
          <li className="formRow">
          <button onClick={handleSubmit}id = "submit">Submit</button>
          </li>
          <li className="formRow">
          <button onClick={closeModal}id = "cancel">Cancel</button>
          </li>
        </ul>
      </form>
    </div>
  );
}

export default CreateEntry;
