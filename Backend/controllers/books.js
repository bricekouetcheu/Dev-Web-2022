const pool = require("../db");
const fetch = require('node-fetch');
const axios = require('axios');



exports.getBooksbyName = (req, res, next) => {
  
  const title = req.params.title;
  const APIKey = "AIzaSyChlMTYVc6CQyv9z-FunM5lzwoa7ds_yIw";
    


    fetch("https://www.googleapis.com/books/v1/volumes?q=" + title + "&key=" + APIKey+ "&maxResults=5")
    .then((response) => { 
        const status = res.status; 
        return response.json() 
      })
      .then((jsonResponse) => {
          res.status(200);
          res.send(jsonResponse);
        console.log(jsonResponse);
        
      })
    .catch(err =>{
        res.status(400).json({err})
    })

    
    
  


};

exports.getOneSingleBook = (req, res , next)=>{
  const id = req.params.id;
  console.log(id);
  const APIKey = "AIzaSyChlMTYVc6CQyv9z-FunM5lzwoa7ds_yIw";

  fetch(" https://www.googleapis.com/books/v1/volumes/"+req.params.id )
  .then((response) =>{
    const status = res.status; 
    return response.json() 
   
  })
  .then((jsonResponse) => {
      res.status(200);
      res.send(jsonResponse);
    console.log(jsonResponse);
    
  })
.catch(err =>{
    res.status(400).json({err})
})

}
