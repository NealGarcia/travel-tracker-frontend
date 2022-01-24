import React from "react";
import { Link } from "react-router-dom";

function TripCard({ trip, trips }) {
  // Reformat dates from YYYY-DD-MM to DD/MM/YYYY
  var initial_start_date = trip.start_date.split("-").reverse();
  var initial_end_date = trip.end_date.split("-").reverse();
  var new_start_date = [
    initial_start_date[1],
    initial_start_date[0],
    initial_start_date[2],
  ].join("/");
  var new_end_date = [
    initial_end_date[1],
    initial_end_date[0],
    initial_end_date[2],
  ].join("/");

  console.log(trip.entry.length);
  return (
    <Link to={`/trip/${trip.id}`} id = "tripCardWhole">
      <h3 className="tripName">{trip.location}</h3>
      <p className="tripDates">
        {new_start_date} - {new_end_date}
      </p>

      <div className="tripCard">
          {trip.entry.length === 0 && <p id = "entryCount"> No Image</p>}
        <div className="imageWrap">
          {trip.entry.length > 0 && (
            <img
              className="cardImg"
              src={trip.entry[0].photo_url}
              alt="tripImg"
            />
          )}
        </div>
      </div>
    </Link>
  );
}

export default TripCard;
