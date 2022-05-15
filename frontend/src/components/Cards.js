import React from 'react';
import '../styles/components/cards.css';
import { Link } from 'react-router-dom'



const Cards = (props) => {

    //const img = props.image;
    const title = props.title;
    return (
        

        <li className='cards-items'>
            <div className='cards-content'>
                <div className='image-section'>
                    <img src={props.img} alt={title} />
                </div>
  
                <div className='infos-section'>
                    <p className='cards-text'><strong>TITRE :</strong> {title}</p>
                    <button className='cards-btn'>  <Link to={`/Books/${props.id}`}>Voir</Link></button>
                </div>
            </div>
     
    </li>
 
       
            
      
 
     





            
            
            );
          
};

export default Cards;