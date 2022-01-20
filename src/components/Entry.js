import React, { useState, useEffect, useCallback } from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button } from "@mui/material";

function Entry({ entry }) {
  // Loading if data is still undefined, return message
  if (entry === undefined) return <h3>Loading</h3> 
  // If no entries, return message
  if (entry !== undefined) {
    if (entry.length === 0) {
      return <h3>No Entries Found</h3>
    }
  }

  console.log(entry)
  console.log(entry[0].photo_url)

  return (
    <div className="entry">
      {entry.map((entry) => (
        <div>
          <h3>{entry.body}</h3>
          <img src = {entry.photo_url}alt ='entryPhoto'/>
        </div>
      ))}







    </div>
  );
}
export default Entry;
