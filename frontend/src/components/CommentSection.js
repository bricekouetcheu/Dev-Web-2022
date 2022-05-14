import React, { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DisplayComment from './DisplayComment';

function CommentSection(props) {
    const [comments , setComments] = useState([]);
    const [name,setName] = useState('');
    const [newcomment,setNewcomment] = useState('');
    const [sendComment , setSendComment] = useState(false);
    const  {bookId} = useParams();

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

        <>
          <div className='comment_form'>
              
                <textarea className = '' value={newcomment}  htmlfor= 'comment' onChange={handleChangeComment}></textarea>
                <button onClick={addComment}>Ajouter votre comentaire </button>
           </div>

         <div className='Comment_display'>
         
          {comments.map((comment, key) => {
            return (
              <div>
                    <i className="fa-solid fa-circle-user fa-2px" ></i>
                    <h3>{comment.name}</h3>
                    <h4>{comment.publisheddate}</h4>
                    <p>{comment.description}</p>
               </div>
            
            );
          })}
        </div>
            
         
       

        
        </>
      
        
    );
}

export default CommentSection;