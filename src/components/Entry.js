import React, { useState } from "react";
import { BsFillArrowRightCircleFill } from "react-icons/bs";
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import Modal from "react-modal";
import CreateEntry from "./CreateEntry";
import axios from "axios";
import EditEntry from "./EditEntry"
import EditTrip from "./EditTrip"

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

function Entry({ entry, data }) {
  const [counter, setCounter] = useState(0);
  const [createModal, setCreateModal] = useState(false);
  const [editModal, setEditModal] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [editTripModal, setEditTripModal] = useState(false);

  console.log(data)

  // Loading if data is still undefined, return message
  if (entry === undefined) return <h3>Loading</h3>;
  // If no entries, return message and render buttons to create new entry
  if (entry !== undefined) {
    if (entry.length === 0) {
      return( 
        <>
          <h3>No Entries Found</h3>
          <button onClick = {openCreateModal}>Add a New entry</button>
          <button id="editTrip" onClick = {openTripModal}>
                Edit Trip
              </button>
          <Modal
          isOpen={createModal}
          onRequestClose={closeCreateModal}
          style={customStyles}
          contentLabel="Create New Entry"
        >
          <CreateEntry closeCreateModal={closeCreateModal} entry={entry} data={data}/>
        </Modal>
        <Modal
                isOpen = {editTripModal}
                onRequestClose = {closeTripModal}
                style={customStyles}
                contentLabel="Edit Trip">
                  <EditTrip closeCreateModal={closeTripModal} entry={entry} data = {data}/>
                </Modal>
        </>
      )
    }
  }

  // Modal open/close event handlers
  function openCreateModal() {
    setCreateModal(true);
  }
  function openEditModal() {
    setEditModal(true)
  }
  function openTripModal() {
    setEditTripModal(true)
  }
  function closeCreateModal() {
    setCreateModal(false);
  }
  function closeEditModal() {
    setEditModal(false)
  }
  function closeTripModal() {
    setEditTripModal(false)
  }
  

  var entryId = entry[counter].id;
  console.log(entryId);
  console.log(entry[counter].id);

  // Delete Request
  function onDelete(entry) {
    axios.delete(`http://localhost:8000/entries/${entryId}`);
    window.location.reload();
  }

  console.log(entry);

  return (
    <div className="entry">
      <div className="container">
        <img
          src={entry[counter].photo_url}
          alt={entry[counter].id}
          className="entryImg"
        />
        <h2>{entry[counter].date}</h2>
        <h3>{entry[counter].body}</h3>

        <p>
          {counter + 1}/{entry.length}
        </p>

        <div className="arrowButtons">
          {/* Click Image Left */}
          <button
            type="button"
            id="buttonLeft"
            // If counter is at index 0, click to the end of the array
            onClick={() =>
              counter === 0
                ? setCounter(entry.length - 1)
                : setCounter(counter - 1)
            }
          >
            <BsFillArrowLeftCircleFill />
          </button>
          {/* Click Image Right */}
          <button
            type="button"
            id="buttonRight"
            // if counter is at the end of array, reset to index 0
            onClick={() =>
              counter === entry.length - 1
                ? setCounter(0)
                : setCounter(counter + 1)
            }
          >
            <BsFillArrowRightCircleFill />
          </button>
        </div>
        <button className="newEntry" onClick={openCreateModal}>
          New Entry
        </button>
        <Modal
          isOpen={createModal}
          onRequestClose={closeCreateModal}
          style={customStyles}
          contentLabel="Create New Entry"
        >
          <CreateEntry closeCreateModal={closeCreateModal} entry={entry} data={data} />
        </Modal>

        <BiDotsHorizontalRounded onClick={() => setShowEdit(!showEdit)} />

        <div>
          {showEdit ? (
            <div className="editButtons">
              <button id="editEntry" onClick = {openEditModal}>
                Edit Entry
              </button>
              <button id="editTrip" onClick = {openTripModal}>
                Edit Trip
              </button>
              <button id="deleteButton" onClick={onDelete}>
                Delete
              </button>

              <Modal
                isOpen = {editTripModal}
                onRequestClose = {closeTripModal}
                style={customStyles}
                contentLabel="Edit Trip">
                  <EditTrip closeCreateModal={closeTripModal} entry={entry} data = {data}/>
                </Modal>



              <Modal
                isOpen = {editModal}
                onRequestClose = {closeEditModal}
                style={customStyles}
                contentLabel="Edit Entry">
                  <EditEntry closeCreateModal={closeEditModal} entry={entry} counter={counter}/>
                </Modal>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}
export default Entry;
