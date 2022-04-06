import React, {useState} from 'react'
import { NavLink ,useNavigate} from 'react-router-dom'
import '../styles/components/search.css'
import axios from 'axios';




const Search = (props) => {

    
    const [book, setBook] = useState("");
    const [result, setResult] = useState([]);
    const [ApiKey, setApiKey] = useState("AIzaSyD-ApOEYhezmTwgoeQVV5BA7Ow542q_zhM");
    const navigate = useNavigate();

    const movetoHome=()=>{
        navigate('/Login');

    }

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
        <div className='container'>
            <div className='searchBar'>
                <form  className='form_books' onSubmit={handleSubmit}>
                    <div>
                        <input
                            className='search'
                             type="text" 
                             autoComplete='off' 
                            placeholder='Quelle livre cherchez-vous ?'
                            id="livre"
                            onChange={handleChange}
                        />
                    </div>
                    <button className='submitBtn' type="submit">Recherche</button>
                 </form>

            </div>
                       {/*console.log(.id)*/};
           
                {result.map((book,index)=> (
                    <div>
                        {console.log(index)}
                            <img key={index} src={book.volumeInfo.imageLinks.thumbnail} alt={book.title} onClick={()=>{movetoHome()}}/>
                    </div>
                    
                ))}
        </div>
    );
};

export default Search;