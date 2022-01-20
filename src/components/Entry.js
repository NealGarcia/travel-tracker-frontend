import React, { useState, useEffect } from "react";
import axios from "axios";

function Entry({ entryUrl }) {
  const [data, setData] = useState({
    photo_url: "",
    body: "",
    date: "",
    trip: "",
  });

  if (entryUrl !== undefined) {
    if (entryUrl.length === 0) {
      var error = "No entries found";
    }
  }

  useEffect(() => {
    async function getData() {
      const request = fetch(entryUrl);
      const response = await request;
      const parsed = await response.json();
      setData(parsed);
    }
    getData();
  }, []);

  if (data === undefined) return null;

  console.log(entryUrl);
  console.log(data);

  return (
    <div className="entry">
        {error}
    </div>
  );
}

export default Entry;
