import React from 'react';
import './Footer.css';

function Footer ({developTag}){
    return (
        <div className="footer-div">
            <p>{developTag}</p>
        </div>
    );
}

export {Footer};