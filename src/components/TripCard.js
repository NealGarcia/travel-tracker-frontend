import React from 'react';
import { Link } from "react-router-dom";


function TripCard(props) {
    return (
        <Link to = {`/trip/${props.trip.id}`}>
            <div className = "tripCard">
                <div className = "tripContent">
                    <h3>{props.trip.location}</h3>
                </div>
            </div>
        </Link>
    );
}

export default TripCard;