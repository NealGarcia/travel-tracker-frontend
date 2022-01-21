import Header from "./components/Header";
import Trips from "./components/Trips";
import TripDetails from './components/TripDetails'
import Footer from './components/Footer.js'
import { Route } from "react-router-dom";

function App() {
  return (
    <div>
      <Header />
      <Route path = "/" exact component = {Trips}/>
      <Route path = "/trip/:id" exact component = {TripDetails}/>
      <Footer />
    </div>
  );
}

export default App;
