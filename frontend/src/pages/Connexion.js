import React, { useState } from 'react';
import Register from '../components/Register';
import Login from '../components/Login';

function Connexion(props) {


    const [login , setlogin]= useState(false);

    const toggle = ( )=>{

        setlogin(!login);
    }


    return (
        <div>
            {login?<Login Switch = {toggle}/>:<Register Switch={toggle}/>}
            
        </div>
    );
}

export default Connexion;