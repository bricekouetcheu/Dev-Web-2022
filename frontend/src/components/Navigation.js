import React, {useContext, useState} from 'react'
import { NavLink } from 'react-router-dom'
import {AuthContext} from '../contexts/AuthContext';
import '../styles/components/navigation.css';





const Navigation = () => {

    const [isMobile, setIsMobile] = useState(false);
    const { isAuthenticated, setIsAuthenticated }  = useContext(AuthContext);
   
   
    console.log(isAuthenticated);

const logOut = ()=>{
    sessionStorage.removeItem("accessToken");
    setIsAuthenticated(false);

}
  
    
     return(
        
         <nav className='navbar'>
             <h3 className='logo'><strong> Dazibao la louvière</strong> 📚</h3>
             <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
             
             onClick = {()=>setIsMobile(false)}>
                 <NavLink to='/' className='home'> <li>Accueil</li></NavLink>
                 <NavLink to='/Jeunesse' className='jeunesse'> <li>Jeunesse</li></NavLink>
                 <NavLink to='/Roman' className='roman'> <li>Roman</li></NavLink>
                 <NavLink to='/Autre' className='autre'> <li>Autre</li></NavLink>
                {!isAuthenticated ?
                 <NavLink to='/Connexion' className='connexion'><li>Connexion</li></NavLink>
                 :
                 <NavLink to='' className='connexion'><li onClick={logOut}>Deconnexion</li></NavLink>
                
                  
                }
                

             </ul>

             <button className='mobile-menu-icon'
             
             onClick={()=> setIsMobile(!isMobile)}>
                 {isMobile ? <i className='fas fa-times'></i>
                 :
                 <i className='fas fa-bars'></i>}
             </button>

         
		</nav>


    
        
    )
}

export default Navigation