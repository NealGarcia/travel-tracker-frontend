import React from 'react';

function Footer(props) {
    let url = "https://www.nealgarcia.com"
    return (
        <div className = "footer">
            <a href = {url} target="_blank" rel="noreferrer"><span>Neal Garcia</span></a> ©2022
        </div>
    );
}

export default Footer;