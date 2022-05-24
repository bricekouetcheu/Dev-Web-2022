import React from 'react';

function DisplayComment(props) {
    return (

        <li>
        <div className='comment-section'>
            <i class="fa-solid fa-circle-user fa-2px" ></i>
            <p>bonjour</p>
            <h3>{props.name}</h3>
            <h4>{props.date}</h4>
            <p>{props.description}</p>

        </div>

        </li>
      
    );
}

export default DisplayComment;