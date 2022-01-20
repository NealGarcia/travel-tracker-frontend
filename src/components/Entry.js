import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

function Entry({ entry }) {
  const [value, setValue] = useState(0);

  // Loading if data is still undefined, return message
  if (entry === undefined) return <h3>Loading</h3>;
  // If no entries, return message
  if (entry !== undefined) {
    if (entry.length === 0) {
      return <h3>No Entries Found</h3>;
    }
  }

  console.log(entry);
  console.log(entry[0].photo_url);

  return (
    <div className="entry">
      {/* {entry.map((entry) => (
        <div>
          <h3>{entry.body}</h3>
          <img src={entry.photo_url} alt="entryPhoto" /> */}
      {/* </div>
      ))} */}

      <div className="container">
        <img src={entry[value].photo_url} alt={entry[value].id} />
        <h2>{entry[value].date}</h2>
        <h3>{entry[value].body}</h3>
        <div>
          <button
            type="button"
            onClick={() => (value === 0 ? setValue(3) : setValue(value - 1))}
          >
            <BsFillArrowLeftCircleFill />
          </button>
          <button
            type="button"
            onClick={() => (value === 3 ? setValue(0) : setValue(value + 1))}
          >
            <BsFillArrowRightCircleFill />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Entry;
