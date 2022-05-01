const pool = require("../db");
const fetch = require('node-fetch');
const axios = require('axios');



exports.getCommentsFromOneBook = (req , res, next)=>{
   
   
    const getcomments = 'SELECT C.description,U.name,C.publisheddate FROM users as U JOIN comments AS C ON U.user_id = C.user_id JOIN books AS B  ON B.book_id = C.book_id  WHERE B.book_id= $1;';
    const  bookID = req.params.id;
    
    

    try {
        pool.query(getcomments , [bookID] , (err , results)=>{

            if(err){
                res.status(500).json({
                    err})

            }
            
            res.status(200).json(results.rows);
            console.log(bookID );
           console.log(results.rows);
        })
        
       
        
    }  
    
    catch (err) {
        console.log(err);
        res.status(500).json({
        error: "Database error while registring user!", //Database connection error
        });
        };



}