import React, { useState } from 'react';
import Modal from 'react-modal';

function CreateTrip({closeModal}) {
    return (
        <div>
            <form className = "createTripForm">
                <h3>Create a New Trip</h3>
                <label>Location
                    <input type = "text"></input>
                </label>
                <label>Start Date
                    <input type = "date"></input>
                </label>
                <label>End Date
                    <input type = "date"></input>
                </label>
                <button>Submit</button>
                <button onClick = {closeModal}>Cancel</button>
            </form>
        </div>
    );
}

export default CreateTrip;