import React from 'react';
import Navigation from './Navigation';
import '../styles/components/Register.css'
import { useState} from 'react';
import axios from 'axios';
import validator from 'validator';
import {useNavigate} from 'react-router-dom'

function Register(props) {

    const [name , setName] = useState('');
    const [surname , setSurname] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [confPassword , setconfPassword] = useState('');
    const API_URL = 'https://projetdev2022.herokuapp.com/api/users/register';
    const navigate = useNavigate();


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

        alert('nouvel utilisateur enregistré !!!')
        navigate('/');
        e.preventDefault();

    };


    return (
  <div>
      <Navigation/>
         <div className='register'>
        <form className='form-register' onSubmit={handleSubmit}>
                <h2>INSCRIPTION</h2>
                <div className='user-icon'>
                <i className="fa-solid fa-user fa-4x"></i>< br />< br />
                </div>

                <div className='inputs'>
                    <input className='name' type='text' value={name}  onChange={handleNameChange} placeholder='nom' />

              
                     <input className='name' value={surname} type='text' onChange={handleSurnameChange}placeholder='prenom'/>


                    <input className='name' value={email} type='email' onChange={handleEmailChange} placeholder='email'/>


                    <input className='name' value={password} type='password'onChange={handlePasswordChange} placeholder='mot de passe'/>


                    <input className='name' value={confPassword} type='password' onChange={handleConfPasswordChange} placeholder='confirmer mot de passe'/>


                   
                </div>
                <div align='center'>
                <a><p className='inscription' onClick={props.Switch}>vous avez deja un compte?</p></a>
                <input className='submit-btn' value='submit' type='submit'/>< br />
               
                </div>

                

           


        </form>
        
    </div>

  </div>
    


            
      
    );
}

export default Register;