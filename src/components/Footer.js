import React from 'react';

function Footer(props) {
    let url = "www.nealgarcia.com"
    return (
        <div className = "footer">
            Designed and coded by <a href = {url} target="_blank" rel="noreferrer"><span>Neal Garcia</span></a> ©2022
        </div>
    );
}

export default Footer;