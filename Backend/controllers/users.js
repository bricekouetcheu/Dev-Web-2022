const pool = require("../db");
const bcrypt = require('bcrypt');


exports.getAllUsers = (req, res) =>{
    pool.query('SELECT * FROM public.users' , (error , results)=>{
        if(error){
            throw error
        }
        res.status(200).json(results.rows) }
    )
   

}


exports.Register = (req, res)=>{


    
   /* const {name,surname,password,email}=req.body;*/

    bcrypt.genSalt(10 , function(err, salt){
        bcrypt.hash(req.body.password, salt, (err , hash)=>{
            if(err){
                console.log(err);
                  }
                const AddUser =  "INSERT INTO users (name,surname,password,email) VALUES ( $1, $2, $3, $4 ) RETURNING * ";
                pool.query(AddUser, [req.body.name,req.body.surname, hash ,req.body.email] , (err , results)=>{
                    console.log(err);
                    res.status(201).send({ message: 'Utilisateur créé !' } );
                })
    
               
            
             });

        });



    


 
   
}