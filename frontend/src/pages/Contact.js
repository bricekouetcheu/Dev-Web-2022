import React from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../components/Navigation';


const Contact = () => {
    return(
        <div>
            <Navigation/>
            
            <h1>Bienvenue sur la page contact</h1>
            
            <form>
                    <input type="text" placeholder='nous ecrir un message ?'/>
                    <button>envoyer</button>

                </form>

        </div>
    )
}

export default Contact