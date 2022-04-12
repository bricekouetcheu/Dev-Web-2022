import React, { useState } from 'react';
import Register from './Register';
import Login from './Login';

function Test(props) {


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

export default Test;