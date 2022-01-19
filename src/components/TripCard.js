import React from 'react';

function TripCard(props) {
    console.log(props.trip)
    return (
        <div className = "tripCard">
            <div className = "tripContent">
                <h3>{props.trip.location}</h3>
            </div>
        </div>
    );
}

export default TripCard;