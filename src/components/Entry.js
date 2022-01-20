import React, { useState } from "react";
import ReactDOM from "react-dom";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";

function Entry({ entry }) {
  const [counter, setCounter] = useState(0);

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
  console.log(entry.length);

  return (
    <div className="entry">
      <div className="container">
        <img
          src={entry[counter].photo_url}
          alt={entry[counter].id}
          className="entryImg"
        />
        <h2>{entry[counter].date}</h2>
        <h3>{entry[counter].body}</h3>
        <div>
          {/* Click Image Left */}
          <button
            type="button"
            id="buttonLeft"
            // If counter is at index 0, click to the end of the array
            onClick={() =>
              counter === 0
                ? setCounter(entry.length - 1)
                : setCounter(counter - 1)
            }
          >
            <BsFillArrowLeftCircleFill />
          </button>
          {/* Click Image Right */}
          <button
            type="button"
            id="buttonRight"
            // if counter is at the end of array, reset to index 0
            onClick={() =>
              counter === entry.length - 1
                ? setCounter(0)
                : setCounter(counter + 1)
            }
          >
            <BsFillArrowRightCircleFill />
          </button>
        </div>
      </div>
    </div>
  );
}
export default Entry;
