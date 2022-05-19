import React, {useState} from 'react'
import { NavLink ,useNavigate} from 'react-router-dom'
import '../styles/components/search.css'
import axios from 'axios';
import Cards from './Cards';




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


        axios.get('http://localhost:5000/api/books/'+book)
        .then(data1 => {
            setResult(data1.data.items);
            console.log(result);

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
            

            <div className='display-data'>
                <ul className='cards_ul'>
                    {result.map((data , index)=>(
                        <Cards
                         key={index}
                         id={data.id} 
                         img={data.volumeInfo.imageLinks.smallThumbnail}
                         title={data.volumeInfo.title}
                         description={data.volumeInfo.description}/>
                    )

                    )}
                </ul>
            </div>
                       
             
                
               
                      
                    
                
        </div>
    );
};

export default Search;