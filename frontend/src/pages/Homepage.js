import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import Navigation from '../components/Navigation';



const Homepage = () => {
    return(
        <>
            <div className='Homepage'>
                <Navigation/>
                
                <h1>Dazibao la louviere  🧮</h1>
                

                <p>
                    Bienvenue sur le Dazibao de la librairire la louviere, amusez-vous !
                </p>

               
               
                <form>
                    <input type="text" placeholder='Quelle livre cherchez-vous ?'/>
                    <button>Recherche</button>

                </form>

            
            </div>
        </>
    )
}

export default Homepage;