import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Entry({entryUrl}) {
    if (entryUrl !== undefined){
        if(entryUrl.length === 0){
            var error = "No entries found"
        }
    }



    return (
        <div className = "entry">
            {error}
        </div>
    );
}

export default Entry;