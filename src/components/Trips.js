import React, { useState, useEffect }from 'react';
import TripCard from './TripCard';
import { Link } from "react-router-dom";

function Trips(props) {
    const [trips, setTrips] = useState([])

    useEffect(()=>{
        const url = `http://localhost:8000/trips/?format=json`
        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                setTrips(json)
            })
            .catch(console.error)
    }, []);
    console.log(trips)

    return (
        <div className = "tripContainer">
            <Link>
                <div className = "tripCard" id = "newTrip">
                    <p>Create New Trip</p>
                </div>
            </Link>
            {trips.map((trip) => (
                    <TripCard trip = {trip}/>
            ))}
        </div>
    );
}

export default Trips;