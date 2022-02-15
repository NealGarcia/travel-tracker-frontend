import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

function Header(props) {
    return (
        <div className = 'header'>
            <h1><Link to="/">traveltrackr</Link></h1>
            <div className = "navBar">
                <a href="#about" className = "nav">About</a>
                <a href="#search" className = "nav">Sign Out</a>
            </div>
        </div>
    );
}

export default Header;