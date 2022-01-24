import React, { useState } from "react";
import axios from "axios";

function EditEntry({ closeModal, entry, counter }) {
  const [formState, setFormState] = useState({
    photo_url: "",
    body: "",
    date: "",
    trip_id: entry[0].trip_id,
  });

  console.log(counter)

  // Event handlers to capture data from form
  const handleChange = (ev) => {
    setFormState({ ...formState, [ev.target.name]: ev.target.value });
    console.log(formState);
  };

  const handleSubmit = (ev) => {
    console.log(formState);
    axios({
      method: "patch",
      url: `${process.env.REACT_APP_API_URL}/entries/${entry[counter].id}`,
      data: formState,
    });
  };

  return (
    <div>
      <form className="editEntryForm">
        <h3>Edit Entry</h3>
        <label>
          Image
          <input
            type="text"
            name="photo_url"
            placeholder="New Image URL"
            onChange={handleChange}
          ></input>
        </label>
        <label>
          Date
          <input type="date" name="date" onChange={handleChange}></input>
        </label>
        <label>
          Description
          <textarea
            type="text"
            name="body"
            placeholder="New Description"
            onChange={handleChange}
          ></textarea>
        </label>
        <button onClick={handleSubmit}>Submit</button>
        <button onClick={closeModal}>Cancel</button>
      </form>
    </div>
  );
}

export default EditEntry;
