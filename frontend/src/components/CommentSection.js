import React, { useState , useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DisplayComment from './DisplayComment';

function CommentSection(props) {

    const [name , setName] = useState('');
    const [newcomment,setNewcomment] = useState('');
    const [comments , setComments] = useState();
    const  {bookId} = useParams();

    useEffect(() => {
     //recuperer tous les commentaires
        axios.get("http://localhost:5000/api/books/single/"+bookId+"/comments").then((response) => {
          setComments(response.data);
        });
      }, []);

//ajout d'un nouveau commentaire
    const addComment = () => {
        axios
          .post("http://localhost:5000/api/books/single/"+bookId+"/comment", {
           description: newcomment,
            authors: name
          })
          .then((response) => {
            const commentToAdd = {  description: newcomment,
                                        authors: name};
            setComments([...comments, commentToAdd]);
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
    const handleSubmit = (e)=>{
        e.preventDefault();

    }  
    return (

        <>
          <div className='comment_form'>
                <label className=''>Nom</label>
                <input className='' value={name} for='name' onChange={handleChangeName }/><br/>
                <label className=''>votre commentaire</label>
                <textarea className ='' value={newcomment}  for= 'comment' onChange={handleChangeComment}></textarea>
                <button onSubmit=''>Ajouter</button>
           </div>

         <div className='Comment_display'>
             <ul>
                 {comments.map((index , data)=>{
                    <DisplayComment
                    key={index}
                    authors={data.authors} 
                    description ={data.description}/>

                 })} ;
                 
                 
             </ul>
            
         
        </div>

        
        </>
      
        
    );
}

export default CommentSection;