import Header from "./components/Header";
import Trips from "./components/Trips";
import TripDetails from './components/TripDetails'
import { Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

function App() {
  return (
    <div>
      <Header />
      <Route path = "/" exact component = {Trips}/>
      {/* <Trips /> */}
      <Route path = "/trip/:id" exact component = {TripDetails}/>
    </div>
  );
}

export default App;
