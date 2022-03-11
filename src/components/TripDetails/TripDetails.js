import React, { useEffect, useState } from 'react';
import { Link } from "react-router-dom";
import Entry from '../Entry/Entry';
import './TripDetails.css'
import  { BiArrowBack } from 'react-icons/bi'

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
    
    return (
        <div className = "tripDetails">
            <Link to = "/" className = "backButton"><BiArrowBack /></Link>
            <h1 className = "detailsTitle"> {data.location}</h1>
            <p className = "detailsDate">{data.entry.date}</p>
            <Entry 
                entry = {entry}
                data = {data}/>
        </div>
    );
}

export default TripDetails;