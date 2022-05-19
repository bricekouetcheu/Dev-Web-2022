/*import React, { useContext } from 'react';
import Auth from '../contexts/Auth';
import { Route , Navigate} from 'react-router-dom';
<AuthenticatedRoutes path ='/profile' element={<Profile/>} />



function AuthenticatedRoutes(props) {
    const path = props.path;
    const element = props.element;

    const {isAuthenticated} = useContext(Auth);
    return isAuthenticated? (
      <Route exact path = {path} element = {element}/>

    ):
    ( <Navigate to ='/Connexion'/>)
}



(!isAuthenticated && (
                  <>
                   <NavLink to='/Connexion' className='connexion'><li>Connexion</li></NavLink>
                  </>
                )) || (
                  <>
                      <NavLink to='/Deconnexion' className='connexion'><li>Deconnexion</li></NavLink>
                  </>
                )






                      if (validator.isEmail(email)!== true) {
            alert("attention à votre email");
          } 
       else{
            axios.post(API_URL, {
               
                email: email,
                password:password
              })


              .then( (response)=>{
                  if (response.status == 400){
                      setErrors(true);
                      setErroMessage(response.data.message);
                      setIsAuthenticated(false);
                      console.log({errors});
                      console.log(response.status);
                      console.log({errors});
                      
                      console.log({errorMessage});
                     
                  } else
                   {
                    
                      setToken(response.data.token);
                      addItem('SessionToken ' , token);
                      /*setIsAuthenticated(true);*/
                    /*  console.log({token});*/
                    /*  alert(token);
                   }
                  
              })

             
              .catch(function (error) {
                console.log(error);
               
              });
            
        }
        
        
        e.preventDefault();

export default AuthenticatedRoutes;*/