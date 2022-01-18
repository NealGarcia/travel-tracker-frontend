import React, { useState, useEffect }from 'react';
import TripCard from './TripCard';

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
            {trips.map((trip) => (
                <div className='tripCard'>
                    <TripCard trip = {trip}/>
                </div>
            ))}
        </div>
    );
}

export default Trips;