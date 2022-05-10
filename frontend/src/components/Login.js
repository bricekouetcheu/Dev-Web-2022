import React, { useState , useContext,  useEffect } from 'react';
import { useNavigate } from 'react-router-dom'
import Navigation from './Navigation';
import '../styles/components/login.css';
import axios from 'axios';
import { Validator } from 'react';
import validator from 'validator';
import { AuthContext } from '../contexts/AuthContext';



const Login = ({Switch} ) => {
    const navigate = useNavigate();
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const {isAuthenticated, setIsAuthenticated}  = useContext(AuthContext);
    const [errorMessages , setErrorMessages] = useState('');


    const handleEmailChange = (e)=>{
       setEmail(e.target.value);
      
    };

    const handlePasswordChange = (e)=>{
        setPassword(e.target.value);
    };

   

    const handleSubmit = async(e) =>{
        e.preventDefault();

        const data = {email:email , password:password};
        axios.post('http://localhost:5000/api/users/login' , data)
        .then((response)=>{
            if(response.data.error){
                alert(response.data.error);
                setErrorMessages(response.data.error);
            }else{
                const token = response.data;
                localStorage.setItem("accessToken" , token);
                setIsAuthenticated(true);
                navigate('/');
            }
           
        }
        );
        
   

    }

  

    
    return(


        <div>
             <Navigation/>
              <div className='login'>
                <form className='form-login' onSubmit={handleSubmit}>
                    <h2>CONNEXION</h2>
                     <div className='user-icon'>
                         <i className="fa-solid fa-user fa-4x"></i>< br />< br />
                    </div>

                    <div className='inputs'>
   
                        <input className='name' value={email} type='email' onChange={handleEmailChange} placeholder='email'/>
                        <input className='name' value={password} type='password'onChange={handlePasswordChange} placeholder='mot de passe'/>
                  
                    </div>


                    <div align='center'>
                      
                        <input className='submit-btn' value='submit' type='submit'/>< br />
                        <a><h6 className='inscription' onClick={Switch}>pas encore de compte?</h6></a>
                    </div>

                 </form>
        
              </div>

            
            </div>
            
            
            
        
    )
}

export default Login