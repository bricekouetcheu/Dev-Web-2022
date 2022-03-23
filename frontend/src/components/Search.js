import React, {useState} from 'react'
import { NavLink } from 'react-router-dom'
import '../styles/components/navigation.css'



const Search = () => {
    return (
        <div>
            <form>
                    <input type="text" placeholder='Quelle livre cherchez-vous ?'/>
                    <button>Recherche</button>
                </form>
        </div>
    );
};

export default Search;