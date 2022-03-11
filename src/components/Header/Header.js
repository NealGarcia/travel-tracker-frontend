import React from 'react';
import { Link } from "react-router-dom";
import './Header.css';

function Header(props) {
    return (
        <div className = 'header'>
            <div className = "navBar">
                <h1 className = "title"><Link to="/">travly</Link></h1>
                <div className = "navLinks">
                    <a href="#Trips" className = "nav">View Trips</a>
                    <a href="#search" className = "nav">About</a>
                </div>
            </div>
        </div>
    );
}

export default Header;