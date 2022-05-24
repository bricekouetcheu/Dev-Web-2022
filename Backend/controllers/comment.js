const pool = require("../db");
const fetch = require('node-fetch');
const axios = require('axios');



exports.getCommentsFromOneBook = (req , res, next)=>{
   
   
    const getcomments = 'SELECT  C.description, C.publisheddate , U.name FROM  comments as C NATURAL JOIN users as U WHERE C.book_id= $1 ';
    const  bookID = req.params.id;
    

    try {
        pool.query(getcomments , [bookID] , (err , results)=>
        {

            if(err) {res.status(500).json({
                    err}) }
                res.status(200).json(results.rows);
        })
 
    }   catch (err) {
        console.log(err);
        res.status(500).json({
        message:err, //Database connection error
        });
        };



}


exports.addNewComment = (req , res , next) => {

    const addComments = 'INSERT INTO comments(description , publisheddate , book_id , user_id ) values ($1 , CURRENT_TIMESTAMP, $2, $3)'
    const  id = req.params.id;
    const userId = req.user.id;
    const description = req.body.description;
    authors = req.user.name;
    

    try{
        pool.query(addComments , [description , id  , userId] , (err , result)=>{
            if(err){
                throw err
            }
            res.status(201).send({ message: 'nouveau commentaire!' } );
        } )
    }

    catch{
        res.status(500).json({message :'pas de post'})
    }
}