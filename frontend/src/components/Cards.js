import React from 'react';
import '../styles/components/cards.css';
import { Link } from 'react-router-dom'



const Cards = (props) => {

    //const img = props.image;
    const title = props.title;
    return (
        

        <li className='cards'>
        <div className='image-section'>
             <img src={props.img} alt={title} />
        </div>
  
      <div className='infos-section'>
         <h5>titre : {title}</h5>
          <button>  <Link to={`/Books/${props.id}`}>Voir</Link></button>
     </div>
  
 
 </li>
 
       
            
      
 
     





            
            
            );
          
};

export default Cards;