import React, { useState } from 'react';
import Register from '../components/Register';
import Login from '../components/Login';
import Footer from '../components/Footer';

function Connexion(props) {


    const [login , setlogin]= useState(false);

    const toggle = ( )=>{

        setlogin(!login);
    }


    return (
        <div>
            {login?<Login Switch = {toggle}/>:<Register Switch={toggle}/>}
            <Footer/>
            
        </div>

       
    );
}

export default Connexion;