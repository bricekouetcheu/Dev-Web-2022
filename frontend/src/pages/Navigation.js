import React from 'react'
import { NavLink } from 'react-router-dom'


const Navigation = () => {
    return(
        <div className='navigation'>
            

            <NavLink exact to="/" activeClasseNae="nav-active" id="categorie" > 
                Home
            </NavLink>

            <NavLink exact to="/Roman" activeClasseNae="nav-active" id="categorie" >
                Roman
            </NavLink>

            <NavLink exact to="/Jeunesse" activeClasseNae="nav-active" id="categorie" >
                Jeunesse
            </NavLink>

            <NavLink exact to="/Autre" activeClasseNae="nav-active" id="categorie" >
                Autre
            </NavLink>

            <NavLink exact to="/Contact" activeClasseNae="nav-active" id="categorie" > 
                Contact
            </NavLink>

            <NavLink exact to="/" activeClasseNae="nav-active" id="categorie" >
                Login
            </NavLink>
            
        </div>
    )
}

export default Navigation