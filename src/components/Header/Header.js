import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";
import Modal from "react-modal";
import CreateTrip from "../CreateTrip";

// modal styles
const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    borderRadius: "10px",
    border: "0.5px solid white",
    backgroundColor: "rgb(200, 200, 200)",
  },
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
};

function Header(props) {
  const [modalIsOpen, setIsOpen] = useState(false);

  // Modal open/close event handlers
  function openModal() {
    setIsOpen(true);
  }

  function closeModal() {
    setIsOpen(false);
  }

  return (
    <div className="header">
      <div className="navBar">
        <h1 className="title">
          <Link to="/">travlr</Link>
        </h1>
        <div className="navLinks">
          <a href="#Trips" className="nav">
            <Link to="/">View Trips</Link>
          </a>
          <a href="#add" className="nav" onClick={openModal}>
            Add Trip
          </a>
          <Modal
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
            style={customStyles}
            contentLabel="Create New Trip"
          >
            <CreateTrip closeModal={closeModal} />
          </Modal>
          <a href="#search" className="nav">
            About
          </a>
        </div>
      </div>
    </div>
  );
}

export default Header;
