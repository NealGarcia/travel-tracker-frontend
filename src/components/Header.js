import React from 'react';
import { Link } from "react-router-dom";


function Header(props) {
    return (
        <div className = 'header'>
            <Link to="/">
                <h1>travel-trackr</h1>
            </Link>
        </div>
    );
}

export default Header;