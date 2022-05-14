import React from 'react';
import '../styles/components/footer.css'

const Footer = () => {
    return (
        <div className='footer-section'>
            <p>&copy;Dazibao la louvière. Mai 2022</p>
            <div className ="social-media">
	 		    <p><i className ="fab fa-facebook-f"></i></p>
     		    <p><i className="fab fa-twitter"></i></p>
      		    <p><i className="fab fa-instagram"></i></p>
      		    <p><i className="fab fa-linkedin-in"></i></p>
	 		
	 	    </div> 
            
        </div>
    );
};

export default Footer;