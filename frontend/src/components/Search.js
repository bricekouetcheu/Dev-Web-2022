import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/components/navigation.css'
import axios from 'axios';


const Search = () => {

    
    const [book, setBook] = useState("");
    const [result, setResult] = useState([]);
    const [ApiKey, setApiKey] = useState("AIzaSyD-ApOEYhezmTwgoeQVV5BA7Ow542q_zhM");

    function handleChange(event){
        const book = event.target.value;
        setBook(book);
    }

    function handleSubmit(event){

        event.preventDefault();


        axios.get("https://www.googleapis.com/books/v1/volumes?q=" + book + "&key=" + ApiKey+ "&maxResults=40")
        .then(data => {
            setResult(data.data.items);
            console.log(data.data.items);

        })
    }

    return (
        <div class="container">
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                    className='barRechercheLivre'
                    type="text" 
                    autoComplete='off' 
                    placeholder='Quelle livre cherchez-vous ?'
                    id="livre"
                    onChange={handleChange}
                    />
                </div>
                    <button type="submit">Recherche</button>
                </form>
                {result.map(book => (
                    <img src={book.volumeInfo.imageLinks.thumbnail} alt={book.title}/>
                ))}
        </div>
    );
};

export default Search;