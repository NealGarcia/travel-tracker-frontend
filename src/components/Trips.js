import React, { useState, useEffect, useRef }from 'react';
import TripCard from './TripCard';
import { Link } from "react-router-dom";
import Modal from 'react-modal';
import CreateTrip from './CreateTrip';

const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

function Trips(props) {
    const ref = useRef()
    // State Variables
    const [trips, setTrips] = useState([])
    const [modalIsOpen, setIsOpen] = useState(false);

    // API Fetch
    useEffect(()=>{
        const url = `http://localhost:8000/trips/?format=json`
        fetch(url)
            .then((res) => res.json())
            .then((json) => {
                setTrips(json)
            })
            .catch(console.error)
    }, []);

    // Modal open/close event handlers
    function openModal() {
        setIsOpen(true);
    }

    function closeModal() {
        setIsOpen(false);
    }

    useEffect(() => {
        const checkIfClickedOutside = e => {
          // If the modal is open and the clicked target is not within the modal,
          // then close the modal
            if (modalIsOpen && ref.current && !ref.current.contains(e.target)) {
            setIsOpen(false)
            }
        }
        document.addEventListener("mousedown", checkIfClickedOutside)
        return () => {
            // Cleanup the event listener
            document.removeEventListener("mousedown", checkIfClickedOutside)
          }
    }, [modalIsOpen])

    return (
        <div className = "tripContainer">
            <div className = "tripCard" 
                 id = "newTrip"
                 onClick = {openModal}
                 ref = {ref}>
                <Modal
                    isOpen={modalIsOpen}
                    onRequestClose={closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <CreateTrip 
                        closeModal={closeModal}
                    />
                </Modal>
                <p>Create New Trip</p>
            </div>
            {trips.map((trip) => (
                    <TripCard trip = {trip}/>
            ))}
        </div>
    );
}

export default Trips;