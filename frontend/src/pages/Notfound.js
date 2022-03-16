import React from "react";
import { NavLink } from 'react-router-dom';
import Navigation from './Navigation';

const NotFound = () => {
    return(
        <div>
            <Navigation/>
            <h1>ERREUR 404</h1>
            <p>
                page de contact
            </p>
        </div>
    )
}

export default NotFound