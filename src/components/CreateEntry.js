import React, { useState } from "react";
import axios from "axios";

function CreateEntry({ closeModal, entry, data }) {
  const [formState, setFormState] = useState({
    photo_url: "",
    body: "",
    date: "",
    trip_id: data.id
  });

  console.log(data)

  // Event handlers to capture data from form
  const handleChange = (ev) => {
    setFormState({ ...formState, [ev.target.name]: ev.target.value });
    console.log(formState);
  };

  const handleSubmit = (ev) => {
    console.log(formState);
    axios({
      method: "post",
      url: `http://localhost:8000/entries/`,
      data: formState,
    });
  };

  return (
    <div>
      <form className="createEntryForm">
        <h3>New Entry</h3>
        <label>
          Image
          <input
            type="text"
            name="photo_url"
            placeholder="Image URL"
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Date
          <input
            type="date"
            name="date"
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Description
          <textarea
            type="text"
            name="body"
            placeholder="Description"
            onChange={handleChange}
          ></textarea>
        </label>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={closeModal}>Cancel</button>
      </form>
    </div>
  );
}

export default CreateEntry;
