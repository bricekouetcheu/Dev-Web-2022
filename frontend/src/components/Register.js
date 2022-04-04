import React, { useState } from 'react';
import '../styles/components/Register.css'

const Register = () => {

    const [name , setName] = useState('');
    const [surname , setSurname] = useState('');
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [confPassword , setconfPassword] = useState('');

    const handleNameChange = (e)=>{
        setName(e.target.value);
    }

    const handleSurnameChange = (e)=>{
        setSurname(e.target.value);
    }

    const handleEmailChange = (e)=>{
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e)=>{
        setPassword(e.target.value)
    }

    const handleConfPasswordChange = (e)=>{
        setconfPassword(e.target.value)
    }


    const handleSubmit = (e)=>{
        if(password!== confPassword){
            alert('les mots de passe ne correspondent pas');

        }else{
            alert('nouvel utilisateur crée');
        }

        e.preventDefault();

    }

    return (
        <div className='register'>
            <form className='form-register'>
                    <h2>INSCRIPTION</h2>
                    <div className='user-icon'>
                    <i class="fa-solid fa-user fa-4x"></i>< br />< br />
                    </div>

                    <div className='inputs'>
                        <input className='name' type='text' value={name} placeholder='nom' />

                  
                         <input className='name' value={surname} type='text' placeholder='prenom'/>


                        <input className='name' value={email} type='email' placeholder='email'/>


                        <input className='name' value={password} type='password' placeholder='mot de passe'/>


                        <input className='name' value={confPassword} type='password' placeholder='confirmer mot de passe'/>


                       
                    </div>
                    <div align='center'>
                    <p className='inscription'>vous avez deja un compte?</p>
                    <input className='submit-btn' value='submit' type='submit'/>< br />
                   
                    </div>

                    

               


            </form>
            
        </div>
    );
};

export default Register;