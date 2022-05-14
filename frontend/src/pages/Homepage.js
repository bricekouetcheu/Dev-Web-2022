import React from 'react';
import ReactDOM from 'react-dom';
import { NavLink } from 'react-router-dom';
import Footer from '../components/Footer';
import Navigation from '../components/Navigation';

import Search from '../components/Search';
import '../styles/pages/homepage.css';



const Homepage = () => {
    console.log(localStorage.getItem("accessToken"));
    return(
        <>
        <div className='homepage-section'>
            <Navigation/>
            <div className='body-section'>
                <Search />
                <div>

                </div>
                <Footer/>
            </div>
            
            
        </div>
        
           
        </>
    )
}

export default Homepage;