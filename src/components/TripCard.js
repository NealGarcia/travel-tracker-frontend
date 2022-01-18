import React from 'react';

function TripCard(props) {
    console.log(props.trip)
    return (
        <div className = "tripCard">
            test
            <h1>{props.trip.location}</h1>
        </div>
    );
}

export default TripCard;