import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import Navigation from '../components/Navigation';

import Search from '../components/Search';
import '../styles/pages/homepage.css';



const Homepage = () => {
    console.log(localStorage.getItem("accessToken"));
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