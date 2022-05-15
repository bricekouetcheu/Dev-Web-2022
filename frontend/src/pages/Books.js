import React, { useEffect, useState } from 'react'
import Navigation from '../components/Navigation';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BooksDetails from '../components/BooksDetails';
import Footer from '../components/Footer';

const Books = (props) => {

    const  {bookId} = useParams();
    const [result , setResult] = useState([]);
    const [image , setImage] = useState([]);
    const url = 'http://localhost:5000/api/books/single/ ' +bookId

    const DisplayAuthors = (table)=>{ 
       
        let resultat = table.toString();
       

        return resultat;

    }
  
    useEffect(()=>{
  
        axios.get(url)
        .then(data1=>{
            const result1 = data1.data.volumeInfo;
            const result2 = data1.data.volumeInfo.imageLinks;
            /*console.log(result1)*/
            console.log(result1.etag);
            setResult(result1);
            setImage(result2);
            console.log(result1);
            console.log(result2);
            
            
        })

        .catch(function (error) {
            if (error.response) {
              console.log(error.response.data);
              console.log(error.response.status);
              console.log(error.response.headers);
            }
          });
    },[url,bookId])


      
    useEffect(() => {

        console.log("Changed result: ", result)

    }, [result])

    return (
        <div>
             <Navigation/>
            <BooksDetails
            imageLinks={image.thumbnail}
            title = {result.title}
            description = {result.description}
            auteurs = {result.authors}
            publishedDate = {result.publishedDate}/>
            <Footer/>
            
             
           
            
            
        </div>
    );
};

export default Books;