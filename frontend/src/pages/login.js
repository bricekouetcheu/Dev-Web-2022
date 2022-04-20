import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import Navigation from '../components/Navigation';
import '../styles/components/login.css';
import axios from 'axios';
import { Validator } from 'react';
import validator from 'validator';





const Login = (props) => {

    const [name , setName] = useState('');
    const [surname , setSurname] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [confPassword , setconfPassword] = useState('');
    const API_URL = 'http://localhost:5000/api/users/register';

    

   

    const handleNameChange = (e)=>{
        setName(e.target.value);
    };

    const handleSurnameChange = (e)=>{
        setSurname(e.target.value);
    };

    const handleEmailChange = (e)=>{
       setEmail(e.target.value);
      
    };

    const handlePasswordChange = (e)=>{
        setPassword(e.target.value);
    };

    const handleConfPasswordChange = (e)=>{
        setconfPassword(e.target.value);
    };


    const handleSubmit = (e)=>{

        if (validator.isEmail(email)!== true) {
            alert("attention à votre email");
          } 
        if(password!== confPassword ){
            alert('les mots de passe ne correspondent pas');

        }else{
            axios.post(API_URL, {
                name: name,
                surname: surname,
                email: email,
                password:password
              })
              .then(function (response) {
                console.log(response);
              })
              .catch(function (error) {
                console.log(error);
              });
            
        }

        

        e.preventDefault();

    };


    
    return(


        <div>
             <Navigation/>
              <div className='login'>
                <form className='form-login' onSubmit={handleSubmit}>
                    <h2>CONNEXION</h2>
                     <div className='user-icon'>
                         <i class="fa-solid fa-user fa-4x"></i>< br />< br />
                    </div>

                    <div className='inputs'>
   
                        <input className='name' value={email} type='email' onChange={handleEmailChange} placeholder='email'/>
                        <input className='name' value={password} type='password'onChange={handlePasswordChange} placeholder='mot de passe'/>
                    </div>


                    <div align='center'>
                        <p className='inscription' onClick={props.Switch}>vous avez deja un compte?</p>
                        <input className='submit-btn' value='submit' type='submit'/>< br />
               
                    </div>

                 </form>
        
              </div>

            
            </div>
            
            
            
        
    )
}

export default Login