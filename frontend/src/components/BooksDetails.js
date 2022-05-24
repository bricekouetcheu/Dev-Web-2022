import axios from 'axios';
import React, { useEffect, useState } from 'react';
import '../styles/components/bookDetails.css';
import CommentSection from './CommentSection';

function BooksDetails(props) {
  
    
    return (
       <div>
                 <div className='book-details'>
             <div className='image-section'>
                 <img src={props.imageLinks} alt={props.title}/> <br/> <br/>

            </div>
            <div className='infos-sections'>
                <h2>TITRE : {props.title}</h2>
                <h3>DESCRIPTION <h6>{props.description} </h6></h3>
                <h3>AUTEURS : {props.auteurs}</h3> 
                <h3>DATE DE PUBLICATION : {props.publishedDate}</h3>
            </div>
  
        </div>
        <CommentSection/>
       </div>
       

       
    );
}

export default BooksDetails;