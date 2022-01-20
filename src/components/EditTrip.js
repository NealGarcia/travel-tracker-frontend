import React, {useState} from "react";
import axios from "axios";

function EditTrip({entry, data, closeTripModal}) {
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
          url: `http://localhost:8000/trips/${data.id}`,
          data: formState,
        });
      };

      function onDelete(){
          axios.delete(`http://localhost:8000/trips/${data.id}`)
      }
      
      console.log(data.id)

  return (
    <div>
      <div>
        <form className="editTripForm">
          <h3>Edit Trip</h3>
          <label>
            Location
            <input
              type="text"
              name="location"
              placeholder="Location"
              onChange={handleChange}
            ></input>
          </label>
          <label>
            Start Date
            <input
              type="date"
              name="start_date"
              onChange={handleChange}
            ></input>
          </label>
          <label>
            End Date
            <input type="date" name="end_date" onChange={handleChange}></input>
          </label>
          <button onClick={handleSubmit}>Submit</button>
          <button onClick = {onDelete}>Delete</button>
          <button onClick={closeTripModal}>Cancel</button>
        </form>
      </div>
    </div>
  );
}

export default EditTrip;
