import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/components/navigation.css'





const Navigation = () => {

    const [isMobile, setIsMobile] = useState(false);
    return(
        
         <nav className='navbar'>
             <h3 className='logo'> Dazibao la louviere 📚</h3>
             <ul className={isMobile ? "nav-links-mobile" : "nav-links"}
             
             onClick = {()=>setIsMobile(false)}>
                 <NavLink to='/' className='home'> <li>Acceuil</li></NavLink>
                 <NavLink to='/Jeunesse' className='jeunesse'> <li>Jeunesse</li></NavLink>
                 <NavLink to='/Roman' className='roman'> <li>Roman</li></NavLink>
                 <NavLink to='/Autre' className='autre'> <li>Autre</li></NavLink>
                 <NavLink to='/Login' className='connexion'><li>Connexion</li></NavLink>

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