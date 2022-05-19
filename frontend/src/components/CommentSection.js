import React, { useState , useEffect,useContext } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DisplayComment from './DisplayComment';
import '../styles/components/CommentSection.css';
import {AuthContext} from '../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';


function CommentSection(props) {

    const { isAuthenticated, setIsAuthenticated }  = useContext(AuthContext);
    const [comments , setComments] = useState([]);
    const [name,setName] = useState('');
    const [newcomment,setNewcomment] = useState('');
    const [sendComment , setSendComment] = useState(false);
    const  {bookId} = useParams();
    const navigate = useNavigate();

    useEffect(() => {
     //recuperer tous les commentaires
        axios.get("http://localhost:5000/api/books/single/"+bookId+"/comments").
        then((response) => {
          const resultat = response.data;
          setComments(resultat);
          console.log(resultat);
          console.log(comments);
        });
      }, []);

      useEffect(() => {
        //recuperer tous les commentaires apres l'envoie d'un nouveau commentaires
           axios.get("http://localhost:5000/api/books/single/"+bookId+"/comments").then((response) => {
             setComments(response.data);
           });
         }, [sendComment]);

//ajout d'un nouveau commentaire
    const addComment = () => {
        axios
          .post("http://localhost:5000/api/books/single/"+bookId+"/comment", {
           description: newcomment,
          },
          
          {
            headers : {accessToken:localStorage.getItem("accessToken"),},
          })
          .then((response) => {
           /* const commentToAdd = {  description: newcomment,
                                       };
            setComments([...comments, commentToAdd]);*/
            setSendComment(!sendComment);
            setNewcomment("");
          });
      }
   

    //recuperer la valeur des inputs
    const handleChangeName = (e)=>{
        setName(e.target.value) ;
    }

    const handleChangeComment = (e)=>{
        setNewcomment(e.target.value);
    }
//fonction d'envoie du formulaire
    /*const handleSubmit = (e)=>{
        e.preventDefault();
        addComment();

    }  */
    return (


        
       <div className='comments-section'>
         <h2> <strong>Avis :</strong> {comments.length}</h2>

         { isAuthenticated ?

              <div className='comments_form'>
           
                    <textarea className = '' value={newcomment}  htmlFor = 'comment' onChange={handleChangeComment} placeholder="Donnez votre avis..."></textarea>
                    <button onClick={addComment}><b>Ajouter votre comentaire</b> </button>
              </div>    

              :

              <NavLink to='/Connexion' className='Connexion'>Connectez vous pour ajouter un avis</NavLink>


         }
          
      
       

          

         <div className='Comments_display'>
         
          {comments.map((comment, index) => {
            return (
              <div className='comment-name' key={index}>
                  <div className='comment-head'>
                        <i className="fa-solid fa-circle-user fa-2x" ></i>
                        <div className=''>
                            <h3>{comment.name} </h3>
                            <h6>{comment.publisheddate}</h6>
                          
                        </div>
                        
                  </div>
                    
                    <p>{comment.description}</p>
               </div>
            
            );
          })}
        </div>
            
         
       

        
        </div>
      
        
    );
}

export default CommentSection;