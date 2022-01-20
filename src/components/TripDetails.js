import React, { useEffect, useState } from 'react';
import axios from "axios";
import { Link } from "react-router-dom";
import Entry from './Entry';

function TripDetails(props) {
    const [data, setData] = useState({
        location: "",
        start_date: "",
        end_date: ""
    })
    
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

    // Reformat dates from YYYY-DD-MM to DD/MM/YYYY
    var initial_start_date = (data.start_date.split("-").reverse())
    var initial_end_date = (data.end_date.split("-").reverse())
    var new_start_date = ( [ initial_start_date[1], initial_start_date[0], initial_start_date[2] ].join('/'))
    var new_end_date = ( [ initial_end_date[1], initial_end_date[0], initial_end_date[2] ].join('/'))
    
    if (data.entry !== undefined)
        var entryUrl = data.entry;

    console.log(entryUrl)

    return (
        <div>
            <h2 className = "test">TEST</h2>
            <Link to = "/" className = "backButton"><p>Go Back</p></Link>
            <h1 className = "detailsTitle"> {data.location}</h1>
            <p className = "detailsDate">{new_start_date} - {new_end_date}</p>
            <Entry entryUrl = {entryUrl}/>
        </div>
    );
}

export default TripDetails;