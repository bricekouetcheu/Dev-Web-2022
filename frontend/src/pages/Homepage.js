import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import Navigation from '../components/Navigation';
import Search from '../components/Search';



const Homepage = () => {
    return(
        <>
        
            <Navigation/>
            <Search/>
        </>
    )
}

export default Homepage;