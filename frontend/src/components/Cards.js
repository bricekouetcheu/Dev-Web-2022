import React from 'react';
import '../styles/components/cards.css';

const Cards = (props) => {

    //const img = props.image;
    const title = props.title;
    return (
        
            <li className='cards'>
                <img src={props.img} alt={title}/>
                <div className='infos'>
                    <p>titre: {title}</p>
                    <button>Voir</button>
                </div>
                

            </li>
            
            );
          
};

export default Cards;