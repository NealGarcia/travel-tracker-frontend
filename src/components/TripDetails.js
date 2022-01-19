import React, { useEffect, useState } from 'react';
import axios from "axios";

function TripDetails(props) {
    const [data, setData] = useState([])
    function getData(){
        axios.get(`http://localhost:8000/trips/${props.match.params.id}?format=json`)
            .then((response) => {
                setData(response.data)
            })
    }
    useEffect(() => {
        getData()
    }, [])
    
    console.log(data)

    return (
        <div>
            <h1>{data.location}</h1>
            <p></p>
        </div>
    );
}

export default TripDetails;