import React from 'react';
import './Navbar.scss';

function Navbar(props) {
    return (
        <div>
            <h2 onClick={ () => props.logoClick()}>Weather App</h2>
        </div>
    )
}

export default Navbar
