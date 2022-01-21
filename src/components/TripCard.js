import React from "react";
import { Link } from "react-router-dom";

function TripCard({ trip, trips }) {
  if (trip.entry.length > 0) {
    console.log(trip.entry[0].photo_url);
  }

  return (
    <Link to={`/trip/${trip.id}`}>
      <div className="tripCard">
        <h3>{trip.location}</h3>
        {trip.entry.length > 0 && (
        <img className="cardImg" src={trip.entry[0].photo_url} alt="tripImg" />
      )}
      </div>
      
    </Link>
  );
}

export default TripCard;
