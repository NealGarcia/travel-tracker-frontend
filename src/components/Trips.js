import React, { useState, useEffect } from "react";
import TripCard from "./TripCard";
import Modal from "react-modal";
import CreateTrip from "./CreateTrip";
import { BsPlusCircle } from "react-icons/bs";

// modal styles
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

function Trips(props) {
  // State Variables
  const [trips, setTrips] = useState([]);
  const [modalIsOpen, setIsOpen] = useState(false);
  // API Fetch
  useEffect(() => {
    const url = `http://localhost:8000/trips/?format=json`;
    fetch(url)
      .then((res) => res.json())
      .then((json) => {
        setTrips(json);
      })
      .catch(console.error);
  }, []);

  // Modal open/close event handlers
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  if (trips === undefined) return <h3>Loading</h3>;
  console.log(trips);

  return (
    <div className="trips">
      <h2 className="splash">
        Document and relive your journeys and experiences.
      </h2>
      <h2 className="tripHeader">All Trips</h2>
      <div className="tripContainer">
        {trips.map((trip) => (
          <TripCard trip={trip} trips={trips} />
        ))}

        <div className="tripCard" id="newTrip" onClick={openModal}>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Create New Trip"
          >
            <CreateTrip closeModal={closeModal} />
          </Modal>
          <div className="createWrapper">
            <p>Create New Trip</p>
            <BsPlusCircle></BsPlusCircle>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trips;
