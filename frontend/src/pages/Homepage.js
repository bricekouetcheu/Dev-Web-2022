import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Register from './Register';
import Search from '../components/Search';



const Homepage = () => {
    return(
        <>
        <div className='homepage'>
            <Navigation/>
            <Search/>
            
        </div>
        
           
        </>
    )
}

export default Homepage;