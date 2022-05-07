import axios from 'axios';
import React, { useEffect, useReducer, useState } from 'react';
import '../styles/components/bookDetails.css';

function BooksDetails(props) {
    //declaration des proprietés

   /* const titre= props.title;*/
    const img = props.img;
    const description = props.description;
    const auteurs = props.authors;
    const date_de_publication = props.publishedDate;

    const book_id = props.book_id;

    const Commentaires = props.Commentaires;
    const publishedDate = props.publishedDate;
    const name = props.name;
    const surname = props.surname;

    console.log("boook id" + book_id)



    
    
    return (
        <>
        <div className='book-details'>
             <div className='image-section'>
                 <img src={props.imageLinks} alt={props.title}/> <br/> <br/>

            </div>
            <div className='infos-sections'>
                <h2>TITRE : {props.title}</h2>
                <h6>DESCRIPTION : {props.description} </h6>
                <p><h3>AUTEURS :</h3> {props.auteurs}</p>
                <p><h3>DATE DE PUBLICATION : </h3>{props.publishedDate}</p>
            </div>
        </div>

        <div className='infos-sections'>
            <h1>Commentaires</h1>
            <div className='infos-sections'>
                <h2>{name} {surname}</h2>
                <p>Date : {publishedDate}</p>
                <p>{Commentaires}</p>
            </div>

        </div>
        

        </>
    );
}

export default BooksDetails;