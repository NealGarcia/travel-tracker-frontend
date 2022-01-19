import React, { useState } from 'react';

function CreateTrip({closeModal}) {
    const [location, setLocation] = useState('')
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    // send Data to API
    const postData = () => {
        console.log(location)
        console.log(startDate)
        console.log(endDate)

    }

    return (
        <div>
            <form className = "createTripForm">
                <h3>Create a New Trip</h3>
                <label>Location 
                    <input 
                        type = "text"
                        placeholder = "Location"
                        onChange = {(ev) => setLocation(ev.target.value)}
                    ></input>
                </label>
                <label>Start Date 
                    <input 
                        type = "date"
                        placeholder = "Start Date"
                        onChange = {(ev => setStartDate(ev.target.value))}
                    ></input>
                </label>
                <label>End Date 
                    <input 
                        type = "date"
                        placeholder = "End Date"
                        onChange = {(ev => setEndDate(ev.target.value))}
                    ></input>
                </label>
                <button onClick = {postData}>Submit</button>
                <button onClick = {closeModal}>Cancel</button>
            </form>
        </div>
    );
}

export default CreateTrip;