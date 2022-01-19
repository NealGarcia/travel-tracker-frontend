import React from 'react';

function TripCard(props) {
    console.log(props.trip)
    return (
        <div className = "tripCard">
            <h3>{props.trip.location}</h3>
        </div>
    );
}

export default TripCard;