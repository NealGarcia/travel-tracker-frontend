import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Entry from '../Entry/Entry';
import './TripDetails.css'

function TripDetails(props) {
    const [data, setData] = useState({
        location: "",
        start_date: "",
        end_date: "",
        entry: ""
    })
    if (data.entry !== undefined)
        var entry = data.entry;

    useEffect(() => {
        async function getData() {
          const request = fetch(`${process.env.REACT_APP_API_URL}/trips/${props.match.params.id}?format=json`);
          const response = await request;
          const parsed = await response.json();
          setData(parsed);
        }
        getData();
      }, []);

    // console.log(data)

    // Reformat dates from YYYY-DD-MM to DD/MM/YYYY
    var initial_start_date = (data.start_date.split("-").reverse())
    var initial_end_date = (data.end_date.split("-").reverse())
    var new_start_date = ( [ initial_start_date[1], initial_start_date[0], initial_start_date[2] ].join('/'))
    var new_end_date = ( [ initial_end_date[1], initial_end_date[0], initial_end_date[2] ].join('/'))
    
    return (
        <div className = "tripDetails">
            <Link to = "/" className = "backButton"><p>Go Back</p></Link>
            <h1 className = "detailsTitle"> {data.location}</h1>
            <p className = "detailsDate">{data.entry.date}</p>
            <Entry 
                entry = {entry}
                data = {data}/>
        </div>
    );
}

export default TripDetails;